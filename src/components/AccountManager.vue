<template>
  <div class="account-manager">
    <h1>Events: </h1>
    <accountevent v-for="event in events" v-bind:event="event" v-bind:key="event.entityId" />
  </div>
</template>

<script type = "text/javascript">
import AccountEvent from './AccountEvent'
export default {
  name: 'AccountManager',
  components: [
    AccountEvent
  ],
  props: ['events']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
