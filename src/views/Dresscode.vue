<template>
  <div>
    <div class="image">
      <div style="position: relative;">
        <img :src="screenWidth > 600 ? require('@/assets/image00001.jpeg') : require('@/assets/05mobile.png')" style="width: 100%;">
      </div>
    </div>
    <div class="container mt-4">
      <div class="row m-0">
        <div :class="screenWidth > 600 ? 'col-8 offset-2' : 'col-12 p-0'">
          <div class="mt-5">
            <label style="font-size:26px; font-family: 'QuattrocentoSans'" class="d-flex justify-content-center">Dresscode</label>
          </div>
          <div class="d-flex justify-content-center" style="font-family: 'QuattrocentoSans'; text-align:center; margin-top: 40px;">
            Deze speciale dag kent een dresscode die past bij de sfeer van de locatie.
          </div>

          <div :style="screenWidth > 600 ? 'font-size: 60px;' : 'font-size: 50px'" style="font-family: 'Houstoner', 'QuattrocentoSans'; text-align:center; margin-top: 40px;">
            Rustiek doch chique
          </div>

          <div class="d-flex justify-content-center" style="font-family: 'QuattrocentoSans'; text-align:center; margin-top: 40px;" >
            We willen jullie vriendelijk verzoeken te kleden in één van onderstaande kleuren.
          </div>

          <div class="d-flex justify-content-between mt-4" v-if="screenWidth > 600" style="margin-top: 40px;">
            <button class="buttonStyle" style="background: #cb6834"></button>
            <button class="buttonStyle" style="background: #e5aa70"></button>
            <button class="buttonStyle" style="background: #f4d39f"></button>
            <button class="buttonStyle" style="background: #4f7942"></button>
            <button class="buttonStyle" style="background: #355e3b"></button>
          </div>

          <div class="d-flex justify-content-between" style="margin-top: 40px;" v-if="screenWidth <= 600">
            <button class="buttonStyle" style="background: #cb6834"></button>
            <button class="buttonStyle" style="background: #f4d39f"></button>
            <button class="buttonStyle" style="background: #355e3b"></button>
          </div>

          <div class="d-flex justify-content-between mt-2" v-if="screenWidth <= 600">
            <button class="buttonStyle" style="background: #cb6834; visibility: hidden;"></button>
            <button class="buttonStyle" style="background: #e5aa70"></button>
            <button class="buttonStyle" style="background: #f4d39f; visibility: hidden;"></button>
            <button class="buttonStyle" style="background: #4f7942"></button>
            <button class="buttonStyle" style="background: #355e3b; visibility: hidden;"></button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Dresscode",
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
.buttonStyle {
  width: 80px;
  height: 80px;
  border-radius: 99px;
  border: none;
}

.buttonStyleRegular {
  width: 240px;
  font-size: 20px;
}

.buttonStyleMobile {
  width: 100%;
  padding: 10px 0;
}
.tdStyle {
  font-family: "QuattrocentoSans";
  font-size: 30px;
  padding: 6px;
}
div {
  font-size: 20px;
  font-family:"QuattrocentoSans";
}
.inputStyle{
  border: none;
  background: #FFFFFF;
  width: 100%;
  border-radius:10px;
  height:40px;
  padding:8px;
  outline: none;
}
.image {
  opacity: 0.4;
  width:100%;
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
}

</style>