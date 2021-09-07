<template>
  <ul class='message__content__list'>
    <li v-for='(item, index) in list' :key='index' v-text='item'></li>
  </ul>
</template>

<script>
import { inject } from '@vue/composition-api'

export default {
  name: 'MessageList',
  setup() {
    const list = inject('list')

    return {
      list
    }
  }
}
</script>
