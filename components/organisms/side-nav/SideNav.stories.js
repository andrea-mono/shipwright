import SideNav from './SideNav'

export default {
  component: SideNav,
  title: 'Organisms/SideNav'
}

const Template = (args, { argTypes }) => ({
  components: { SideNav },
  props: Object.keys(argTypes),
  template: '<SideNav v-bind="$props" v-on="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  user: {
    name: 'Angelina Campell',
  }
}
