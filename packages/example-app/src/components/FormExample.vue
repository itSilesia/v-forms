<template>
  <div class="form-example">
    <Form
            @submit="handleSubmit"
            :initial-values="{ email: 'lol', password: '' }"
            :validations="validations"
    >
      <template slot-scope="props">
        <div>
          {{ props }}

          <input
                  v-model="props.$v.email.$model"
                  :disabled="props.isSubmitting"
          />

          <input
                  v-model="props.$v.password.$model"
                  :disabled="props.isSubmitting"
          />

          <button @click="props.handleReset">
            Reset
          </button>

          <button @click="props.handleSubmit">
            Click me
          </button>

          {{ props.errors }}
        </div>
      </template>
    </Form>
  </div>
</template>

<script>
import { Form } from "@v-forms/core";
import { required, minLength } from 'vuelidate/lib/validators';

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
  },
  data() {
    return {
      validations: {
        email: {
          minLength: minLength(6)
        },
        password: {
          required
        }
      }
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
