import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import cookies from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_status_message: undefined,
    scoreboard: {
      usr_name: undefined,
      usr_img: undefined,
      usr_score: 0,
      bot_name: undefined,
      bot_img: undefined,
      bot_score: 0
    },
  },
  mutations: {
    update_login_status_message(state, payload) {
      state.login_status_message = payload;
    },
    update_scoreboard(state, payload) {
      state.scoreboard = payload;
    }

  },
  actions: {
    login_verification(store, payload) {
      axios.request({
        url: 'https://reqres.in/api/login',
        method: "POST",
        data: {
          email: payload.email,
          password: payload.password,
        }
      }).then((response) => {
        cookies.set("login_token", response.data.token);
        store.commit('update_login_status_message', 'Login Successful, please wait a moment while we redirect you!');
      }).catch((error) => {
        store.commit('update_login_status_message', 'Login Failed, Try again!');
        error;
      })
    }
  },
})
