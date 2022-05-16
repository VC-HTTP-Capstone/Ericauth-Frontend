<template>
  <div>
    <div class="parent">
      <div class="child1"></div>
      <div class="child2">
        <div class="marginall" style="background-color:white; ">
          <div style="margin-left:100px; margin-right:100px;">
            <center>
              <div class="div_size fade1s kor_font">
                회원가입
              </div>
              <div class="div_size">
                <div style="margin-top:20px;">
                  <input
                    class="inp fade2s"
                    placeholder="이름"
                    type="text"
                    style="text-align:center; font-size:19px; "
                    v-model="name"
                  />
                </div>
                <div style="margin-top:20px;">
                  <input
                    class="inp fade2s"
                    placeholder="학번"
                    type="text"
                    style="text-align:center; font-size:19px;"
                    v-model="student_id"
                  />
                </div>
                <div style="margin-top:20px;">
                  <input
                    class="inp fade2s"
                    placeholder="학과"
                    type="text"
                    style="text-align:center; font-size:19px;"
                    v-model="team"
                  />
                </div>
                <div style="margin-top:20px;">
                  <input
                    class="inp fade2s"
                    placeholder="010-xxxx-xxxx"
                    type="text"
                    style="text-align:center; font-size:19px;"
                    v-model="phoneNumber"
                  />
                </div>
                <div style="margin-top:20px;">
                  <input
                    class="inp fade2s"
                    placeholder="이메일"
                    type="text"
                    style="text-align:center; font-size:19px;"
                    v-model="email"
                  />
                </div>
                <div style="margin-top:20px;">
                  <input
                    class="inp fade2s"
                    placeholder="비밀번호"
                    type="password"
                    style="text-align:center; font-size:19px;"
                    v-model="password"
                  />
                </div>
                <div style="margin-top:20px;">
                  <input
                    class="inp fade2s"
                    placeholder="비밀번호 확인"
                    type="password"
                    style="text-align:center; font-size:19px;"
                    v-model="password2"
                  />
                </div>

                <button
                  class="button_style btn btn-primary fade3s"
                  style="margin-bottom:20px; border-radius: 10px;"
                  type="button"
                  v-on:click="SignUp"
                >
                  회원가입
                </button>
              </div>
            </center>
          </div>
        </div>
      </div>
      <div class="child1"></div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      password2: "",
      name: "",
      student_id: "",
      team: "",
      phoneNumber: ""
    };
  },
  methods: {
    /*
     * 회원 가입 합수
     * 회원 가입 진행 후 /login으로 리다이렉트.
     */
    SignUp: function() {
      fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          password2: this.password2,
          name: this.name,
          student_id: this.student_id,
          team: this.team,
          phoneNumber: this.phoneNumber
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert("회원가입이 완료되었습니다.");
          this.$router.push("login");
        })
        .catch(error => {
          alert("비밀번호가 서로 다릅니다.");
        });
    }
  }
};
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
.parent {
  display: flex;
  height: 100vh;
  position: relative;
  z-index: 1;
}
.parent:after {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  background-image: url("../../assets/erica.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  top: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
}
.child1 {
  flex: 3;
}
.child2 {
  display: flex;
  flex: 4;

  align-items: center;
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
}
.margin_top {
  margin-top: 170px;
}
input::placeholder {
  text-align: left;
}
.div_size {
  width: 90%;
}
.button_style {
  margin-top: 30px;
  width: 100%;
  height: 50px;
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
  font-family: "RixYeoljeongdo_Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/RixYeoljeongdo_Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.kor_font {
  font-family: "Jua", cursive;
  text-align: center;
  font-size: 60px;
  margin-top: 50px;
}
.link {
  display: inline-block;
  margin-top: 30px;
}
.register {
  display: inline-block;
  height: 50px;
  width: 200px;
  border: 0;
  outline: 0;
  background-color: #2b961f;
  color: white;
  border-radius: 10px;
  margin-bottom: 50px;
}
.register:hover {
  background-color: #006b00;
  color: white;
}
.marginall {
  margin-left: 30px;
  margin-right: 30px;
  padding: 10px;
  border-radius: 30px;
  width: 100%;
}
</style>
