<template>
  <div>
   
  </div>
</template>
<script>
import Clock from './components/clock.vue'
import User from './user.js'
import { portalApp } from './common.js';
var p=portalApp;
export default {
    template: '#app',
    data() {
        return {
            msg: 'Welcome to Vue.js World3!',
            users: [],
            fakeDatas:[],
            p:portalApp
        }
    },
    components: {
        Clock
    },
    methods: {
        getUsers() {
            let url = 'https://jsonplaceholder.typicode.com/users';
            fetch(url).then((res) => {
                    return res.json()
                })
                .then(res => {
                    //this.users = res;
                    res.forEach(e=>{
                      let user=new User(e);
                      this.users.push(user);

                    });
                    console.log('dfvd:'+this.users[0].id);

                  
                });
           portalApp.getDataFromRemote(url = "/Home/FakeData",{}).done(res=>{
              this.fakeDatas=res;
           });
        }
    },
    created() {
        this.getUsers();

    }
}
</script>

<style>
body {
    font: 100% Helvetica, sans-serif;
    color: #ecf0f1;
    text-align: center;
    background-color: #34495e;
}
li{
    margin:7px;padding:6px;list-style:none;font-size:14px;}
.container {
    margin: 0 auto;
    padding-top: 70px;
}
</style>
