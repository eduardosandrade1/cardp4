<template>
    <Loading v-show="loading"/>
    <div class="container__login">
        <div class="login-area">
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
        </div>
        <div class="explain-area">
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
        width: 90vw;
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
    }

    .container__login .login-area .container-center {
        width: 400px;
        height: 300px;
        margin: auto;
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
        width: 50%;
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

</style>