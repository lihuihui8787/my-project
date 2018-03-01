<template>

  <div>
    <h3 class="todolist">ToDoList</h3>
    <div class="addToDo"><input placeholder="请添加任务" type="text"><button @click="addClick">确定</button></div>
    <header class="main-title">
      <div class="btn" @click="state='all'" :style="{color:state =='all'?'#fff':''}">
        <div class="media">
          <i class="fa fa-tasks"></i>
          <span>全部任务({{this.$store.state.todoThings.length}})</span>
        </div>
        <div class="contor-bar">
          <div class="c-title">
            任务占比
          </div>
          <div class="task-bar" data-percent="100%">
            <div class="count-bar">
              <div class="count"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn" @click="state='over'" :style="{color:state =='over'?'#fff':''}">
        <div class="media">
          <i class="fa fa-check-circle"></i>
          <span>已完成任务({{this.$store.getters.overTask}})</span>
        </div>
        <div class="contor-bar">
          <div class="c-title">
            已完成任务占比
          </div>
          <div class="task-bar task-bar2" :data-percent="$store.getters.overDone">
            <div class="count-bar count-bar2">
              <div class="count count2"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn" @click="state='no'" :style="{color:state =='no'?'#fff':''}">
        <div class="media">
          <i class="fa fa-circle-o"></i>
          <span>未完成任务({{this.$store.getters.task}})</span>
        </div>
        <div class="contor-bar">
          <div class="c-title">
            未完成任务占比
          </div>
          <div class="task-bar task-bar3" :data-percent="$store.getters.noDone">
            <div class="count-bar count-bar3">
              <div class="count count3"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <ul v-if="state=='all'"  class="infolist">
      <li v-for="(v,i) in all"><i @click="checkChange($event,v.id,i,v.over)" class="cbtn" :class="v.over?'':'move'"></i><div class="line"></div><span :onOff="v.over" class="i-mes">{{v.info}}</span></li>
    </ul>
    <ul v-else-if="state=='over'"  class="infolist">
      <li v-for="(v,i) in over">
        <i @click="checkChange($event,v.id,i,v.over)" class="cbtn" :class="v.over?'':'move'"></i>
        <div class="line"></div>
        <span :onOff="v.over" class="i-mes">{{v.info}}</span>
      </li>
    </ul>
    <ul v-else-if="state=='no'"  class="infolist">
      <li v-for="(v,i) in no">
        <i @click="checkChange($event,v.id,i,v.over)" class="cbtn" :class="v.over?'':'move'"></i>
        <div class="line"></div>
        <span :onOff="v.over" class="i-mes">{{v.info}}</span>
      </li>
    </ul>

  </div>

</template>

<script>
  import {mapGetters,mapMutations} from 'vuex';
  export default {
    name:'app-list1',
    data(){
      return {
        state:'all'
      }
    },
    mounted(){
      $("#preloader").fadeOut();
      $('.task-bar').each(function (item,ele) {
        $(this).find('.count-bar').animate({
          width:$(this).attr('data-percent')
        },3000);
        var percent = $(this).attr('data-percent');
        $(this).find('.count').html('<span>' + percent + '</span>');
      });
    },
    computed:{
      ...mapGetters([
        'noDone',
        'overDone'
      ]),
      all(){
          return this.$store.getters.all
      },
      over(){
        return this.$store.getters.over
      },
      no(){
        return this.$store.getters.no
      },


    },
    methods:{
      checkChange(e,id,i,state){
        this.$store.commit('changeState',{id:id,over:state});
      },

      addClick(e){
        let addMes = e.currentTarget.previousElementSibling.value;

        this.$store.commit('addTask',{id:Math.random(),over:true,info:addMes});
      }
    },
    watch:{
      "noDone":function () {
        $('.count-bar3').animate({
          width:this.noDone
        },500);
        $('.count-bar2').animate({
          width:this.overDone
        },500);
        $('.count2').html('<span>' + this.overDone + '</span>');
        $('.count3').html('<span>' + this.noDone + '</span>');
      }
    }
  }
</script>

<style>
  .btn{
    position: relative;
    overflow: hidden;
    height:200px;
  }
  .main-title .media{
    height:60px;
    line-height: 60px;
    padding-left:30px;
  }
  .main-title i{
    display: inline-block;
    vertical-align: middle;
    font-size:36px;
  }
  .media span{
    margin-left:30px;
  }
  .btn:after{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 110%;
    content: '';
    -webkit-transform: skewX(-50deg);
    transform: skewX(-50deg);
    background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)) no-repeat -2em 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)) no-repeat -2em 0;
    background-size: 2em 100%
  }
  .btn:hover:after {
    -webkit-transition: .7s linear;
    transition: .7s linear;
    background-position: 150% 0;
  }
  .btn .contor-bar{
    font-size:14px;
    line-height:14px;
  }
  .btn .task-bar {
    width: 88%;
    margin: 0 auto;
    height: 10px;
    background-color: #418bca;
    margin-top:20px;
    position: relative;
    padding: 2px;
    box-sizing: border-box;
  }
  .btn .task-bar2{
    background-color: #16a085;
  }
  .btn .task-bar3{
    background-color: #3f4e62;
  }
  .btn .c-title{
   padding-left: 30px;
  }
  .btn .count-bar {
    width: 100%;
    height: 5px;
    width: 0px;
    position: relative;
  }
  .btn .count-bar {background-color: #fff;}
  .btn .count-bar span{ font-size: 12px;}
  .btn .count-bar .count {
    position: absolute;
    line-height: 18px;
    top: -26px;
    right: -20px;
    width: 40px;
    height: 18px;
    color: #fff;
    text-align: center;
    background-color: #2f2f2f;
  }
  .btn .count-bar .count span {
    position: relative;
    display: block;
  }
  .btn .count-bar .count span:after {
    position: absolute;
    left: 50%;
    margin-left: -4px;
    top: 18px;
    content: "";
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
  .btn .count-bar .count { background-color: #818181;}
  .btn .count-bar .count span:after { border-top: 4px solid #818181;}
</style>
