<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid><Map /> </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Map from '~/components/gis/Map.vue'
export default {
  title: 'CMC Map Viewer',
  components: {
    Map
  }
}
</script>

<style></style>
