<template>
  <div>
    <div class="image">
      <div style="position: relative;">
        <img :src="screenWidth > 600 ? require('@/assets/image00004.jpeg') : require('@/assets/image00002.jpeg')" style="width: 100%;">
      </div>
      <div style="position: relative;" v-if="screenWidth < 600">
        <img :src="require('@/assets/hmmmmm.jpg')" style="width: 100%;">
      </div>
      <div style="position: relative;" v-if="screenWidth < 600 && hotel">
        <img :src="require('@/assets/kiss.jpg')" style="width: 100%;">
      </div>
    </div>
    <div class="container mt-4">
      <div class="row m-0">
        <div :class="screenWidth > 600 ? 'col-8 offset-2' : 'col-12 p-0'">
          <div class="mt-2">
            <label style="font-size:40px; font-family: Houstoner, QuattrocentoSans;" class="d-flex justify-content-center">Handige informatie</label>
          </div>
          <div class="mt-2">
            Om ervoor te zorgen dat alles vlekkeloos verloopt, is het belangrijk om bepaalde zaken met elkaar af te stemmen. Daarom willen we je vragen om het onderstaande formulier in te vullen.
          </div>
          <div class="mt-3">
            Als je nog andere vragen hebt of graag een speech wilt geven, aarzel dan niet om contact op te nemen met Hayet via <a href="mailto:ceremoniemeester@huwelijktaherenfleur.nl">
            ceremoniemeester@huwelijktaherenfleur.nl</a>
          </div>
          <div class="d-flex bg-transparent" style="justify-content: space-between;" :style="screenWidth > 600 ? 'margin: 20px 0;' : 'margin: 10px 0;'">
            <button type="button" class="btn" @click="setDiet(true)" :style="diet === true ? 'background: #FFFFFF;' : ''" :class="screenWidth > 600 ? 'buttonStyleRegular' : 'buttonStyleMobile'">
              Ik heb dieetwensen
            </button>
            <button type="button" class="btn" @click="setDiet(false)" :style="diet === false ? 'background: #FFFFFF;' : ''" :class="screenWidth > 600 ? 'buttonStyleRegular' : 'buttonStyleMobile'">
              Ik heb geen dieetwensen
            </button>
          </div>
          <div v-if="diet === true">
            <label class="bg-transparent">
              Dieetwensen
            </label>
            <Treeselect class="bg-transparent" style="height: 40px;" :placeholder="'Selecteer'" :options="options" v-model="dietList" :multiple="true"/>
          </div>
          <div v-if="showOther() && diet" class="mt-2">
            <label>
              Anders;
            </label>
            <div>
              <input type="text" v-model="inputAnders" class="inputStyle">
            </div>
          </div>
          <div class="d-flex bg-transparent" style="justify-content: space-between;" :style="screenWidth>600?'margin-top:20px;':'margin: 10px 0;'">
            <button type="button" class="btn" :style="hotel === true ? 'background: #FFFFFF;' : ''" :class="screenWidth > 600 ? 'buttonStyleRegular' : 'buttonStyleMobile'" @click="setHotel(true)">
              Ik wil overnachten
            </button>
            <button type="button" class="btn" @click="setHotel(false)" :style="hotel === false ? 'background: #FFFFFF;' : ''" :class="screenWidth > 600 ? 'buttonStyleRegular' : 'buttonStyleMobile'">
              Ik wil niet overnachten
            </button>
          </div>

          <div v-if="hotel === false" class="mt-4">
            Wil je niet blijven overnachten?
            Laat dit dan ook weten middels onderstaand formulier, zodat de mogelijkheden omtrent vervoer besproken kunnen worden.
          </div>

          <div v-if="hotel === true || hotel === false" :style="screenWidth > 600 ? 'margin-top: 16px;' : ''">
            <div v-if="hotel === true">
              In dat geval hebben we enkele gegevens nodig voor de reservering:
            </div>
            <div>
              <label class="mt-2">
                Voornaam
              </label>
            </div>
            <input type="text" v-model="firstName" class="inputStyle">
            <label class="mt-2">
              Achternaam
            </label>
            <input type="text" v-model="lastName" class="inputStyle">
          </div>
          <div v-if="hotel">
            <label class="mt-2">
              Straatnaam + huisnummer
            </label>
            <input type="text" v-model="street" class="inputStyle">
            <div class="row m-0">
              <div class="col-6 pl-0">
                <div>
                  <label class="mt-2">
                    Postcode
                  </label>
                </div>
                <input type="text" v-model="postalCode" class="inputStyle">
              </div>
              <div class="col-6 pr-0">
                <div>
                  <label class="mt-2">
                    Woonplaats
                  </label>
                </div>
                <input type="text" v-model="city" class="inputStyle">
              </div>
            </div>
          </div>

          <div class="mt-3">
            <button class="btn" style="width: 100%; font-size: 20px;" @click="sendForm">Verstuur formulier</button>
          </div>

          <div class="mt-5" style="font-size:20px;">
            <label style="font-size:40px; font-family: Houstoner, QuattrocentoSans;" class="d-flex justify-content-center">Dagindeling</label>
            Om alvast een tipje van de sluier op te lichten kun je hieronder de planning op hoofdlijnen vinden.
          </div>
          <div class="mt-2 d-flex justify-content-center">
            <table>
              <tr>
                <td class="tdStyle">
                  14.00  -  Inloop
                </td>
              </tr>
              <tr>
                <td class="tdStyle">
                  14.30  -  Ceremonie
                </td>
              </tr>
              <tr>
                <td class="tdStyle">
                  15.30  -  Borrel
                </td>
              </tr>
              <tr>
                <td class="tdStyle">
                  18.00  -  Diner
                </td>
              </tr>
              <tr>
                <td class="tdStyle">
                  20.30  -  Feest
                </td>
              </tr>
              <tr>
                <td class="tdStyle">
                  00.00  -  Einde
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import {db} from "@/main";
import {addDoc, collection} from 'firebase/firestore'
import Notifications from 'vue-notification'
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
      firstName: null,
      lastName: null,
      street: null,
      postalCode: null,
      city: null,
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
    async sendForm() {
      const isHotel = this.hotel === true && this.firstName && this.lastName && this.street && this.postalCode && this.city;
      const isNotHotel = this.hotel === false && this.firstName && this.lastName;
      const isDiet = this.diet === true && this.dietList.length;
      if (isHotel || isNotHotel || isDiet) {
        let hotelInfo;
        if (this.hotel === true) {
          hotelInfo = {
            straatnaam: this.street,
            postCode: this.postalCode,
            woonplaats: this.city,
          };
        } else {
          hotelInfo = 'nee';
        }
        const response = await addDoc(collection(db, "antwoorden"), {
          voornaam: this.firstName,
          achternaam: this.lastName,
          hotel: this.hotel,
          dieet: this.dietList.length ? this.dietList : 'nee',
          anders: this.inputAnders ? this.inputAnders : '',
          hotelInfo: hotelInfo,
        })
        if (response) {
          this.$notify({
            group: 'foo',
            title: 'Succes!',
            text: this.hotel === true ? 'Dank je wel voor het invullen van het formulier, en gezellig dat je blijft slapen :)' : 'Bedankt voor het invullen van het formulier.',
            position: 'top center',
            type: 'success'
          })
        }
      } else {
        this.$notify({
          group: 'foo',
          title: 'Oeps!',
          text: 'Vul alsjeblieft eerst alle informatie in.',
          position: 'top center',
          type: 'error'
        })
      }
    },
    resizeScreen() {
      this.screenWidth = window.innerWidth;
      console.log('Gluiperdt');
    },
    setDiet(input) {
      this.diet = input;
    },
    setHotel(input) {
      this.hotel = input;
    },
    showOther() {
      return this.dietList.length > 0 && this.dietList.includes('anders');
    },
  }
}
</script>

<style scoped>
button {
  color: black;
  background: transparent;
  border: 2px solid #FFFFFF;
}
button:hover {
  background: #FFFFFF;
}
button:focus {
  outline: none !important;
}
.buttonStyleRegular {
  width: 260px;
  font-size: 20px;
}

.buttonStyleMobile {
  width: 100%;
  padding: 10px 0;
}
.tdStyle {
  font-family: "QuattrocentoSans";
  font-size: 24px;
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