<template>
  <div id="app" class="list">
    <div class="row end">
      <div class="styling col-md-auto" :class="screenWidth > 600 ? 'styleRegular' : 'styleMobile text-right'">
        <router-link to="/">Home</router-link>
      </div>
      <div class="styling col-md-auto" :class="screenWidth > 600 ? 'styleRegular mr-3' : 'styleMobile text-right'">
        <router-link to="/locatie">Locatie</router-link>
      </div>
      <div class="styling col-md-auto" :class="screenWidth > 600 ? 'styleRegular mr-3' : 'styleMobile text-right'">
        <router-link to="/overnachting">Overnachting en vervoer</router-link>
      </div>
      <div class="styling col-md-auto" :class="screenWidth > 600 ? 'styleRegular mr-3' : 'styleMobile text-right'">
        <router-link to="/dresscode">Dresscode</router-link>
      </div>
      <div class="styling col-md-auto" :class="screenWidth > 600 ? 'styleRegular' : 'styleMobile text-right'">
        <router-link to="/handigelinks">Handige informatie</router-link>
      </div>
    </div>
    <div>
      <router-view/>
    </div>
    <div>
      <notifications group="foo" />
    </div>
  </div>
</template>
<script>
export default {
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
      console.log('Wat zoek je? Er is hier niks te vinden :D');
    }
  }
}
</script>

<style>
* {
  max-width:100%;
  background: transparent;
}

.styleRegular {
  font-size: 30px;
}

.styleMobile {
  justify-content: end;
  font-size: 20px;
  padding: 2px 15px !important;
}


body {
  margin-top: 0;
}

.styling {
  font-family: QuattrocentoSans;
  background: transparent;
  color: #2c3e50;
  z-index: 1;
  padding: 10px;
}

.end {
  display: flex;
  justify-content: end;
}

.padding {
  padding: 25px;
}

div a {
  text-decoration: none;
  color: #2c3e50;
}

div a.router-link-exact-active {
  color: #FFFFFF;
}
</style>
