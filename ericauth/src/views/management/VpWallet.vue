<template>
<div>
  <LeftSideBar></LeftSideBar>
  <div class="parent">
    <div class="child1">
      <center>
        <div style="margin-top:150px; margin-bottom: 150px;">
          <img style="width:50%; height:50%; border-radius:20px;" src="../../assets/chicken.png">
        </div>
        <div>
          <button class="checkbtn" @click="moveQr">야식사업</button>
        </div>
      </center>
    </div>
    <div class="child1">
      <center>
        <div style="margin-top:100px; margin-bottom: 100px;">
          <img style="width:50%; height:50%; border-radius:20px;" src="../../assets/vote.jpg">
        </div>
        <div>
          <button class="checkbtn" @click="moveQr">투표</button>
        </div>
      </center>
    </div>

  </div>
</div>
</template>

<script>
import LeftSideBar from '../../components/Sidebar.vue'



export default {
  name:'auth_management',
  methods:{
    moveQr: function(){
              this.$router.push('qrscan')
    },
  },
  components: {
    LeftSideBar,
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

.parent{
  display: flex;
  height: 100vh;
  position: relative;
  z-index: 1;
}
.child1{
  flex:1;
  border:solid 1px;
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
.checkbtn{
  width:50%;
  height: 50px;
  border:0;
}

</style>
