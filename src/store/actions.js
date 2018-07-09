export default {
  getHeadNavArr: function ({commit}) {
    commit('getHeadNavArr')
  },
  getHome: function ({commit}, obj) {
    commit('getHome', obj)
  },
  getMs: function ({commit}, obj) {
    commit('getMs', obj)
  }
}
