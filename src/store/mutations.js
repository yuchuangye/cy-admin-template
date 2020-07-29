export default {
  toggleCollapse (state, isCollapse) {
    state.isCollapse = isCollapse
  },
  toggleLogo (state, isLogo) {
    state.isLogo = isLogo
  },
  toggleHeader (state, fixHeader) {
    state.fixHeader = fixHeader
  },
  toggleTop (state, isTop) {
    state.isTop = isTop
  },
  toggleSlide (state, uinqueSlideOpen) {
    state.uinqueSlideOpen = uinqueSlideOpen
  }    
}