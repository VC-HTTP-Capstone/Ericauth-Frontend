<template>
<div>
  <LeftSideBar></LeftSideBar>
  <div class="right fade1s">
    <div style="margin-top:30px; margin-left:50px; margin-right:300px;">
      <div class="profile">
        <span>인증서 관리</span>
      </div>
      <hr />
    </div>
    <div style="margin-top:50px; margin-left:70px; margin-right:300px; text-align:center;">
      <div style="float:left;width:50%;height:50%; border-right: 3px solid #A4B9C6; border-bottom: 3px solid #A4B9C6;" class="py-4 ">
        <img src="../../assets/document.png" border="1" width="180" height="180" alt="상,좌">
        <div style="clear: both; margin-top:30px;">
          <a class="button_style btn btn-secondary" href="/wallet">내 인증서 관리</a>
        </div>
      </div>

      <div style="clear:right;float:right;width:50%;height:50%;border-bottom: 3px solid #A4B9C6;" class="py-4">
        <img src="../../assets/issuer.png" border="1" width="180" height="180" alt="상,좌">
        <div style="clear: both; margin-top:30px;">
          <a class="button_style btn btn-secondary" href="/wallet-ui-store">인증서 발급받기</a>

        </div>
      </div>

      <div style="float:left;width:50%;height:50%;border-right: 3px solid #A4B9C6;" class="py-5">
        <img src="../../assets/verifier.png" border="1" width="180" height="180" alt="상,좌">
        <!-- <router-link to="/qrscan"> -->
        <div style="clear: both; margin-top:30px;">
          <button id="verify_nightmeal_button" class="button_style btn btn-secondary" type="button" v-on:click="goTo">인증하기</button>
        </div>
        <!-- </router-link> -->


        <div class="hide" id="resultsPanel">
          <center>
            <p><strong style="color:white" class="text bg-dark sweep">Result of Request</strong></p>
          </center>
          <code style="color:black" id="getResults" class="fadedin"></code>
        </div>
      </div>

      <div style="clear:right;float:right;width:50%;height:50%;" class="mt-5 py-5">
        <div style="margin-top:70px;">
          <span class="profile">Comming Soon..</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LeftSideBar from '../../components/Sidebar.vue';


export default {
  name: 'auth_management',
  methods: {
    goTo() {
      this.$router.push("vpwallet");
    }
  },
  components: {
    LeftSideBar,
  }
}
</script>

<style scoped>
/* section {
    position:absolute;
    top:50%;
    left:0;
    width:100%;
    height:50%;
} */

.hide {
  display: none;
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

div.right {
  width: 83%;
  height: 100vh;
  float: right;
  background: rgba(16, 50, 92, 0.150);
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
