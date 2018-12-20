<template>
    <header>
        <v-navigation-drawer v-model="drawer" fixed app>
            <v-list v-for="item in items_sidebar" dense>
                <v-list-tile @click=""  :to="{path: item.href}" >
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
            <v-toolbar-title>Estagio Admin</v-toolbar-title>
        </v-toolbar>
    </header>
</template>
<script>
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
        })
    }
</script>