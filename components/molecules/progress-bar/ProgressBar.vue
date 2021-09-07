<template>
  <div class='progress'>
    <RangePlate>
      <RangeFill :class='classes' :progress='progress' />
    </RangePlate>
    <label class='progress__label' v-text='message'></label>
  </div>
</template>

<script>
import RangePlate from '../../atoms/progress-bar/RangePlate'
import RangeFill from '../../atoms/progress-bar/RangeFill'
import { computed, ref } from '@vue/composition-api'

export default {
  name: 'ProgressBar',
  components: { RangeFill, RangePlate },
  props: {
    mode: {
      type: String,
      default: 'standard',
    },
    progress: {
      type: Number,
      default: 0,
      required: true,
    }
  },
  setup(props) {
    const states = {
      standard: 'Uploading Files',
      active: 'Uploading Files',
      disabled: '',
      success: 'Success! Your file is ready.',
      warning: 'Your file didn\'t meet the requirements.',
      error: 'There was an error',
    }

    const message = computed(() => states[props.mode])

    const classes = computed(() => {
      return {
        [`progress__fill--${props.mode}`]: true
      }
    })

    return {
      message,
      classes
    }
  }
}
</script>
