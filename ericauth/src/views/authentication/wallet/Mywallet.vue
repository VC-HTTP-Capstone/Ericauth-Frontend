<template>
<div>
  <LeftSideBar></LeftSideBar>
  <div>
    <div>
    </div>
    <div style="height:200px;line-height:200px;">
      <center>
        <span style="font-size:50px;">인증서를 골라주세요</span>
      </center>
    </div>
    <div v-show="toggle">
      <div>
        <center>
          {{ this.Qrname }}
          <wj-barcode-qr-code :value="theValue"></wj-barcode-qr-code>
          <button @click="change_toggle"> 확인 </button>
          <button @click="Delete"> 삭제 </button>
        </center>
      </div>
    </div>
    <div v-show="!toggle">
      <div v-for="(row, index) in rows" :key="row.id">
        <center>
          <div class="divbox">
            <div style="height:100px;">
                <button class="btnbox" @click="check(index)">
                  <div>
                    <img
                      class="qr"
                      style="background-color:#AFC4E7;"
                      src="../../../assets/qr.png"
                    />
                    <span class="wordbox">
                      {{ row }}
                    </span>
                  </div>
                </button>
            </div>
          </div>
        </center>
      </div>
    </div>
    <div>
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
  display: flex;
  flex-direction: column;
  flex: 1;
  width : 40%;
  margin-top: 10px;
  margin-bottom: 10px;
  border : solid 1px;
}
.btnbox {
  width:100%;
  height: 100%;
}
.qr {
  height: 90px;
  width: 15%;
  float: left;
}
.wordbox {
  font-size: 30px;
  line-height: 100px;
}
.parent {
  display: flex;
  height: 100vh;
  position: relative;
}
.child1 {
  flex: 3;
}
.child2 {
  flex: 1;
}

</style>
