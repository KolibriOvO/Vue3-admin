import { createApp } from 'vue'
// import './style.css'
import App from "@/App.vue";
// 引入Element-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 中文
// @ts-ignore：无法被执行的代码的错误
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 获取应用实例
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus,{
    locale:zhCn,
})
// svg 插件
import 'virtual:svg-icons-register'
// 自定义插件
import globalComponents from '@/components/index.ts'
app.use(globalComponents)
//
// 引入全局样式
import '@/styles/index.scss'
// 路由
import router from "@/router";
app.use(router)
// Pinia
import pinia from "@/store";
app.use(pinia)
// 将应用挂载到挂载点上
app.mount('#app')
