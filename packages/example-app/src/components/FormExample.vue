<template>
  <Form
    :initial-values="form"
    :validation-schema="validations"
    @submit="handleSubmit"
  >
    <template slot-scope="props">
      <VCard
        class="card"
      >
        <form>
          <VTextField
            :value="props.values.email"
            :error-messages="getEmailErrors(props.errors.email)"
            label="E-mail"
            @change="props.values.email = $event"
          />
          <VTextField
            :value="props.values.password"
            :error-messages="getPasswordErrors(props.errors.password)"
            type="password"
            label="Password"
            @change="props.values.password = $event"
          />
          <VBtn
            color="success"
            @click="props.handleSubmit"
          >
            Submit
          </VBtn>
          <VBtn
            color="warning"
            @click="props.handleReset"
          >
            Clear
          </VBtn>
        </form>
      </VCard>
    </template>
  </Form>
</template>

<script>
  import { Form } from '@v-forms/core'
  import { required, minLength, maxLength } from 'vuelidate/lib/validators'

  export default {
    name: 'FormExample',
    components: {
      Form,
    },
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
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
      getEmailErrors({ required, minLength, maxLength } = {}) {
        const errors = []

        if (required) errors.push('Email is required')
        if (minLength) errors.push('Email is too short')
        if (maxLength) errors.push('Email is too long')

        return errors
      },
      getPasswordErrors({ required } = {}) {
        const errors = []

        if (required) errors.push('Password is required')

        return errors
      }
    }
  }
</script>

<style scoped>

</style>
