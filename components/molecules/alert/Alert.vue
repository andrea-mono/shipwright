<template>
  <transition name='fade'>
    <AlertPlate v-if='shown' :class='classes'>
      <div class='alert__inner'>
        <Icon :name='icon' />
        <AlertMessage :message='message' />
      </div>
      <Icon name='ico-close-sm' />
    </AlertPlate>
  </transition>
</template>

<script>
import AlertPlate from '../../atoms/alert/AlertPlate'
import WarningIcon from '../../../static/svg/light/ico-location.svg?inline'
import Icon from '../../atoms/icon/Icon'
import AlertMessage from '../../atoms/alert/AlertMessage'

import { computed, ref } from '@vue/composition-api'

export default {
  name: 'Alert',
  components: { AlertMessage, Icon, WarningIcon, AlertPlate },
  props: {
    mode: {
      type: String,
      default: 'warning',
    },
    message: {
      type: String,
      required: true,
    },
    shown: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const icon = ref('ico-alert')

    if (props.mode === 'success')
      icon.value = 'ico-check'

    const classes = computed(() => {
      return { [`alert--${props.mode}`]: true }
    })

    return {
      icon,
      classes
    }
  }
}
</script>
