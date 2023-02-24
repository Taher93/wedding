<template>
  <div>
    <div class="image">
      <div style="position: relative;">
        <img :src="screenWidth > 600 ? require('@/assets/image00003.jpeg') : require('@/assets/image00005.jpeg')" style="width: 100%;">
      </div>
      <div style="position: relative;" v-if="screenWidth < 600">
        <img :src="screenWidth > 600 ? require('@/assets/image00001.jpeg') : require('@/assets/image00003.jpeg')" style="width: 100%;">
      </div>
    </div>
    <div class="container mt-4">
      <div class="row m-0">
        <div :class="screenWidth > 600 ? 'col-8 offset-2' : 'col-12 p-0'">
          <div class="mt-2">
            <label style="font-size:40px; font-family: Houstoner, QuattrocentoSans;" class="d-flex justify-content-center">Locatie</label>
          </div>
          <div>
            Het is maandenlang geheim gebleven, maar vanaf nu kunnen we het eindelijk bekend maken.
          </div>
          <div>
            De plaats waar wij gaan trouwen is… Maasland!
          </div>
          <div>
            De vader van de bruid heeft een mooi stukje land wat we laten omdopen tot trouwlocatie voor één dag.
          </div>
          <div>
            Alles zal worden opgebouwd om het huwelijk plaats te laten vinden, aangezien er nauwelijks voorzieningen zijn.
          </div>
          <div>
            Een flinke klus, maar met de juiste mensen aan boord hebben we er vertrouwen in.
          </div>
          <div>
            Bijkomend voordeel: we kunnen het helemaal opbouwen zoals wij willen.
          </div>
          <div>
            Want hoe bijzonder is het om te trouwen op een plek waar nog nooit eerder iemand getrouwd is!
          </div>
          <div>
            En natuurlijk een plek die emotionele waarde heeft voor de bruid. Wij kunnen niet wachten!
          </div>
          <div>
            Google maps navigatie:
          </div>
        </div>
        <div class="col-md-12">
          <div class="mt-4">
            <GmapMap
                :center="center"
                :zoom="15"
                :style="screenWidth > 600 ? 'width:100%; height: 600px;' : 'width: 100%; height: 400px;'"
            >
              <GmapMarker
                  :position="marker"
              />
            </GmapMap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Locatie",
  data() {
    return {
      screenWidth: 0,
      center: { lat: 51.937855, lng: 4.263193 },
      marker: {
        lat: 51.937855,
        lng: 4.263193,
      },
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