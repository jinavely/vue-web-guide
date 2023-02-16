<template>
    <div id="app">
        <v-app id="inspire">
            <v-navigation-drawer v-model="drawer" app>
                <Slidebar />
            </v-navigation-drawer>

            <v-app-bar app>
                <v-app-bar-nav-icon @click="drawer = !drawer">
                </v-app-bar-nav-icon>

                <router-link to="/" class="nav-title">Web Guide</router-link>
                <!-- <Header /> -->
            </v-app-bar>

            <v-main>
                <router-view></router-view>
            </v-main>
            <Footer />
        </v-app>
    </div>
</template>

<script>
import Footer from '../../components/common/Footer';
// import Header from '../../components/common/Header';
import Slidebar from '../../components/common/Sidebar';

export default {
    name: 'default',
    components: { Slidebar, Footer },
    data: () => ({
        drawer: null,
    }),
};
</script>

<style lang="scss">
html {
    overflow: auto !important;
}
.v-application {
    .nav-title {
        font-weight: 700;
        font-size: 1.2rem;
        color: #000;
        text-decoration: none;
    }
    .theme--dark {
        .nav-title {
            color: #fff;
        }
    }
}
</style>
