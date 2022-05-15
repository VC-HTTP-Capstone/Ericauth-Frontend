<template>
  <button @click="logOut()" class="">Logout</button>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";

export default {
  methods:{
    logOut: function(){
           const auth = getAuth();
           signOut(auth).then(() => {
            console.log(auth);
            this.$store.commit('persistedID',{
              value: "empty"
            })
            this.$router.push("/login");
           }).catch((error) => {
            console.log("error");
           });
         }
  }
}
</script>

<style lang="css" scoped>
</style>
