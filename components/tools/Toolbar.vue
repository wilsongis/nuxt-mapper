<template>
  <div id="toolbar">
    <v-toolbar dense floating>
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>my_location</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <Toc />
    </v-toolbar>
  </div>
</template>
<script>
import Toc from '~/components/tools/Toc.vue'
export default {
  components: {
    Toc
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['toolbar']
}
</script>
