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
      ></v-select>
    </div>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
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
      items: ['Owner', 'Property Address', 'Street', 'Subdivision']
    }
  },
  computed: {
    ...mapGetters({
      drawer: 'app/getDrawer',
      drawerRight: 'app/getDrawerRight'
    })
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
  padding-top: 30px;
  padding-right: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  max-width: 195px;
}
</style>
