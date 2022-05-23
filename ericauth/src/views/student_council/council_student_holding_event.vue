<template>
  <div>
    <LeftSideBar></LeftSideBar>
    <div class="right fade1s">
      <div style="margin-top:30px; margin-left:50px; margin-right:300px;">
        <div class="profile">
          <span>행사 개최</span>
        </div>
        <hr />
        <br>
        <div style="margin-top:50px margin-left:500px">
          <div class="headline">
            행사 개최에 필요한 정보를 선택해주세요
          </div>
          <div style="margin-bottom:30px; font-family: 'SEBANG_Gothic_Bold'; font-size:20px; margin-left:10px">
            <div>
              행사 이름
              <input style="margin-top:10px; margin-left:20px" v-model="event_name" class="input"></input>
            </div>
             <div style="margin-top:30px;">
               학생회비 납부 확인 여부
              <div class="switch">
                <input id="switch-1" type="checkbox" v-model="radioValues" class="switch-input" />
                <label for="switch-1" class="switch-label">Switch</label>
              </div>
              {{radioValues}}
            </div>
            <div style="margin-top:30px;">
              학과 확인 여부
             <div class="switch">
               <input id="switch-2" type="checkbox" v-model="team" class="switch-input" />
               <label for="switch-2" class="switch-label">Switch</label>
             </div>
             {{team}}
             <div v-show="team===true" style="margin-top:30px">
               <select v-model="college">
                 <option>소프트웨어융합대학</option>
                 <option>약학대학</option>
                 <option>공학대학</option>
               </select>
             </div>
           </div>
           <div style="margin-top:30px;">
             이름 확인 여부
            <div class="switch">
              <input id="switch-3" type="checkbox" v-model="name" class="switch-input" />
              <label for="switch-3" class="switch-label">Switch</label>
            </div>
            {{name}}
          </div>
          <div style="margin-top:30px;">
            학번 확인 여부
           <div class="switch">
             <input id="switch-4" type="checkbox" v-model="student_id" class="switch-input" />
             <label for="switch-4" class="switch-label">Switch</label>
           </div>
           {{student_id}}
         </div>
            <div style="margin-top:30px">
              <button class="summitButton" v-on:click="saveData">submit</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftSideBar from '../../components/council_student/Council_sidebar.vue';

  export default {
    data() {
      return {

        event_name : "",
        team : false,
        college : "",
        student_id : false,
        name : false,
        radioValues : false,
        obj: {},
      }
    },
    components: {
      LeftSideBar,
    },
    methods: {
      saveData: function(){
        if(this.event_name === ""){
          alert("이벤트 이름을 입력하세요");
          return;
        }
        if(this.team === true && this.college === ""){
          alert("단과대학을 선택하세요");
          return;
        }
        var text = this.makeSerial();
        this.obj["email"] = this.$store.state.email;
        this.obj["serialNumber"] = text;
        this.obj["paymentStatus"] = this.radioValues;
        this.obj["eventName"] = this.event_name;
        this.obj["checkName"] = this.name;
        if(this.team == false) this.obj["team"] = "false";
        else this.obj["team"] = this.college;
        this.obj["checkStudentId"] = this.student_id;
        console.log(this.obj);
        fetch("http://localhost:8080/api/event/issue", {
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
            console.log(data);
            // 저장완료 페이지 이동
          })
          .catch(error => {
            alert("잘못된 입력입니다.");
          })
      },
      makeSerial:function(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(var i = 0;i < 12; i++){
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
      },
    }
  }
</script>

<style scoped>
/* section {
    position:absolute;
    top:50%;
    left:0;
    width:100%;
    height:50%;
} */

.hide {
  display: none;
}

.fade1s {
  animation: fade-in 1.5s ease-in-out;
}

.profile {
  text-align: left;
  font-size: 40px;
  font-family: 'SEBANG_Gothic_Bold';
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

div.right {
  width: 83%;
  height: 100vh;
  float: right;
  background: white;
}

@font-face {
  font-family: 'RixYeoljeongdo_Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/RixYeoljeongdo_Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'SEBANG_Gothic_Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
.a {
  display: block;
  width: 500px;
  height: 500px;
  text-decoration-line : none
}
.a img {
  transition: all 0.2s linear;
}
.a:hover img{
  transform: scale(1.4);

}

.text {
  color: black;
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-size: 24px;
}

.input {
  width: 250px;
  height: 42px;
  font-size: 15px;
  border: 1;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
}

.switch {
  position: relative;
  display: inline-block;
  margin-left: 20px;
}

.switch-input {
  display: none;
}

.switch-label {
  display: block;
  width: 48px;
  height: 15px;
  text-indent: -150%;
  clip: rect(0 0 0 0);
  color: transparent;
  user-select: none;
}

.switch-label::before,
.switch-label::after {
  content: "";
  display: block;
  position: absolute;
  cursor: pointer;
}

.switch-label::before {
  width: 100%;
  height: 100%;
  background-color: #dedede;
  border-radius: 9999em;
  -webkit-transition: background-color 0.25s ease;
  transition: background-color 0.25s ease;
}

.switch-label::after {
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
  -webkit-transition: left 0.25s ease;
  transition: left 0.25s ease;
}

.switch-input:checked+.switch-label::before {
  background-color: #89c12d;
}

.switch-input:checked+.switch-label::after {
  left: 24px;
}

ul{
   list-style-type: decimal;
}

.headline{
  font-family: 'Cute Font', cursive;
  font-family: 'IBM Plex Sans KR', sans-serif;
  color: aqua;
  font-size: 24px;
  margin-top : 20px;
  margin-bottom : 20px;
  text-shadow: 1px 1px 1px #000;
}
.summitButton{
  border: 1px solid aqua;
  background-color: rgba(0,0,0,0);
  color: skyblue;
  padding: 5px;
  box-shadow: 1px 1px 1px aqua;
}

</style>
