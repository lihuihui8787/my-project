function play(w,x,obj){
  var lWid = w/x;
  var uHtml = "",tCss= "",pCss="",z=0;
  for(var i=0;i<x;i++){
    if(i>x/2){z--}else{z++};
    uHtml += '<li><span class="s1"></span><span class="s2"></span><span class="s3"></span><span class="s4"></span><span class="s5"></span><span class="s6"></span></li>';
    tCss += 'li:nth-child('+(i+1)+'){-webkit-transition:1s '+(i*(w/10000))+'s all;z-index:'+z+';}#picUl li:nth-child('+(i+1)+') span{background-position:'+(-lWid*i)+'px;}';
  }
  $("#css").append("#picUl li{width:"+lWid+"px;}li span{width:"+lWid+"px;}"+tCss);
  $("#picUl").append(uHtml);
};
