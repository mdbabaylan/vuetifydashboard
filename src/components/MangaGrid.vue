<template>
  <!-- <v-for> the <v-col code> , mangadex api-->
  <v-container fluid class="pa-0">
    <v-card elevation="5">
      <v-row no-gutters>
        <v-col :cols="xs ? 12 : 3">
          <v-img contain lazy-src="https://picsum.photos/id/11/10/6" max-height="250" :max-width="xs ? '100%' : '200px'"
            src="https://i.redd.it/8guxopqh0hf71.png" class="mx-1 my-2">
          </v-img>
        </v-col>
        <v-col :cols="xs ? 12 : 9">
          <v-card-title>Manga Title</v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-subtitle>Chapter 139</v-card-subtitle>
          <v-card-text>
            <p>
              <span>
                <v-icon medium color="grey darken-2">
                  mdi-account-multiple
                </v-icon></span>
              Scanlator Team
            </p>

            <p>
              <span>
                <v-icon medium color="grey darken-2">
                  mdi-book-open
                </v-icon></span>
              13 hours ago
            </p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'MangaGrid',

  data: () => ({

  }),
  computed: {
  }

}
</script>
<style scoped>
.no-padding {
  padding: 0 !important;
}
</style>
