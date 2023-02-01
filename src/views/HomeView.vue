<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  title() {
    return "Bruiloft";
  },
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
