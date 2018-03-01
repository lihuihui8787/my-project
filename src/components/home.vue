
<template>
  <div class="home">

    <ul class="picUl">
      <transition name="rotate-flip-bottom">
        <router-view class="app1-router-view"></router-view>
      </transition>
    </ul>

    <div class="personinfo boxsizing">
      <h3 class="pertitle">Hello</h3>
      <br/>
      <span class="typed"></span>
    </div>
    <div class="tipico" @click="animateBtn">
      <div class="linescroll"></div>
    </div>
  </div>
</template>
<script>
  let index = 1;
  export default {
    name:'app-home',
    methods:{
      animateBtn(){
        if(index>=4){
          index=0;
        }
        index++;
        this.$router.push({path:`/home/home${index}`});
      }
    },
    mounted() {
      // let timer = setInterval( () => {
      //   if(index>=4){
      //     index=0;
      //   }
      //   index++;
      //   this.$router.push({path:`/home/home${index}`});
      // },3000);
      // window.onmousewheel= ()=> {
      //   console.log(1);
      //   if(index>=4){
      //     index=0;
      //   }
      //   index++;
      //   this.$router.push({path:`/home/home${index}`});
      // };
      $("#preloader").delay(200).fadeOut("slow");
      $("#status").delay(200).fadeOut();
      $(".typed").typed({
        strings: ["大家好！我叫李飞", "是一名前端开发工程师", "喜欢简单"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
      });
    }
  }
</script>
<style>

  /*.home{*/
    /*position:relative;*/
  /*}*/
  /*.home .pointbox{*/
    /*position:absolute;*/
    /*z-index: 333;*/
    /*width:300px;*/
    /*margin:0 auto;*/
    /*bottom:60px;*/
    /*left:43%;*/
  /*}*/
  html,
  body,
  .picUl {
    position: relative;
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
  }
  .picUl{
    perspective: 1200px;
  }
  .picUl img{
    width:100%;
    height:100%;
  }

  .picUl .app1-router-view {
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
  .pointbox .point{
    float:left;
    width:16px;
    height:16px;
    background-color: #16a085;
    border-radius: 10px;
    margin: 0 15px;
    cursor: pointer;
    border:2px solid transparent;
  }
  .pointbox .point:hover{
    transition:0.1s;
    transform: scale(1.5);
    background-color: transparent;
    border:2px solid rgba(0,0,0,.5);
  }
  .tipico{
    cursor: pointer;
  }
</style>
