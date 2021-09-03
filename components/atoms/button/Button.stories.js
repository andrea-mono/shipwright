import Button from './Button'

export default {
  component: Button,
  title: 'Atoms/Button'
}

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" v-on="$props" />'
})

export const Primary = Template.bind({})
Primary.args = {
  name: 'Button',
  icon: '',
  inactive: false,
  secondary: false,
  tertiary: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  name: 'Button',
  icon: '',
  inactive: false,
  secondary: true,
  tertiary: false
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  name: 'Button',
  icon: '',
  inactive: false,
  secondary: false,
  tertiary: true
}

export const wIcon = Template.bind({})
wIcon.args = {
  name: 'Button',
  icon: 'ico-print',
  inactive: false,
  secondary: false,
  tertiary: false
}
