import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus' // 引入element-plus
import 'element-plus/theme-chalk/index.css' // 引入element-plus的样式


import './assets/main.css' //默认页面的css样式

createApp(App)
.use(ElementPlus, { zIndex: 3000, size: 'small' }) // 使用element-plus
.mount('#app')
