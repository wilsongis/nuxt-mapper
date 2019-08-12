<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <div id="nearme">
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="(item, i) in items" :key="i">
          <v-expansion-panel-header
            >{{ item.label }}: {{ item.name }}</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <v-card class="mx-auto" max-width="225" tile>
              <v-list-item-content four-line>
                <v-list-item-content>
                  <v-list-item-title
                    >{{ item.nameTitle }}: {{ item.name }}</v-list-item-title
                  >
                  <v-list-item-subtitle>
                    {{ item.head1 }}: {{ item.data1 }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    {{ item.head2 }}: {{ item.data2 }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <a :href="item.data3" target="_blank">{{ item.data3 }}</a>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item-content>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-navigation-drawer>
</template>
<script>
import { loadModules } from 'esri-loader'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      searchTerm: null,
      expand: false,
      items: [],
      loader: null,
      loading: false,
      loading2: false,
      resultsArray: []
    }
  },
  computed: {
    ...mapGetters({
      drawer: 'app/getDrawer',
      nearmePoint: 'nearme/getNearMePoint',
      nearmeLayers: 'nearme/getNearMeLayers'
    })
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]
      if (l != null) {
        this.nearmeBuilder()
      }

      setTimeout(() => (this[l] = false), 1000)
      this.loader = null
    }
  },
  mounted() {
    // Used to Handle State Changes (ie Layer is toggled on/off)
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'nearme/setNearmePoint':
          this.nearmeBuilder()
          break
      }
    }) // End of Subscribe
  },
  methods: {
    ...mapActions({
      setDrawer: 'app/setDrawer'
    }),
    ...mapMutations({}),
    urlCheck(test, name) {
      // eslint-disable-next-line no-console
      console.log('Tested')
    },
    nearmeBuilder() {
      const self = this
      self.resultsArray = []
      self.items = []
      const layers = self.nearmeLayers
      const searchCount = layers.length
      let i = 0
      for (i = 0; i < searchCount; i++) {
        const layer2Search = layers[i]
        self.nearmeQuery(layer2Search)
      }
      self.items = self.resultsArray
    },
    // Query a Search Layer and creates a results array
    nearmeQuery(layer2Search) {
      const self = this
      loadModules(['esri/tasks/QueryTask', 'esri/tasks/support/Query'], {
        // use a specific version instead of latest 4.x
      }).then(([QueryTask, Query]) => {
        // Start of Query Body
        const searchLayerUrl = layer2Search.url
        const queryTask = new QueryTask({
          url: searchLayerUrl
        })
        const query = new Query()
        query.returnGeometry = true
        query.geometry = self.nearmePoint
        query.outFields = layer2Search.outFields
        query.num = 1
        query.orderByFields = layer2Search.orderByFields
        // Todo:  Add distance info
        if (layer2Search.distance) {
          query.distance = self.select
        } else {
          query.distance = null
        }
        // When resolved, returns features and graphics that satisfy the query.
        queryTask.execute(query).then(function(results) {
          let array = null
          array = results.features
          let x

          for (x = 0; x < array.length; x++) {
            const id = array[x].attributes.objectid
            const name = array[x].attributes[layer2Search.displayFields[0]]
            const head1 = layer2Search.displayFields[1].toUpperCase()
            const data1 = array[x].attributes[layer2Search.displayFields[1]]
            const head2 = layer2Search.displayFields[2].toUpperCase()
            const data2 = self.dataAddr(
              name,
              head2,
              array[x].attributes[layer2Search.displayFields[2]]
            )

            const head3 = layer2Search.displayFields[3].toUpperCase()
            const data3 = self.dataWeb(
              array[x].attributes[layer2Search.displayFields[3]]
            )
            const layerName = layer2Search.layerName
            const searchName = layer2Search.searchName
            const singleArray = {
              id: id,
              nameTitle: layer2Search.displayFields[0].toUpperCase(),
              name: name,
              head1: head1,
              data1: data1,
              head2: head2,
              data2: data2,
              head3: head3,
              data3: data3,
              layerName: layerName,
              label: layer2Search.label,
              searchName: searchName
            }
            self.resultsArray.push(singleArray)
          }
        })
      }) // End of Query
    },
    dataAddr(name, head, data) {
      let returnData = data
      if (head === 'ADDRESS') {
        returnData = 'http://maps.google.com/?q=' + data + ', 37040'
      }
      return returnData
    },
    dataWeb(data) {
      let returnData = data
      if (data.substring(0, 4) === 'http') {
        returnData = data
      } else {
        returnData = ''
      }
      return returnData
    },
    zooming(layer, objectid) {
      this.$store.commit('gis/setZoomFeature', [layer, objectid])
    }
  }
}
</script>
