import Icon from './Icon'

export default {
  title: 'Atoms/Icon',
  component: Icon
}

const Template = (args, { argTypes }) => ({
  components: { Icon },
  props: Object.keys(argTypes),
  template: '<Icon v-bind="$props" />',
});

export const Light = Template.bind({})
Light.args = {
  name: 'ico-home',
  dark: false
}

export const Dark = Template.bind({})
Dark.args = {
  name: 'ico-home',
  dark: true
}
Dark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}


