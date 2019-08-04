export default {
  setDrawer({ commit }, drawer) {
    commit('SET_DRAWER', drawer)
  },
  setDrawerRight({ commit }, drawerRight) {
    commit('SET_DRAWERRIGHT', drawerRight)
  },
  setRight({ commit }, right) {
    commit('SET_RIGHT', right)
  },
  setLeft({ commit }, left) {
    commit('SET_LEFT', left)
  }
}
