<template>
  <VApp class="app">
    <VLayout
      align-center
      justify-start
      column
    >
      <h1 class="header">
        Welcome to v-form Example App
      </h1>
      <div class="form-container">
        <FormExample />
      </div>
    </VLayout>
  </VApp>
</template>

<script>
import FormExample from './components/FormExample.vue'

export default {
  name: 'App',
  components: {
    FormExample
  }
}
</script>

<style>
  .app {
    text-align: center;
    color: #2c3e50;
  }

  .header {
    padding: 30px;
  }

  .form-container {
    display: flex;
    flex-direction: row;
    align-self: stretch;
    justify-content: center;
  }
</style>
