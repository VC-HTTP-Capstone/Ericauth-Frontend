<template>
  <div>
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      burla
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.modal{
}
.overlay {
  width: 200px;
  height: 200px;
  display: flex;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.1;
  background-color: black;
}
.modal-card {
  border: 1px solid;
  position: relative;
  top: 50%;
  left: 50%;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
}
</style>
