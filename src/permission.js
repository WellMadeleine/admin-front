import router from '~/router'
import { getToken } from '~/composables/auth'
import  store  from './store'
import { toast, showFullLoading, hideFullLoading } from '~/composables/utils'

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
    const token = getToken()

    showFullLoading()

    // 没有登录,强制跳转回登录页
    if (!token && to.path != "/login") {
        toast("请先登录", "error")
    }

    // 防止重复登录
    if (token && to.path == "/login") {
        return next({ path:from.path ? from.path : "/"})
    }

    // 如果用户登陆了，自动获取用户信息，并存储在vuex中
    // 解决登录后跳转首页刷新后 用户信息就消失的问题
    if(token){
        // 异步方法 , await,需要在方法入参前加asycn
        // 调用getinfo方法
        await store.dispatch("getinfo")
    }

    // 在next之前设置页面title
    console.log(to);
    let title = (to.meta.title ? to.meta.title : "") + "-智慧停车后台"
    document.title = title

    next()
})

// 全局后置钩子
router.afterEach((to, from) => {
    // 关闭loading
    hideFullLoading()
  })