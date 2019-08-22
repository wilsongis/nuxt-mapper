<template>
  <v-navigation-drawer v-model="drawerRight" app clipped right width="350">
    <v-list flat>
      <v-list-group
        v-for="(heading, head) in defaultLayers"
        v-show="defaultLayers[head].heading !== 'Zoom'"
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

        <v-list-item-group v-model="settings">
          <v-list-item
            v-for="(layers, layer) in defaultLayers[head].layers"
            :key="defaultLayers[head].layers[layer].name"
            four-line
          >
            <v-card outlined tile width="350">
              <v-row no-gutters>
                <v-col cols="2">
                  <v-list-item-icon>
                    <v-icon
                      v-if="defaultLayers[head].layers[layer].icon === 'Point'"
                      id="icon"
                      >mdi-adjust</v-icon
                    >
                    <v-icon
                      v-else-if="
                        defaultLayers[head].layers[layer].icon === 'Line'
                      "
                      id="icon"
                      >timeline</v-icon
                    >
                    <v-icon
                      v-else-if="
                        defaultLayers[head].layers[layer].icon === 'Polygon'
                      "
                      id="icon"
                      >border_all</v-icon
                    >
                    <v-icon
                      v-else-if="
                        defaultLayers[head].layers[layer].icon === 'Image'
                      "
                      id="icon"
                      >satellite</v-icon
                    >
                  </v-list-item-icon>
                </v-col>
                <v-col cols="6">
                  <v-switch
                    :key="defaultLayers[head].layers[layer].name"
                    :v-model="`switch-${layer}`"
                    color="primary"
                    :label="defaultLayers[head].layers[layer].name"
                    :value="true"
                    :input-value="defaultLayers[head].layers[layer].visible"
                    @change="toggle(head, layer, $event !== null, $event)"
                  ></v-switch>
                </v-col>
                <v-col cols="4">
                  <v-checkbox
                    v-if="
                      defaultLayers[head].layers[layer].labels !== undefined
                    "
                    :key="defaultLayers[head].layers[layer].name"
                    v-tooltip="'Toogle Labels'"
                    :v-model="`check-${layer}`"
                    color="primary"
                    append-icon="mdi-label"
                    @change="layerLabel(head, layer, $event !== null, $event)"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-slider
                  v-if="defaultLayers[head].layers[layer].transparency === true"
                  :v-model="`slide-${layer}`"
                  thumb-label
                  append-icon="layers"
                  prepend-icon="mdi-layers-outline"
                  value="100"
                  :max="max"
                  :min="min"
                  @change="transparency(head, layer, $event !== null, $event)"
                ></v-slider>
              </v-row>
            </v-card>
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
    checkbox: true,
    checkIcon: 'mdi-label',
    panel: [],
    settings: [],
    items: 8,
    list: {
      0: false,
      1: false,
      2: false
    },
    max: 100,
    min: 0
  }),
  computed: {
    ...mapGetters({
      drawerRight: 'app/getDrawerRight',
      defaultLayers: 'gis/getDefaultLayers',
      layerToggle: 'gis/getLayerToggle'
    })
  },
  methods: {
    layerLabel(head, layer, value, event) {
      const layerName = this.defaultLayers[head].layers[layer].name
      const layerLabel = this.defaultLayers[head].layers[layer].labels
      this.$store.commit('gis/setLayerLabel', [layerName, layerLabel, event])
    },
    complete() {},
    ...mapActions({
      setDrawerRight: 'app/setDrawerRight'
    }),
    toggle(head, layer, value, event) {
      this.$store.commit('gis/setLayerVisible', { head, layer, value })
      this.$store.commit(
        'gis/setLayerToggle',
        this.defaultLayers[head].layers[layer].name
      )
    },
    transparency(head, layer, value, event) {
      const layerName = this.defaultLayers[head].layers[layer].name
      this.$store.commit('gis/setLayerTransparency', [layerName, event])
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
<style>
.v-list-item__icon {
  margin: 0px 0;
}

#labelcheck {
  padding-left: 50px;
  margin-top: 0px;
}
.v-input--selection-controls {
  margin-top: 0px;
  padding-top: 4px;
}
</style>
