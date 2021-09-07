<template>
  <div class='alert' v-bind='$props'>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AlertPlate'
}
</script>
