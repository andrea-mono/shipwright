<template>
  <div class='toggle' :class="{'toggle--active': value }" @click='handleClick'>
    <div class='toggle__circle'></div>
  </div>
</template>

<script>
export default {
  name: 'ToggleButton',
  props: {
    value: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {
    const handleClick = () => emit('onClick', !props.value)

    return {
      handleClick
    }
  }
}
</script>

