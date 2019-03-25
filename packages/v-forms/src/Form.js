import Vue from 'vue'
import {clone} from './clone'

export const Form = Vue.extend({
  name: 'Form',
  props: {
    initialValues: {
      type: Object,
      default: null
    },
    onSubmit: {
      type: Function,
      default(values) {
        this.$emit('submit', values)
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
    }
  },
  data() {
    return {
      isSubmitting: false,
      values: this.initialValues ? clone(this.initialValues) : {}
    }
  },
  methods: {
    setSubmitting(value) {
      this.isSubmitting = value
    },
    getActions() {
      return {
        validate: this.validate,
        setSubmitting: this.setSubmitting,
        handleReset: this.reset,
      }
    },
    getSlotProps() {
      return {
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
    },
    async validate() {
      return {}
    },
    executeSubmit() {
      this.onSubmit(clone(this.values))
    }
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
