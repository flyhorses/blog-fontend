import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router/";

const app = createApp(App)

document.body.style.margin = "0";
document.body.style.backgroundColor = "#303841";
app.use(router)
app.use(ElementPlus)
app.mount('#app')
