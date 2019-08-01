<template>
  <v-app>
    <v-content>
      <Toolbar />
      <v-container fluid><Map /> </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Map from '~/components/gis/Map.vue'
import Toolbar from '~/components/tools/Toolbar.vue'
export default {
  title: 'CMC Map Viewer',
  layout: 'default',
  components: {
    Map,
    Toolbar
  }
}
</script>

<style></style>
