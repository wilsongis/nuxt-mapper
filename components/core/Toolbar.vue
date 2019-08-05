<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    :clipped-right="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
  >
    <v-btn class="default v-btn--simple" dark icon @click.stop="onClickLeft">
      <v-icon>mdi-view-list</v-icon>
    </v-btn>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <span class="hidden-sm-and-down">Toolbar</span>
    </v-toolbar-title>
    <div id="fieldSelect">
      <v-select
        v-model="owner"
        :items="items"
        label="Search Field"
        outlined="true"
        flat
        solo-inverted
        hide-details
        class="hidden-sm-and-down"
      ></v-select>
    </div>
    <div id="autoSearch">
      <v-autocomplete
        v-model="model"
        :items="results"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        outlined="true"
        hide-no-data
        hide-selected
        item-text="Description"
        item-value="API"
        label="GIS Search"
        placeholder="Start typing to Search"
        return-object
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        class="hidden-sm-and-down"
      ></v-autocomplete>
      <v-divider></v-divider>
    </div>
    <v-spacer></v-spacer>
    <v-btn class="default v-btn--simple" dark icon @click.stop="onClickRight">
      <v-icon>mdi-layers-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      owner: 'Owner',
      items: ['Owner', 'Property Address', 'Street', 'Subdivision'],
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null
    }
  },
  computed: {
    ...mapGetters({
      drawer: 'app/getDrawer',
      drawerRight: 'app/getDrawerRight'
    }),
    fields() {
      if (!this.model) return []

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || 'n/a'
        }
      })
    },
    results() {
      return this.entries.map(entry => {
        const Description =
          entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + '...'
            : entry.Description

        return Object.assign({}, entry, { Description })
      })
    }
  },
  watch: {
    search(val) {
      // Items have already been loaded
      if (this.results.length > 0) return

      // Items have already been requested
      if (this.isLoading) return

      this.isLoading = true

      // Lazily load input items
      fetch('https://api.publicapis.org/entries')
        .then(res => res.json())
        .then(res => {
          const { count, entries } = res
          this.count = count
          this.entries = entries
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    }
  },
  methods: {
    ...mapActions({
      setDrawer: 'app/setDrawer',
      setDrawerRight: 'app/setDrawerRight'
    }),
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
  padding-right: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  max-width: 195px;
}
#autoSearch {
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  width: 450px;
}
</style>
