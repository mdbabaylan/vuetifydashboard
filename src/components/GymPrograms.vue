<template>
  <v-card class="mx-auto">
    <v-img class="white--text align-end" :height="imageHeight" :aspect-ratio="16 / 9" contain
      :src="todaysGymProgram.image" lazy-src="/placeholder.png">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
      <v-card-title class="custom-bg white--text">Gym Schedule</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-2 pb-0">
      {{ todaysGymProgram.day }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ todaysGymProgram.program }}</div>
    </v-card-text>

  </v-card>
</template>

<script>

export default {
  name: 'GymPrograms',

  data: () => ({
    programForTheDay: {
      0: { program: "Rest Day", calories: 2650, day: "Sunday", image: '/restday.png' },
      1: { program: "Push Day", calories: 2900, day: "Monday", image: '/pushday.png' },
      2: { program: "Pull Day", calories: 2900, day: "Tuesday", image: '/pullday.png' },
      3: { program: "Rest Day", calories: 2650, day: "Wednesday", image: '/restday.png' },
      4: { program: "Leg Day", calories: 2900, day: "Thursday", image: '/legday.png' },
      5: { program: "Upper Day", calories: 2900, day: "Friday", image: '/upper.png' },
      6: { program: "Rest Day", calories: 2650, day: "Saturday", image: '/restday.png' }
    },
    imageHeight: '550'
  }),
  created() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
  computed: {
    todaysGymProgram() {
      const today = new Date().getDay();
      return this.programForTheDay[today];
    },
  },
  methods: {
    onResize() {
      this.imageHeight = window.innerWidth < 960 ? '350' : '550';
    },
  },
}
</script>
<style scoped>
/* override the image bug from vuetify itself, not causing the image to render in full width*/
.v-card>>>.v-img__img--contain {
  object-fit: cover !important;
}

.custom-bg {
  background-color: rgba(14, 14, 14, 0.78);
  /* 50% opacity */
}
</style>
