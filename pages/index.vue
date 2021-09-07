<template>
  <div>
    <SideNav :user="{ name: 'Naomi Ghetto' }" />
  </div>
</template>

<script>
  import ToggleButton from '~/components/atoms/toggle-button/ToggleButton'
  import { ref } from '@vue/composition-api'
  import SideNav from '~/components/organisms/side-nav/SideNav'

  export default {
    components: { SideNav, ToggleButton },
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
