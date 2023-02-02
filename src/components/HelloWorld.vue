<template>
  <div>
    <div class="image">
      <div style="position: relative;">
        <img :src="screenWidth > 500 ? require('@/assets/engagement.jpg') : require('@/assets/engagement_mobile.jpeg')" style="width: 100%;">
      </div>
    </div>
    <div :class="screenWidth > 500 ? 'regRoot' : 'mobileRoot'">
      <div class="styleme">
        <div class="header" :class="screenWidth > 500 ? 'styleReg' : 'styleMobile'">
          Bruiloft
        </div>
      </div>
      <div class="styleme">
        <div class="header" :class="screenWidth > 500 ? 'styleReg' : 'styleMobile'">
          Taher & Fleur
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {db} from "@/main";
import {addDoc, collection} from 'firebase/firestore'
export default {
  name: 'Homepage',
  data() {
    return {
      screenWidth: 0,
    }
  },
  async mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.resizeScreen);
      this.resizeScreen();
    })

    // const response = await addDoc(collection(db, "antwoorden"), {
    //   blijvenSlapen: true,
    //   dieetWensen: 'Ik lust geen gras',
    // })
    // console.log(response);
    // db.collection("antwoorden").add({
    //   blijvenSlapen: true,
    //   dieetWensen: "Ik lust geen gras",
    // }).then((response) => {
    //   console.log('yay', response);
    // }).catch((error) => {
    //   console.log('error', error);
    // })
  },
  methods:{
    resizeScreen() {
      this.screenWidth = window.innerWidth;
      console.log('Gluiperdt');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  width:100%;
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
}
* {
  background: transparent;
  z-index: 1;
}
.regRoot {
  margin-top: 50px;
}
.mobileRoot {
  margin-top: 10px;
}
.styleMobile {
  font-size: 45px;
  margin-top: 30px;
  color: #F5F5DC;
}
.styleReg {
  color:white;
  margin-top: 30px;
  font-size: 60px;
}

.styleme {
  display:flex;
  justify-content: center;
}
.header {
  font-family: "Lucida Handwriting";
  font-weight: 100;
}

.sub {
  font-size: 30px;
  font-family: "Courier";
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
