<template>
  <div dark>
    <v-app>
      <v-app-bar
        app
        color="orange"
      >
        <div class="d-flex align-center">
          <v-toolbar-title>Github Vuewer do Gelo</v-toolbar-title>
        </div>
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-main>
        <GithubVuewer color="black"/>
      </v-main>
    </v-app>
  </div>
  
</template>

<script>
import GithubVuewer from './components/GithubVuewer';

export default {
  name: 'App',

  components: {
    GithubVuewer,
  },

  data: () => ({
    //
  }),
};
</script>
