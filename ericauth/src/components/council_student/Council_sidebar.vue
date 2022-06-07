<template>
  <div class="left fade1s">
    <div class="user_box">
      <div style="width:50%; float:left; box-sizing: border-box;">
        <img src="../../assets/user.png" width="90" height="90" style="margin-top:18px; margin-left:5px;">
      </div>
      <div class = "id" style="width:50%; float:right; box-sizing: border-box;">
          소프트웨어융합대학
          <hr>
          {{ this.$store.state.team }}
          <hr>
          {{ this.$store.state.email }}
      </div>
    </div>
    <router-link to="/event_management">
      <div class="sidebar" style="color:white; margin-top:20px;">
        <img src="../../assets/management.png" width="45" height="45" class="mr-3" alt="">
        행사관리
      </div>
    </router-link>
    <router-link to="/council_student_holding_event">
      <div class="sidebar" style="color:white;">
        <img src="../../assets/document.png" width="45" height="45" class="mr-3" alt="">
        행사개최
      </div>
    </router-link>
    <router-link to="/event_check">
      <div class="sidebar" style="color:white;">
        <img src="../../assets/service.png" width="45" height="45" class="mr-3" alt="">
        행사조회
      </div>
    </router-link>
    <div class="sidebar" style="margin-top:180px">
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.user_box {
  width: 225px;
  border:1px solid;
  margin-top : 30px;
  margin-left: 10px;
  margin-right: 30px;
  height: 150px;
  padding: 10px;
  background-color: #CEE3F6;
  border-radius: 20px;
  border-color: rgba(16, 50, 92, 0.522);
}
.navbar-brand {
  font-size: 24px;
  font-family: 'IBM Plex Sans KR', sans-serif;
  color: white;
  text-align: justify;
}
.sidebar {
  padding: 20px;
  font-size: 28px;
  font-family: 'IBM Plex Sans KR', sans-serif;
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
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-size: 12px;
  text-align: center;
}
</style>
