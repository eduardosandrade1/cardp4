<template>
    <Loading v-show="loading"/>
    <input type="checkbox" class="visib-hidden" id="c1">
    <input type="checkbox" class="visib-hidden" id="c2">

    <div class="container__login flip-book">
        <div class="login-area flip" id="p2">
            <div class="container-center ">
                <div class="logo">
                    <img src="../assets/logo.png" alt="" srcset="" id="img-logo">
                </div>
                <div class="text-logo">
                    Login
                </div>
                <form v-on:submit="doLogin">
                    <div class="input-group">
                        <input type="email" placeholder="Email" v-model="email" required>
                    </div>
                    <div class="input-group">
                        <input type="password" placeholder="Senha" min="8" v-model="password" required>
                    </div>

                    <span class="text-danger" v-if="error">
                        {{ error }}
                    </span>

                    <div class="enter">
                        <button class="btn-enter">Entrar</button>
                    </div>
                </form>
                <div class="without-login">
                    <a class="btn-enter-none-login" @click="goToLoginPageWithoutAuthenticated()">Entrar sem login</a>
                </div>
                <div class="register">
                    <div class="link-register">
                        <a>
                            Quero me cadastrar
                        </a>
                    </div>
                    <div class="link-forgot-pass">
                        <a>
                            Esqueci a senha
                        </a>
                    </div>
                </div>
            </div>
            <label for="c1" class="back-btn color-black">Voltar</label>
        </div>
        <div class="explain-area flip" id="p1">
            <div class="content">
                <div class="text">
                    <p>
                        Este é o cardápio online :)
                    </p>
                    <p>
                        Faça um você mesmo!
                    </p>
                </div>
            </div>
            <label for="c1" class="next-btn color-white">Avançar</label>
        </div>
    </div>

</template>

<script>

    import { useVuelidate } from '@vuelidate/core'
    import { required, email } from '@vuelidate/validators'

    import Auth from '../services/auth';
    import Loading from '../components/Loading.vue'

    export default {
        data() {
            return {
                error: '',
                loading: false,
            }
        },
        methods: {
            doLogin(e) {
                e.preventDefault();
                let email = this.email;
                let psswd = this.password;
                this.loading = true;
                Auth.doAuth({

                    email: email,
                    password: psswd,

                }).then(response => {
                    if (200 === response.status) {
                        let data = response.data
                        if (data.access_token) {
                            sessionStorage.setItem('access_tk', data.access_token)
                            sessionStorage.setItem('ID', data.ID)
                        }
                        this.loading = false;

                        window.location.href = '/menu'
                    }
                }).catch(er => {
                    this.loading = false
                    this.error = "Email e/ou senha inválido"
                    this.email = ''
                    this.password = ''
                    setTimeout(() => {
                        this.error = '';
                    }, 4000);
                })
            },
            goToLoginPageWithoutAuthenticated() {
                sessionStorage.removeItem('access_tk')
                sessionStorage.removeItem('ID')
                window.location.href = '/menu';
            }
        },
        components: {
            Loading,
        }
    }

</script>

<style scoped>
    .container__login {
        display: flex;
        justify-content: space-between;
        width: 40vw;
        height: 90vh;
        margin: auto;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        background-color: #F8F8F8;
    }
    #img-logo {
        width: 30%;
        text-align: center;
    }

    .logo {
        display: flex;
        justify-content: center;
    }

    .text-logo {
        font-size: 32px;
    }

    .container__login .login-area {
        border-radius: 15px 0 0 15px;
        margin: auto;
        width: 100%;
    }

    .container__login .login-area .container-center {
        width: 400px;
        margin: auto;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .container__login .login-area .container-center .input-group{
        width: 100%;
    }
    .container__login .login-area .container-center .input-group input {
        outline:none;
        box-shadow: none;
        border: none;
        border-radius: 3px;
        background-color: transparent;
        border-bottom: 1px solid #909090;
        height: 37.4px;
        width: 100%;
        font-weight: 600;
        font-size: 20px;
    }

    .container__login .login-area .container-center .input-group {
        padding: 10px;
    }

    .container__login .login-area .container-center .enter {
        margin: 10px auto;
    }
    .container__login .login-area .container-center .enter .btn-enter {
        padding: 10px 100px;
        height: 48.52px;
        background-color: rgba(0, 0, 0, 0.79);
        font-size: 20px;
        border-radius: 11px;
        border: none;
        color: white;
        cursor: pointer;
    }
    
    .container__login .login-area .container-center .enter .btn-enter:hover {
        transition: width 1s, height 2s, background-color 2s, transform 2s;
        background-color: rgb(0, 0, 0);
    }

    .container__login .explain-area {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        width: 100%;
        height: 100%;
        background: url('../assets/images/explain-bg.jpg');
        background-color: rgba(0, 0, 0, 0.507);
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: darken;
        border-radius: 0 15px 15px 0;
    }

    .container__login .explain-area .text{
        color: white;
        /* font-size: 36px; */
        font-size: 2.1vw;
    }
    .container__login .explain-area .content {
        display: flex;
        flex-direction: column;
    }

    .container__login .explain-area .content .btn-register button {
        padding: 10px 100px;
        height: 48.52px;
        background-color: #F8F8F8;
        font-size: 20px;
        border-radius: 11px;
        border: none;
        color: rgba(0, 0, 0, 0.79);
        cursor: pointer;
    }

    .register {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 40px;
    }

    .btn-enter-none-login {
        font-size: 10pt;
        padding: 0;
        cursor: pointer;
    }

    .visib-hidden{
        visibility: hidden;
    }

    .book {
    display: flex;
    }
    #cover {
    width: 250px;
    height: 400px;
    }
    .flip-book {
    position: relative;
    perspective: 1500px;
    }
    .flip {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: left;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: 1s;
    }
    .front {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 13px;
    }
    .back {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    background-color: #000;
    }
    .next-btn {
    position: absolute;
    bottom: 13px;
    right: 13px;
    cursor: pointer;
    }
    .back-btn {
    position: absolute;
    bottom: 13px;
    right: 13px;
    cursor: pointer;
    }
    #p1 {
    z-index: 3;
    }
    #p2 {
    z-index: 2;
    }
    #p3 {
    z-index: 1;
    }
    #c1:checked ~ .flip-book #p1 {
    transform: rotateY(-180deg);
    z-index: 1;
    }
    #c2:checked ~ .flip-book #p2 {
    transform: rotateY(-180deg);
    z-index: 2;
    }
    #c3:checked ~ .flip-book #p3 {
    transform: rotateY(-180deg);
    z-index: 3;
    }
</style>