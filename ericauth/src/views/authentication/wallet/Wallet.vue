<template>
  <div>
    <div class="parent">
      <div class="child1"></div>
      <div class="child2" style="background-color:#FDF6EC;">
        <div class="child2box2"></div>
        <div class="child2box1" style="background-color:white; border:0;">
          <center>
            <div
              style="background-color:#B7CADB; height:8vh; display:flex; align-items:center;"
            >
              <div style="flex:1;"></div>
              <div style="flex:5;">
                <span style="font-size:25px; color:#F6F6F6;">
                  증명서를 선택해 주세요
                </span>
              </div>
              <div style="flex:1;"></div>
            </div>
            <div class="divbox">
              <div class="btnparent">
                <div class="btnchild1">
                  <img
                    class="icon"
                    style="background-color:#AFC4E7;"
                    src="../../../assets/name_icon.png"
                  />
                </div>
                <div class="btnchild2">
                  <button class="checkbtn" id="target_name" @click="addName">
                    <div class="btnline">
                      <span style="font-size:18px;">이름</span>
                    </div>
                    <div class="btndata">
                      <span class="btnfont">
                        {{ this.name }}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="divbox">
              <div class="btnparent">
                <div class="btnchild1">
                  <img
                    class="icon"
                    style="background-color:#FDB7BA;"
                    src="../../../assets/book_icon.png"
                  />
                </div>
                <div class="btnchild2">
                  <button class="checkbtn" id="target_team" @click="addTeam">
                    <div class="btnline">
                      <span style="font-size:18px;">학과</span>
                    </div>
                    <div class="btndata">
                      <span class="btnfont">
                        {{ this.team }}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="divbox">
              <div class="btnparent">
                <div class="btnchild1">
                  <img
                    class="icon"
                    style="background-color:#F7E7B1;"
                    src="../../../assets/stdId_icon.png"
                  />
                </div>
                <div class="btnchild2">
                  <button class="checkbtn" id="target_std" @click="addStd">
                    <div class="btnline">
                      <span style="font-size:18px;">학번</span>
                    </div>
                    <div class="btndata">
                      <span class="btnfont">
                        {{ this.studentId }}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="divbox">
              <div class="btnparent">
                <div class="btnchild1">
                  <img
                    class="icon"
                    style="background-color:#AFCB3D;"
                    src="../../../assets/phone_icon.png"
                  />
                </div>
                <div class="btnchild2">
                  <button class="checkbtn" id="target_pnum" @click="addPnum">
                    <div class="btnline">
                      <span style="font-size:18px;">전화번호</span>
                    </div>
                    <div class="btndata">
                      <span class="btnfont">
                        {{ this.phoneNumer }}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="divbox">
              <div class="btnparent">
                <div class="btnchild1">
                  <img
                    class="icon"
                    style="background-color:#A9A0FC;"
                    src="../../../assets/issuer_icon.png"
                  />
                </div>
                <div class="btnchild2">
                  <button
                    class="checkbtn"
                    id="target_issuer"
                    @click="addIssuer"
                  >
                    <div class="btnline">
                      <span style="font-size:18px;">발급자</span>
                    </div>
                    <div class="btndata">
                      <span class="btnfont">
                        {{ this.issuer }}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div v-if="this.paymentStatus" class="divbox">
              <div class="btnparent">
                <div class="btnchild1">
                  <img
                    class="icon"
                    style="background-color:#CFC385;"
                    src="../../../assets/pay_icon.png"
                  />
                </div>
                <div class="btnchild2">
                  <button
                    class="checkbtn"
                    id="target_payment"
                    @click="addPayment"
                  >
                    <div class="btnline">
                      <span style="font-size:18px;">학생회비</span>
                    </div>
                    <div class="btndata">
                      <span class="btnfont">
                        {{ this.paymentStatus }}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div v-else class="divbox">
              <div class="btnparent">
                <div class="btnchild1">
                  <img
                    class="icon"
                    style="background-color:#CFC385;"
                    src="../../../assets/pay_icon.png"
                  />
                </div>
                <div class="btnchild2">
                  <button
                    class="checkbtn"
                    disabled="disabled"
                    @click="addPayment"
                  >
                    <div class="btnline">
                      <span style="font-size:18px;">학생회비</span>
                    </div>
                    <div class="btndata">
                      <span class="btnfont">
                        {{ this.paymentStatus }}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </center>
        </div>
        <div class="child2box2"></div>
      </div>
      <div class="child2" style="background-color:#FDF6EC; ">
        <div class="child2box2"></div>
        <div class="child2box1" style="background-color:white;">
          <center>
            <div
              style="background-color:#B7CADB; height:8vh; display:flex; align-items:center;"
            >
              <div style="flex:1;"></div>
              <div style="flex:5;">
                <span style="font-size:25px; color:#F6F6F6;"> 증명서 </span>
              </div>
              <div style="flex:1;"></div>
            </div>
            <div>
              <div style="height:100%;">
                <div v-for="(row, index) in rows" :key="row.id">
                  <div v-show="row.name" style="width:70%; margin-top:30px;">
                    <div style="display:flex;">
                      <div style="flex:1;box-shadow: 2px 2px 5px #C1C1C1;">
                        <img
                          style="background-color:#AFC4E7; width:100%; height:100%; padding:8px;"
                          src="../../../assets/name_icon.png"
                        />
                      </div>
                      <div style="flex:3;box-shadow: 2px 2px 5px #C1C1C1;">
                        <div style="border-bottom:1px solid #C1C1C1;">
                          <span style="font-size:18px; text-align:center;"
                            >이름</span
                          >
                        </div>
                        <div style="margin-top:5px;">
                          <span
                            ><input
                              style="text-align:center; border:0;"
                              type="text"
                              v-model="row.name"
                          /></span>
                        </div>
                      </div>
                      <div style="flex:1;box-shadow: 2px 2px 5px #C1C1C1;">
                        <button
                          class="removebtn"
                          style="width:100%; height:100%;"
                          @click="removeRowName(row)"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                  <div v-show="row.team" style="width:70%; margin-top:30px;">
                    <div style="display:flex;">
                      <div style="flex:1;box-shadow: 2px 2px 5px #C1C1C1;">
                        <img
                          style="background-color:#FDB7BA; width:100%; height:100%; padding:8px;"
                          src="../../../assets/book_icon.png"
                        />
                      </div>
                      <div style="flex:3;box-shadow: 2px 2px 5px #C1C1C1;">
                        <div style="border-bottom:1px solid #C1C1C1;">
                          <span style="font-size:18px; text-align:center;"
                            >학과</span
                          >
                        </div>
                        <div style="margin-top:5px;">
                          <span
                            ><input
                              style="text-align:center; border:0;"
                              type="text"
                              v-model="row.team"
                          /></span>
                        </div>
                      </div>
                      <div style="flex:1;box-shadow: 2px 2px 5px #C1C1C1;">
                        <button
                          class="removebtn"
                          style="width:100%; height:100%;"
                          @click="removeRowTeam(row)"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    v-show="row.studentId"
                    style="width:70%; margin-top:30px;"
                  >
                    <div style="display:flex;">
                      <div style="flex:1;box-shadow: 2px 2px 5px #C1C1C1;">
                        <img
                          style="background-color:#F7E7B1; width:100%; height:100%; padding:8px;"
                          src="../../../assets/stdId_icon.png"
                        />
                      </div>
                      <div style="flex:3;box-shadow: 2px 2px 5px #C1C1C1;">
                        <div style="border-bottom:1px solid #C1C1C1;">
                          <span style="font-size:18px; text-align:center;"
                            >학번</span
                          >
                        </div>
                        <div style="margin-top:5px;">
                          <span
                            ><input
                              style="text-align:center; border:0;"
                              type="text"
                              v-model="row.studentId"
                          /></span>
                        </div>
                      </div>
                      <div style="flex:1;box-shadow: 2px 2px 5px #C1C1C1;">
                        <button
                          class="removebtn"
                          style="width:100%; height:100%;"
                          @click="removeRowStd(row)"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    v-show="row.phoneNumer"
                    style="width:70%; margin-top:30px;"
                  >
                    <div style="display:flex;">
                      <div style="flex:1;box-shadow: 2px 2px 5px #C1C1C1;">
                        <img
                          style="background-color:#AFCB3D; width:100%; height:100%; padding:8px;"
                          src="../../../assets/phone_icon.png"
                        />
                      </div>
                      <div style="flex:3;box-shadow: 2px 2px 5px #C1C1C1;">
                        <div style="border-bottom:1px solid #C1C1C1;">
                          <span style="font-size:18px; text-align:center;"
                            >전화번호</span
                          >
                        </div>
                        <div style="margin-top:5px;">
                          <span
                            ><input
                              style="text-align:center; border:0;"
                              type="text"
                              v-model="row.phoneNumer"
                          /></span>
                        </div>
                      </div>
                      <div style="flex:1;box-shadow: 2px 2px 5px #C1C1C1;">
                        <button
                          class="removebtn"
                          style="width:100%; height:100%;"
                          @click="removeRowPnum(row)"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                  <div v-show="row.issuer" style="width:70%; margin-top:30px;">
                    <div style="display:flex;">
                      <div style="flex:1;box-shadow: 2px 2px 5px #C1C1C1;">
                        <img
                          style="background-color:#A9A0FC; width:100%; height:100%; padding:8px;"
                          src="../../../assets/issuer_icon.png"
                        />
                      </div>
                      <div style="flex:3;box-shadow: 2px 2px 5px #C1C1C1;">
                        <div style="border-bottom:1px solid #C1C1C1;">
                          <span style="font-size:18px; text-align:center;"
                            >발급자</span
                          >
                        </div>
                        <div style="margin-top:5px;">
                          <span
                            ><input
                              style="text-align:center; border:0;"
                              type="text"
                              v-model="row.issuer"
                          /></span>
                        </div>
                      </div>
                      <div style="flex:1;box-shadow: 2px 2px 5px #C1C1C1;">
                        <button
                          class="removebtn"
                          style="width:100%; height:100%;"
                          @click="removeRowIssuer(row)"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    v-show="row.paymentStatus"
                    style="width:70%; margin-top:30px;"
                  >
                    <div style="display:flex;">
                      <div style="flex:1;box-shadow: 2px 2px 5px #C1C1C1;">
                        <img
                          style="background-color:#CFC385; width:100%; height:100%; padding:8px;"
                          src="../../../assets/pay_icon.png"
                        />
                      </div>
                      <div style="flex:3;box-shadow: 2px 2px 5px #C1C1C1;">
                        <div style="border-bottom:1px solid #C1C1C1;">
                          <span style="font-size:18px; text-align:center;"
                            >학생회비</span
                          >
                        </div>
                        <div style="margin-top:5px;">
                          <span
                            ><input
                              style="text-align:center; border:0;"
                              type="text"
                              v-model="row.paymentStatus"
                          /></span>
                        </div>
                      </div>
                      <div style="flex:1;box-shadow: 2px 2px 5px #C1C1C1;">
                        <button
                          class="removebtn"
                          style="width:100%; height:100%;"
                          @click="removeRowPayment(row)"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style="position:absolute; top:90%; left:71%; width:10%; transform: translate(-50%, -50%);"
              >
                <button class="issuebtn" @click="issueQr">발급받기</button>
              </div>
            </div>
          </center>
        </div>
        <div class="child2box2"></div>
      </div>
      <div class="child1"></div>
    </div>
  </div>
</template>

<script>
let today = new Date();
import { JSEncrypt } from "jsencrypt";
export default {
  data() {
    return {
      name: this.$store.state.name,
      team: this.$store.state.team,
      studentId: this.$store.state.student_id,
      phoneNumer: this.$store.state.phoneNumer,
      issuer: "ericauth",
      issueranceDate: "22/01/01",
      paymentStatus: this.$store.state.paymentStatus,
      sign: "DSA",
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      date: today.getDate(),
      rows: [
        {
          name: "",
          team: "",
          studentId: "",
          phoneNumer: "",
          issuer: "",
          paymentStatus: ""
        }
      ],
      nameCheck: false,
      teamCheck: false,
      studentIdCheck: false,
      phoneNumerCheck: false,
      issuerCheck: false,
      paymentStatusCheck: false
    };
  },
  methods: {
    addName: function() {
      this.rows.push({
        name: this.name
      });
      const target = document.getElementById("target_name");
      target.disabled = true;
      this.nameCheck = true;
    },
    addTeam: function() {
      this.rows.push({
        team: this.team
      });
      const target = document.getElementById("target_team");
      target.disabled = true;
      this.teamCheck = true;
    },
    addStd: function() {
      this.rows.push({
        studentId: this.studentId
      });
      const target = document.getElementById("target_std");
      target.disabled = true;
      this.studentIdCheck = true;
    },
    addPnum: function() {
      this.rows.push({
        phoneNumer: this.phoneNumer
      });
      const target = document.getElementById("target_pnum");
      target.disabled = true;
      this.phoneNumerCheck = true;
    },
    addIssuer: function() {
      this.rows.push({
        issuer: this.issuer
      });
      const target = document.getElementById("target_issuer");
      target.disabled = true;
      this.issuerCheck = true;
    },
    addPayment: function() {
      this.rows.push({
        paymentStatus: this.paymentStatus
      });
      const target = document.getElementById("target_payment");
      target.disabled = true;
      this.paymentStatusCheck = true;
    },
    removeRowName: function(row) {
      this.rows.splice(this.rows.indexOf(row), 1);
      const target = document.getElementById("target_name");
      target.disabled = false;
      this.nameCheck = false;
    },
    removeRowTeam: function(row) {
      this.rows.splice(this.rows.indexOf(row), 1);
      const target = document.getElementById("target_team");
      target.disabled = false;
      this.teamCheck = false;
    },
    removeRowStd: function(row) {
      this.rows.splice(this.rows.indexOf(row), 1);
      const target = document.getElementById("target_std");
      target.disabled = false;
      this.studentIdCheck = false;
    },
    removeRowPnum: function(row) {
      this.rows.splice(this.rows.indexOf(row), 1);
      const target = document.getElementById("target_pnum");
      target.disabled = false;
      this.phoneNumerCheck = false;
    },
    removeRowIssuer: function(row) {
      this.rows.splice(this.rows.indexOf(row), 1);
      const target = document.getElementById("target_issuer");
      target.disabled = false;
      this.issuerCheck = false;
    },
    removeRowPayment: function(row) {
      this.rows.splice(this.rows.indexOf(row), 1);
      const target = document.getElementById("target_payment");
      target.disabled = false;
      this.paymentStatusCheck = false;
    },
    issueQr: function() {
      let s = "{";
      let li = {};
      console.log(this.makeSerial());
      if (this.nameCheck === true) {
        li["name"] = this.name;
      }
      else{
        li["name"] = "홍길동";
      }
      if (this.teamCheck === true) {
        li["team"] = this.team;
      }
      else{
        li["team"] = "홍길동";
      }
      if (this.studentIdCheck === true) {
        li["studentId"] = this.studentId;
      }
      else{
        li["studentId"] = "홍길동";
      }
      if (this.phoneNumerCheck === true) {
        li["phoneNumber"] = this.phoneNumer;
      }
      else{
        li["phoneNumber"] = "홍길동";
      }
      if (this.issuerCheck === true) {
        li["issuer"] = this.issuer;
      }
      else{
        li["issuer"] = "홍길동";
      }
      if (this.paymentStatusCheck === true) {
        li["paymentStatus"] = this.paymentStatus;
      }
      else{
        li["paymentStatus"] = "홍길동";
      }
      let encryptor = new JSEncrypt();
      encryptor.setPublicKey(this.$store.state.publicKey);
      let encrypted = encryptor.encrypt(JSON.stringify(li));

      this.$store.commit("persistedQrdata", {
        value: encrypted
      });

      console.log(encrypted)
      this.$router.push("qrscan");
    },
    addNightmealvp: function() {
      this.rows.push({
        vp: "학과:         " + this.team
      });
      this.rows.push({
        vp: "학번:         " + this.studentId
      });
      this.rows.push({
        vp: "학생회비:      " + this.paymentStatus
      });
      this.rows.push({
        vp: "전자서명:      " + this.sign
      });
    },
    addVotevp: function() {
      this.rows.push({
        vp: "학과:         " + this.team
      });
      this.rows.push({
        vp: "학번:         " + this.studentId
      });
      this.rows.push({
        vp: "전자서명:      " + this.sign
      });
    },
    makeSerial: function() {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 12; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    }
  }
};
</script>

<style scoped>
.parent {
  display: flex;
  height: auto;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}
.child1 {
  display: flex;
  flex: 1;
  background-color: #fdf6ec;
}
.child2 {
  display: flex;
  flex: 5;
}
.divbox {
  width: 60%;

  margin-top: 40px;
  margin-bottom: 40px;
}
.checkbtn {
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 5px #c1c1c1;
  background-color: white;
  border: 0;
  outline: 0;
}
.checkbtn:hover {
  background-color: #f8f8ff;
}
.inputbtn {
  height: 50px;
  text-align: left;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 0;
}
.child2box1 {
  flex: 4;
  height: 90%;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
}
.child2box2 {
  flex: 1;
}
.icon {
  width: 100%;
  padding: 8px;
  box-shadow: 2px 2px 5px #c1c1c1;
}
.btnparent {
  display: flex;
}
.btnchild1 {
  width: 100%;
  height: 100%;
  flex: 1;
}
.btnchild2 {
  flex: 3;
}
.btnline {
  margin-top: 5px;
  border-bottom: 1px solid #c1c1c1;
}
.btndata {
  margin-top: 5px;
}
.btnfont {
  font-size: 15px;
}
.removebtn {
  border: 0;
  outline: 0;
  color: white;
  background-color: #fd5e53;
}
.issuebtn {
  width: 100%;
  height: 5vh;
  border: 0;
  outline: 0;
  color: white;
  background-color: #21bf73;
}
.issuebtn:hover {
  background-color: #4aa96c;
}
</style>
