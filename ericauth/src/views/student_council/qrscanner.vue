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
        <StreamBarcodeReader></StreamBarcodeReader>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
import LeftSideBar from '../../components/council_student/Council_sidebar.vue';
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components:{
    LeftSideBar,
    StreamBarcodeReader,
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
  width: 500px;
  height: 370px;

}
.profile {
  text-align: left;
  font-size: 40px;
  font-family: 'SEBANG_Gothic_Bold';
}
</style>
