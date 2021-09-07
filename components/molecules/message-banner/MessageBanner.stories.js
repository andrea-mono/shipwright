import MessageBanner from './MessageBanner'

export default {
  component: MessageBanner,
  title: 'Molecules/MessageBanner',
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { MessageBanner },
  props: Object.keys(argTypes),
  template: '<MessageBanner v-bind="$props" v-on="$props" @close="onClose" />'
})

export const Basic = Template.bind({})
Basic.args = {
  title: 'The Title of This Message',
  message: 'The message goes here...',
  shown: true,
}

export const wList = Template.bind({})
wList.args = {
  ...Basic.args,
  message: '',
  list: ['item 1', 'item 2'],
}

export const wIcon = Template.bind({})
wIcon.args = {
  ...Basic.args,
  icon: 'ico-profile'
}
