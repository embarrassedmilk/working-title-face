<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <a href="http://localhost:7000/api/account/login">Login</a>
    <a href="http://localhost:7000/api/account/logout">Logout</a>
    <button @click="getuser()">Get user</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getuser: function () {
      this.$http.get('http://localhost:7000/api/account/getuser', {withCredentials: true}).then(response => {
        console.log(response)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
