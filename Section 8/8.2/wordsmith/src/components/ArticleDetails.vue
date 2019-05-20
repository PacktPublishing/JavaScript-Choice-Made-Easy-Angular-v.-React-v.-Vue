<template>
  <article class="post">

    <header class="post-header">
      <h1 class="post-title">{{post.title}}</h1>
      <p class="post-meta"><time>{{post.date}}</time></p>
    </header>

    <div class="post-content" v-html="post.content"></div>
  </article>
</template>

<script>
import { getPostById } from '../data/posts'

export default {
  name: 'article-details',

  data () {
    return {
      post: getPostById(+this.$route.params.post_id)
    }
  },

  watch: {
    '$route' (to, from) {
      this.post = getPostById(+to.params.post_id)
    }
  }
}
</script>

<style lang="scss">
article {
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

ul {
  margin-left: 30px;
}

.post-header {
  margin-bottom: 30px;
}

.post-title {
  font-size: 42px;
  letter-spacing: -1px;
  line-height: 1;
}

h1 {
  font-weight: 400;
}

h1, p, blockquote {
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
}

.post-meta {
  font-size: 18.375px;
  color: #828282;
}

.post-content {
  margin-bottom: 30px;

  h2 {
    font-size: 32px;
  }
}

.image-caption {
  color: #666666;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
}

blockquote {
  font-size: 21px;
  color: black;
  margin-top: 40px;
  padding: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  letter-spacing: inherit;
  font-style: italic;
  border-left: 4px solid black;

  + * {
    margin-top: 40px;
  }

  > :last-child {
    margin-bottom: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;

    > li {
      text-indent: 10px;
      position: relative;

      &::before {
        content: "-";
        text-indent: -5px;
        position: absolute;
        display: block;
        left: 0;
      }
    }
  }
}

img {
  max-width: 100%;
  vertical-align: middle;
}

.read-further {
  a {
    display: block;
    margin-top: 10px;
  }
}

.share-buttons {
  left: 0;
  bottom: 44px;
  overflow: hidden;
  position: fixed;
  margin-top: initial;
  margin-left: initial;
  width: 151px;
  padding-left: calc((100vw - 800px) / 2 - 30px - 151px);
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  header {
    padding-bottom: 10px;
    margin-top: 20px;
    text-align: center;
  }

  .share-button {
    position: relative;
    display: inline-block;

    a {
      text-decoration: none;
    }

    .count {
      background-color: #F1F3F6;
      color: #333;
      font-size: 12px;
      line-height: 25px;
      margin-left: 4px;
      text-transform: uppercase;
      min-width: 40px;
    }

    .share {
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
      color: #FFF;
      display: inline-block;
      font-size: 13px;
      min-width: 60px;
      padding: 4px 8px;
    }

    .count, .share {
      font-family: "Helvetica Neue";
      font-weight: 700;
      text-decoration: none;
      text-align: center;
      display: inline-block;
    }

    + .share-button {
      margin-top: 8px;
    }
  }

  .share-button-facebook .share {
    background-color: #3b5998;
  }

  .share-button-twitter .share {
    background-color: #00ABF0;
  }
}

.image_centered {
  display: block;
  margin: auto;
}
</style>
