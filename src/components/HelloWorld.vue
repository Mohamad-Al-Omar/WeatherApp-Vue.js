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
    };
  },
  watch: {
    queryText: function (newQuery) {
      console.log(newQuery);
    },
  },
};
</script>
