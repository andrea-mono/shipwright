<template>
  <transition name='fade'>
    <MessageBannerPlate v-if='shown'>
      <div v-if='icon' class='message__icon'>
        <Icon :name='icon' />
      </div>
      <div class='message__inner'>
        <div class='message__head'>
          <MessageTitle :title='title' />
          <Button icon='ico-close-sm' tertiary circle @onClick='close' />
        </div>
        <div class='message__content'>
          <MessageText v-if='message' :text='message' />
          <MessageList v-else />
        </div>
      </div>
    </MessageBannerPlate>
  </transition>
</template>

<script>
import MessageBannerPlate from '../../atoms/message-banner/MessageBannerPlate'
import MessageTitle from '../../atoms/message-banner/MessageTitle'
import MessageText from '../../atoms/message-banner/MessageText'
import MessageList from '../../atoms/message-banner/MessageList'
import Button from '../../atoms/button/Button'
import Icon from '../../atoms/icon/Icon'

import { ref, provide } from '@vue/composition-api'

export default {
  name: 'MessageBanner',
  components: { Icon, MessageList, Button, MessageText, MessageTitle, MessageBannerPlate },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
    list: {
      type: Array,
      required: false,
    },
    shown: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {
    const close = () => emit('close')

    provide('list', props.list)

    return {
      close
    }
  }
}
</script>
