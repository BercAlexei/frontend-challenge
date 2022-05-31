import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allPostsCats: [],
    loading: true,
    numberOfCats: 25
  },
  getters: {
    allPostsCats(state) {
      return state.allPostsCats
    },
    likeCats(state) {
      return state.allPostsCats.filter(item => item.like)
    },
    loading(state) {
      return state.loading
    }
  },
  mutations: {
    updatePostsCats(state, data) {
      data.forEach(item => {
        let newObj = Object.assign({ like: false }, item)
        state.allPostsCats.push(newObj)
      })
    },
    likePost(state, post) {
      post.like = !post.like
    },
    updateNumberCats(state, number) {
      state.numberOfCats = number
    },
    updateLoading(state) {
      state.loading = false
    }
  },
  actions: {
    async getPost({ commit, state }) {
      state.loading = true
      const res = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=79cb7318-dbad-4af1-adef-424a80eed64b&limit=${state.numberOfCats}`);
      if (res.status == 200) {
        const dataPosts = await res.json();
        commit('updatePostsCats', dataPosts)
        state.loading = false
      }

    }
  }
})
