<template>
<div id="myModal" class="modal" v-show="show">
    <div class="modal-content">
        <span class="close" @click="close()">&times;</span>
        <h1>
          {{ title }}
        </h1>
        <p class="text-danger">{{ message }}</p>
    </div>

</div>
</template>

<script>

export default {
  props: [
    'title',
    'message',
    'show',
  ],
  methods: {
    close () {
      this.$parent.show = false;
    }
  }
}

</script>

<style>

/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  border-radius: 15px;
  width: 40%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.text-danger {
  color: red;
}

</style>