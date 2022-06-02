<template>
<div>
  <LeftSideBar></LeftSideBar>
  <div class="right">
    <div class="container_layout_out fade1s">
      <div class="container_camera"></div>

      <div style="padding: 5px;">
        <div style="border:1px;border-radius: 15px;" v-show="!toggle">
          <center>
            <div style="border:solid 1px;height:13%; line-height:350%; background-color:#687C99; padding-top:10px;">
              <span style="font-size:30px;color:white;"> 인증서를 선택해 주세요 </span>
            </div>

          </center>
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
                        {{ row }}
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
                  <div style="margin-right: 2%; margin-bottom:2%" class="btnchild1">
                    <button class="btnbox" @click="check(index)">
                      <span style="font-size:30px; color:white;"> view </span>
                    </button>

                  </div>
                </div>
            </div>

          </div>
          </div>



          <div v-show="toggle">
           <div>
             <center>
               <div style="border:solid 1px; height: 15vh;line-height:700%; background-color:#687C99;">
                 <span style="font-size:40px; color:white;">{{ this.Qrname }}</span>
               </div>
               <div style="height: 60vh;margin-top:10%;">
                 <div>
                   <wj-barcode-qr-code style="height:40vh; width:40vh;" :value="theValue" ></wj-barcode-qr-code>
                 </div>
               </div>
               <div>
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
        </div>

      </div>
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

.container_layout_out {
  margin-top: 20px;
  margin-left: 400px;
  width: 400px;
  height: 95vh;
  border : 10px solid;
  border-radius: 30px;
  overflow : auto;
  font-family: 'Jua', sans-serif;
}

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
  margin-top: 20px;
}
.wordbox {
  font-size: 20px;
}

.child1 {
  width: 400px;
  height: 1100px;
  display: flex;
  align-content: center;
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

div.right {
  width: 83%;
  height: 100vh;
  float: right;
  background: rgba(16, 50, 92, 0.150);
}
.container_camera{
    background-color: black;
    width: 170px;
    height: 4%;
    margin-left: 100px;
    border-radius : 0 0 15px 15px / 0 0 15px 15px;
}


</style>
