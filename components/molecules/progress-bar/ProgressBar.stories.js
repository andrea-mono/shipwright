import ProgressBar from './ProgressBar'

export default {
  component: ProgressBar,
  title: 'Molecules/ProgressBar',
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { ProgressBar },
  props: Object.keys(argTypes),
  template: '<ProgressBar v-bind="$props" v-on="$props" />'
})

export const Standard = Template.bind({})
Standard.args = {
  progress: 45
}
export const Active = Template.bind({})
Active.args = {
  ...Standard.args,
  mode: 'active'
}
export const Disabled = Template.bind({})
Disabled.args = {
  ...Standard.args,
  mode: 'disabled'
}
export const Success = Template.bind({})
Success.args = {
  ...Standard.args,
  mode: 'success',
  progress: 100,
}
export const Warning = Template.bind({})
Warning.args = {
  ...Standard.args,
  mode: 'warning',
  progress: 100,
}
export const Error = Template.bind({})
Error.args = {
  ...Standard.args,
  mode: 'error',
  progress: 100,
}
