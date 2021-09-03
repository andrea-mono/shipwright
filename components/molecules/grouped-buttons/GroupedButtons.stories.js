import GroupedButtons from './GroupedButtons'

export default {
  component: GroupedButtons,
  title: 'molecules/GroupedButtons'
}

const Template = (args, { argTypes }) => ({
  components: { GroupedButtons },
  props: Object.keys(argTypes),
  template: '<GroupedButtons v-bind="$props" v-on="$props" />'
})

export const TwoButtons = Template.bind({})
TwoButtons.args = {
  buttons: [
    {
      id: 1,
      name: 'left',
    },
    {
      id: 2,
      name: 'center',
    },
  ]
}

export const ThreeButtons = Template.bind({})
ThreeButtons.args = {
  buttons: [
    {
      id: 1,
      name: 'left',
    },
    {
      id: 2,
      name: 'center',
    },
    {
      id: 3,
      name: 'right',
    },
  ]
}

export const MoreButtons = Template.bind({})
MoreButtons.args = {
  buttons: [
    {
      id: 1,
      name: 'left',
    },
    {
      id: 2,
      name: 'center',
    },
    {
      id: 3,
      name: 'center',
    },
    {
      id: 4,
      name: 'center',
    },
    {
      id: 5,
      name: 'right',
    },
  ]
}


