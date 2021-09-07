<template>
  <button type='button' class='btn' :class='classes' :disabled='inactive' @click='handleClick'>
    <Icon v-if='icon' :name='icon' :dark='!secondary && !tertiary' />
    <span v-if='name' v-text='name'></span>
  </button>
</template>

<script>
import '../../../assets/scss/components/_components.scss'
import '../../../assets/scss/objects/_objects.scss'
import Icon from '../icon/Icon'
import { computed } from '@vue/composition-api'

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
  setup(props, {emit}) {
    const classes = computed(() => {
      return {
        'btn--secondary': props.secondary && !props.tertiary,
        'btn--tertiary': !props.secondary && props.tertiary,
        'btn--icon': !props.name,
        'btn--rounded': !props.name && props.circle,
        'btn--scalable': props.scalable,
      }
    })

    const handleClick = () => emit('onClick')

    return {
      classes,
      handleClick
    }
  },
}
</script>
