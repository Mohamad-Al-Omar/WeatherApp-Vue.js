<template>
  <v-container>
    <v-row>
      <v-col cols="12" align="center">
        <h1>Weather App</h1>
      </v-col>
      <v-col cols="12" align="center">
        <v-col cols="12" md="8">
          <v-text-field
            v-model="queryText"
            :placeholder="Placeholder"
            outlined
            dense
          />
        </v-col>
      </v-col>
      <v-col cols="12" align="center">
        <v-col cols="12" md="4" sm="6">
          <v-card>
            <v-card-text>{{ cityName }}</v-card-text>
            <v-card-title class="justify-center" > {{temperature}}&#8451; </v-card-title>
          </v-card>
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
  watch: {
    queryText: function (newQuery) {
      console.log(newQuery);
    },
  },
};
</script>
