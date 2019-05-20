<template>
  <div id="app">
    <header class="site-header">
      <div class="wrapper">
        <router-link class="site-title deepshadow" to="/"><img src="./assets/logo.png"/>WORDSMITH - BLOG</router-link>
      </div>
    </header>
    <main class="page-content" aria-label="Content">
        <div class="wrapper">
          <router-view></router-view>
        </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
h2, ul {
  margin: 0;
  padding: 0;
}

.site-header {
  border-top: none;
  z-index: 1;
  border-bottom: 1px solid #e8e8e8;
  min-height: 56px;
  position: relative;

  img {
    width: 21px;
    margin-bottom: -1px;
    display: inline-block;
    padding-right: 10px;
  }
}

.site-title {
  font-size: 26px;
  font-weight: 300;
  line-height: 56px;
  letter-spacing: -1px;
  margin-bottom: 0;
  float: left;
  color: black;

  &:visited {
      color: #000;
  }
}

a {
  color: #2a7ae2;
  text-decoration: none;
}

body {
  font: 400 21px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #000;
  background-color: white;
  -webkit-text-size-adjust: 100%;
  -webkit-font-feature-settings: "kern" 1;
  -moz-font-feature-settings: "kern" 1;
  -o-font-feature-settings: "kern" 1;
  font-feature-settings: "kern" 1;
  font-kerning: normal;
  margin: 0;
  padding: 0;
}

.wrapper {
  position: relative;
  max-width: calc(800px - (30px * 2));
  margin-right: auto;
  margin-left: auto;
  padding-right: 30px;
  padding-left: 30px;
  font-size: 21px;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.page-content {
  padding: 30px 0;
}
</style>
