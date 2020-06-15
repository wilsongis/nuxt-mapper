<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid><Map /> </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Map from '~/components/gis/Map.vue'
export default {
  title: 'CMC Map Viewer',
  layout: 'default',

  components: {
    Map
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    source: String
  },
  data: () => ({
    drawerLeft: false,
    drawerRight: false,
    right: false,
    left: false
  })
}
</script>
<style>
.container {
  padding-top: 0px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 0px;
}
</style>
