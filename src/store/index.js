import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allPostsCats: [],
    loading: false
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
        let newObj = Object.assign({like: false}, item)
        state.allPostsCats.push(newObj)
      })
    },
    likePost(state, post) {
      post.like = !post.like
    }
  },
  actions: {
    async getPost({ commit, state }) {
      state.loading = true
      const res = await fetch('https://api.thecatapi.com/v1/images/search?api_key=79cb7318-dbad-4af1-adef-424a80eed64b&limit=25');
      if(res.status == 200) {
        state.loading = false
      }
      const dataPosts = await res.json();

      commit('updatePostsCats', dataPosts)
    }
  }
})
