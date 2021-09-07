<template>
  <p class='message__content__text' v-text='text'></p>
</template>

<script>
export default {
  name: 'MessageText',
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>
