<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>
<script>
  import './assets/style.css';
  // import './assets/js/jquery';
  import './assets/js/typed.js';
  import 'vue-transition.css';

  import 'lightgallery.js/dist/css/lightgallery.css';
  import 'lightgallery.js/dist/css/lg-transitions.css';
  import 'lightgallery.js/dist/js/lightgallery.min';
  import app_main from './components/';
  export default {
    name: 'App',
    components: {
      app_main
    },
   mounted:function () {
    $("#preloader").delay(200).fadeOut("slow");
    $("#status").delay(200).fadeOut();
    let h = window.innerHeight;
    $('#app').css('height',h);
    $('#content').css({
      height:h-$('#head').height()
    });
    $("#preloader").css('height',h);
    window.onresize=()=>{
      $('#app').css('height',h);
      $('#content').css({
        height:h-$('#head').height()
      });
      $("#preloader").css('height',h);
    }
  },
}
</script>

<style>
  /*html,*/
  /*body,*/
  /*#content {*/
    /*position: relative;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*overflow: hidden;*/
  /*}*/
  /*#content{*/
    /*perspective: 1200px;*/
  /*}*/

  /*#content .app-router-view {*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*overflow: hidden;*/
    /*backface-visibility: hidden;*/
    /*transform: translate3d(0, 0, 0);*/
    /*transform-style: preserve-3d;*/
    /*visibility: visible;*/
  /*}*/

</style>
