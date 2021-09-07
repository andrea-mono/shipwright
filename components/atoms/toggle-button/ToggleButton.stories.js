import ToggleButton from './ToggleButton'

export default {
  component: ToggleButton,
  title: 'Atoms/ToggleButton',
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { ToggleButton },
  props: Object.keys(argTypes),
  template: '<ToggleButton v-bind="$props" v-on="$props" />'
})

export const Active = Template.bind({})
Active.args = {
  value: true
}
