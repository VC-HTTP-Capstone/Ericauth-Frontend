<template>
<div>
  <LeftSideBar></LeftSideBar>
  <div class="right fade1s">
    <div style="margin-top:30px; margin-left:50px; margin-right:300px;">
      <div class="profile">
        <span>증명서 발급 신청</span>
      </div>
      <hr />
    </div>
    <div id="confirm">
      <div class="font"style="margin-top:60px;">ㅁ 학생회비 납부 영수증 첨부</div>
      <br>
      <input type="file" @change='onInputImage()' ref='serveyImage' accept="img/JPG" required style="margin-top:30px; margin-left:40px;">




        <div style="margin-top:70px;">
          <button style="width:200px; margin-right:100px; margin-left:100px;" class="button_style btn btn-primary fade3s sidebar" @click="issueNightmeal">발급신청</button>
          <a style="width:200px; margin-right:100px; margin-left:100px;" class="button_style btn btn-primary fade3s sidebar" href="/auth_management">취소</a>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import LeftSideBar from '../../../components/Sidebar.vue'

let today = new Date();

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let hours = today.getHours(); // 시
let minutes = today.getMinutes();  // 분
let seconds = today.getSeconds();  // 초
let Idate = year + "-" + month + "-" + date + "T" + hours + ":" + minutes + ":" + seconds;

export default {
  data(){
    return{
      email:this.$store.state.email,
      student_id:this.$store.state.student_id,
      name:this.$store.state.name,
      image: '',
    }
  },
  methods:{
    onInputImage: function(){
      this.image = this.$refs.serveyImage.files
      console.log("this input image : ", this.image);
    },

    issueNightmeal: function(){
      // console.log(this.email);
      // console.log(this.student_id);
      let url = 'https://test-edc56-default-rtdb.firebaseio.com/' + this.email.replaceAll('.','-') + '/vc.json';
      console.log(url);
      var payment = {
          "credential": {
            "@context": [
              "127.0.0.1:8080/nightfood",
            ],
            "name": this.name,
            "id": "vc-http " + this.email,
            "type": [
              "nightmealverifycredential",
            ],
            "issuer": "ERICAUTH",
            "issuanceDate": Idate,
            "credentialSubject": {
              "id": "vc-http " + this.email,
              "mealinfo": {
                "type": "nightfood",
                "name": "2022 midterm nightmeal"
              }
            }
          },
      };
      fetch(url, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({
        payment
      })
      });
      console.log(payment);
      if(this.image === ""){
        alert("영수증이 첨부되지 않았습니다.")
      }
      else{
        alert("발급신청이 완료되었습니다.")
        this.$router.push('auth_management')
      }

    },
  },
  components : {
    LeftSideBar,
  }
}
</script>

<style scoped>
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
  background: white;
}

.sidebar {
  padding: 20px;
  font-size: 24px;
  font-family: 'RixYeoljeongdo_Regular';
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

.text1 {
  font-size: 20px;
  font-family: 'RixYeoljeongdo_Regular';
  display: inline-block;
  width: 50%;
  height: 50px;
  border-radius: 40px;

  outline: none;
}

.text2 {
  font-size: 30px;
  font-family: 'RixYeoljeongdo_Regular';
  display: inline-block;
  width: 50%;
  height: 50px;
  border-radius: 40px;

  outline: none;
}
.font {
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-size: 25px;
  margin-left: 40px;
}
.profile {
  text-align: left;
  font-size: 40px;
  font-family: 'SEBANG_Gothic_Bold';
}
</style>
