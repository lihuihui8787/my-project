<template>

  <div class="main">
    <div class="side">
      <div class="meslist">
        <h3>列表</h3>
        <ul class="demo-list">
          <li>
            <router-link to="/list/list1"><i class="fa fa-tasks"></i><span>任务板</span></router-link>
          </li>
          <li>
            <router-link to="/list/list2"><i class="fa fa-book"></i><span>图书列表</span></router-link>
          </li>
          <li>
            <router-link to="/list/list3"><i class="fa fa-book"></i><span>照片墙</span></router-link>
          </li>
          <li>
            <a href="#"><i class="fa fa-book"></i><span>留言板</span></a>
          </li>

        </ul>
      </div>
      <div class="admes">
        <h3>公告</h3>
        <p>
          这是欢迎语
        </p>
      </div>
    </div>
    <div class="content">
      <transition class="fadeout">
        <router-view></router-view>
      </transition>

    </div>
  </div>


</template>

<script>
  export default {
    name:'app-list',
    beforeMount(){

    },
    mounted:function () {

      $('.content').css({

        width:$('#content').width()-$('.side').width()

      })
    }
  }
</script>

<style>
  .content{
    overflow:auto;
  }
  .main{
    background-image: url(../../assets/img/noise.png), url(../../assets/img/1.jpg);
    background-repeat: repeat,no-repeat;
    background-position: left top;
    background-size: auto,cover;
    overflow: auto;
  }
  .side h3{
    padding-left:20px;
  }
  .demo-list{
    line-height:50px;
    font-size:14px;
  }
  .demo-list li{
    height:50px;
    padding-left:20px;
    position:relative;
    z-index: 2;
    cursor: pointer;
  }
  .demo-list li i{
    position:relative;
    z-index: 3;
  }
  .demo-list li span{
    position:relative;
    z-index: 3;
  }
  .demo-list li:before{
    content:" ";
    height:50px;
    width:0;
    position:absolute;
    left:0;
    top:0;
    background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    z-index: 1;
    transition: all 0.2s ease;
  }
  .demo-list li:hover:before{
    width:100%;
    -webkit-transform: scaleX(1);
  }
  .demo-list a{
    width:100%;
    height:100%;
    display: block;
    position: relative;
    z-index: 3;
  }
  .demo-list li:hover span{
    color:#fff;
  }
</style>
