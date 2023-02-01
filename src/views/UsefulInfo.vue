<template>
  <div>
    <div class="image">
      <div style="position: relative;">
        <img :src="screenWidth > 500 ? require('@/assets/image00002.jpeg') : require('@/assets/image00002.jpeg')" style="width: 100%;">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsefulInfo",
  data() {
    return {
      screenWidth: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.resizeScreen);
      this.resizeScreen();
    })
  },
  methods:{
    resizeScreen() {
      this.screenWidth = window.innerWidth;
      console.log('Gluiperdt');
    },
  }
}
</script>

<style scoped>
.image {
  opacity: 0.5;
  width:100%;
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
}

</style>