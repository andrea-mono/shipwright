<template>
  <div v-bind='$props' class='progress__fill' :style='{ width }'>
    <span class='progress__fill__percentage' v-text='width'></span>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  name: 'RangeFill',
  props: {
    progress: {
      type: Number,
      default: 0,
      required: true,
    }
  },
  setup(props) {
    const width = computed(() => {
      return props.progress > 100 ? '100%' : `${props.progress}%`
    })

    return {
      width
    }
  }
}
</script>
