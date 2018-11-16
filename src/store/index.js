import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import config from '../firebase/config'

firebase.initializeApp(config)
Vue.use(Vuex)

const state = {
  db: firebase.firestore(),
}

export default new Vuex.Store({
  state,
  modules: {},
})
