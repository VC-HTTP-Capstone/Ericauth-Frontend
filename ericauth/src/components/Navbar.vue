<template>
<div class="header">
  <nav class="navbar navbar-expand-lg bg-secondary navbar-dark fixed-top">
    <img src="../assets/lock.png" width="45" height="45" class="mr-3" alt="">
    <a id="navbar-main" class="navbar-brand mr-5" href="/auth_management">ERICAUTH</a>
    <div v-if="this.$store.state.email !== 'empty'" class="right">
      {{ this.$store.state.email }}
      <LogoutButton></LogoutButton>
    </div>

  </nav>
</div>
</template>

<script>
import LogoutButton from './LogoutButton.vue';

export default {
  data() {
    return {
      email: this.$store.state.email
    }
  },
  methods: {
    refreshAll() {
      // 새로고침
      this.$router.go();
    },

  },
  components: {
    LogoutButton,
  }
}
</script>
<style scoped>
.header {
  padding-top: 86px;
}

#navbar-main {
  font-size: 40px;
  font-family: Impact, sans-serif;
}

.navbar-brand {
  font-size: 24px;
  font-family: Impact, sans-serif;
}

.navbar-item {
  font-size: 24px;
  color: white;
  font-family: 'Recursive', sans-serif;
  font-family: 'Source Code Pro', monospace;
  font-family: 'Varela Round', sans-serif;
  margin-bottom: 21px;
}

div.right {
  margin-left: 800px;
}
</style>
