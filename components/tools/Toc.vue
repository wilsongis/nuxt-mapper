<template>
  <div id="toc-panel">
    <div class="text-center">
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Left</v-btn>
        </template>
        <span>Left tooltip</span>
      </v-tooltip>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
<style></style>
