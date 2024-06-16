import axios from "axios"
import { toast } from '~/composables/utils'
import { getToken } from '~/composables/auth'

const service = axios.create({
    baseURL:"/api"
})


// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 在请求头中添加token
    // const cookie = useCookies()
    // const token = cookie.get("admin-token")
    const token = getToken()
    if (token) {
        config.headers["token"] = token
    }


    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(response);
    return response.data.data;
  }, function (error) {
    console.log(error);
    // 提示框
    toast(error.response.data.msg || "请求失败", "error")
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default service