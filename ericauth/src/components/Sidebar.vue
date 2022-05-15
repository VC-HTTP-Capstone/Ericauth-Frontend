<template>
  <div class="left fade1s">
    <!-- <router-link to="/information"> // 내정보 회원가입으로 받아서 더이상 필요 x
      <div class="sidebar" style="color:white;">
        <img src="../assets/information.png" width="45" height="45" class="mr-3" alt="">
        내 정보
      </div>
    </router-link> -->
    <router-link to="/auth_management">
      <div class="sidebar" style="color:white;">
        <img src="../assets/document.png" width="45" height="45" class="mr-3" alt="">
        인증서 관리
      </div>
    </router-link>
    <router-link to="/customer_service">
      <div class="sidebar" style="color:white;">
        <img src="../assets/service.png" width="45" height="45" class="mr-3" alt="">
        고객센터
      </div>
    </router-link>
    <router-link to="/notice">
      <div class="sidebar" style="color:white;">
        <img src="../assets/notice.png" width="45" height="45" class="mr-3" alt="">
        공지사항
      </div>
    </router-link>
    <div class="sidebar" style="margin-top:180px">
      <router-link to="/auth_management">
        <a class="navbar-brand" href="">
          <img src="../assets/my_information.png" width="45" height="45" class="mr-3" alt="">
          My
        </a>
      </router-link>

          <a class="navbar-brand" href="https://github.com/VC-HTTP-Capstone/ERICAUTH">
            <img src="../assets/github.png" width="45" height="45" class="mr-3" alt="">
            Github
          </a>
          <a class="navbar-brand" href="https://join.slack.com/t/vc-http-capstone/shared_invite/zt-soapb2du-71HHryNDNlY2XtaSSbE7Tw">
            <img src="../assets/slack.png" width="45" height="45" class="mr-3" alt="">
            Slack
          </a>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.navbar-brand {
  font-size: 24px;
  font-family: Impact, sans-serif;
  color: white;
  text-align: justify;
}
.sidebar {
  padding: 20px;
  font-size: 24px;
  font-family: 'RixYeoljeongdo_Regular';
}
div.left {
  width: 17%;
  height: 100vh;
  float: left;
  background: rgba(16, 50, 92, 0.522);
}
.fade1s {
  animation: fade-in 1.5s ease-in-out;
}
</style>
