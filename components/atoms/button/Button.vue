<template>
  <button type='button' :class='classes' :disabled='inactive'>
    <Icon v-if='icon' :name='icon' :dark='!secondary && !tertiary' />
    <span v-text='name'></span>
  </button>
</template>

<script>
import '../../../assets/css/layers/components/button.scss'
import Icon from '../icon/Icon'

export default {
  name: 'Button.vue',
  components: { Icon },
  props: {
    name: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    tertiary: {
      type: Boolean,
      default: false
    },
    inactive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return { 'button--secondary': this.secondary && !this.tertiary, 'button--tertiary': !this.secondary && this.tertiary }
    }
  }
}
</script>
