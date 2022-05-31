<template>
<div>
  <LeftSideBar></LeftSideBar>
  <div class="parent">
    <div class="child2">
    </div>
    <div class="child1" v-show="toggle">
      <div>
        <center>
          <div style="border:solid 1px; height: 15vh;line-height:700%; 
          background-color:#687C99;">
            <span style="font-size:40px; color:white;">{{ this.Qrname }}</span>
          </div>
          <div style="height: 60vh;margin-top:10%;">
            <div>
              <wj-barcode-qr-code style="height:60vh; width:60vh;" :value="theValue" ></wj-barcode-qr-code>
            </div>
          </div>
          <div style="margin-top:10%;">
            <button class="btnboxcheck" @click="change_toggle"> 
              <span style="color:white;">확인</span> 
            </button>
            <button class="btnboxrm" @click="Delete">
              <span style="color:white;">삭제</span>
            </button>
          </div>
        </center>
      </div>
    </div>
    <div style="background-color:#687C99;" class="child1" v-show="!toggle">
      <div style="border:solid 1px;height:13%; line-height:650%; background-color:#687C99;">
        <center>
          <span style="font-size:30px;color:white;"> 인증서를 선택해 주세요 </span>
        </center>
      </div>
      <div style="height:20%; border:solid 1px; background-color:white;" v-for="(row, index) in rows" :key="row.id">
        <div class="divbox">
            <div class="btnparent">
              <div class="btnchild1"> 
                <img class="qr"
                  src="../../../assets/qr.png"
                />
                
              </div>
              <div class="btnchild2">  
                <div>
                  <span class="wordbox">
                    이름 : {{ row }}
                  </span>
                </div>
                <div>
                  <span class="wordbox">
                    발급 날짜 : 2022/05/07
                  </span>
                </div>
                <div>
                  <span class="wordbox">
                    만료 날짜 : 2023/05/07
                  </span>
                </div>
              </div>
              <div style="margin-right: 2%;" class="btnchild1"> 
                <button class="btnbox" @click="check(index)">
                  <span style="font-size:30px; color:white;"> view </span>
                </button>
                
              </div>
            </div>
        </div>
        
      </div>
    </div>
    <div class="child2">
    </div>
  </div>

</div>
</template>

<script>
import LeftSideBar from '../../../components/Sidebar.vue'


export default {
  name:'mywallet',
  data(){
    return{
        rows:[

        ],
        toggle:false,
        theValue: this.$store.state.qrDetail,
        Qrname: ''
    }
  },
  mounted: function(){
    this.$nextTick(this.render)
  },
  components: {
    LeftSideBar,
  },
  methods: {
    render: function(){
        fetch("http://localhost:8080/api/qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.$store.state.email,
        })
      })
        .then(response => response.json())
        .then(data => {
            this.rows.splice(0);
            for(var i = 0;i < data.qrNames.length;i++){
                this.rows.push(data.qrNames[i])
                console.log(data.qrNames[i]);
            }
        })
        .catch(error => {
          console.log(error);
        });
    },
    check: function(index){
        fetch("http://localhost:8080/api/qr/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.$store.state.email,
          qrName: this.rows[index]
        })
      })
        .then(response => response.json())
        .then(data => {
          this.$store.commit("persistedQrdetail", {
            value: data.data
          });
          this.toggle = !this.toggle;
          this.Qrname = data.qrName;
          console.log(this.$store.state.qrDetail);
          console.log(data.data);
        })
        .catch(error => {
        });
    },
    change_toggle: function(){
      this.toggle = !this.toggle;
    },
    Delete: function(){
      fetch("http://localhost:8080/api/qr/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.$store.state.email,
          qrName: this.Qrname
        })
      })
        .then(response => response.json())
        .then(data => {
          alert("삭제 완료");
          this.toggle = !this.toggle;
          this.render();
        })
        .catch(error => {
        });
    }
  }
}
</script>


<style scoped>
.divbox {
  width : 100%;
  border: solid 1px;
  height: 100%;
}
.btnbox {
  width:100%;
  height: 100%;
  background-color: #40AFFF;
  border: 0;
  outline: 0;
  padding:0;
}
.btnbox:hover {
  background-color:#399EE5;
}
.btnboxrm {
  border: 0;
  outline: 0;
  padding:0;
  width:20vh;
  height: 5vh;
  background-color: #fd5e53;
  margin-left:5%;
}
.btnboxrm:hover {
  background-color: #D11507;
}
.btnboxcheck {
  border: 0;
  outline: 0;
  padding:0;
  width:20vh;
  height: 5vh;
  background-color: #21bf73;
  margin-right:5%;
}
.btnboxcheck:hover {
  background-color: #4aa96c;
}
.qr {
  height: 15vh;
  width: 15vh;
}
.wordbox {
  font-size: 20px;
}
.parent {
  display: flex;
  height: 100vh;
}
.child1 {
  flex: 3;
}
.child2 {
  flex: 2;
  background-color:#F2FBFD;
}
.btnparent {
  display: flex;
}
.btnchild1 {
  flex: 1;
  margin-top:3%;
  margin-left:1%;
}
.btnchild2 {
  flex: 2;
  margin-top:6%;
}


</style>
