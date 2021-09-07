<template>
  <object :data="`/svg/${dark ? 'dark' : 'light'}/${name}.svg`" width='22px' class='pointer-events-none'></object>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: false
    },
  },
  setup() {
    const dark = ref(null)

    dark.value = window.matchMedia('(prefers-color-scheme: dark)').matches

    return {
      dark
    }
  }
}
</script>
