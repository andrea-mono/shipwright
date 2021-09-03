<template>
  <object :data="`/svg/${dark ? 'dark' : 'light'}/${name}.svg`" width='22px' class='pointer-events-none'></object>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
