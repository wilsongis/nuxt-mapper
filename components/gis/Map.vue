<template>
  <div>
    <div class="mapouter">
      <div id="info" class="esri-widget"></div>
      <div id="viewDiv"></div>
    </div>
  </div>
</template>

<script>
import { loadModules, loadCss } from 'esri-loader'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      gisLayers: state => state.gis.defaultLayers
    }),
    ...mapGetters({
      defaultExtent: 'gis/defaultExtent',
      parcelPopup: 'gis/getParcelPopup',
      defaultLayers: 'gis/getDefaultLayers',
      searchInfo: 'gis/getSearchInfo'
    })
  },
  mounted() {
    loadModules([
      'esri/Map',
      'esri/views/MapView',
      'esri/WebMap',
      'esri/layers/TileLayer',
      'esri/layers/FeatureLayer',
      'esri/layers/GraphicsLayer',
      'esri/renderers/smartMapping/creators/opacity',

      'esri/Graphic'
    ])
      .then(
        ([
          Map,
          MapView,
          WebMap,
          TileLayer,
          FeatureLayer,
          GraphicsLayer,
          opacityVariableCreator,
          Graphic
        ]) => {
          loadCss()
          const self = this
          let head
          let layer
          let highlight
          const sketchLayer = new GraphicsLayer()
          const defaultExtent = self.defaultExtent
          const parcelPopup = this.parcelPopup
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

          // MAP FUNCTIONS
          // Popup Builder
          const getPopup = function(layerName) {
            switch (layerName) {
              case 'Parcels':
                return parcelPopup
              default:
                return null
            }
          } // End of Popup Builder
          // Layer Loading Function
          const buildLayerList = function(workingLayers) {
            const mapList = []
            let mapLayer
            mapList.push(sketchLayer)
            for (head = 0; head < 9; head++) {
              for (
                layer = 0;
                layer < workingLayers[head].layers.length;
                layer++
              ) {
                if (workingLayers[head].heading === 'Base Maps') {
                  mapLayer = new TileLayer({
                    url: workingLayers[head].layers[layer].url,
                    // This property can be used to uniquely identify the layer
                    id: workingLayers[head].layers[layer].name,
                    visible: workingLayers[head].layers[layer].visible,
                    spatialReference: 102736
                  })
                } else {
                  const template = getPopup(
                    workingLayers[head].layers[layer].name
                  )
                  mapLayer = new FeatureLayer({
                    url: workingLayers[head].layers[layer].url,
                    // This property can be used to uniquely identify the layer
                    id: workingLayers[head].layers[layer].name,
                    visible: workingLayers[head].layers[layer].visible,
                    spatialReference: 102736,
                    popupTemplate: template
                  })
                }
                mapList.push(mapLayer)
              }
            }
            // First Layer into list is at bottom. mapList needs to be reversed
            map.layers.addMany(mapList.reverse())
            return mapList
          } // End BuildLayerList

          view.on('click', function(event) {
            // create graphic for mouse point click
            const pointGraphic = new Graphic({
              symbol: {
                type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
                color: [0, 0, 139],
                outline: {
                  color: [255, 255, 255],
                  width: 1.5
                }
              }
            })
            view.graphics.remove(pointGraphic)

            view.graphics.removeAll()
            const point = view.toMap(event)
            pointGraphic.geometry = point
            self.$store.commit('nearme/setNearmePoint', point)
            view.graphics.add(pointGraphic)
          })

          // Call Layer Loading on initial startup
          const mapLayers = buildLayerList(this.defaultLayers)

          const zoom2Feature = function(layerInfo) {
            // eslint-disable-next-line no-unused-vars
            let i, layerUrl
            let searchLayer = null
            const layerId = layerInfo[0]
            const objectId = layerInfo[1]
            for (i = 0; i < mapLayers.length; i++) {
              if (mapLayers[i].id === layerId) {
                searchLayer = mapLayers[i]
                layerUrl = mapLayers[i].url
              }
            }
            view.whenLayerView(searchLayer).then(function(layerView) {
              const query = searchLayer.createQuery()
              query.where = `objectid=${objectId}`
              searchLayer.queryFeatures(query).then(function(result) {
                if (highlight) {
                  highlight.remove()
                }
                highlight = layerView.highlight(result.features)
                const infoExtent = result.features[0].geometry.extent
                  .clone()
                  .expand(2)
                view.goTo(infoExtent)
              })
            })
          } // End zoom2Feature

          const layerTransparency = function(layerInfo) {
            // eslint-disable-next-line no-unused-vars
            const layerName = layerInfo[0]
            const transparency = layerInfo[1]
            let i, layer
            for (i = 0; i < mapLayers.length; i++) {
              if (mapLayers[i].id === layerName) {
                layer = mapLayers[i]
              }
            }

            const params = {
              layer: layer,
              valueExpression: transparency,
              view: view
            }

            // when the promise resolves, apply the visual variable to the renderer
            opacityVariableCreator
              .createVisualVariable(params)
              .then(function(response) {
                const renderer = layer.renderer.clone()
                renderer.visualVariables = [response.visualVariable]
                layer.renderer = renderer
              })
          } // End layerTransparency

          // Function to toggle map Labels on/off
          const labelLayer = function(layerInfo) {
            let i
            const layerName = layerInfo[0]
            const label = layerInfo[1]
            const labelClass = {
              // autocasts as new LabelClass()
              symbol: {
                type: 'text', // autocasts as new TextSymbol()
                color: 'black',
                haloColor: 'white',
                haloSize: 1,
                font: {
                  // autocast as new Font()
                  family: 'Playfair Display',
                  size: 10,
                  weight: 'bold'
                }
              },
              labelPlacement: 'above-center',
              labelExpressionInfo: {
                expression: '$feature.' + label
              }
            }
            for (i = 0; i < mapLayers.length; i++) {
              if (mapLayers[i].id === layerName) {
                mapLayers[i].labelingInfo = [labelClass]
              }
            }
          } // End labelLayer

          // Function to toggle map layers on/off
          const toggleLayer = function(layerName) {
            let i
            for (i = 0; i < mapLayers.length; i++) {
              if (mapLayers[i].id === layerName) {
                mapLayers[i].visible = !mapLayers[i].visible
              }
            }
          } // End toggleLayer
          // Used to Handle State Changes (ie Layer is toggled on/off)
          this.$store.subscribe((mutation, state) => {
            // this.$consoleLog(mutation.type)
            switch (mutation.type) {
              case 'gis/setLayerToggle':
                toggleLayer(mutation.payload)
                break
              case 'gis/setZoomFeature':
                zoom2Feature(mutation.payload)
                break
              case 'gis/setLayerTransparency':
                layerTransparency(mutation.payload)
                break
              case 'gis/setLayerLabel':
                labelLayer(mutation.payload)
                break
            }
          }) // End of Subscribe
          // End Map Functions
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
