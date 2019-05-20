<template>
  <li>
    <img :src="post.image" class="post-thumbnail">

    <h2>
      <router-link :to="{ name: 'ArticleDetails', params: { post_id: post.id } }" class="post-link">{{post.title}}</router-link>
    </h2>
    <div class="post-excerpt">{{post.excerpt}}</div>

    <div class="post-footer">
        <div class="post-date">{{post.date}}</div>
        <div class="post-share">
          <span v-if="linkVisible">http://localhost:8080/#/post/{{post.id}}</span>
          <span v-else @click="linkVisible = true">SHARE</span>
        </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'article-preview',

  props: ['post'],

  data () {
    return {
      linkVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

li {
  margin-bottom: 0;

  &:not(:first-child) {
    margin-top: 40px;
  }
}

a.post-link {
  text-transform: uppercase;
  color: #000;
}

.post-link {
  display: block;
  font-size: 24px;
}

.post-excerpt {
  font-size: 14px;
  font-style: italic;
  opacity: 0.6;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  color: inherit;
  display: block;
  pointer-events: none;
}

.post-footer {
  display: inline-block;
  width: 100%;
  position: relative;
}

.post-date, .post-share {
  width: 188px;
  text-align: center;
  font-size: 12px;
  background: #000;
  display: inline-block;
  color: white;
  padding: 6px;
  text-transform: uppercase;
}

.post-share {
  float: right;
  width: 200px;
  cursor: pointer;
  text-transform: none;
}

.post-thumbnail {
  filter: grayscale(100%);
  margin-top: 10px;
  width: 200px;
  height: 200px;
  padding-right: 20px;
  padding-bottom: 10px;
  max-width: 100%;
  vertical-align: middle;
  float: left;

  &:hover {
    filter: none;
  }
}
</style>
