<template>
  <v-toolbar-items class="hidden-sm-and-down" v-if="user">
    <v-btn>Hello, {{ user.user }}</v-btn>
    <v-btn flat href="http://localhost:7000/api/account/logout">Logout</v-btn>
  </v-toolbar-items>
  <v-toolbar-items class="hidden-sm-and-down" v-else>
    <v-btn href="http://localhost:7000/api/account/login">Login</v-btn>
  </v-toolbar-items>
</template>

<script type = "text/javascript">
export default {
  name: 'CurrentUser',
  props: {

  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
