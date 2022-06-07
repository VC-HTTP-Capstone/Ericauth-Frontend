<template>
  <div>
    <LeftSideBar></LeftSideBar>
    <div class="right fade1s">
      <div style="margin-top:30px; margin-left:50px; margin-right:300px;">
        <div class="profile">
          행사 조회
        </div>
        <hr />
        <div class="flex-container" style="margin-top:40px">
          <!-- 실제 내용 -->
          <div v-for="list in List">
            <!-- 행사별 Area -->

            <div>
              <button
                @click="[(isModalViewed = true), (name = list), getData()]"
                class="list fade1s"
                style="padding-top:30px;"
              >
                {{ list }}
                <div style="margin-top:100px"></div>
              </button>
              <div class="list_bottom_layout fade1s">
                <div class="list_bottom_data">
                  <a
                    style="color: #7fccde; padding-right: 40px;"
                    @click="loadQRscanner(list)"
                    >인증진행
                  </a>

                  <a style="color: red;" @click="deleteEvent(list)">DELETE</a>
                </div>
              </div>
            </div>

            <div class="modal_layout" v-if="isModalViewed">
              <div class="modal_data">
                <div style="font-size:25px; margin-bottom:30px;">
                  {{ name }}
                </div>
                학생회비 확인 : {{ paymentStatus }}<br />
                학과 확인 : {{ team }}<br />
                이름 확인 : {{ checkName }}<br />
                학번 확인 : {{ checkStudentId }}<br />
              </div>
              <a
                class="modal_exit"
                style="color:red;"
                @click="[(isModalViewed = false), refreshPage()]"
                >닫기</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="QR">
      <QRscanner></QRscanner>
    </div>
  </div>
</template>

<script>
import LeftSideBar from "../../components/council_student/Council_sidebar.vue";
import ModalView from "../../components/council_student/modalView.vue";
import { StreamBarcodeReader } from "vue-barcode-reader";
import QRscanner from "./qrscanner.vue";

export default {
  mounted() {
    this.loadData();
    // this.$nextTick(this.loadData)
  },
  data() {
    return {
      is_show: false,
      List: [],
      obj: {},
      isModalViewed: false,
      name: "",
      object: {},
      checkName: "",
      checkStudentId: "",
      paymentStatus: "",
      team: ""
    };
  },
  components: {
    LeftSideBar,
    StreamBarcodeReader,
    ModalView,
    QRscanner,
  },
  methods: {
    refreshPage: function() {
      this.$router.go();
    },
    deleteEvent: function(eventName) {
      this.obj["email"] = this.$store.state.email;
      this.obj["eventName"] = eventName;
      fetch("http://localhost:8080/api/event/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.obj)
      })
        .then(response => response.json())
        .then(data => {
          alert("행사 삭제가 완료되었습니다");
          this.List = [];
          this.loadData();
        })
        .catch(error => {
          alert("잘못된 입력입니다.");
        });
    },
    loadQRscanner: function(eventName) {
      this.obj["email"] = this.$store.state.email;
      fetch("http://localhost:8080/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.obj)
      })
        .then(response => {
          this.$store.commit("persistedEventname", {
            value: eventName
          });
        })
        .then(data => {
          this.$router.push({name : "qrscanner", query : {name : eventName}});
        })
        .catch(error => {
          alert("잘못된 입력입니다.");
        });
    },
    loadData: function() {
      this.obj["email"] = this.$store.state.email;
      fetch("http://localhost:8080/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.obj)
      })
        .then(response => response.json())
        .then(data => {
          for (var i = 0; i < data["eventNames"].length; i++) {
            this.List.push(data["eventNames"][i]);
          }
        })
        .catch(error => {
          alert("잘못된 입력입니다.");
        });
    },
    getData: function() {
      this.object["email"] = this.$store.state.email;
      this.object["eventName"] = this.name;
      console.log(this.name);
      fetch("http://localhost:8080/api/event/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.object)
      })
        .then(response => response.json())
        .then(data => {
          this.checkName = data["checkName"];
          this.checkStudentId = data["checkStudentId"];
          this.paymentStatus = data["paymentStatus"];
          if (data["team"] == "false") this.team = "false";
          else this.team = "true";
        })
        .catch(error => {
          alert("잘못된 입력입니다.");
        });
      this.object = "";
    }
  }
};
</script>

<style>
div.right {
  width: 83%;
  height: 100vh;
  float: right;
  background: white;
}
.fade1s {
  animation: fade-in 0.5s ease-in-out;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.profile {
  text-align: left;
  font-size: 40px;
  font-family: "SEBANG_Gothic_Bold";
}
.list {
  width: 200px;
  height: 200px;
  font-family: "IBM Plex Sans KR", sans-serif;
  border: 1px solid;
  border-color: blue;
  border-radius: 15px 15px 0px 0px / 15px 15px 0px 0px;
  margin-right: 40px;
  text-align: center;
}

.cyan {
  color: #7fccde;
}

.loadQRscanner {
  padding-top: 120px;
}
.flex-container {
  display: flex;
  width: 1000px;
  align-content: flex-start;
  flex-wrap: wrap; /* container를 벗어나면 자동으로 다음 행으로 넘겨줌 */
}
.modal_layout {
  width: 250px;
  height: 400px;
  position: absolute;
  top: 30%;
  left: 40%;
  border: 3px solid;
  border-radius: 15px;
  border-color: skyblue;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 9999px;
  transition: opacity 0.4s linear;
  background-color: white;
}
button.list:hover {
  background-color: rgb(173, 216, 230, 0.3);
}
.modal_exit {
  position: absolute;
  top: 90%;
  left: 45%;
  font-family: "IBM Plex Sans KR", sans-serif;
}
.modal_data {
  font-family: "Poor Story", cursive;
  font-weight: bold;
  position: absolute;
  top: 10%;
  left: 20%;
  line-height: 50px;
}

.list_bottom_layout {
  width: 200px;
  height: 50px;
  border: 1px solid;
  font-family: "IBM Plex Sans KR", sans-serif;
  border-radius: 0px 0px 15px 15px / 0px 0px 15px 15px;
  border-color: blue;
  margin-bottom: 20px;
}

.list_bottom_data {
  margin-top: 10px;
  margin-left: 20px;
}
</style>
