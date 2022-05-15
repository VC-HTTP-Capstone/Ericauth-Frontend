<template>
<div>
  <meta charset="utf-8">
  <select v-model="selected" class="form-select" aria-label="Default select example">
    <option disabled value>엄태호</option>
    <option>야식사업</option>
    <option>준비중...</option>
  </select>
  <span>엄태호 : {{ selected }}</span>

  <span> email : {{ $route.query.email }}</span>
  <br>
  <span> 이름 : {{ $route.query.name2 }}</span>
  <br>
  <span> 학번 : {{ $route.query.student_id }}</span>
  <br>
  <span> 소속 : {{ $route.query.team }}</span>
  <br>
  <div>
    <button class="button_style btn btn-primary fade3s" type="button" v-on:click="savedata">확인</button>
  </div>
  <input class="hide" type="radio" name="attend" v-model="radioValues" value="attending">
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
