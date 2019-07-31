<template>
  <div>
    <div class="mapouter">
      <div id="viewDiv"></div>
    </div>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader'
export default {
  layout: 'dashboard',
  mounted() {
    loadModules(['esri/Map', 'esri/views/MapView']).then(
      ([Map, MapView, Search, Expand, BasemapGallery]) => {
        // create map with the given options at a DOM node w/ id 'mapNode'
        const map = new Map({
          basemap: 'streets'
        })
        // eslint-disable-next-line no-unused-vars
        const view = new MapView({
          container: 'viewDiv', // Reference to the scene div created in step 5
          map: map, // Reference to the map object created before the scene
          zoom: 4, // Sets zoom level based on level of detail (LOD)
          center: [15, 65] // Sets center point of view using longitude,latitude
        })
      }
    )
  }
}
</script>

<style>
@import url('https://js.arcgis.com/4.12/esri/css/main.css');
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
