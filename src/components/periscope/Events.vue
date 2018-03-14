<template>
  <v-list two-line>
    <template v-for="(event, index) in events">
      <v-list-tile
        :key="event.entityId"
      >
        <v-list-tile-content class="selectable" >
          <v-list-tile-title>{{ event.entityId }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ event.payload }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script type = "text/javascript">
export default {
  name: 'Events',
  computed: {
    events () {
      return this.$store.state.events
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .selectable {
    user-select: text;
  }
</style>
