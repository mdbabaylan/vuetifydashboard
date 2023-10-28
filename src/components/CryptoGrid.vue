<template>
  <v-container fluid class="px-0">
    <v-row class="no-padding">

      <v-col cols="12" md="6" lg="6">
        <v-card class="mx-auto">
          <v-card-item title="Bitcoin">
            <template v-slot:subtitle>
              Price
              <v-icon icon="mdi-currency-usd" size="18" color="green-darken-2" class="me-1 pb-1"></v-icon>
            </template>
          </v-card-item>

          <v-card-text class="py-0">
            <v-row align="center" no-gutters>
              <v-col class="text-h3" cols="9">
                $100,000
              </v-col>

              <v-col cols="3" class="text-right">
                <!-- <v-icon color="error" icon="mdi-weather-hurricane" size="88"></v-icon> -->
                <img src="./btc.png" width="80" height="80" alt="BTC">
              </v-col>
            </v-row>
          </v-card-text>

          <div class="d-flex py-3 justify-space-between">
            <v-list-item density="compact" prepend-icon="mdi-weather-windy">
              <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
              <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>
          </div>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn>
              View Chart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="6">
        <v-card class="mx-auto">
          <v-card-item title="Bitcoin">
            <template v-slot:subtitle>
              Price
              <v-icon icon="mdi-currency-usd" size="18" color="green-darken-2" class="me-1 pb-1"></v-icon>
            </template>
          </v-card-item>

          <v-card-text class="py-0">
            <v-row align="center" no-gutters>
              <v-col class="text-h3" cols="9">
                $100,000
              </v-col>

              <v-col cols="3" class="text-right">
                <img src="./btc.png" width="80" height="80" alt="BTC">
              </v-col>
            </v-row>
          </v-card-text>

          <div class="d-flex py-3 justify-space-between">
            <v-list-item density="compact" prepend-icon="mdi-weather-windy">
              <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
              <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>
          </div>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn>
              View Chart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

export default {
  name: 'CryptoGrid',

  data: () => ({

  }),
  computed: {
  },

}
</script>
<style scoped>
.no-padding {
  padding: 0 !important;
}
</style>
