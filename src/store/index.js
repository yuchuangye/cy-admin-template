import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  isCollapse: false, // 控制侧边栏折叠
  isPanel: true,   // 是否显示设置面板
  isLogo: false,  // 是否显示侧边栏logo
  fixHeader: false,  // 是否固定头部
  isTop: true,   // 是否显示回到顶部按钮
  uinqueSlideOpen: true,  // 侧边栏是否多级展开
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
