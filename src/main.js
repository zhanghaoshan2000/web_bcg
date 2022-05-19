import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible' //自适应
import './style/iconfont.css'//引入矢量图库
createApp(App).use(store).use(router).mount('#app')
