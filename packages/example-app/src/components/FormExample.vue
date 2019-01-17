<template>
  <Form
      @submit="handleSubmit"
      :initial-values="{ email: 'lol', password: '' }"
      :validation-schema="validations"
    >
      <template slot-scope="props">
        <div>
          {{ props }}
           <VCard
    max-width="800"
    class="card"
  >
    <form>
      <VTextField
        v-model="props.values.email"
        label="E-mail"
        required
      />
      <VTextField
        v-model="props.values.password"
        label="Password"
        required
      />
      <VCheckbox
        v-model="checkbox"
        label="Do you agree?"
        required
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
        </div>
      </template>
  </Form>
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
