<template>
  <v-app id="inspire">
    <Header/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>

    import Footer from './components/shared/footer'
    import Header from './components/shared/header'

    export default {
        data: () => ({
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
            'Footer': Footer,
            'Header': Header
        }
    }
</script>