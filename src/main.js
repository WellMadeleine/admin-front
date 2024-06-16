import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// createApp(App).mount('#app')
const app = createApp(App)
// 在app实例创建完成后才能使用
app.use(store)
app.use(router) 
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

import 'virtual:windi.css'

import './permission'

import 'nprogress/nprogress.css'

app.mount('#app')
