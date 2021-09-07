<template>
  <figure class='figure' :class='classes'>
    <img :src='url' class='figure__img'>
  </figure>
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  name: 'Figure',
  props: {
    url: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'lg'
    },
    circle: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const classes = computed(() => {
      return {
        'figure--circle': props.circle,
        'figure--rounded': props.rounded,
        [`figure--${props.size}`]: true,
      }
    })

    return {
      classes
    }
  }
}
</script>
