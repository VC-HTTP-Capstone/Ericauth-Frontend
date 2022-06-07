<template>
  <div class="left fade1s">
    <div class="user_box">
      <div style="width:50%; float:left; box-sizing: border-box;">
        <img
          src="../assets/uth.jpg"
          width="90px"
          height="120px"
          style="margin-top:5px;"
        />
      </div>
      <div class="id" style="width:50%; float:right; box-sizing: border-box;">
        {{ this.$store.state.name }}
        <hr />
        {{ this.$store.state.team }}
        <hr />
        {{ this.$store.state.student_id }}
      </div>
    </div>
    <router-link to="/auth_management">
      <div class="sidebar" style="color:white; margin-top:20px;">
        <img src="../assets/document.png" width="45" height="45" class="mr-3" />
        인증서 관리
      </div>
    </router-link>
    <router-link to="/mywallet">
      <div class="sidebar" style="color:white;">
        <img src="../assets/mywallet.png" width="45" height="45" class="mr-3" />
        인증서 지갑
      </div>
    </router-link>
    <!-- <router-link to="/customer_service">
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
    </router-link> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.user_box {
  width: 225px;
  border: 1px solid;
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 30px;
  height: 150px;
  padding: 10px;
  background-color: #eff1f0;
  border-radius: 20px;
  border-color: lightgrey;
}
.navbar-brand {
  font-size: 24px;
  font-family: "IBM Plex Sans KR", sans-serif;
  color: white;
  text-align: justify;
}
.sidebar {
  padding: 20px;
  font-size: 28px;
  font-family: "IBM Plex Sans KR", sans-serif;
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
.id {
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 16px;
  text-align: center;
}
</style>
