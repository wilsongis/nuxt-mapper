<template>
  <v-navigation-drawer v-model="drawerRight" app clipped right>
    <v-list dense>
      <v-list-item @click.stop="right = !right">
        <v-list-item-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Open Temporary Drawer</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      drawerRight: 'app/getDrawerRight'
    })
  },
  methods: {
    ...mapActions({
      setDrawerRight: 'app/setDrawerRight'
    })
  }
}
</script>
