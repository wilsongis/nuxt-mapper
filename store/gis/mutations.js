export default {
  setLayerVisible(state, value) {
    state.defaultLayers[value.head].layers[value.layer].visible = value.value
  },
  setLayerTransparency(state, value) {
    state.layerTransparency = value
  },
  setLayersList(state, value) {
    state.layersList = value
  },
  setLayerToggle(state, value) {
    state.layerToggle = value
  },
  setLayerLabel(state, value) {
    state.layerLabel = value
  },
  setZoomFeature(state, value) {
    state.zoomFeature = value
  },
  setSelectedTool(state, value) {
    state.selectedTool = value
  },
  setSearchInfo(state, value) {
    let returnValue = []
    switch (value) {
      case 'Owner':
        returnValue = ['Parcels', 'Parcel Zoom', 'owner']
        break
      case 'Property Address':
        returnValue = ['Parcels', 'Parcel Zoom', 'propertyad']
        break
      case 'Subdivision':
        returnValue = ['Parcels', 'Parcel Zoom', 'subdivisio']
        break
      case 'Street':
        returnValue = ['Streets', 'Street Zoom', 'label']
        break
      default:
        returnValue = ['Parcels', 'Parcel Zoom', 'owner']
        break
    }
    state.searchInfo = returnValue
  }
}
