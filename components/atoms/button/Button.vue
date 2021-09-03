<template>
  <button type='button' class='btn' :class='classes' :disabled='inactive' @click='handleClick'>
    <Icon v-if='icon' :name='icon' :dark='!secondary && !tertiary' />
    <span v-if='name' v-text='name'></span>
  </button>
</template>

<script>
import '../../../assets/css/layers/components/components.scss'
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
    },
    circle: {
      type: Boolean,
      default: false
    },
    scalable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
          'btn--secondary': this.secondary && !this.tertiary,
          'btn--tertiary': !this.secondary && this.tertiary,
          'btn--icon': !this.name,
          'btn--rounded': !this.name && this.circle,
          'btn--scalable': this.scalable,
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('onClick')
    }
  }
}
</script>
