<template>

  <div class="books">
    <header class="books-head">
      <h3 class="books-title fl"><i class="fa fa-book"></i>图书列表</h3>
      <div class="searchBox fr"><input v-model="q" class="input__field" type="text" placeholder="搜索你喜欢的书籍"><i @click="searchBooks" class="fa fa-search"></i></div>
    </header>
    <ul class="books-list clearfix">
      <li v-for="v in books" class="clearfix">
        <div class="card">
          <div class="b-img">
            <div class="fl b-f">
              <img :src="v.images.small" alt="">
            </div>
            <div class="mes fl">
              <h3 class="b-title">书名：{{v.title}}</h3>
              <p class="author">作者：{{v.author[0]}}</p>
              <p class="price">出版日期：{{v.pubdate}}</p>
              <p class="price">价格：{{v.price}}</p>

            </div>
          </div>
          <p class="b-info">本书概况：{{v.summary}}</p>
        </div>

      </li>

    </ul>
    <footer class="books-foot">
      <div class="pagebox clearfix">
        <a href="#" class="fl">prev</a>
        <div class="pages fl">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
        </div>
        <a href="#" class="fl">next</a>
      </div>
    </footer>
  </div>


</template>


<script>
  export default {
    name:'app-list2',
    data(){
      return {
        title:'Books List',
        q:'javascript'
      }
    },
    beforeMount(){
      $("#preloader").css('display','block');
      $("#status").css('display','block');
      this.$store.dispatch('getBooks',{q:this.q});
    },
    methods:{
      searchBooks(){
        $("#preloader").css('display','block');
        $("#status").css('display','block');
        this.$store.dispatch('getBooks',{q:this.q});
      }
    },
    computed:{
      books(){
        return this.$store.state.books;
      }
    }
  }
</script>

<style>
  .books{
    position:relative;
    top:0;
    left:0;
  }
  .books-foot{
    padding-top:20px;
    text-align: center;
  }
  .pagebox{
    width:500px;
    margin:0 auto;
  }
  .pagebox a{
    float:left;
    width:50px;
    height:50px;
    line-height:50px;
    text-align: center;
    background-color: #16a085;
    border-radius: 6px;
    margin: 0 10px;
    color:#fff;
  }
</style>
