<template>
  <div id="app">
    <h1>Welcome to v-form Example App</h1>
    <FormExample/>
  </div>
</template>

<script>
import FormExample from './components/FormExample.vue'

export default {
  name: 'app',
  components: {
    FormExample
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
