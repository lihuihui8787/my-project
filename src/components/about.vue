<template>
  <div id="about">
    <main class="ab-content container">
      <h2 class="abouttitle">关于我</h2>
      <section class="white-bg clearfix">
        <div class="fl content-left">
          <h3 class="title-small">
            <span>Infos</span>
          </h3>
          <p class="content-detail">
           大家好，我叫李飞，是一名前端开发工程师，1990出生去山西省临汾市，2012年毕业于山西林业职业技术学院,
            所熟悉的技术栈有:Html5,CSS3,原生Javascript,Jquery,Vue,React,热爱新技术，喜欢钻研。
          </p>
        </div>
        <div class="fr content-right">
          <div>

          </div>
        </div>
      </section>
      <section class="white-bg" id="skill">
        <div class="skillBox clearfix">
          <div class="fl content-left">
            <h3 class="title-small">
              <span>Skills</span>
            </h3>
            <p class="content-detail">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
          <div class="content-right fr">
            <div class="skillst">
              <div class="skillbar" data-percent="78%">
                <div class="title head-sm">
                  HTML 5
                </div>
                <div class="count-bar">
                  <div class="count"></div>
                </div>
              </div>
              <div class="skillbar" data-percent="91%">
                <div class="title head-sm">
                  CSS 3
                </div>
                <div class="count-bar">
                  <div class="count"></div>
                </div>
              </div>
              <div class="skillbar" data-percent="82%">
                <div class="title head-sm">
                  jQuery
                </div>
                <div class="count-bar">
                  <div class="count"></div>
                </div>
              </div>
              <div class="skillbar" data-percent="94%">
                <div class="title head-sm">
                  Vue
                </div>
                <div class="count-bar">
                  <div class="count"></div>
                </div>
              </div>
              <div class="skillbar" data-percent="80%">
                <div class="title head-sm">
                  React
                </div>
                <div class="count-bar">
                  <div class="count"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>


</template>


<script>

  export default {
    name:'app-about',
    mounted(){
      $('.skillbar').each(function (item,ele) {
        $(this).find('.count-bar').animate({
          width:$(this).attr('data-percent')
        },3000);
        var percent = $(this).attr('data-percent');
        $(this).find('.count').html('<span>' + percent + '</span>');
      });

    }
  }
</script>

<style scoped>
  #about{
    width:100%;
    height:100%;
    background-color: #fff;
    color:#333;
  }
  .abouttitle{
    margin:20px 0;
    text-align: center;
    letter-spacing: 4px;
  }
  .white-bg{
    padding:30px 0;
  }
  .container{
    width:1140px;
    margin: 0 auto;

  }
  .content-left{
    width:28%;
  }
  .content-right{
    width:70%;
  }
  .content-detail {
    font-weight: 400;
    margin-top: 70px;
    line-height: 30px;
    font-size: 14px;
    letter-spacing: 0.4px;
    color:#000;
  }
  .title-small span { position: relative; color:#000;}
  .title-small span:after {
    content: "";
    position: absolute;
    bottom: -20px;
    height: 3px;
    background: #000;
    width: 28px;
    left: 0;
  }
  .title-small-center span {position: relative;}
  .title-small-center span:after {
    content: "";
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    height: 3px;
    background: #DEDEDE;
    width: 28px;
    left: 0;
  }
  .skillst {margin-top: 30px;}
  .skillst .skillbar {
    width: 100%;
    height: 10px;
    background-color: #f6f6f6;
    position: relative;
    margin-bottom: 60px;
    padding: 2px;
    box-sizing: border-box;
  }
  .skillst .count-bar {
    width: 100%;
    height: 5px;
    width: 0px;
    position: relative;
  }
  .skillst .count-bar {background-color: #818181;}
  .skillst .count-bar span{ font-size: 12px;}
  .skillst .title {
    position: absolute;
    line-height: 25px;
    top: -35px;
    left: 0;
    padding-left: 10px;
    font-size: 12px !important;
  }
  .skillst .count-bar .count {
    position: absolute;
    line-height: 18px;
    top: -28px;
    right: -20px;
    width: 40px;
    height: 18px;
    color: #fff;
    text-align: center;
    background-color: #2f2f2f;
  }
  .skillst .count-bar .count span {
    position: relative;
    display: block;
  }
  .skillst .count-bar .count span:after {
    position: absolute;
    left: 50%;
    margin-left: -4px;
    top: 18px;
    content: "";
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
  .skillst .count-bar .count { background-color: #818181;}
  .skillst .count-bar .count span:after { border-top: 4px solid #818181;}
</style>
