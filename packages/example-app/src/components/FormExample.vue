<template>
  <Form
    :initial-values="{
      email: '',
      password: ''
    }"
    :validation-schema="validations"
    @submit="handleSubmit"
  >
    <template slot-scope="props">
      <div>
        <VCard
          max-width="800"
          min-width="600"
          class="card"
        >
          <form>
            <VTextField
              v-model.lazy="props.values.email"
              label="E-mail"
            />
            <ErrorMsg
              v-if="props.errors.email && props.errors.email.required"
              text="Email is required"
            />
            <ErrorMsg
              v-if="props.errors.email && props.errors.email.minLength"
              text="Email is too short"
            />
            <ErrorMsg
              v-if="props.errors.email && props.errors.email.maxLength"
              text="Email is too long"
            />
            <VTextField
              v-model.lazy="props.values.password"
              type="password"
              label="Password"
            />
            <ErrorMsg
              v-if="props.errors.password && props.errors.password.required"
              text="Password is required"
            />
            <VBtn
              color="success"
              @click="props.handleSubmit"
            >
              submit
            </VBtn>
            <VBtn
              color="warning"
              @click="props.handleReset"
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
  import ErrorMsg from "./ErrorMsg";

  export default {
    name: 'FormExample',
    components: {
      Form,
      ErrorMsg,
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
  .card {
    margin: 30px;
    padding: 20px;
    flex: 1;
  }
</style>
