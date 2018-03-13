<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title>Create post</v-toolbar-title>
      <v-spacer></v-spacer>
      <CurrentUser />
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex d-flex xs10 offset-xs1>
            <v-card>
              <v-card-text >
                <v-form v-model="valid" >
                  <v-text-field
                    label="Title"
                    v-model="title"
                    :rules="required"
                    color="white"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Content"
                    v-model="content"
                    :rules="required"
                    color="white"
                    required
                    multi-line
                  ></v-text-field>
                </v-form>
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
  props: {
  },
  methods: {
  },
  data: () => ({
    valid: false,
    title: '',
    required: [
      v => !!v || 'This field is required'
    ],
    content: ''
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
