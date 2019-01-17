import Vue from 'vue'
import { validationMixin } from 'vuelidate'
import { clone } from './clone'

export const Form = Vue.extend({
  name: 'Form',
  mixins: [validationMixin],
  props: {
    initialValues: {
      type: Object,
      default: () => ({})
    },
    onSubmit: {
      type: Function,
      default(values) {
        this.$emit('submit', values, this.getActions())
      }
    },
    onReset: {
      type: Function,
      default() {
        this.$emit('reset')
      }
    },
    tag: {
      type: String,
      default: 'form'
    },
    validationSchema: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isSubmitting: false,
      values: this.initialValues ? clone(this.initialValues) : {}
    }
  },
  computed: {
    errors() {
      const errors = {}
      Object.keys(this.initialValues)
        .forEach(key => this.$v.values[key].$error && (errors[key] = this.getErrors(this.$v.values[key])))
      return errors
    }
  },
  methods: {
    getErrors($v) {
      return Object.keys($v.$params).reduce((errors, error) => {
        if (!$v[error]) {
          errors[error] = true
        }
        return errors
      }, {})
    },
    setSubmitting(value) {
      this.isSubmitting = value
    },
    getActions() {
      return {
        validate: this.validate,
        setSubmitting: this.setSubmitting
      }
    },
    getValues() {
      return Object.entries(this.$v.values)
        .filter(([key]) => !/^\$/.test(key))
        .reduce((values, [key, value]) => {
          Object.defineProperty(values, key, {
            get() {
              return value.$model
            },
            set(v) {
              value.$model = v
            }
          })
          return values
        }, {})
    },
    getSlotProps() {
      const values = this.getValues()

      return {
        errors: this.errors,
        ...this.$data,
        ...this.getActions(),
        handleSubmit: () => {
          if (process.env.NODE_ENV !== 'production') {
            console.log('FORM_HANDLE_SUBMIT')
          }
          return this.submit()
        },
        handleReset: () => {
          if (process.env.NODE_ENV !== 'production') {
            console.log('FORM_HANDLE_RESET')
          }
          return this.reset()
        },
        values,
      }
    },
    async submit() {
      this.setSubmitting(true)
      try {
        const errors = await this.validate()
        const isValid = Object.keys(errors).length === 0
        if (isValid) {
          this.executeSubmit()
        }
      } catch (err) {
        console.warn(err)
      }
    },
    async reset() {
      this.values = this.initialValues ? clone(this.initialValues) : {}
      this.$v.$reset()
    },
    async validate() {
      return this.errors
    },
    executeSubmit() {
      this.onSubmit(clone(this.values))
    }
  },
  validations() {
    const values = {}
    Object.keys(this.initialValues).forEach(key => values[key] = {})
    Object.entries(this.validationSchema).forEach(([key, value]) => values[key] = value)
    return { values }
  },
  render(h) {
    if (this.$scopedSlots.default) {
      const createSlot = this.$scopedSlots.default
      const slotProps = this.getSlotProps()
      const node = createSlot(slotProps)

      if (Array.isArray(node)) {
        if (node.length === 1) {
          return node[0]
        } else if (node.length > 1) {
          if (process.env.NODE_ENV !== 'production') {
            console.warn(`<Form> component default scoped slot children were implicitly wrapped with <${this.tag}> tag`)
          }
          return h(this.tag, node)
        }
      }

      return node
    } else if (this.$slots.default.length === 1) {
      return this.$slots.default[0]
    }

    if (process.env.NODE_ENV !== 'production') {
      console.warn(`<Form> component default slot children were implicitly wrapped with <${this.tag}> tag`)
    }
    return h(this.tag, this.$slots.default)
  }
})

export default Form
