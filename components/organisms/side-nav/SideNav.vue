<template>
  <nav class='side-nav'>
    <div class='side-nav__head'>
      <Figure :url='`/svg/${mode}/logo.svg`' size='md' />
      <span class='side-nav__head__label'>menu</span>
    </div>
    <div class='side-nav__items'>
      <SideNavItem name='Dashboard' />
      <SideNavItem name='Inbox' highlighted />
      <SideNavItem name='Loans' />
      <SideNavItem name='Users' />
      <SideNavItem name='Files' />
    </div>
    <div class='side-nav__user'>
      <Figure url='/images/avatar.png' circle size='md' />
      <span class='side-nav__user__label' v-text='user.name'></span>
    </div>
  </nav>
</template>

<script>
import Figure from '../../atoms/figure/Figure'
import SideNavItem from '../../atoms/side-nav-item/SideNavItem'
import { onMounted, ref } from '@vue/composition-api'

export default {
  name: 'SideNav',
  components: { SideNavItem, Figure },
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
  setup() {
    const mode = ref(null)

    onMounted(() => {
      mode.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })

    return {
      mode
    }
  }
}
</script>
