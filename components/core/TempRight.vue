<template>
  <v-navigation-drawer
    v-model="right"
    fixed
    right
    temporary
  ></v-navigation-drawer>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      right: 'app/getRight'
    })
  },
  methods: {
    ...mapActions({
      setRight: 'app/setRight'
    })
  }
}
</script>
