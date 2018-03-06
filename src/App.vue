<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="authenticate('google')">auth Google</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    authenticate: function (provider) {
      this.$auth.authenticate(provider).then(function () {
        console.log('whaaaat')
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
