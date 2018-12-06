<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list v-for="item in items_sidebar" dense>
        <v-list-tile @click=""  :to="{path: item.href}" :key="index">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>

    import Footer from './components/shared/footer';

    export default {
        data: () => ({
            drawer: null,
            items_sidebar: [{
                href: '/',
                router: true,
                title: 'Home',
                icon: 'home',
            }, {
                href: 'estagiarios',
                router: true,
                title: 'Estagiarios',
                icon: 'extension',
            }],
        }),

        props: {
            source: String
        },
        components: {
            'Footer': Footer
        }
    }
</script>