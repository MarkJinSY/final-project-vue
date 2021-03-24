import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import './assets/css/global.css'
import axios from 'axios'

//请求根路径
axios.defaults.baseURL = '/api/private/v1/'

//axios请求拦截器
axios.interceptors.request.use(config => {
    config.headers.Authorization = window.sessionStorage.getItem('token');
    return config;
})


// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

const app = createApp(App)
installElementPlus(app)
app.use(router).mount("#app");

app.config.globalProperties.$http = axios;
