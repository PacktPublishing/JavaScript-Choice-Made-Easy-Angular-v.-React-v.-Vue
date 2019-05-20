<template>
  <div class="home">
    <ul class="post-list">
      <article-preview v-for="post in posts" :key="post.id" :post="post" />
    </ul>
  </div>
</template>

<script>
import ArticlePreview from './ArticlePreview'
import POSTS_DATA from '../data/posts'

export default {
  name: 'home',

  data () {
    return {
      posts: POSTS_DATA
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
