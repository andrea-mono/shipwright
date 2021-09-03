import Button from './Button'

export default {
  component: Button,
  title: 'Atoms/Button',
}

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" v-on="$props" @onClick="handleClick" />'
})

export const Primary = Template.bind({})
Primary.args = {
  name: 'Button',
  icon: '',
  inactive: false,
  secondary: false,
  tertiary: false,
  circle: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  secondary: true,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  ...Primary.args,
  tertiary: true,
}

export const wIcon = Template.bind({})
wIcon.args = {
  ...Primary.args,
  icon: 'ico-print',
}

export const justIcon = Template.bind({})
justIcon.args = {
  ...wIcon.args,
  name: '',
}

export const justIconRounded = Template.bind({})
justIconRounded.args = {
  ...justIcon.args,
  circle: true,
}
