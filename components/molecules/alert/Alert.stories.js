import Alert from './Alert'

export default {
  component: Alert,
  title: 'Molecules/Alert'
}

const Template = (args, { argTypes }) => ({
  components: { Alert },
  props: Object.keys(argTypes),
  template: '<Alert v-bind="$props" v-on="$props" />'
})

export const Warning = Template.bind({})
Warning.args = {
  message: 'This is a warning alert',
  shown: true,
}

export const Danger = Template.bind({})
Danger.args = {
  message: 'This is a danger alert',
  mode: 'danger',
  shown: true,
}

export const Success = Template.bind({})
Success.args = {
  message: 'This is a success alert',
  mode: 'success',
  shown: true,
}
