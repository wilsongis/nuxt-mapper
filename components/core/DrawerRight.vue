<template>
  <v-navigation-drawer v-model="drawerRight" app clipped right width="350">
    <v-list>
      <v-list-group
        v-for="(heading, head) in defaultLayers"
        :key="defaultLayers[head].heading"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title
              v-text="defaultLayers[head].heading"
            ></v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item-group v-model="settings" multiple>
          <v-list-item
            v-for="(layers, layer) in defaultLayers[head].layers"
            :key="defaultLayers[head].layers[layer].name"
            @click="layerClick"
          >
            <v-switch
              :key="defaultLayers[head].layers[layer].name"
              color="primary"
              :label="defaultLayers[head].layers[layer].name"
              :value="true"
              :input-value="defaultLayers[head].layers[layer].visible"
              @change="toggle(head, layer, $event !== null, $event)"
            ></v-switch>

            <v-list-item-content> </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data: () => ({
    visible: false,
    expanded: false,
    panel: [],
    settings: [],
    items: 8,
    list: {
      0: false,
      1: false,
      2: false
    }
  }),
  computed: {
    ...mapGetters({
      drawerRight: 'app/getDrawerRight',
      defaultLayers: 'gis/getDefaultLayers',
      layerToggle: 'gis/getLayerToggle'
    })
  },
  methods: {
    layerClick() {},
    complete() {},
    ...mapActions({
      setDrawerRight: 'app/setDrawerRight'
    }),
    toggle(head, layer, value, event) {
      // debugger
      this.$store.commit('gis/setLayerVisible', { head, layer, value })
      this.$store.commit(
        'gis/setLayerToggle',
        this.defaultLayers[head].layers[layer].name
      )
    },
    ...mapMutations({}),
    // Create an array the length of our items
    // with all values as true
    expand() {
      if (this.expanded) {
        this.panel = []
        this.expanded = !this.expanded
      } else {
        this.panel = [...Array(this.items).keys()].map(_ => true)
        this.expanded = !this.expanded
      }
    }
  }
}
</script>
<style></style>
