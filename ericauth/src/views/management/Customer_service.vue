<template>
<div>
  <LeftSideBar></LeftSideBar>
  <div class="right fade3s">
    <div style="margin-top:30px; margin-left:50px; margin-right:50px;">
      <div class="service">
        <span>고객센터</span>
        <img src="../../assets/service1.png" width="45" height="45" class="mr-3" alt="">
      </div>
      <div class="category">
        <span>궁금한 것이 있으면 무엇이든 물어보세요!</span>
      </div>
      <hr />
      <div class="service" style="text-align: center;">
        자주하는 질문
      </div>
      <div style="text-align: center; margin-top: 10px;">
        <span class="text-box">
          <input class="question" placeholder="검색어를 입력하세요" type="text" style="text-align: left; font-size:19px;">
          <button class="button_style btn btn-dark" type="button" style="margin-left: 5px;" v-on:click="openNew">검색</button>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <table class="table table-striped table-dark" style="margin-top: 200px; margin-left: 200px;">
          <thead>
            <tr>
              <th scope="col">Q</th>
              <td>제 인증 정보가 어떻게 관리되는지 알고 싶습니다.</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Q</th>
              <td>엄</td>
            </tr>
            <tr>
              <th scope="row">Q</th>
              <td>태</td>
            </tr>
            <tr>
              <th scope="row">Q</th>
              <td>호</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LeftSideBar from '../../components/Sidebar.vue'

export default {
  components: {
    LeftSideBar,
  }
}
</script>

<style scoped>
.fade3s {
  animation: fade-in 3s ease-in-out;
}

.fade1s {
  animation: fade-in 1.5s ease-in-out;
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
  height: 100vh;
  float: left;
  background: rgba(16, 50, 92, 0.522);
}

div.right {
  width: 83%;
  height: 100vh;
  float: right;
  background: rgba(16, 50, 92, 0.150);
}

.sidebar {
  color: white;
  padding: 20px;
  font-size: 25px;
  font-family: 'RixYeoljeongdo_Regular';
}

.service {
  text-align: left;
  font-size: 25px;
  font-family: 'SEBANG_Gothic_Bold';
}

.category {
  text-align: left;
  font-size: 15px;
  font-family: 'SEBANG_Gothic_Bold';
}

.question {
  border: none;
  border-bottom: 1px solid #310b0b;
  padding: 5px 10px;
  outline: none;
  width: 30%;
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
