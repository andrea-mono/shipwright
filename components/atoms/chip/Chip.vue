<template>
  <div class='chip'>
    <Icon v-if='icon' :name='icon' dark />
    <span v-text='title'></span>
  </div>
</template>

<script>
import '../../../assets/css/layers/components/chip.scss'
import Icon from '../icon/Icon'

export default {
  name: 'Chip',
  components: {Icon},
  props: {
    icon: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
