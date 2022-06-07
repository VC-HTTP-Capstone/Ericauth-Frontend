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

      <div class="container">
        <a
          class="a"
          href="/wallet"
          style="margin-top:30px; width:50%; height:500px;padding-top:100px; border: 3px solid grey; border-radius: 70px;margin-right: 30px"
        >
          <img
            src="../../assets/document.png"
            border="1"
            width="220px"
            height="190px"
            alt=""
          />
          <div style="margin-top:100px; font-size:32px" class="text">
            인증서 발급받기
          </div>
        </a>

        <!-- <a class="a" href="/wallet-ui-store" style="margin-top:80px;width:300px;height:400px;padding-top:100px; border: 3px solid grey; border-radius: 70px;margin-right: 30px">
        <img src="../../assets/issuer.png" border="1" width=170px height=120px alt="">
        <div style="clear: both; margin-top:30px;">
          <div style="margin-top:100px;" class="text">학생회비 증명서 발급</div>
        </div>
      </a> -->

        <a
          class="a"
          href="/mywallet"
          style="margin-top:30px;width:50%;height:500px;padding-top:100px; border: 3px solid grey; border-radius: 70px"
        >
          <img
            src="../../assets/mywallet.png"
            border="1"
            width="220px"
            height="190px"
            alt=""
          />
          <div style="clear: both; margin-top:30px;">
            <div style="margin-top:100px; font-size:32px" class="text">
              인증서 지갑
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSideBar from "../../components/Sidebar.vue";

export default {
  methods: {
    goTo() {
      this.$router.push("Qrscan");
    }
  },
  components: {
    LeftSideBar
  }
};
</script>

<style scoped>
.container {
  margin-top: 50px;
  margin-left: 70px;
  margin-right: 70px;
  text-align: center;
  align-content: flex-start;
  display: flex;
}
.hide {
  display: none;
}

.fade1s {
  animation: fade-in 1.5s ease-in-out;
}

.profile {
  text-align: left;
  font-size: 40px;
  font-family: "SEBANG_Gothic_Bold";
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
  background: rgba(16, 50, 92, 0.15);
}

@font-face {
  font-family: "RixYeoljeongdo_Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/RixYeoljeongdo_Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "SEBANG_Gothic_Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
.a {
  display: block;
  width: 500px;
  height: 500px;
  text-decoration-line: none;
}
.a img {
  transition: all 0.2s linear;
}
.a:hover img {
  transform: scale(1.4);
}
a.mButton span {
}
.text {
  color: black;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 20px;
}
</style>
