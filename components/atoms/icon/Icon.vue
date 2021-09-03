<template>
  <object :data="`/svg/${dark ? 'dark' : 'light'}/${name}.svg`" class='text-alerts-success'></object>
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
