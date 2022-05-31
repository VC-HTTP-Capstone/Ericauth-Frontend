<template>
  <div>
    <div class="parent">
      <div class="child1"></div>
      <div class="child2">
        <div class="marginall" style="background-color:white; ">
          <div style="margin-left:100px; margin-right:100px;">
            <center>
              <div class="div_size fade1s eng_font">
                ERICAUTH
              </div>
              <div class="div_size" v-if="toggle">
                <div style="margin-top:50px;">
                  <button
                    class="btstyle"
                    style="margin-right:-2.5px; background-color: #0088CC;"
                    @click="toggle = !toggle"
                  >
                    학생
                  </button>
                  <button
                    class="btstyle"
                    style="margin-left:-2.5px; background-color: #39BAE5;"
                    @click="toggle = !toggle"
                  >
                    학생회
                  </button>
                  <hr style="border:solid #d3d3d3; margin-top:0px;" />
                  <input
                    class="inp fade2s"
                    placeholder="이메일"
                    type="text"
                    style="text-align:center; font-size:19px; "
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
                <div>
                  <center>
                    <a class="fade2s link" href="/password"
                      >비밀번호를 잊으셨나요?</a
                    >
                  </center>
                </div>
                <button
                  class="button_style btn btn-primary fade3s"
                  style="margin-bottom:20px; border-radius: 10px;"
                  type="button"
                  v-on:click="signIn_student"
                >
                  로그인
                </button>
                <hr style="border: solid #d3d3d3" />
                <div style="margin-top: 40px;">
                  <center>
                    <button
                      class="register"
                      type="button"
                      onclick="location.href='/register'"
                    >
                      회원가입
                    </button>
                  </center>
                </div>
              </div>
              <div class="div_size" v-else>
                <div style="margin-top:50px;">
                  <button
                    class="btstyle"
                    style="margin-right:-2.5px; background-color: #39BAE5;"
                    @click="toggle = !toggle"
                  >
                    학생
                  </button>
                  <button
                    class="btstyle"
                    style="margin-left:-2.5px; background-color: #0088CC;;"
                    @click="toggle = !toggle"
                  >
                    학생회
                  </button>
                  <hr style="border:solid #d3d3d3; margin-top:0px;" />
                  <input
                    class="inp fade2s"
                    placeholder="이메일"
                    type="text"
                    style="text-align:center; font-size:19px; "
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
                <div>
                  <center>
                    <a class="fade2s link" href="/password"
                      >비밀번호를 잊으셨나요?</a
                    >
                  </center>
                </div>
                <button
                  class="button_style btn btn-primary fade3s"
                  style="margin-bottom:20px; border-radius: 10px;"
                  type="button"
                  v-on:click="signIn_council"
                >
                  로그인
                </button>
                <hr style="border: solid #d3d3d3" />
                <div style="margin-top: 40px;">
                  <center>
                    <button
                      class="register"
                      type="button"
                      onclick="location.href='/register'"
                    >
                      회원가입
                    </button>
                  </center>
                </div>
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
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { JSEncrypt } from "jsencrypt";
export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      toggle: true,
      publicKey:
        " -----BEGIN PUBLIC KEY-----\
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgaNPa/81lCEztBa6ezW5\
qMuPjestbjDO7mxAZuwrGd4UWP0jfbomZ2HnBwbjaBNCt4uPAj8NRtedPYul1CvB\
Nm25jYAgWQvxiqzr36OR3zxeqZYiwKMO/ZJpMlzkLNI22ZvPGW/aGJkWHCEiKvGC\
nl3cLY/OSFjnmGKqbcetZHbfD4zaGCKHvpe0FdblD5GLhmOB1MoNz0jC7IpMgqdk\
tyoE4V+wDpMbYthheLmIB8i1xTMqHCDXbcIdycWxNCOQ4I0HINGYWR4s2JjWInuA\
0AfQXzZJ1EePSDV7f42Muf4tO7fVRXE53YVUCZyFpk72XdpzS70mfVA2urOkifIB\
ewIDAQAB\
-----END PUBLIC KEY-----",
      privateKey:
        " -----BEGIN RSA PRIVATE KEY-----\
MIIEogIBAAKCAQEAgaNPa/81lCEztBa6ezW5qMuPjestbjDO7mxAZuwrGd4UWP0j\
fbomZ2HnBwbjaBNCt4uPAj8NRtedPYul1CvBNm25jYAgWQvxiqzr36OR3zxeqZYi\
wKMO/ZJpMlzkLNI22ZvPGW/aGJkWHCEiKvGCnl3cLY/OSFjnmGKqbcetZHbfD4za\
GCKHvpe0FdblD5GLhmOB1MoNz0jC7IpMgqdktyoE4V+wDpMbYthheLmIB8i1xTMq\
HCDXbcIdycWxNCOQ4I0HINGYWR4s2JjWInuA0AfQXzZJ1EePSDV7f42Muf4tO7fV\
RXE53YVUCZyFpk72XdpzS70mfVA2urOkifIBewIDAQABAoIBACrYartq0a5vesMe\
b+ugyge7n2psO8ubXgj2xiI+E9Cs0VTH9R7skxzAArcT07zmALrg6Rb4985eHJ3m\
tZv2ChmPEjBuFELZ667Fj/+N8/wv26l48WtxeNbduN7oTJFzuKUbFct2aEKQ9fm+\
CajfwSfOJaL5UFgg6go3MdSuleQJ3OM2xdSuth+uTrj/yZTBXlg+mtmQJyrf1q+9\
xdT7jogxw0YiI4QDPeNFiPv7pLv0l5A7dwiJs+CeRhVEBiy4zfKxY9TKZ+BDMlPY\
QZjiWKHgFB+YzAs60QWVUOvGy/bQWpeMhgKPcRT/9N5q5VD8k8l/mRS1edgEgzBD\
HDPN1KECgYEAwx/LB6URWd8fNgMClm2zjsX4uU5LKmTh5zeQ9JNXWXEnw7jY6k4y\
cc62BC5FzYYfMeaxxXEeRQhEED9MHVyu7do81wITRbeEfIyTEslVcJk3aZbngy/1\
bOW8bybqdQX9zkLymU2IU4QHhRcq6aF81xzhhnQrVBvghigrcm/5LI8CgYEAqhVA\
RfOOneOUHt4iVFimHhwG5k6spJjizDSRFMUsWzhjypdTLL2aXTK0feS03dOTcV/d\
QmSPWuoHc9oQHHXv5rreUTwfa4OjZZyxN2XFpkQLAA4rv6ULH2bLa7yI55q0eeuX\
Q3LnrMMYDFSjlVqy9T+DmktdpWdFSt9UF4uNalUCgYByY20O6kIlwZv2egVGUsF0\
7bJGUBPYopOcjQK5nrcShDefkfn4QidoeJpUERxyxDH9exS0fwAT0Ci2raTdgbw7\
TDlmgpzxvgg5S9/cn5MrE2dcy06lpbPnRzcUomfIet6z0KOQI9fLvhb6ev55QGaD\
ZTcBL5FHGaCihWITEHmvGQKBgAgOOZ0WjAquXLWZj8au7C9A5JLD5ylklFlXpAd3\
z0ICybcus6HK2STQ4fuUeXyIKNOV1sTuPlvv+apjCaBPda1X7G+siVBuS67kXQBi\
sZnOXzcBdND+4Cf8lmXj6BgQG7wqjF+FcbOdCeaLm7PXN+Klv3XvW+AZpA6HxVPY\
KDqBAoGAaUTXDhM+xCVp188BhEXAiN50Ci9IfW8aUEkAiH48MBOH3tB5oGHW8kTZ\
QGPuLOZ9/qZVDuE1lKr7FWw9n9UG5pdmn2Os6Sc+bhGRc9B2DJLIBdxpnHDHflGE\
TCR1uCSbcK/bSkcq5MKKv+vTRW0if4x9czBCd7XuhOMWozl2+dc=\
-----END RSA PRIVATE KEY-----"
    };
  },
  methods: {
    signIn_student: function() {
      fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          console.log(data.name);
          this.$store.commit("persistedID", {
            value: data.email
          });
          this.$store.commit("persistedName", {
            value: data.name
          });
          this.$store.commit("persistedSnum", {
            value: data.student_id
          });
          this.$store.commit("persistedTeam", {
            value: data.team
          });
          this.$store.commit("persistedPnum", {
            value: data.phoneNumber
          });
          this.$store.commit("persistedPublickey", {
            value: this.publicKey
          });
          this.$store.commit("persistedPrivatekey", {
            value: this.privateKey
          });
          this.$router.push("auth_management");
        })
        .catch(error => {
          alert("잘못된 입력입니다.");
        });
    },
    signIn_council: function() {
      fetch("http://localhost:8080/api/login/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      })
        .then(response => response.json())
        .then(data => {
          this.$store.commit("persistedID", {
            value: data.email
          });
          this.$store.commit("persistedTeam", {
            value: data.team
          });
          this.$store.commit("persistedPnum", {
            value: data.phoneNumber
          });
          this.$store.commit("persistedPublickey", {
            value: this.publicKey
          });
          this.$store.commit("persistedPrivatekey", {
            value: this.privateKey
          });
          this.$router.push("council_student_holding_event");
        })
        .catch(error => {
          alert("잘못된 입력입니다.");
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

.eng_font {
  font-family: "Atma", cursive;
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
.hrstyle {
  size: 10;
}
.btstyle {
  border: 0;
  outline: 0;
  width: 50%;
  height: 40px;
  color: white;
}
</style>
