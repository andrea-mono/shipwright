<template>
  <div class='group'>
    <Button v-for='button in buttons' :key='button.id' :name='button.name' :tertiary='selected !== button.id' scalable @onClick='activeBtn(button.id)' />
  </div>
</template>

<script>
import Button from '../../atoms/button/Button'

export default {
  name: 'GroupedButtons',
  components: {Button},
  props: {
    buttons: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: 1
    }
  },
  methods: {
    activeBtn(id) {
      this.selected = id
    }
  }
}
</script>
