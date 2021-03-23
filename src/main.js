import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import './assets/css/global.css'
import axios from 'axios'

//请求根路径
axios.defaults.baseURL = "http://47.108.206.212:9999/api/private/v1/login"

const app = createApp(App)
installElementPlus(app)
app.use(router, axios).mount('#app');