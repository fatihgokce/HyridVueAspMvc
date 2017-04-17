<template>
<div id="app">
    <h1>{{ msg }}</h1>
    <clock></clock>
    <ul>
        <li v-for="u in users">
            {{u.name}}-{{u.id}}{{u.email}}
        </li>
    </ul>
  <h3>Data</h3>
  <ul>
    <li v-for="d in fakeDatas">{{d.name}}--{{d.age}}</li>
  </ul>
</div>
</template>

<script>
import Clock from './components/clock.vue'
import User from './user.js'
import { portalApp } from './common.js';
var p=portalApp;
export default {
    data() {
        return {
            msg: 'Welcome to Vue.js World2!',
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
                    })
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
