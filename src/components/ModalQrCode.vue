<template>
    <div id="myModal" class="modal" v-show="show">
        <div class="modal-content">
            <span class="close hidden-print" @click="close()">&times;</span>
            <div class="content">
                <h1 class="hidden-print">
                  {{ title }}
                </h1>
                <div class="qrcode">
                    <vue-qrcode
                        :value="valueQrCode"
                        :width="400"
                        :type="'image/png'"
                        :color="{ dark: '#000000ff', light: '#ffffffff' }"
                    />
                </div>
                <p class="text-danger hidden-print">{{ message }}</p>

                <div class="user-box">
                    <input type="email" name="" id="" class="input-border-black">
                    <label for="" class="hidden-print">Email</label>
                </div>

                <button class="btn btn-primary hidden-print">Enviar</button>
                <button class="btn btn-primary hidden-print" @click="imprimir()">Imprimir</button>
            </div>
        </div>
    
    </div>
</template>

<script>

import VueQrcode from 'vue-qrcode'

export default {
    props: ['title', 'message', 'show', 'valueQrCode'],
    components: {
        VueQrcode,
    },
    methods: {
        close(){
<<<<<<< HEAD
          window.location.reload();
=======
          window.location.reload()
        },
        imprimir(){
          window.print()
>>>>>>> 4ef4395bb274299da65d3c2ba8abb37a879d4c21
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
    margin: 10px auto; /* 15% from the top and centered */
    padding: 20px;
    border-radius: 15px;
    width: 80%; /* Could be more or less, depending on screen size */
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    text-align: end;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.user-box {
  position: relative;
}

.user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.user-box input:focus ~ label,
.user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #000000;
  font-size: 12px;
}

a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: var(letter-spacing-global);
}

a span {
  position: absolute;
  display: block;
}

a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

@media print {

}
</style>