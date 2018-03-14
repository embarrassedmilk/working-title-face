<template>
  <v-app id="inspire" dark>
    <Toolbar />
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md4>
            <v-card dark>
              <v-card-title primary class="title">Events</v-card-title>
              <v-card-text>
                <Events />
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
          <v-btn
            color="orange"
            dark
            small
            fixed
            bottom
            right
            fab
            href="/newpost"
            >
            <v-icon>create</v-icon>
          </v-btn>
          <v-btn
            color="red"
            dark
            small
            fixed
            bottom
            left
            fab
            @click="dummyevent()"
            >
            <v-icon>add</v-icon>
          </v-btn>
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
import Events from './Events'
import Toolbar from './Toolbar'
import * as actionTypes from '../../store/action-types'

export default {
  name: 'Periscope',
  components: {
    CurrentUser,
    Events,
    Toolbar
  },
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  }),
  methods: {
    dummyevent: function () {
      this.$store.dispatch(actionTypes.SOMETHING_HAPPENED, { entityId: Math.floor((1 + Math.random()) * 0x10000), payload: { text: 'bla' } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
