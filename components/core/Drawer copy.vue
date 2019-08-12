<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <div>
      <h3>Near Me:</h3>
      <v-container fluid grid-list-md>
        <v-data-iterator
          :items="items"
          item-key="sorter"
          :expand="expand"
          row
          wrap
          hide-default-footer
        >
          <template v-slot:item="props">
            <v-card>
              <v-card-title>
                <strong>{{ props.item.label }}: </strong>
                <strong>{{ props.item.name }}</strong>
              </v-card-title>
              <v-subheader> {{ props.item.name }}</v-subheader>
              <v-switch
                :input-value="isExpanded(props.item)"
                :label="isExpanded(props.item) ? 'Expanded' : 'Closed'"
                class="pl-4 mt-0"
                @change="v => expand(props.item, v)"
              ></v-switch>
              <v-divider></v-divider>
              <v-list v-if="isExpanded(props.item)" dense>
                <v-list-item>
                  <v-list-item-content
                    >{{ props.item.nameTitle }}:</v-list-item-content
                  >
                  <v-list-item-content class="align-end">{{
                    props.item.name
                  }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content
                    >{{ props.item.head1 }}:</v-list-item-content
                  >
                  <v-list-item-content class="align-end">{{
                    props.item.data1
                  }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content
                    >{{ props.item.head2 }}:</v-list-item-content
                  >
                  <v-list-item-content class="align-end">{{
                    props.item.data2
                  }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content
                    >{{ props.item.head3 }}:</v-list-item-content
                  >
                  <v-list-item-content class="align-end">{{
                    props.item.data3
                  }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>ID:</v-list-item-content>
                  <v-list-item-content class="align-end">{{
                    props.item.id
                  }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-btn
                      :loading="loading"
                      :disabled="loading"
                      color="success"
                      @click="zooming(props.item.layerName, props.item.id)"
                    >
                      Zoom to Selected
                      <template v-slot:loader>
                        <span>...</span>
                      </template>
                    </v-btn>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </template>
        </v-data-iterator>
      </v-container>
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
            const data1 = array[x].attributes[layer2Search.displayFields[1]]
            const data2 = array[x].attributes[layer2Search.displayFields[2]]
            const data3 = array[x].attributes[layer2Search.displayFields[3]]
            const layerName = layer2Search.layerName
            const searchName = layer2Search.searchName
            const singleArray = {
              id: id,
              nameTitle: layer2Search.displayFields[0],
              name: name,
              head1: layer2Search.displayFields[1],
              data1: data1,
              head2: layer2Search.displayFields[2],
              data2: data2,
              head3: layer2Search.displayFields[3],
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

    zooming(layer, objectid) {
      this.$store.commit('gis/setZoomFeature', [layer, objectid])
    }
  }
}
</script>
