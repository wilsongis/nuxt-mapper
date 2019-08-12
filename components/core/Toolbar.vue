<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    :clipped-right="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
  >
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn
          class="default v-btn--simple"
          dark
          icon
          @click.stop="onClickLeft"
        >
          <v-icon>mdi-crosshairs-gps</v-icon>
        </v-btn>
      </template>
      <span>Near Me</span>
    </v-tooltip>

    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <span class="hidden-sm-and-down">Toolbar</span>
    </v-toolbar-title>
    <div id="fieldSelect">
      <v-select
        v-model="pick"
        :items="items"
        label="Search Field"
        outlined
        flat
        solo-inverted
        hide-details
        class="hidden-sm-and-down"
      ></v-select>
    </div>
    <v-icon>search</v-icon>

    <vue-bootstrap-typeahead
      v-model="query"
      class="mb-2"
      background-variant="bg-white"
      size="lg"
      :data="features"
      :serializer="item => item.name"
      placeholder="Search Features"
      @hit="selectedFeature = $event"
    >
    </vue-bootstrap-typeahead>

    <v-spacer></v-spacer>
    <v-tooltip right>
      <template v-slot:activator="{ on }">
        <v-btn
          class="default v-btn--simple"
          dark
          icon
          @click.stop="onClickRight"
        >
          <v-icon>mdi-layers-outline</v-icon>
        </v-btn>
      </template>
      <span>Table of Contents</span>
    </v-tooltip>
  </v-app-bar>
</template>
<script>
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import 'vue-bootstrap-typeahead/dist/VueBootstrapTypeahead.css'

import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    VueBootstrapTypeahead
  },
  data() {
    return {
      selected: false,
      loader: null,
      loading: true,
      query: '',
      selectedFeature: null,
      displayFeature: null,
      features: [],
      pick: 'Owner',
      items: ['Owner', 'Property Address', 'Street', 'Subdivision']
    }
  },
  computed: {
    ...mapGetters({
      drawer: 'app/getDrawer',
      drawerRight: 'app/getDrawerRight',
      zoomFeature: 'gis/getZoomFeature'
    })
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]
      const layerId = 'Parcels'
      const objectId = this.selectedFeature.attributes.objectid
      this.$store.commit('gis/setZoomFeature', [layerId, objectId])
      setTimeout(() => (this[l] = false), 1000)

      this.loader = null
    },
    // When the query value changes, fetch new results from
    // the API - in practice this action should be debounced
    query(newQuery) {
      let searchCapture = []
      const searchResults = []
      const strSearch = '%25' + newQuery.toUpperCase() + '%25'
      axios
        .get(
          `http://apnsgis1.apsu.edu:6080/arcgis/rest/services/CommunityMaps/CMC_Layers/MapServer/37/query?where=owner+like+%27${strSearch}%27&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=objectid%2Cid%2Cgislink%2Cowner%2Cowner2%2Cpropertyad&returnGeometry=false&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=owner&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=10&queryByDistance=&returnExtentsOnly=false&datumTransformation=&parameterValues=&rangeValues=&f=json`
        )
        .then(res => {
          searchCapture = res.data.features
          let x = 0
          for (x = 0; x < searchCapture.length; x++) {
            const singleArray = {
              id: searchCapture[x].attributes.objectid,
              name: searchCapture[x].attributes.owner,
              layername: 'Parcels'
            }
            searchResults.push(singleArray)
          }
          this.features = searchResults
        })
    }, // End Query
    selectedFeature() {
      const objectId = this.selectedFeature.id
      const layerName = this.selectedFeature.layername
      this.$store.commit('gis/setZoomFeature', [layerName, objectId])
    }
  },
  methods: {
    ...mapActions({
      setDrawer: 'app/setDrawer',
      setDrawerRight: 'app/setDrawerRight'
    }),
    getSearchLayers() {},
    onClickLeft() {
      this.setDrawer(!this.drawer)
    },
    onClickRight() {
      this.setDrawerRight(!this.drawerRight)
    },
    onClick() {
      // Do something
    }
  }
}
</script>
<style>
#fieldSelect {
  padding-top: 0px;
  padding-right: 10px;
  padding-bottom: 0px;
  padding-left: 0px;
  max-width: 195px;
}
.form-control {
  width: 450px;
  height: 60px;
  border-color: white;
  background-color: white;
  color: black;
}
.list-group {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  color: gray;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
#wrapper {
  margin: 25px;
}
</style>
