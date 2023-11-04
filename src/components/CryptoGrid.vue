<template>
  <v-container fluid class="d-flex justify-center align-center px-0">
    <div v-if="pricesLoading">
      <v-progress-circular indeterminate color="red"></v-progress-circular>
    </div>
    <v-row class="no-padding" v-else-if="!pricesLoading">
      <v-col cols="12" md="6" lg="6" v-for="(item, index) in items" :key="index">
        <v-card class="mx-auto">
          <v-card-item :title="item.name">
            <template v-slot:subtitle>
              {{ item.symbol }}
              <v-icon icon="mdi-currency-usd" size="18" color="green-darken-2" class="me-1 pb-1"></v-icon>
            </template>
          </v-card-item>

          <v-card-text class="py-0">
            <v-row align="center" no-gutters>
              <v-col class="text-h3" cols="9">
                ${{ twoDecimals(item.price_usd) }}
              </v-col>

              <v-col cols="3" class="text-right" v-if="item.symbol == 'BTC'">
                <!-- <v-icon color="error" icon="mdi-weather-hurricane" size="88"></v-icon> -->
                <img src="./btc.png" width="80" height="80" alt="BTC">
              </v-col>
              <v-col cols="3" class="text-right" v-else-if="item.symbol == 'ETH'">
                <!-- <v-icon color="error" icon="mdi-weather-hurricane" size="88"></v-icon> -->
                <img src="./eth.png" width="80" height="80" alt="BTC">
              </v-col>
            </v-row>
          </v-card-text>

          <div class="d-flex align-center py-3 justify-space-between">
            <v-list-item class="d-flex" density="compact">
              <v-list-item-icon>
                <v-icon>mdi-hours-24 </v-icon>
                <span :style="{ fontSize: '1.15em', color: item.percent_change_24h < 0 ? 'red' : 'green' }"> {{
                  item.percent_change_24h }}%</span>
              </v-list-item-icon>
            </v-list-item>
          </div>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn @click="openChart(item.symbol)">
              View Chart
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

import axios from 'axios';
import { mdiHours24 } from '@mdi/js';


export default {
  name: 'CryptoGrid',

  data: () => ({
    pricesLoading: true,
    items: [],
    mdiHours24,
  }),
  methods: {
    async getBtcAndEthPrices() {
      const urls = [
        'https://api.coinpaprika.com/v1/ticker/btc-bitcoin',
        'https://api.coinpaprika.com/v1/ticker/eth-ethereum'
      ];
      // Create an array of promises using the Axios `get` method
      const requests = urls.map(url => axios.get(url));
      Promise.all(requests)
        .then(axios.spread((btcResponse, ethResponse) => {
          // All requests are now complete
          // `btcResponse` and `ethResponse` are the responses of the requests in the order they were made
          const combinedData = [btcResponse.data, ethResponse.data];
          console.log(combinedData);
          this.items = combinedData;
          this.pricesLoading = false;
          // You can now work with `combinedData`
        }))
        .catch(errors => {
          // Handle errors here if any of the requests fail
          console.error(errors);
        });
    },
    openChart(symbol) {
      let url = `https://www.tradingview.com/symbols/${symbol}USD/`;
      window.open(url, '_blank');
    },
    twoDecimals(numberString) {
      let number = parseFloat(numberString);
      return number.toFixed(2);
    }
  },
  mounted() {
    this.getBtcAndEthPrices();
  },

}
</script>
<style scoped>
.no-padding {
  padding: 0 !important;
}
</style>
