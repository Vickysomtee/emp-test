import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
 
export default {
    components: {
        // Slide // Register your component
    }
}
createApp(App).use(router).mount('#app')
