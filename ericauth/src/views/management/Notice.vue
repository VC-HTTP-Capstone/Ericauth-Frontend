<template>
<div>
  <LeftSideBar></LeftSideBar>
  <div class="right">

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
</style>
