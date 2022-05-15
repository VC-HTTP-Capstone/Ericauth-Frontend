<template lang="html">

</template>

<script>
import authentication from '../authentication.js'
console.log('worker.html: Activating handler, WALLET_LOCATION:', authentication.WALLET_LOCATION);
authentication.activateWalletEventHandler();
export default {
  
}
</script>

<style lang="css" scoped>
</style>
