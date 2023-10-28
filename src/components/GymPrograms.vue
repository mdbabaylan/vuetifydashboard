<template>
  <v-card class="mx-auto">
    <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Gym Schedule</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{ todaysGymProgram.day }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ todaysGymProgram.program }}</div>
      <div>Calories: {{ todaysGymProgram.calories }}</div>
    </v-card-text>

  </v-card>
</template>

<script>

export default {
  name: 'GymPrograms',

  data: () => ({
    programForTheDay: {
      0: { program: "Rest Day", calories: 3000, day: "Sunday" },
      1: { program: "Push Day", calories: 3200, day: "Monday" },
      2: { program: "Pull Day", calories: 3200, day: "Tuesday" },
      3: { program: "Rest Day", calories: 3000, day: "Wednesday" },
      4: { program: "Leg Day", calories: 3000, day: "Thursday" },
      5: { program: "Upper Day", calories: 3200, day: "Friday" },
      6: { program: "Rest Day", calories: 3200, day: "Saturday" }
    }
  }),
  computed: {
    todaysGymProgram() {
      const today = new Date().getDay();
      return this.programForTheDay[today];
    }

  }
}
</script>
<style scoped>
/* override the image bug from vuetify itself, not causing the image to render in full width*/
.v-card>>>.v-img__img--contain {
  object-fit: cover !important;
}
</style>
