<template>
  <div role='button' class='item' :class="{ 'item--disabled': disabled, 'item--active': active && highlighted && !disabled, 'item--active--blue': icon && active }">
    <Icon v-if='icon' :name='icon' />
    <span v-if='highlighted && !icon && !disabled' class='item__highlight'></span>
    <span v-text='name'></span>
  </div>
</template>

<script>
import Icon from '../../atoms/icon/Icon'

export default {
  name: 'SideNavItem',
  components: { Icon },
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    highlighted: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
