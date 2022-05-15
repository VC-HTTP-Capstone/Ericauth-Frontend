<template>
<div>
  <center>
    <div style="width:50%">
      <button class="button_style btn btn-primary fade3s" type="button" v-on:click="drive">/credential/drive</button>
      {{ this.json }}
    </div>
  </center>
</div>
</template>

<script>

export default {
  data(){
    return{
      json:""
    }
  },
  methods:{
    drive:function(){
      let url = 'https://test-edc56-default-rtdb.firebaseio.com/' + this.$store.state.email.replaceAll('.','-') + '/vc.json';
      var jsonTest;
      let self = this;
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          jsonTest = myJson;
          self.json = jsonTest;
          console.log(jsonTest);
        });
      console.log(this.json);
    }
  }
}
</script>

<style scoped>
.fade3s {
  animation: fade-in 3s ease-in-out;
}

.fade2s {
  animation: fade-in 2s ease-in-out;
}

.fade1s {
  animation: fade-in 1s ease-in-out;
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
  width: 55%;
  height: 100vh;
  float: left;
}

div.right {
  width: 45%;
  height: 100vh;
  float: right;
  background-color: white;

}

.margin_top {
  margin-top: 50px;
}

input::placeholder {
  text-align: left;
}

.div_size {
  width: 100%;
}

.button_style {
  margin-top: 30px;
  width: 100%;
  height: 50px;
}

.inp {
  border: none;
  border-bottom: 1px solid #1890ff;
  padding: 5px 10px;
  outline: none;
  width: 100%;
}

[placeholder]:focus::-webkit-input-placeholder {
  transition: text-indent 0.4s 0.4s ease;
  text-indent: -100%;
  opacity: 1;
}

.auth {
  margin-top: 100px;
  margin-left: 80px;
  box-sizing: border-box;
  width: 300px;
  height: 500px;
  background: linear-gradient(to bottom, skyblue 0%, white 50%, skyblue 100%);
  border-radius: 40px 40px 40px 40px;
}

.parent {
  display: flex;
  align-items: center;
}

.kms {
  margin-top: 20px;
  margin-left: 20px;
}

.name_margin {
  padding-top: 110px;
}

.name_font {
  font-family: 'Cute Font', cursive;
  font-size: 55px;
}

.hide {
  display: none;
}

.delbutton {
  margin-top: 20px;
}
</style>
