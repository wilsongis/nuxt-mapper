<template>
  <div>
    <div class="mapouter">
      <div id="info" class="esri-widget">
        <toolbar :toolbar="toolbar"></toolbar>
      </div>
      <div id="viewDiv"></div>
    </div>
  </div>
</template>

<script>
import { loadModules, loadCss } from 'esri-loader'
import { mapState, mapGetters, mapMutations } from 'vuex'
import Toolbar from '~/components/tools/Toolbar.vue'
export default {
  layout: 'dashboard',
  components: {
    Toolbar
  },
  computed: {
    ...mapState({
      gisLayers: state => state.gis.defaultLayers
    }),
    ...mapGetters({
      defaultExtent: 'gis/defaultExtent'
    })
  },
  mounted() {
    window.dojoConfig = {
      packages: [
        {
          name: 'vue',
          location: 'https://unpkg.com/vue/dist/',
          main: 'vue'
        }
      ]
    }
    loadModules([
      'esri/Map',
      'esri/views/MapView',
      'esri/WebMap',
      'esri/layers/TileLayer',
      'esri/layers/FeatureLayer',
      'esri/core/watchUtils',
      'vue'
    ])
      .then(
        ([Map, MapView, WebMap, TileLayer, FeatureLayer, watchUtils, Vue]) => {
          loadCss()
          const self = this
          const defaultExtent = self.defaultExtent
          const map = new Map({})
          // eslint-disable-next-line no-unused-vars
          const view = new MapView({
            container: 'viewDiv', // Reference to the scene div created in step 5
            map: map, // Reference to the map object created before the scene
            zoom: defaultExtent.zoom, // Sets zoom level based on level of detail (LOD)
            center: defaultExtent.center, // Sets center point of view using longitude,latitude
            extent: {
              xmin: defaultExtent.xmin,
              ymin: defaultExtent.ymin,
              xmax: defaultExtent.xmax,
              ymax: defaultExtent.ymax,
              spatialReference: defaultExtent.spatialReference
            }
          })
          const mapLayer = new TileLayer({
            url:
              'http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Basemaps_2274/MapServer',
            // This property can be used to uniquely identify the layer
            id: 'Streets',
            visible: true,
            spatialReference: 102736
          })
          map.add(mapLayer)
          // ***  Start Toolbar *** Makes the Toolbar floating over the map
          view.when(function() {
            const info = new Vue({
              el: '#info',
              data: {
                toolbar: view.toolbar
              }
            })
            view.ui.add(info.$el, 'top-right')
          }) // ***  End Toolbar ***
        } // END Map
      )
      .catch(err => {
        // handle any errors
        // eslint-disable-next-line no-console
        console.error(err)
      })
  },
  methods: {
    ...mapMutations({})
  }
}
</script>

<style>
.mapouter {
  text-align: right;
  height: 100%;
  width: 100%;
  position: absolute;
}
#viewDiv {
  overflow: hidden;
  background: none !important;
  height: 100%;
  width: 100%;
}
</style>
