<template>
  <figure class='figure' :class='classes'>
    <img :src='url' class='figure__img'>
  </figure>
</template>

<script>
import '../../../assets/css/layers/components/figure.scss'

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
  computed: {
    classes() {
      return {
        'figure--circle': this.circle,
        'figure--rounded': this.rounded,
        [`figure--${this.size}`]: true,
      }
    }
  }
}
</script>
