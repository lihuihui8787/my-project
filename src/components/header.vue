
<template>
<header id="head">
  <h1 class="fl">F.l</h1>
  <nav class="fl nav-box">
    <router-link to="/home"><i class="fa fa-home"></i>首页</router-link>
    <router-link to="/about"><i class="fa fa-user-o"></i>个人信息</router-link>
    <router-link to="/list"><i class="fa fa-pencil-square-o"></i>myDemo</router-link>
    <router-link to="/concact"><i class="fa fa-comments-o"></i>联系我</router-link>
  </nav>

  <!--<div class="fr user">-->
    <!--<div class="user-log fl">-->
      <!--<img class="user-img" src="" alt="">-->
      <!--<span class="user-name">李飞</span>-->
    <!--</div>-->
    <!--<div class="task-btn fl"><i class="fa fa-tasks"></i></div>-->
    <!--<div class="email-btn fl"><i class="fa fa-envelope-o"></i></div>-->
    <!--<div class="user-btn fl"><i class="fa fa-envelope-o"></i></div>-->
  <!--</div>-->
</header>
</template>

<script>
  export default {
    name:'app-header'
  }
</script>

<style>

</style>
