import Vue from 'vue'
import Vuex from 'vuex'
import MOCKED_POSTS from '../data/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: MOCKED_POSTS
  },
  mutations: {
    addPost (state, post) {
      if (!post.id) {
        post.id = state.posts.length
      }

      state.posts.push(post)
    }
  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    }
  }
})
