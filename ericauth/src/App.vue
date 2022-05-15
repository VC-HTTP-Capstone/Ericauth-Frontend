<template>
  <div class="body" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import Footer from "./components/common/Footer.vue";
export default {
  name: 'app',
  components: {
    NavBar,
    Footer,
  },
}
</script>

<style scoped>
.body {
  background-color: #FFFFFF;
}
.page-enter-active, .page-leave-active {
  transition: opacity .4s;
}
.page-enter, .page-leave-to  {
  opacity: 0;
}

</style>
