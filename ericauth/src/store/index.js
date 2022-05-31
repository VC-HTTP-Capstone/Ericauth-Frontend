import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    email:"empty",
    name: "hongildong",
    team:"ex",
    student_id:"2xxxxxxxxx",
    phoneNumer:"010-0000-0000",
    paymentStatus:false,
    publicKey:"abc",
    privateKey:"cba",
    qrData:"abcde",
    qrDetail: "abcde",
    eventName: "ex"
  },
  getter: {

  },
  mutations: {
    persistedID (state,payload) {
      state.email = payload.value;
    },
    persistedName (state,payload) {
      state.name = payload.value;
    },
    persistedSnum (state,payload) {
      state.student_id = payload.value;
    },
    persistedTeam (state,payload) {
      state.team = payload.value;
    },
    persistedPnum (state,payload) {
      state.phoneNumer = payload.value;
    },
    persistedPublickey (state,payload) {
      state.publicKey = payload.value;
    },
    persistedPrivatekey (state,payload) {
      state.privateKey = payload.value;
    },
    persistedQrdata (state,payload) {
      state.qrData = payload.value;
    },
    persistedQrdetail (state,payload) {
      state.qrDetail = payload.value;
    },
    persistedEventname (state,payload) {
      state.eventName = payload.value;
    }
  },
  action: {

  },
  plugins:[createPersistedState()]
})

export default store;
