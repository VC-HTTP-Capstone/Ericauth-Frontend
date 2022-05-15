<template>
<div>
  <LeftSideBar></LeftSideBar>
  <div class="right fade3s">
    <div style="margin-top:30px; margin-left:50px; margin-right:300px;">
      <div class="profile">
        <span>Public profile</span>
      </div>
      <hr />
      <div class="category">
        <span>이름</span>
      </div>
      <div style="margin-top:10px;">
        <div class="text-box">
          <input class="inp" placeholder="Name" type="text" style="text-align:; font-size:19px;" v-model="name">
        </div>
      </div>
      <div class="category" style="margin-top:30px;">
        <span>학번</span>
      </div>
      <div style="margin-top:10px;">
        <div class="text-box">
          <input class="inp" placeholder="Student_id" type="text" style="text-align:; font-size:19px; " v-model="student_id">
        </div>
      </div>
      <div class="category" style="margin-top:30px;">
        <span>소속</span>
      </div>
      <div style="margin-top:10px;">
        <div class="text-box">
          <input class="inp" placeholder="Team" type="text" style="text-align:; font-size:19px; " v-model="team">
        </div>
      </div>
      <div style="margin-top:30px;">
        <button class="button_style btn btn-primary fade3s" type="button" v-on:click="store_data()">확인</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LeftSideBar from '../../components/Sidebar.vue'

export default {
  name: 'information',
  data(){
    return{
      name:"",
      student_id:"",
      team:""
    }
  },
  methods:{
    store_data:function(){
      console.log(this.$store.state.name)
      console.log(this.$store.state.student_id)
      console.log(this.$store.state.team)
    }
  },
  components:{
    LeftSideBar,
  }

}
</script>

<style scoped>
.fade3s {
  animation: fade-in 3s ease-in-out;
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

div.left {
  width: 17%;
  height: 100vh;
  float: left;
  background: rgba(16, 50, 92, 0.522);
}

div.right {
  width: 83%;
  height: 100vh;
  float: right;
  background: rgba(16, 50, 92, 0.150);
}

.sidebar {
  color: white;
  padding: 20px;
  font-size: 25px;
  font-family: 'RixYeoljeongdo_Regular';
}

.profile {
  text-align: left;
  font-size: 25px;
  font-family: 'SEBANG_Gothic_Bold';
}

.category {
  text-align: left;
  font-size: 18px;
  font-family: 'SEBANG_Gothic_Bold';
}

.inp {
  border: none;
  border-bottom: 1px solid #310b0b;
  padding: 5px 10px;
  outline: none;
  width: 30%;
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
</style>
