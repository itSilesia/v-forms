<template>
  <div class="error__msg--container">
    <div class="error--msg">
      {{ text }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "ErrorMsg",
    props: {
      text: {
        type: String,
        default: 'ErrorMsg'
      },
    }
  }
</script>

<style scoped>
  .error__msg--container {
    display: flex;
    justify-content: flex-start;
  }

  .error--msg {
    color: red;
    font-size: 12px;
    margin-bottom: 5px;
  }
</style>
