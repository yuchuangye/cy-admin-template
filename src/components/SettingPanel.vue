<template>
  <div class="setting-panel" v-if="$store.state.isPanel">
    <div class="panel-bg" v-show="isOpen" @click="isOpen=false"></div>
    <div class="panel-body" :class="{'open': isOpen}">
      <div class="toggle-btn" @click="isOpen=!isOpen">
        <i :class="[isOpen ? 'el-icon-close':'el-icon-setting']"></i>
      </div>
      <div class="panel-items">
        <h3 class="title">系统布局配置</h3>
        <div class="item">
          <span class="txt">侧边栏 Logo</span>
          <el-switch v-model="logo"></el-switch>
        </div>
        <div class="item">
          <span class="txt">固定 Header</span>
          <el-switch v-model="header"></el-switch>
        </div>
        <div class="item">
          <span class="txt">回到顶部 Button</span>
          <el-switch v-model="topBtn"></el-switch>
        </div>
        <div class="item">
          <span class="txt">导航唯一展开 Slide</span>
          <el-switch v-model="slideOpen"></el-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SettingPanel',
    data () {
      return {
        isOpen: false,
        logo: this.$store.state.isLogo,
        header: this.$store.state.fixHeader,
        topBtn: this.$store.state.isTop,  
        slideOpen: this.$store.state.uinqueSlideOpen
      }
    },
    watch: {
      logo (newsVal) {
        this.$store.dispatch('toggleLogo', newsVal)
      },
      header (newsVal) {
        this.$store.dispatch('toggleHeader', newsVal)
      },
      topBtn (newsVal) {
        this.$store.dispatch('toggleTop', newsVal)
      },
      slideOpen (newsVal) {
        this.$store.dispatch('toggleSlide', newsVal)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../assets/stylus/variable.styl"
  .setting-panel
    transition: all .3s cubic-bezier(.7, .3, .1, 1)
    .panel-bg
      position: fixed
      top: 0
      left: 0
      z-index: 20000
      width: 100%
      height: 100%  
      opacity: 1
      transition: opacity .3s cubic-bezier(.7, .3, .1, 1)
      background-color: rgba(0, 0, 0, .2)
    .panel-body
      width: 100%
      max-width: 260px
      height: 100vh
      position: fixed
      top: 0
      right: 0
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, .05)
      transition: all .25s cubic-bezier(.7, .3, .1, 1)
      transform: translate(100%)
      background: $colorA
      z-index: 40000
      &.open
        transform: translate(0)
      .toggle-btn
        width: 48px
        height: 48px
        line-height: 48px
        position: absolute
        left: -48px
        top: 250px
        z-index: 0
        text-align: center
        font-size: $font-l
        border-radius: 6px 0 0 6px !important
        pointer-events: auto
        cursor: pointer
        color: $colorA
        background-color: $colorB
      .panel-items
        padding: 24px
        font-size: $font-xxs 
        line-height: 1.5
        .title
          margin: 14px 0 12px 0
          line-height: 22px
        .item
          padding: 12px 0
          color: $colorL
          .el-switch
            float: right

</style>

