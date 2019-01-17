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
            v-model.lazy="props.$v.email.$model"
            :disabled="props.isSubmitting"
          />
          <div
            class="div"
            v-if="props.errors.email && props.errors.email.minLength"
          >
            Email jest too short
          </div>

          <div
            class="div"
            v-if="props.errors.email && props.errors.email.maxLength"
          >
            Email jest too long
          </div>

          <div
            class="div"
            v-if="props.errors.email && props.errors.email.required"
          >
            Email jest required
          </div>

          <input
            v-model.lazy="props.$v.password.$model"
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
  import { Form } from "@v-forms/core"
  import { required, minLength, maxLength } from 'vuelidate/lib/validators'

  export default {
    name: 'FormExample',
    components: {
      Form
    },
    methods: {
      handleSubmit(values, actions) {
        console.log(values)
        setTimeout(() => {
          actions.setSubmitting(false)
        }, 2000)
      }
    },
    data() {
      return {
        validations: {
          email: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(10)
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
