<template>
  <div>
    <LeftSideBar></LeftSideBar>
    <div class="right fade1s">
      <div style="margin-top:30px; margin-left:50px; margin-right:300px;">
      <div class="profile">
        <span>행사 조회</span>
        <hr>
      </div>

      <div class="scanner_layout">
        <StreamBarcodeReader @decode="readData"></StreamBarcodeReader>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
import LeftSideBar from '../../components/council_student/Council_sidebar.vue';
import { StreamBarcodeReader } from "vue-barcode-reader";
import { JSEncrypt } from "jsencrypt";

export default {
  components:{
    LeftSideBar,
    StreamBarcodeReader,
  },
  methods : {
    readData (result) {
      let decryptor = new JSEncrypt();
      decryptor.setPrivateKey(this.$store.state.privateKey);
      let decrypted = decryptor.decrypt(result);
      let li = JSON.parse(decrypted);
      fetch("http://localhost:8080/api/ericaverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: li.name,
          team: li.team,
          studentId: li.studentId,
          phoneNumber: li.phoneNumber,
          issuer: li.issuer,
          paymentStatus: li.paymentStatus,
          eventName: this.$store.state.eventName,
          eventEmail: this.$store.state.email
        })
      })
        .then(response => response.json())
        .then(data => {
          if(data.result === isWrong){
            alert("잘못된 인증서 입니다")
          }
          else if(data.result === isAlreadyUsed){
            alert("이미 사용된 인증서 입니다")
          }
          else if(data.result === notExisted){
            alert("존재하지 않는 행사입니다")
          }
          else{
            alert("인증 성공")
          }
        })
        .catch(error => {
          alert("잘못된 입력입니다.");
        });

    }
  }
}
</script>

<style>
div.right {
  width: 83%;
  height: 100vh;
  float: right;
  background: white;
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
.scanner_layout{
  margin-left: 200px;
  margin-top: 100px;
  width: 500px;
  height: 370px;

}
.profile {
  text-align: left;
  font-size: 40px;
  font-family: 'SEBANG_Gothic_Bold';
}
</style>
