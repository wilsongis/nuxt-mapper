export default {
  setDrawerLeft({ commit }, drawerLeft) {
    commit('SET_DRAWER', drawerLeft)
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
