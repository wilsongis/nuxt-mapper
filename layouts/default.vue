<template>
  <v-app>
    <Toolbar />

    <DrawerLeft />

    <DrawerRight />
    <Content />
    <Footer />
  </v-app>
</template>

<script>
import Toolbar from '~/components/core/Toolbar'
import DrawerLeft from '~/components/core/DrawerLeft'
import DrawerRight from '~/components/core/DrawerRight'
import Content from '~/components/core/Content'
import Footer from '~/components/core/Footer'
export default {
  components: {
    Toolbar,
    DrawerLeft,
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
