<template>
  <div class="home">
    <ul class="post-list">
      <article-preview v-for="post in posts" :key="post.id" :post="post" />
    </ul>
  </div>
</template>

<script>
import ArticlePreview from './ArticlePreview'

export default {
  name: 'home',

  computed: {
    posts () {
      return this.$store.state.posts
    }
  },

  components: {
    'article-preview': ArticlePreview
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  margin-bottom: 15px;
}
</style>
