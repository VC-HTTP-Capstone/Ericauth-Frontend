<template>
  <div class="parent">
    <h2 class="text-center py-4 fade1s" style="margin-top:150px;">비밀번호를 잊으셨나요?</h2>
    <div class="text-center fade2s" style="font-size: 1.1em;">아래에 당신의 이메일 주소를 입력해주세요.<br> 비밀번호를 재설정하기 위한 메시지가 발송됩니다.</div>
    <form class="form-inline justify-content-center mt-5 py-3 fade3s">
      <div class="form-group mx-sm-5 mb-2">
        <input type="text" class="form-control" id="inputemail" placeholder="E-Mail" v-model="email">
      </div>
      <button type="button" class="btn btn-secondary mb-2" v-on:click="sendEmail">Submit</button>
    </form>
    <div class="d-flex justify-content-center fade3s py-3">
      <button type="button" class="btn btn-outline-primary" v-on:click="goBack">뒤로가기</button>
    </div>
  </div>
</template>

<script>
import { sendPasswordResetEmail,getAuth } from "firebase/auth";
  export default {
    data () {
      return {
        email: ''
      }
    },
    methods: {
      /*
       * 뒤로가기 함수
      */ 
      goBack: function(event) {
        if(event) {
          window.history.back();
          console.log("Check");
        }
      },

      /*
       * 비밀번호 변경을 원할 경우,
       * 이메일을 입력받아, 비밀번호 재전송 이메일을 전송
      */
      sendEmail: function() {
        const auth = getAuth();
        auth.languageCode = 'ko';
        sendPasswordResetEmail(auth, this.email)
          .then(() => {
            alert("이메일 전송 성공!")
            console.log('sendemail')
            console.log(this.email)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            alert("존재하는 계정이 아닙니다!")
          });
      },
    }
  }
</script>

<style scoped>
.fade3s {
  animation: fade-in 3s ease-in-out;
}
.fade2s {
  animation: fade-in 2s ease-in-out;
}
.fade1s {
  animation: fade-in 1s ease-in-out;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
