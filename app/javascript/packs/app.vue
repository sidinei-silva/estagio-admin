<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Estagio Admin</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout  align-center>
          <v-flex text-xs-center>
              <p>dsfsdfsdfsdfsdfsdf</p>
            <p>sdfsdfsdf</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <v-layout  align-center>
        <v-flex text-xs-center>
          <span class="white--text">Estagio Admin &copy; {{ new Date().getFullYear() }} - Desenvolvido por Sidinei Silva</span>
        </v-flex>
      </v-layout>

    </v-footer>
  </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: null
        }),

        props: {
            source: String
        }
    }
</script>