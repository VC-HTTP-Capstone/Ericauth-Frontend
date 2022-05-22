<template>
  <button v-on:click="savedata"></button>
</template>

<script>
export default {
  methods: {
    savedata: function(){
      let url = 'https://test-edc56-default-rtdb.firebaseio.com/' + this.email.replaceAll('.','-') + '/vc.json';
      console.log(url);

      fetch(url, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({
        payment
      })
      });
      console.log(payment);
      if(this.image === ""){
        alert("영수증이 첨부되지 않았습니다.")
      }
      else{
        alert("발급신청이 완료되었습니다.")
        this.$router.push('auth_management')
      }

    }
  }
}
</script>

<style>
button {
  width: 300px;
  height: 42px;
  font-size: 15px;
  border: 1;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: #CEE3F6;
}
</style>
