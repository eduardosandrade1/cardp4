<template>
    <div id="myModal" class="modal" v-show="show">
        <div class="modal-content">
            <span class="close" @click="close()">&times;</span>
            <div class="content">
                <h1>
                  {{ title }}
                </h1>
                <div class="qrcode">
                    <vue-qrcode
                        :value="valueQrCode"
                        :width="200"
                    />
                </div>
                <p class="text-danger">{{ message }}</p>

                <input type="email" name="" id="">

                <button class="btn btn-primary">Enviar</button>
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
            this.$parent.showQrCode = false;
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
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

</style>