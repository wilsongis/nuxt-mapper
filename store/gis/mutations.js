export default {
  setLayerVisible(state, value) {
    state.defaultLayers[value.head].layers[value.layer].visible = value.value
  },
  setLayersList(state, value) {
    state.layersList = value
  },
  setLayerToggle(state, value) {
    state.layerToggle = value
  },
  setZoomFeature(state, value) {
    state.zoomFeature = value
  },
  setSelectedTool(state, value) {
    state.selectedTool = value
  }
}
