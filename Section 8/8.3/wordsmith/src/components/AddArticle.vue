<template>
  <div>
    <h1>Add article</h1>
    <input placeholder="Title..." v-model="post.title" />
    <br/>
    <input placeholder="Image path..." v-model="post.image" />
    <br/>
    <input placeholder="Date..." v-model="post.date" />
    <br/>
    <textarea placeholder="Excerpt..." v-model="post.excerpt" />
    <br/>
    <textarea placeholder="Content..." v-model="post.content" />
    <br/>
    <button @click="addPost">Submit</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: {
        image: null,
        title: null,
        excerpt: null,
        date: null,
        content: null
      }
    }
  },

  methods: {
    addPost () {
      this.$store.commit('addPost', this.post)

      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss" scoped>
input, textarea {
  width: 100%;
}

textarea {
  min-height: 150px;
}
</style>
