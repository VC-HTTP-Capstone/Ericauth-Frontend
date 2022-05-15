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
    phoneNumer:"010-1234-5678",
    paymentStatus:false,
  },
  getter: {

  },
  mutations: {
    persistedID (state,payload) {
      state.email = payload.value;
    },
    persistedInfo (state,payload) {
      state.name = payload.value;
      state.student_id = payload.student_id;
      state.team = payload.team;
    }
  },
  action: {

  },
  plugins:[createPersistedState()]
})

export default store;
