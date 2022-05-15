<template>
  <div>
    <div class="parent">
      <div class="child1">
      </div>
      <div class="child2">
          <div class="marginall" style="background-color:white; ">
            <div style="margin-left:100px; margin-right:100px;">
              <center>
                <div class="div_size fade1s eng_font">
                  ERICAUTH
                </div>
                <div class="div_size" v-if="toggle">
                    <div style="margin-top:50px;">
                      <button class="btstyle" style="margin-right:-2.5px; background-color: #0088CC;" @click="toggle = !toggle">학생</button>
                      <button class="btstyle" style="margin-left:-2.5px; background-color: #39BAE5;" @click="toggle = !toggle">학생회</button>
                      <hr style="border:solid #d3d3d3; margin-top:0px;">
                      <input class="inp fade2s" placeholder="이메일" type="text" style="text-align:center; font-size:19px; " v-model="email">
                    </div>
                    <div style="margin-top:20px;">
                      <input class="inp fade2s" placeholder="비밀번호" type="password" style="text-align:center; font-size:19px;" v-model="password">
                    </div>
                    <div>
                      <center>
                        <a class="fade2s link"href="/password">비밀번호를 잊으셨나요?</a>
                      </center>
                    </div>
                    <button class="button_style btn btn-primary fade3s" style="margin-bottom:20px; border-radius: 10px;" type="button" v-on:click="signIn_student">로그인</button>
                    <hr style="border: solid #d3d3d3">
                    <div style="margin-top: 40px;">
                      <center>
                        <button class="register"type="button" onclick="location.href='/register'">회원가입</button>
                      </center>
                    </div>
                </div>
                <div class="div_size" v-else>
                  <div style="margin-top:50px;">
                    <button class="btstyle" style="margin-right:-2.5px; background-color: #39BAE5;" @click="toggle = !toggle">학생</button>
                    <button class="btstyle" style="margin-left:-2.5px; background-color: #0088CC;;" @click="toggle = !toggle">학생회</button>
                    <hr style="border:solid #d3d3d3; margin-top:0px;">
                    <input class="inp fade2s" placeholder="이메일" type="text" style="text-align:center; font-size:19px; " v-model="email">
                  </div>
                  <div style="margin-top:20px;">
                    <input class="inp fade2s" placeholder="비밀번호" type="password" style="text-align:center; font-size:19px;" v-model="password">
                  </div>
                  <div>
                    <center>
                      <a class="fade2s link"href="/password">비밀번호를 잊으셨나요?</a>
                    </center>
                  </div>
                  <button class="button_style btn btn-primary fade3s" style="margin-bottom:20px; border-radius: 10px;" type="button" v-on:click="signIn_association">로그인</button>
                  <hr style="border: solid #d3d3d3">
                  <div style="margin-top: 40px;">
                    <center>
                      <button class="register"type="button" onclick="location.href='/register'">회원가입</button>
                    </center>
                  </div>
                </div>
              </center>
            </div>
          </div>
      </div>
      <div class="child1">
      </div>
    </div>
  </div>
</template>

<script>
   import { getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
   export default {
     data () {
       return {
         email: '',
         password: '',
         name: '',
         toggle:true
       }
     },
     methods: {

       /*
        * 로그인 함수
        * E-mail과 Password를 입력받아, Firebase에서 조회 후 로그인 진행
       */
      signIn_student: function() {
        const auth = getAuth();
        let url = 'https://test-edc56-default-rtdb.firebaseio.com/' + this.email.replaceAll('.','-') + '/information.json';
        var jsonTest;
        let self = this;
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            const user = auth.currentUser;
            alert("로그인 성공!")
            if(user){
              this.$store.commit('persistedID',{
                value: auth.currentUser.email
              });
              self.$router.push('auth_management')
            }
            else{
              console.log("routing error")
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            alert("로그인 실패")
          });
       },
       signIn_association: function() {
         const auth = getAuth();
         let url = 'https://test-edc56-default-rtdb.firebaseio.com/' + this.email.replaceAll('.','-') + '/information.json';
         var jsonTest;
         let self = this;
         signInWithEmailAndPassword(auth, this.email, this.password)
           .then((userCredential) => {
             const user = auth.currentUser;
             alert("로그인 성공!")
             if(user){
               this.$store.commit('persistedID',{
                 value: auth.currentUser.email
               });
               self.$router.push('verifyType')
             }
             else{
               console.log("routing error")
             }
           })
           .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             console.log(errorCode)
             console.log(errorMessage)
             alert("로그인 실패")
           });
        },
       logOut: function(){
         const auth = getAuth();
         signOut(auth).then(() => {
          console.log(auth);
          this.$store.commit('persistedID',{
            value: "empty"
          })
         }).catch((error) => {
          console.log("error");
         });
       },

    }
  }
</script>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade2s {
  animation: fade-in 2s ease-in-out;
}
.fade1s {
  animation: fade-in 1s ease-in-out;
}
.parent{
  display: flex;
  height: 100vh;
  position: relative;
  z-index: 1;
}
.parent:after{
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  background-image: url("../../assets/erica.jpg");
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
  top:0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
}
.child1{
  flex:3;
}
.child2{
  display: flex;
  flex:4;

  align-items: center;
}

div.left {
  width: 55%;
  height : 100vh;
  float: left;
}

div.right {
  width: 45%;
  height : 100vh;
  float: right;
}
.margin_top{
  margin-top: 170px;
}
input::placeholder {
  text-align: left;
}
.div_size{
  width: 90%;
}
.button_style{
  margin-top : 30px;
  width: 100%;
  height : 50px;
}
/*
 * input form
*/
.inp {
    border: 1px solid #a9a9a9;
    border-radius: 10px;
    line-height: 2.5;
    padding: 5px 10px;
    outline: none;
    width: 100%;
}

[placeholder]:focus::-webkit-input-placeholder {
    transition: text-indent 0.4s 0.4s ease;
    text-indent: -100%;
    opacity: 1;
}

@font-face {
  font-family: 'RixYeoljeongdo_Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/RixYeoljeongdo_Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.eng_font{
  font-family: 'Atma', cursive;
  text-align: center;
  font-size: 60px;
  margin-top: 50px;
}
.link{
  display: inline-block;
  margin-top: 30px;
}
.register{
  display: inline-block;
  height:50px;
  width: 200px;
  border:0;
  outline: 0;
  background-color: #2b961f;
  color: white;
  border-radius: 10px;
  margin-bottom: 50px;
}
.register:hover{
  background-color: #006b00;
  color: white;
}
.marginall{
  margin-left: 30px;
  margin-right: 30px;
  padding: 10px;
  border-radius: 30px;
  width: 100%;
}
.hrstyle{
  size: 10;
}
.btstyle{
  border:0;
  outline: 0;
  width: 50%;
  height: 40px;
  color: white;

}
</style>
