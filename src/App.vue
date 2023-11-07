<template>
  <v-app>
    <v-app-bar color="deep-purple accent-4" dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>ダッシュボード</v-toolbar-title>

      <transition name="flip">
        <div v-if="theme.global.current.value.dark">
          <v-icon icon="mdi-moon-waxing-crescent" @click="toggleTheme"></v-icon>
        </div>
        <div v-else>
          <v-icon icon="mdi-white-balance-sunny" @click="toggleTheme"></v-icon>
        </div>
      </transition>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Gym</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Crypto</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Manga</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main> <!-- dump child components here, I'm assuming -->
      <v-container fluid>
        <GymPrograms />
        <CryptoGrid />
        <MangaGrid />
        MangaGrid finish
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import GymPrograms from "./components/GymPrograms";
import CryptoGrid from "./components/CryptoGrid";
import MangaGrid from "./components/MangaGrid";
import { mdiThemeLightDark } from '@mdi/js';
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
    mdiThemeLightDark,
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme();


function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
<style scoped>
.flip-enter-active,
.flip-leave-active {
  transition: transform 0.5s;
}

.flip-enter-from {
  transform: rotateY(90deg);
}

.flip-leave-to {
  transform: rotateY(-90deg);
}
</style>