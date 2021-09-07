<template>
  <h1 class='message__head__title' v-text='title'></h1>
</template>

<script>
export default {
  name: 'MessageTitle',
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>
