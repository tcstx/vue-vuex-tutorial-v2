<template>
  <div id="app">
    <button @click="toggleMe">Toggle Me</button>
    <hr />
    <img v-if="isTrue" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    isTrue: function () {
      return this.$store.getters.isTrue
    }
  },
  data: function () {
    return {

    }
  },
  methods: {
    toggleMe: function () {
      this.$store.dispatch('toggle')
    }
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
  margin-top: 60px;
}
</style>
