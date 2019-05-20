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
    <textarea placeholder="Content..." v-model="post.content" class="content-textarea" />
    <vue-markdown :source="post.content" class="content-markdown"></vue-markdown>
    <br/>
    <button @click="addPost">Submit</button>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  data () {
    return {
      post: {
        image: null,
        title: null,
        excerpt: null,
        date: null,
        content: null
      },
      testMarkdown: `# Big header
## Smaller header`
    }
  },

  methods: {
    addPost () {
      this.$store.commit('addPost', this.post)

      this.$router.push({ name: 'Home' })
    }
  },

  components: {
    'vue-markdown': VueMarkdown
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

.content-textarea, .content-markdown {
  display: inline-block;
  width: 49%;
  min-height: 500px;
  background: #f3f3f3;
}

.content-markdown {
  float: right;
}
</style>
