import { createStore } from 'vuex'

export default createStore({
  state: {
    sysState: 0,
    superuser: {
      name: "Sakhno",
      password: "3434",
      active: false
    },
    settings: {
      genre: true,
      year: true,
      actors: true,
      single: true,
      relation: true,
    }
  },
  mutations: {
    setState(state, status) {
      state.sysState = status;
    },

    setActive(state, data) {
      if (data.name == state.superuser.name && data.password == state.superuser.password) state.superuser.active = true;
    },

    setSettings(state, data) {

      state.settings[data.type] = data.value
    },

    setFalse(state) {
      state.superuser = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
