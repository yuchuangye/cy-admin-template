export default {
  toggleCollapse (ctx, isCollapse) {
    ctx.commit('toggleCollapse', isCollapse)
  },
  toggleLogo (ctx, isLogo) {
    ctx.commit('toggleLogo', isLogo)
  },
  toggleHeader (ctx, fixHeader) {
    ctx.commit('toggleHeader', fixHeader)
  },
  toggleTop (ctx, isTop) {
    ctx.commit('toggleTop', isTop)
  },
  toggleSlide (ctx, uinqueSlideOpen) {
    ctx.commit('toggleSlide', uinqueSlideOpen)
  }  
}