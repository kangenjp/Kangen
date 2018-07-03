<template>
  <div id="app">
    <div id="nav">
    <my-header v-if="$route.name !== 'Title'"></my-header>
    </div>
    <router-view/>
  </div>
</template>

<script>
import VueHead from 'vue-head'
import Header from './components/Header/Header.vue';

export default {

  name: 'App',
  components: {
    MyHeader: Header
  },
  head: {
    meta: [
      { name: 'description', content: '本棚に眠っている古本で、作者に利益の一部を還元できる古本屋「Kangen（還元）」。不必要な本で、作者に還元しよう。' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,user-scalable=no' },
      { charset: 'utf-8' },
    ],
  link: [
    { rel: 'shortcut icon', href: 'favicon.ico' },
  ],
  script: []
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
