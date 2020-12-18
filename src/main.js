import { createApp } from 'vue';
import 'ant-design-vue/dist/antd.css';
import {
  Button, Icon, Layout, Menu,
} from 'ant-design-vue';
import App from './App.vue';
import router from './router';

createApp(App).use(Button).use(Icon).use(Layout)
  .use(Menu)
  .use(router)
  .mount('#app');
