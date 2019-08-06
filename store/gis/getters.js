export default {
  defaultExtent: state => state.defaultExtent,
  getBaseMaps(state) {
    return state.baseMaps
  },
  getDefaultLayers(state) {
    return state.defaultLayers
  },
  getLayerCount(state) {
    return state.layerCount
  },
  getLayersList(state) {
    return state.layersList
  },
  getLayerToggle(state) {
    return state.layerToggle
  },
  getZoomFeature(state) {
    return state.zoomFeature
  },
  getSearchLayers(state) {
    return state.searchLayers
  },
  getSelectedTool(state) {
    return state.selectedTool
  },
  getParcelPopup(state) {
    return state.parcelPopup
  }
}
