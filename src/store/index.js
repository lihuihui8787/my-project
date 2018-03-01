import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    count:20,
    start:0,
    total:100,
    q:'',
    tag:'',
    books:[],
    todoThings:[
      {
        id:Math.random(),
        info:'今天吃两个西瓜',
        over:true
      },
      {
        id:Math.random(),
        info:'杀两只青蛙',
        over:false
      },
      {
        id:Math.random(),
        info:'烤两只青蛙',
        over:true
      },
      {
        id:Math.random(),
        info:'压两只青蛙',
        over:true
      },
      {
        id:Math.random(),
        info:'煮两只青蛙',
        over:false
      },
      {
        id:Math.random(),
        info:'拐两只青蛙',
        over:false
      },
      {
        id:Math.random(),
        info:'煎两只青蛙',
        over:true
      }
    ]
  },
  getters:{
    overTask(state){
      return state.todoThings.filter((v)=>{return !v.over}).length
    },
    task(state){
      return state.todoThings.filter((v)=>{return v.over}).length
    },
    all(state){
      return state.todoThings;
    },
    over(state){
      return state.todoThings.filter((v)=>{return !v.over})
    },
    no(state){
      return state.todoThings.filter((v)=>{return v.over})
    },
    overDone(state){

      return Math.round((state.todoThings.filter((v)=>{return !v.over}).length/state.todoThings.length)*100)+'%';
    },
    noDone(state){
      return Math.round((state.todoThings.filter((v)=>{return v.over}).length/state.todoThings.length)*100)+'%';
    }
  },
  mutations:{
    upDateGet(state,obj){
      state.books = obj.newBooks;
      state.start = obj.start;
    },
    changeState(state,obj){
      let arr = state.todoThings.map((item)=>{
        if(item.id==obj.id){
        item.over = !item.over;
      }
      return item
    });
      Object.assign(state.todoThings,arr);
    },
    addTask(state,obj){
      state.todoThings.push(obj);
    }
  },
  actions:{
    getBooks(context,obj){
      context.state.q = obj.q;
      $.ajax({
        url:"https://api.douban.com/v2/book/search",
        type:"get",
        data:{
          q:obj.q?obj.q:'',
          start:obj.start?obj.start:0,
          count:obj.count?obj.count:10
        },
        dataType:'jsonp',
        success:(data)=>{
        $("#preloader").delay(200).fadeOut("slow");
        $("#status").delay(200).fadeOut();
      context.commit('upDateGet',{
        start:data.start,
        newBooks:data.books
      });
    }

    })
    }
  }
});
