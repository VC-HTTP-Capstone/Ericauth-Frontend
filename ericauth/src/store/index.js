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
    }
  },
  action: {

  },
  plugins:[createPersistedState()]
})

export default store;
