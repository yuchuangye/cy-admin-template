<template>
  <div id="layout">
    <el-container style="height: 100vh;">

      <el-aside 
        width="220px"
        :class="{
          'menu-collapse': $store.state.isCollapse,
          'menu-fold': isFold,
          'menu-open': isOpen,
          'menu-fold-transition': isFold && isTransition > 0
        }">
        <slide-bar></slide-bar>
      </el-aside>

      <el-container>
        <!-- <el-header>
          <nav-bar :mobile="isFold" @openMenu="isOpen=true"></nav-bar>
        </el-header> -->
        <el-main :class="{'fix-header': $store.state.fixHeader}">
          <el-header 
            :class="{'fix-header': $store.state.fixHeader, 
            'calc-header': $store.state.fixHeader && $store.state.isCollapse}">
            <nav-bar :mobile="isFold" @openMenu="isOpen=true"></nav-bar>
          </el-header>
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <router-view />
            </keep-alive>
          </transition>
        </el-main>
      </el-container>

    </el-container>
    <!-- end of container -->

    <div class="menu-bg" v-if="isOpen" @click="isOpen=false"></div>
    <!-- end of slideBar-bg -->

    <setting-panel></setting-panel>
    
    <el-backtop 
      v-show="$store.state.isTop" 
      target=".el-main" 
      :visibility-height="400">
    </el-backtop>

  </div>
</template>

<script>
  import SlideBar from '@/components/SlideBar'
  import NavBar from '@/components/NavBar'
  import SettingPanel from '@/components/SettingPanel'
  export default {
    name: 'Home',
    data () {
      return {
        isFold: false,  // 屏幕是否 < 768
        isOpen: false,  // 控制屏幕 < 768试的菜单展开
        isTransition: 0  // 侧边菜单是否添加过渡动画, 大于0时添加
      }
    },
    mounted () {
      this.monitor()
      window.addEventListener('resize', this.monitor)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.monitor, false)
    },
    watch: {
      $route () {
        this.isOpen = false
      },
      isOpen () {
        if (this.isFold) this.isTransition ++
      }
    },
    methods: {
      // 判断浏览器窗口宽度
      monitor () {
        let deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        // 屏幕小于 768px 时 侧边菜单定位位移
        if (deviceWidth < 768) {
          this.isFold = true
          // 屏屏幕小于 768px 时, isCollapse始终为false
          this.$store.dispatch('toggleCollapse', false)
        } else {
          this.isTransition = 0
          this.isOpen = false
          this.isFold = false
        }
      }
    },
    components: {
      SlideBar,
      NavBar,
      SettingPanel
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../assets/stylus/variable.styl"
  #layout
    .el-header 
      position: relative
      background-color: $colorA
      height: 50px !important
      line-height: 50px
      box-shadow: 0 1px 4px rgba(0, 21, 41, .08)
      margin: 0 -20px
      margin-bottom: 20px
      overflow: hidden 
      transition: width .3s
      &.fix-header
        position: fixed
        top: 0
        margin-bottom: 0 
        width: calc(100vw - 220px)
      &.calc-header
        width: calc(100vw - 64px)  
      
    .el-main 
      background-color: $colorA
      overflow-x: hidden
      padding-top: 0
      &.fix-header
        padding-top: 70px 
    
    .el-aside 
      background-color: $colorC
      overflow: hidden
      transition: width .3s

    .menu-collapse
      width: 64px !important

    .menu-fold
      position: fixed
      top: 0
      left: 0
      transform: translateX(-101%) 
      z-index: 990011
      height: 100%
    .menu-open
      transform: translateX(0)
    .menu-fold-transition
      transition: transform .3s
      
    .menu-bg
      position: fixed
      top: 0
      left: 0
      z-index: 990000
      width: 100%
      height: 100%
      background-color: rgba(0, 0, 0, .3)    
    
</style>