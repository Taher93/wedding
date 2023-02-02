import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {firebase, initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

const app = initializeApp({
  apiKey: "AIzaSyC6Z5EQMD8x6xeBoo5HllNkLmhmXdmvVj4",
  authDomain: "huwelijk-taher-en-fleur.firebaseapp.com",
  projectId: "huwelijk-taher-en-fleur",
  storageBucket: "huwelijk-taher-en-fleur.appspot.com",
  messagingSenderId: "17808401517",
  appId: "1:17808401517:web:8c82ce5e4432a88395cb64"
})

export const db = getFirestore(app);

// db.collection("antwoorden").add({
//   test: true,
// }).then((response) => {
//   console.log('response');
// }).catch((error) => {
//   console.log('error', error);
// })

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
