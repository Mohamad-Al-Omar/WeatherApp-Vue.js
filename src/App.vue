<template>
  <v-app >
    <v-main :class="theme">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      theme: null,
      tempStore: this.getTemp,
    };
  },
  watch: {
    // tempStore: function (newVal) {
    //   console.log("changed  " + newVal);
    //   this.updateTheme(newVal);
    // },
    getTemp(){
      this.tempStore = this.getTemp;
      console.log("this.tempStore  = " + this.tempStore);
      this.updateTheme(this.tempStore);
    }
  },
  computed: {
    getTemp() {
      console.log("this.$store.getters.getTemp()  = " + this.$store.getters.getTemp);
      return this.$store.getters.getTemp;
    },
  },
  methods: {
    updateTheme(temp) {
      if (temp == null) {
        this.theme = null;
      } else if (temp > 25) {
        this.theme = "sun";
      } else {
        this.theme = "winter";
      }
    },
  },
};
</script>
<style scoped>
html {
  min-height: 100vh;
}
body {
  min-height: 100vh;
}
.sun {
  background-image: url("./assets/sun.jpg");
  background-size: 100% 100% ;
  background-repeat:no-repeat;
  
}
.winter {
   background-image: url("./assets/winter.jpg");
  background-size: 100% 100% ;
  background-repeat:no-repeat;
}
</style>
