<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="bla()">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="bla()">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Working Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <CurrentUser />
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md4>
            <v-card color="purple" dark>
              <v-card-title primary class="title">Events</v-card-title>
              <v-card-text v-text="lorem">
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm6 md8>
            <v-card color="indigo" dark>
              <v-card-title primary class="title">Posts</v-card-title>
              <v-card-text v-text="lorem">
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script type = "text/javascript">
import CurrentUser from '../authentication/CurrentUser'
export default {
  name: 'Periscope',
  components: {
    CurrentUser
  },
  data: () => ({
    drawer: false,
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  }),
  props: {
  },
  methods: {
    bla: function () {
      alert('clicked')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
