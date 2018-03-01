<template>
  <div id="concact">
    <section id="contact" class="white-bg">
      <div class="container">
        <h2 class="c-title">联系我</h2>
        <div class="c-box">
          <div class="c-info">
            <h3 class="title-small">
              <span>Contact</span>
            </h3>
            <p class="content-detail">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>

          </div>
          <div class="c-input content-right">
            <form>
              <div class="group">
                <input required="" type="text"><span class="highlight"></span><span class="bar"></span><label>Name</label>
              </div>
              <div class="group">
                <input required="" type="email"><span class="highlight"></span><span class="bar"></span><label>Email</label>
              </div>
              <div class="group">
                <textarea required=""></textarea><span class="highlight"></span><span class="bar"></span><label>Message</label>
              </div>

              <input id="sendMessage" name="sendMessage" type="submit" value="Send Message">

            </form>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name:'app-concact'
  }
</script>


<style scoped>
  #concact{
    width:100%;
    height:100%;
    background-color: #fff;
  }
  .c-title{
    text-align: center;
    margin:30px 0;
    color:#000;
    letter-spacing: 5px;

  }
  .container{
    width:1140px;
    margin: 0 auto;

  }
  #sendMessage{
    cursor:pointer;
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
  .c-box{
    display: flex;
    justify-content: space-between;
  }
  .c-info{
    width:25%;
  }
  .c-input{
    width:70%;
  }
  #contact {padding: 50px 0 200px 0;}
  #contact form {
    margin-top: 25px;
  }
  #contact .slider-masks {
    background-color: rgba(129, 129, 129, 0.7);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  #contact .group {
    position: relative;
    margin-bottom: 65px;
  }
  #contact input,
  #contact textarea {
    font-size: 13px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #2b2b2b;
    background: transparent;
    color: #969696;
    font-size: 13px;
  }
  #contact input:focus,
  #contact textarea:focus {
    outline: none;
    border-bottom: none;
  }
  #contact label {
    color: #2b2b2b;
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  #contact input:focus ~ label,
  #contact input:valid ~ label,
  #contact textarea:focus ~ label,
  #contact textarea:valid ~ label {
    top: -25px;
    font-size: 12px;
    color: #818181;
  }
  #contact .bar {
    position: relative;
    display: block;
    width: 100%;
  }
  #contact .bar:before,
  #contact .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #818181;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  #contact .bar:before {
    left: 50%;
  }
  #contact .bar:after {
    right: 50%;
  }
  #contact input:focus ~ .bar:before,
  #contact input:focus ~ .bar:after,
  #contact textarea:focus ~ .bar:after,
  #contact textarea:focus ~ .bar:before {
    width: 50%;
  }
  #contact .highlight {
    position: absolute;
    height: 60%;
    width: 100%;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }
  #contact input:focus ~ .highlight,
  #contact textarea:focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }
  #contact input[type=submit] {
    border: 1px solid #2b2b2b !important;
    color: #2b2b2b;
    padding: 10px;
    font-weight: 700;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  #contact input[type=submit]:hover {
    background: #2b2b2b;
    color: #ffffff;
  }
  @-webkit-keyframes inputHighlighter {
    from {
      background: #5264AE;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @-moz-keyframes inputHighlighter {
    from {
      background: #818181;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @keyframes inputHighlighter {
    from {
      background: #818181;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
</style>
