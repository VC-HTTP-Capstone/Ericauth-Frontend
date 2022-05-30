<template>
  <div>
    <LeftSideBar></LeftSideBar>
    <div class="right fade1s">
      <div style="margin-top:30px; margin-left:50px; margin-right:300px;">
        <div class="profile">
          <span>행사 조회</span>
        </div>
        <hr />
        <div class="flex-container" style="margin-top:40px"> <!-- 실제 내용 -->
          <div v-for="list in List"> <!-- 행사별 Area -->
            <button @click="[isModalViewed = true, getData(), name = list]" class = "list" style="padding-top:30px;">
              {{ list }}
              <div style="margin-top:100px">
                <a style="color: #7fccde; padding-right: 40px;" @click="loadQRscanner">인증진행</a>
                <a style="color: red;" @click="deleteEvent(list)">DELETE</a>
              </div>

            </button>
            <div class="modal_layout" v-if="isModalViewed">
              <div class="modal_data">
                <div style="font-size:25px; margin-bottom:30px;">행사 이름 : {{name}}</div>
                학생회비 확인 : {{abc}}<br>
                학과 확인 : {{cde}}<br>
                이름 확인 : {{abc}}<br>
                학번 확인 : {{cde}}<br>
              </div>
              <a class="modal_exit" style="color:red;" @click="isModalViewed = false" >닫기</a>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>

</template>

<script>
import LeftSideBar from '../../components/council_student/Council_sidebar.vue';
import ModalView from '../../components/council_student/modalView.vue';
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  mounted: function() {
    this.$nextTick(this.loadData)
  },
  data() {
    return {
      is_show: false,
      List: [],
      obj : {},
      isModalViewed: false,
      abc: true,
      cde: false,
      name: '',
    }
  },
  components:{
    LeftSideBar,
    StreamBarcodeReader,
    ModalView,
  },
  methods : {
    deleteEvent : function(eventName) {
      this.obj["email"] = this.$store.state.email;
      this.obj["eventName"] = eventName;
      fetch("http://localhost:8080/api/event/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          this.obj
        )
      })
        .then(response => response.json())
        .then(data => {
          alert("행사 삭제가 완료되었습니다");
          this.$router.go();
        })
        .catch(error => {
          alert("잘못된 입력입니다.");
        })
    },
    loadQRscanner : function() {
      this.$router.push('qrscanner');
    },
    loadData : function() {
      this.obj["email"] =this.$store.state.email;
      fetch("http://localhost:8080/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          this.obj
        )
      })
        .then(response => response.json())
        .then(data => {
          console.log(data["eventNames"].length);
          for(var i = 0; i < data["eventNames"].length; i++){
            this.List.push(data["eventNames"][i]);
          }
          console.log(this.List);

        })
        .catch(error => {
          alert("잘못된 입력입니다.");
        })
    },
    getData : function(){
      console.log(this.isModalViewed);
    }
  }
}
</script>

<style>
div.right {
  width: 83%;
  height: 100vh;
  float: right;
  background: white;
}
.fade1s {
  animation: fade-in 1.5s ease-in-out;
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
  font-family: 'SEBANG_Gothic_Bold';
}
.list {
  width: 200px;
  height: 200px;
  font-family: 'IBM Plex Sans KR', sans-serif;
  border : 1px solid;
  border-color: blue;
  border-radius: 15px;
  margin-right: 40px;
  text-align : center;
}

.cyan{
  color: #7fccde;
}

.loadQRscanner {
  padding-top: 120px;
}
.flex-container{
  display : inline-flex;
}
.modal_layout{
  width: 250px;
  height: 400px;
  position: absolute;
  top: 30%;
  left: 40%;
  border : 3px solid;
  border-radius : 15px;
  border-color : skyblue;
  box-shadow : rgba(0,0,0,0.3) 0 0 0 9999px;
  transition : opacity .4s linear;
}
button.list:hover{
  background-color: rgb(173, 216, 230, 0.3);

}
.modal_exit{
  position: absolute;
  top:90%;
  left:45%;
  font-family: 'IBM Plex Sans KR', sans-serif;
}
.modal_data{
  font-family: 'Poor Story', cursive;
  font-weight: bold;
  position: absolute;
  top:10%;
  left:20%;
  line-height: 50px;

}

</style>
