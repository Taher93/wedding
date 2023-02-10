<template>
  <div>
    <div class="image">
      <div style="position: relative;">
        <img :src="screenWidth > 500 ? require('@/assets/image00002.jpeg') : require('@/assets/image00002.jpeg')" style="width: 100%;">
      </div>
    </div>
    <div class="container mt-4">
      <div class="row">
        <div :class="screenWidth > 500 ? 'col-6 offset-3' : 'col-12'">
          <div>
            Hayet, ons (schoon)zusje, is ceremoniemeester en is druk bezig met de voorbereidingen.
          </div>
          <div>
            Daarom is afstemming omtrent enkele onderwerpen gewenst.
          </div>
          <div>
            Zouden jullie zo vriendelijk willen zijn om het onderstaande formulier in te vullen?
          </div>
          <div>
            Mocht je nog verdere vragen hebben dan kun je die mailen naar <a href="mailto:ceremoniemeester@huwelijktaherenfleur.nl">
            ceremoniemeester@huwelijktaherenfleur.nl</a>
          </div>
          <div class="d-flex bg-transparent" style="justify-content: space-between; margin: 20px 40px;">
            <button type="button" class="btn btn-primary" @click="setDiet(true)">
              Ik heb dieetwensen
            </button>
            <button type="button" class="btn btn-primary" @click="setDiet(false)">
              Ik heb geen dieetwensen
            </button>
          </div>
          <div v-if="diet === true">
            <label class="bg-transparent">
              Dieetwensen
            </label>
            <Treeselect class="bg-transparent" style="height: 40px;" :options="options" v-model="dietList" :multiple="true"/>
          </div>
          <div v-if="showOther()">
            <label>
              Anders;
            </label>
            <div>
              <input type="text" v-model="inputAnders" class="inputStyle">
            </div>
          </div>
          <div class="d-flex bg-transparent" style="justify-content: space-between; margin: 20px 40px;">
            <button type="button" class="btn btn-primary" @click="setHotel(true)">
              Ik wil overnachten
            </button>
            <button type="button" class="btn btn-primary" @click="setHotel(false)">
              Ik wil niet overnachten
            </button>
          </div>



          Je dieetwensen hebt;
          Je wilt blijven overnachten of gebruik wil maken van vervoer (zie hier);
          Je wil speechen of het bruidspaar op een andere manier in het ‘zonnetje’ wil zetten ;)

          Dagindeling
          Om alvast een tipje van de sluier op te lichten kun je hieronder de planning op hoofdlijnen vinden.

          14.00 - Inloop
          14.30 - Ceremonie
          15.30 - Borrel
          18.00 - Diner
          20.30 - Feest
          00.00 - Einde

          Cadeautip
          $$$$$$$$$$$$$$$$$$$$$$$$$$
<!--          <Pictogram envelopje>-->

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  name: "UsefulInfo",
  components:{
    Treeselect
  },
  data() {
    return {
      screenWidth: 0,
      diet: null,
      dietList: [],
      inputAnders: null,
      hotel: null,
      options: [
        {
          id: 'vega',
          label: 'Vegetarisch'
        },
        {
          id: 'vis',
          label: 'Geen vis'
        },
        {
          id: 'gluten',
          label: 'Geen gluten',
        },
        {
          id: 'anders',
          label: 'Anders, namelijk;'
        }
      ]
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
    setDiet(input) {
      console.log(this.dietList);
      this.diet = input;
    },
    setHotel(input) {
      this.hotel = input;
    },
    showOther() {
      // console.log(this.dietList.length > 1);
      return this.dietList.length > 0 && this.dietList.includes('anders');
      // return true;
    },
  }
}
</script>

<style scoped>
div {
  font-size: 16px;
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
  opacity: 0.5;
  width:100%;
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
}

</style>