import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// element plus
import ElementPlus from "element-plus";
// element icons
import * as Icons from "@element-plus/icons-vue";
import "element-plus/dist/index.css";

const app = createApp(App);

// 注册element Icons组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(ElementPlus).mount("#app");
