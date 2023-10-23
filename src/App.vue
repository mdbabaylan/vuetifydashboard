<template>
  <v-app>
    <v-app-bar color="deep-purple accent-4" dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>ダッシュボード</v-toolbar-title>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    <v-main> <!-- dump child components here, I'm assuming -->
      <v-container fluid>
        <GymPrograms />
        <CryptoGrid />
        <MangaGrid />
        Endpoint for Bitcoin: https://api.coinpaprika.com/v1/ticker/btc-bitcoin
        Endpoint for Ethereum: https://api.coinpaprika.com/v1/ticker/eth-ethereum
        Data table - Server side tables for Manga Grid
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import GymPrograms from "./components/GymPrograms";
import CryptoGrid from "./components/CryptoGrid";
import MangaGrid from "./components/MangaGrid";
export default {
  name: 'App',

  components: {
    GymPrograms,
    CryptoGrid,
    MangaGrid
  },

  data: () => ({
    drawer: false,
    group: null,
  }),


  watch: {
    group() {
      this.drawer = false
    },
  },

}
</script>
