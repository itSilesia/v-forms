<template>
  <div class="form-example">
    <Form @submit="handleSubmit">
      <template slot-scope="props">
        <div>
          {{ props }}
          <button @click="props.handleSubmit">
            Click me
          </button>
        </div>
      </template>
    </Form>
  </div>
</template>

<script>
import { Form } from "@v-forms/core";

export default {
  name: 'FormExample',
  components: {
    Form
  },
  methods: {
    handleSubmit(values, actions) {
      setTimeout(() => {
        actions.setSubmitting(false)
      }, 2000)
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
