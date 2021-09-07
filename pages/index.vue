<template>
  <div>
    <ToggleButton v-model='value' @onClick='toggle' />
  </div>
</template>

<script>
  import ToggleButton from '~/components/atoms/toggle-button/ToggleButton'
  import { ref } from '@vue/composition-api'

  export default {
    components: { ToggleButton },
    setup() {
      const value = ref(false)
      const toggle = () => value.value = !value.value

      return {
        value,
        toggle,
      }
    }
  }
</script>
