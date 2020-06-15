<template>
  <v-navigation-drawer
    v-model="left"
    fixed
    temporary
    clipped
  ></v-navigation-drawer>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      left: 'app/getLeft'
    })
  },
  methods: {
    ...mapActions({
      setLeft: 'app/setLeft'
    })
  }
}
</script>
