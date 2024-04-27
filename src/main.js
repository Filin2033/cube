import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import components from '@/components/UI';


const app = createApp(App)

app.use(router);

app.component(components.name, components)

createApp(App).mount('#app')
