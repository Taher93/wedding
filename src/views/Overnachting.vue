<template>
  <div>
    <div class="image">
      <div style="position: relative;">
        <img :src="screenWidth > 600 ? require('@/assets/lolz.jpg') : require('@/assets/lolz.jpg')" style="width: 100%;">
      </div>
      <div style="position: relative;" v-if="screenWidth < 600">
        <img :src="screenWidth > 600 ? '' : require('@/assets/proposee.png')" style="width: 100%;">
      </div>
      <div style="position: relative;" v-if="screenWidth < 600">
        <img :src="require('@/assets/watchring.jpeg')" style="width: 100%;">
      </div>
    </div>
    <div class="container mt-4">
      <div class="row m-0">
        <div :class="screenWidth > 600 ? 'col-8 offset-2' : 'col-12 p-0'">
          <div class="mt-2 d-flex justify-content-center" style="font-size:40px; font-family: Houstoner, QuattrocentoSans;">
            Overnachting&nbsp;<span style="font-family: 'Houstoner amp'">E</span>&nbsp;vervoer
          </div>
          <div class="mt-3">
            Het bruidspaar zou het heel gezellig vinden als jullie blijven overnachten en de volgende dag met hen ontbijten en nagenieten. Om dit toegankelijk te maken voor een ieder is er samen met Hotel Van der Valk Delft afgesproken dat alle bruiloftsgasten tegen een gereduceerd tarief kunnen overnachten. Een tweepersoonskamer inclusief ontbijt kan geboekt worden voor slechts €99. Hotel Van der Valk Delft is in 2023 open gegaan en alles is dus gloednieuw. Bijkomend voordeel: je rijdt de volgende dag direct de A4 op richting Haarlem/Amsterdam.
          </div>
          <div class="mt-3">
            Maak je ook geen zorgen over vervoer naar de trouwlocatie. Er rijdt een bus heen en weer naar Maasland voor alle gasten die blijven overnachten.
          </div>
          <div class="mt-3">
            <a href="https://www.hoteldelft.com/">Klik hier voor enkele sfeerimpressies van het hotel: hoteldelft.com</a>
          </div>
          <div class="mt-3">
            <a href="#/handigelinks">Ga naar de pagina Handige informatie om door te geven of je wilt blijven overnachten.</a>
          </div>
        </div>
        <div class="col-md-12">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overnachting",
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
  methods: {
    resizeScreen() {
      this.screenWidth = window.innerWidth;
    },
  }
}
</script>

<style scoped>
div {
  font-size: 20px;
  font-family:"QuattrocentoSans";
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