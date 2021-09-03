import Figure from './Figure'

export default {
  component: Figure,
  title: 'Atoms/Avatar Or Logo',
  argTypes: {
    url: {
      options: ['/images/avatar.png', '/svg/logo.svg'],
      control: { type: 'select' }
    },
    size: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'select' }
    },
  }
}

const Template = (args, { argTypes }) => ({
  components: { Figure },
  props: Object.keys(argTypes),
  template: '<Figure v-bind="$props" v-on="$props" />'
})

export const Circle = Template.bind({})
Circle.args = {
  url: '/images/avatar.png',
  circle: true,
  rounded: false,
  size: 'lg',
}

export const Rounded = Template.bind({})
Rounded.args = {
  url: '/images/avatar.png',
  circle: false,
  rounded: true,
  size: 'lg',
}

export const Square = Template.bind({})
Square.args = {
  url: '/images/avatar.png',
  circle: false,
  rounded: false,
  size: 'lg',
}

export const Small = Template.bind({})
Small.args = {
  ...Circle.args,
  size: 'sm',
}

export const Medium = Template.bind({})
Medium.args = {
  ...Circle.args,
  size: 'md',
}

export const Large = Template.bind({})
Large.args = {
  ...Circle.args,
}

export const Logo = Template.bind({})
Logo.args = {
  ...Circle.args,
  url: '/svg/logo.svg',
}
