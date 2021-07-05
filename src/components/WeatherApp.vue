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
        <v-col cols="12" md="4" sm="6">
          <v-card v-show="false">
            <v-card-text>{{ cityName }}</v-card-text>
            <v-card-title class="justify-center">
              {{ temperature }}&#8451;
            </v-card-title>
          </v-card>
          <v-img  src="../assets/undraw_Weather_app_re_kcb1.svg" />
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
      cityName: "City Name",
      temperature: 40,
    };
  },
  methods: {
    fetchData() {
      console.log(this.$axios.baseURL);
      this.$axios
        .get(
          "weather?q=" +
            this.queryText +
            "&appid=c50004d24015a979a7e5a7e84355b95d"
        )
        .then((res) => {
          window.res = res;
          console.log("yes " + res);
        })
        .catch((err) => {
          window.err = err;
          console.log("No " + err);
        });
    },
  },
  watch: {
    queryText: function (newQuery) {
      console.log(newQuery);
    },
  },
};
</script>
