<template>
<div>
  <LeftSideBar></LeftSideBar>
  <div class="right fade1s">
    <center>
      <div class="container-fluid">
        <div class="title" style="background-color:#FDF6EC; border:0;">
          <b style="color:#404040; font-size:70px;">인증서 발급</b>
        </div>
        <div>
          <wj-barcode-qr-code :value="theValue"></wj-barcode-qr-code>
        </div>
      </div>
      <div>
        <input placeholder="인증서 이름을 입력해 주세요" type="text" class="issuename" v-model="issueName">
      </div>
      <div style="margin-top:30px;">
        <button class="issuebtn"> 발급 </button>
        <button class="removebtn" @click="cancle"> 취소 </button>
      </div>
    </center>
  </div>
</div>
</template>

<script>
import LeftSideBar from '../../components/Sidebar.vue'
import '@grapecity/wijmo.vue2.barcode.common';


export default {
  name:'qrscan',
  data(){
    return{
      issueName:'',
      theValue: this.$store.state.email,
    }
  },
  components: {
    LeftSideBar,
  },
  methods: {
    cancle: function(){
      this.$router.push('auth_management');
    }
  }
}
</script>


<style scoped>
section {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
}

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
  background: #FDF6EC;
}

.sidebar {
  padding: 20px;
  font-size: 24px;
  font-family: 'RixYeoljeongdo_Regular';
}

.wj-barcode-qrcode {
  width: 500px;
  height: 500px;
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
.title{
  margin-top:30px;
  margin-bottom:30px;
  border:solid 1px;
  width:50%;
}
.issuename{
  font-size: 30px;
  width:50%;
  text-align: center;
  margin-top:30px;
}
.issuebtn{
  width:20%;
  height:5vh;
  border:0;
  outline: 0;
  color:white;
  background-color: #21BF73;
  margin-right: 15px;
}
.issuebtn:hover{
  background-color: #4AA96C;
}
.removebtn{
  width:20%;
  height:5vh;
  border:0;
  outline: 0;
  color:white;
  background-color: #FD5E53;
  margin-left: 15px;
}
.removebtn:hover{
  background-color: #DB4455;
}

</style>
