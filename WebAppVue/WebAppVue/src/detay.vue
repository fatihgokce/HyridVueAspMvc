<template>
    <div>
  <h1 @click="sayHello">Hello Component</h1>
   <clock></clock>
  </div>
</template>

<script>
  
import Clock from './components/clock.vue'
    export default {
        data () {
            return {
                input: '# hello'
            }
        },
    methods: {
      sayHello() {
        console.log('Hello World!');
      }
  }, components: {
            Clock
        }
       
    }
</script>

<style>
    body {
        font : 100% Helvetica, sans-serif;
        color: #ecf0f1;
        text-align: center;
        background-color: #34495e;
    }
    .container {
        margin: 0 auto;
        padding-top: 70px;
    }
        #demo {
            font-family: 'Helvetica', Arial, sans-serif;
        }
        
        a {
            text-decoration: none;
            color: #f66;
        }
        
        li {
            line-height: 1.5em;
            margin-bottom: 20px;
        }
        
        .author,
        .date {
            font-weight: bold;
        }
    </style>