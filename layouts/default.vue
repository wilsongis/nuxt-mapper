<template>
  <v-app>
    <Toolbar />

    <Drawer />

    <DrawerRight />
    <Content />
    <Footer />
  </v-app>
</template>

<script>
import Toolbar from '~/components/core/Toolbar'
import Drawer from '~/components/core/Drawer'
import DrawerRight from '~/components/core/DrawerRight'
import Content from '~/components/core/Content'
import Footer from '~/components/core/Footer'
export default {
  components: {
    Toolbar,
    Drawer,
    DrawerRight,
    Content,
    Footer
  }
}
</script>

<style lang="scss">
/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
