<template>
  <p v-text='message'></p>
</template>

<script>
export default {
  name: 'AlertMessage',
  props: {
    message: {
      type: String,
      required: true,
    }
  }
}
</script>
