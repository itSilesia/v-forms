<template>
  <VCard
    max-width="800"
    class="card"
  >
    <form>
      <VTextField
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      />
      <VTextField
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      />
      <VCheckbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      />
      <VBtn
        color="success"
        @click="submit"
      >
        submit
      </VBtn>
      <VBtn
        color="warning"
        @click="clear"
      >
        clear
      </VBtn>
    </form>
  </VCard>
</template>

<script>
  import { Form } from "@v-forms/core"
  import { required, minLength, maxLength } from 'vuelidate/lib/validators'

  export default {
    name: 'FormExample',
    components: {
      Form
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
    },
    methods: {
      handleSubmit(values, actions) {
        console.log(values)
        setTimeout(() => {
          actions.setSubmitting(false)
        }, 2000)
      }
    }
  }
</script>

<style scoped>
  .card {
    margin: 30px;
    padding: 20px;
    flex: 1;
  }

  a {
    color: #42b983;
  }
</style>
