import Vue from 'vue'
import FirstComponent from './first.vue'
import Clock from './components/clock.vue'
new Vue({
    el: '#app',
    components: {
        FirstComponent,
        Clock
    },
    data() {
        return {
            vueMessage: 'Message from Vue'
        }
    },
    methods: {
        toggleModal() {
            
        }
    }
})