<template lang="html">
  <div>
    <LeftSideBar></LeftSideBar>
    <div class="child_side1"></div>
    <div class="right fade1s verify_text">
      <center>
        <div id="logged-in">
          <div id="confirm" class="hided">
            <p><strong style="color:white"></strong> </p><p> <span id="requestOrigin"></span></p>
            <p><strong style="color:white"></strong> </p><p><span id="requestReason"></span></p>
          </div>
          <div class="sweep mt-5 py-3">
            <h1 style="text-align: center;" class="mt-5 py-3">야식사업 인증&nbsp;<img src="../../../assets/nightmeal.png" width="80" height="80"></h1>
            <h2 style="text-align: center;" class="mt-5 py-2"> 검증받을 인증서를 선택해주세요. </h2>
          </div>
          <div id="userArea">
            <p><strong style="color:white"></strong> </p><p> <span id="username" class="hided"></span></p>
            <p><strong style="color:white" class="text bg-dark">인증서</strong></p><p> <span class="text3" id="walletContents"></span></p>
          </div>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
import LeftSideBar from '../../../components/Sidebar.vue'

export default {
  components: {
    LeftSideBar,
  }
}
</script>

<style lang="css" scoped>
  .hided {
    display: none;
  }
  .center {
    text-align: center;
  }
  .parent1 {
    display: flex;
    height: 100vh;
  }
  .child_side1 {
    flex: 1;
    background-color: #FDF5E6;
  }
  .child_center1 {
    flex: 4;
  }
  .conf-btn {
    width: 40%;
    height: 50px;
    border: 0;
    outline: none;
    border-radius: 40px;
    margin-top: 30px;
    margin-right: 10px;
    margin-left: 10px;
    color: white;
    font-size: 1.2em;
    letter-spacing: 2px;
    padding-top: 7px;
  }
  .text{
    display:inline-block;
    font-size:1.2em;
    margin-top: 10px;
    border-radius: 40px;
    border-color: white;
    border: 2px solid lightgray;
    width: 20%;
    padding: 10px 20px;
  }
  .text1{
    display:inline-block;
    width:40%;
    font-size:1.2em;
    margin-top: 10px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 40px;
    padding: 10px;
    border: 2px solid lightgray;
    outline: none;
  }
  .text2{
    display:inline-block;
    width:60%;
    font-size:1.2em;
    margin-top: 10px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 40px;
    padding: 10px;
    border: 2px solid lightgray;
    outline: none;
  }
  .text3{
    display:inline-block;
    width:80%;
    font-size:1.2em;
    margin-top: 10px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 40px;
    padding: 10px 20px;
    border: 2px solid lightgray;
    outline: none;
  }
  .marg{
    margin-top:70px;
  }

  @keyframes sweep {
    0%    {opacity: 0; transform: translateX(-10px)}
    100%  {opacity: 1; transform: translateX(0)}
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slide-in {
     0% {
      top: -300px;
    }
    100% {
      top: 0;
    }
  }

  @keyframes scaleDown {
     0% {
      transform: scale(1);
    }
     10% {
      transform: scale(0.7);
    }
     95% {
      transform: scale(0.7);
    }
     100% {
      transform: scale(1);
    }
  }

  @keyframes reveal-info {
    0% {
      height: 0;
    }
    5% {
      height: 350px;
    }
    95% {
      height: 350px;
    }
    100% {
      height: 0;
    }
  }

  @-webkit-keyframes blink{
     0% {opacity:0;}
     100% {opacity:1;}
  }
  @-moz-keyframes blink{
    0% {opacity:0;}
    100% {opacity:1;}
  }
  @keyframes blink{
    0% {opacity:0;}
    100% {opacity:1;}
  }
  .blinking{
    -webkit-animation:blink 1.5s ease-in-out infinite alternate;
    -moz-animation:blink 1.5s ease-in-out infinite alternate;
    animation:blink 1.5s ease-in-out infinite alternate;
  }
 .sweep{
   animation: sweep 1.5s ease-in-out;
 }
 .fadedin{
   animation: fade-in 1.5s ease-in-out;
 }
 h2, h5 {
   font-family: 'Abel', sans-serif;
 }

.fade1s {
  animation: fade-in 1.5s ease-in-out;
}

.profile {
  text-align: left;
  font-size: 25px;
  font-family: 'SEBANG_Gothic_Bold';
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
div.left {
  width: 17%;
  height : 100vh;
  float: left;
  background: rgba(16, 50, 92, 0.522);
}
div.right {
  width: 83%;
  height : 100vh;
  float: right;
  background: rgba(16, 50, 92, 0.150);
}
.sidebar {
  padding: 20px;
  font-size: 24px;
  font-family: 'RixYeoljeongdo_Regular';
}

.verify_text {
  padding: 20px;
  font-size: 16px;
  font-family: 'SEBANG_Gothic_Bold';
}

@font-face {
  font-family: 'RixYeoljeongdo_Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/RixYeoljeongdo_Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
    font-family: 'SEBANG_Gothic_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
</style>
