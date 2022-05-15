<template>
<div>
  <h1>야식사업 검증하기</h1>
  <button id="verify_nightmeal_button" class="button_style btn btn-primary" type="button" v-on:click="verify_nightmeal">야식 검증</button>
  <div class="hide" id="resultsPanel">
    <center>
      <p><strong style="color:white" class="text bg-dark sweep">Result of Request</strong></p>
    </center>
    <code style="color:black" id="getResults" class="fadedin"></code>
  </div>
</div>
</template>

<script>
export default {
  name: 'verifier',

}
</script>

<style scoped>
</style>
