<template>
  <v-container>
    <v-row>
      <v-col cols="12" align="center">
        <h1>Weather App</h1>
      </v-col>
      <v-col cols="12" align="center">
        <v-col cols="12" md="6">
          <v-form @submit.prevent="fetchData">
            <v-text-field
              v-model="queryText"
              :placeholder="Placeholder"
              outlined
              dense
          /></v-form>
        </v-col>
      </v-col>
      <v-col cols="12" align="center">
        <v-col cols="10" md="4" sm="6" xs="10">
          <v-card v-show="cityName != null">
            <v-card-text>{{ cityName }} {{ countryName }}</v-card-text>
            <v-card-title class="justify-center">
              {{ temperature }}&#8451;
            </v-card-title>
          </v-card>
          <v-img
            src="../assets/undraw_Weather_app_re_kcb1.svg"
            v-show="cityName == null"
          />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      queryText: "",
      Placeholder: "Enter the city name here...",
      cityName: null,
      countryName: null,
      temperature: null,
      weather: null,
    };
  },
  methods: {
    fetchData() {
      this.$axios
        .get(
          "weather?q=" +
            this.queryText +
            "&units=metric&appid=c50004d24015a979a7e5a7e84355b95d"
        )
        .then((res) => {
          window.res = res;
          console.log("yes " + res);
          this.updateData(res.data);
        })
        .catch((err) => {
          window.err = err;
          console.log("No " + err);
          this.updateData(null);
        });
    },
    updateData(weather) {
      if (weather == null) {
        this.weather =
          this.cityName =
          this.countryName =
          this.temperature =
            weather;
      } else {
        this.weather = weather;
        this.cityName = weather.name;
        this.countryName = weather.sys.country;
        this.temperature = Math.round(weather.main.temp);
        this.updateTheme();
      }
    },
    updateTheme() {
       this.$store.dispatch("setTemp", this.temperature);
    },
  },
};
</script>
<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus textarea:-webkit-autofill,
textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-background-clip: text;
}
</style>
