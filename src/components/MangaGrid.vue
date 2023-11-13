<template>
  <!-- <v-for> the <v-col code> , mangadex api-->
  <v-container fluid class="pa-0">
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
          <!-- col-6-6 (to implement place text in both left and right or a flexbox implementation, then col-12 in xs viewports) -->
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
  </v-container>
</template>

<script>

export default {
  name: 'MangaGrid',

  data: () => ({
    labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
    time: 0,
    forecast: [
      { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
      { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
      { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
    ],
  }),
  // methods:{
  //     const mangaIds = [] //ids of the mangas I am reading, waiting if they have updates
  //     async getBtcAndEthPrices() {
  //     const urls = [
  //       'https://api.coinpaprika.com/v1/ticker/btc-bitcoin',
  //       'https://api.coinpaprika.com/v1/ticker/eth-ethereum'
  //     ];
  //     // Create an array of promises using the Axios `get` method
  //     const requests = urls.map(url => axios.get(url));
  //     Promise.all(requests)
  //       .then(axios.spread((btcResponse, ethResponse) => {
  //         // All requests are now complete
  //         // `btcResponse` and `ethResponse` are the responses of the requests in the order they were made
  //         const combinedData = [btcResponse.data, ethResponse.data];
  //         console.log(combinedData);
  //         this.items = combinedData;
  //         this.pricesLoading = false;
  //         // You can now work with `combinedData`
  //       }))
  //       .catch(errors => {
  //         // Handle errors here if any of the requests fail
  //         console.error(errors);
  //       });
  //   },
  // },
  computed: {
  }

}
</script>
<style scoped>
.no-padding {
  padding: 0 !important;
}
</style>
