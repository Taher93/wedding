<template>
  <div class="about">
    <h1>Hoi dikke tieten meisje</h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HomeView',
  async created() {
    await axios.get("https://catfact.ninja/fact").then((response) => {
      console.log('response', response);
    }).catch((error) => {
      console.log('error', error);
    });
    // this.$router.go('-1');
  }
}
</script>
