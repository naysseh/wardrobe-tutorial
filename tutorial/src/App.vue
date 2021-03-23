<template>
  <v-app>
    <v-app-bar
      app
      color="pink"
      dark
    >
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <v-toolbar-title>barz</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer 
        v-model="drawer"
        absolute
        temporary>
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text"
          >
            <v-list-item>
              <v-list-item-title><a
            href="https://noot.space"
            target="_blank"
          >a link!</a></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><a
            href=
            "https://open.spotify.com/user/naysseh?si=3D_2di_PShyknF278d8k5Q"
            target="_blank"
          >my spotify!</a></v-list-item-title>
            </v-list-item>
          </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
 
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
// export default {
//   data: () => ({
//     drawer: false,
//     group: null,
//     }),
//   };
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
