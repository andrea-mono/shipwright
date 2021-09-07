import SideNavItem from './SideNavItem'

export default {
  component: SideNavItem,
  title: 'Atoms/SideNavItem'
}

const Template = (args, { argTypes }) => ({
  components: { SideNavItem },
  props: Object.keys(argTypes),
  template: '<SideNavItem v-bind="$props" v-on="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  name: 'Default',
  icon: '',
  highlighted: false,
  disabled: false,
}

export const Active = Template.bind({})
Active.args = {
  name: 'Active',
  icon: '',
  highlighted: true,
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'Disabled',
  icon: '',
  highlighted: false,
  disabled: true,
}

export const ActiveWithPlate = Template.bind({})
ActiveWithPlate.args = {
  name: 'Active with plate',
  icon: '',
  highlighted: true,
  disabled: false,
  active: true,
}

export const wIcon = Template.bind({})
wIcon.args = {
  name: 'With icon',
  icon: 'twitter',
  highlighted: false,
  disabled: false,
  active: false,
}

export const ActiveWithIcon = Template.bind({})
ActiveWithIcon.args = {
  name: 'Active with icon',
  icon: 'twitter',
  highlighted: true,
  disabled: false,
  active: true,
}

