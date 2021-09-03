import Chip from './Chip'

export default {
  component: Chip,
  title: 'Atoms/Chip'
}

const Template = (args, { argTypes }) => ({
  components: { Chip },
  props: Object.keys(argTypes),
  template: '<Chip v-bind="$props" v-on="$props" />'
})

export const NoIcon = Template.bind({})
NoIcon.args = {
  title: 'Title',
}

export const wIcon = Template.bind({})
wIcon.args = {
  ...NoIcon.args,
  icon: 'ico-check',
}
