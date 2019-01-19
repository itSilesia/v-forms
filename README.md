# v-forms

<p align="center">
<b>v-forms</b>, easy and simple library which will help handle your forms.
</p>

Vue.js gives us a lot of handy features which make our forms easy to implement. But as your app grows you can start noticing that each of your forms share some common parts, like submitting state or validation. This is where **v-forms** comes in. With its easy API made with use of awesome [Vuelidate](https://github.com/monterail/vuelidate) you can bring your forms to the next level right away.

## Install

Install with [npm](https://www.npmjs.com/):

```bash
npm install @v-forms/core
```

Install with [yarn](https://yarnpkg.com/):

```bash
yarn add @v-forms/core
```

## Usage

You just need to import `Form` component from `@v-forms/core` and you are good to go:

```javascript
import { Form } from "@v-forms/core"

export default {
  name: 'FormExample',
  components: {
    Form
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSuccessSubmit(values, actions) {

      // Here handle form submit and then call setSubmitting()

      actions.setSubmitting(false)
    }
  }
}
```

Then in your template:

```html
<template>
  <Form
    @submit="handleSuccessSubmit"
    :initial-values="form"
  >
    <div slot-scope="props">
      <input v-model="props.values.email" />
      <input v-model="props.values.password" />

      <button @click="props.handleSubmit">
        Submit
      </button>
    </div>
  </Form>
</template>
```

More example how to use it you could find [below](#examples).

## Examples



## About

#### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

## Authors

<table border="0">
  <tr>
    <td>
      <a href="https://github.com/szymonjanota" style="color: white">
        <img src="https://github.com/szymonjanota.png?s=150" width="150"/>
      </a>
    </td>
    <td>
      <p><strong>Szymon Janota</strong></p>
    </td>
    <td>
      <a href="https://github.com/MarcinLesek" style="color: white">
        <img src="https://github.com/MarcinLesek.png?s=150" width="150"/>
      </a>
    </td>
    <td>
      <p><strong>Marcin Łesek</strong></p>
      <p><strong>twitter: </strong><a href="https://twitter.com/marcinlesek">@marcinlesek</a></p>
    </td>
  </tr>
</table>

## Contributors

Join them!

## License

v-forms is MIT licensed.
