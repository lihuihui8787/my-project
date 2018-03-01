<template>
  <div>
    <appLoader></appLoader>
    <appHead></appHead>
    <main id="content">
      <transition name="rotate-fall">
        <router-view class="app-router-view"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
  import appLoader from './loader';
  import appHead from './header';
  export default {
    name: 'app_main',
    components:{
      appLoader,
      appHead
    }
  }
</script>

<style>
  html,
  body,
  #content {
    position: relative;
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
  }
  #content{
    perspective: 1200px;
  }

  #content .app-router-view {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    visibility: visible;
  }
</style>
