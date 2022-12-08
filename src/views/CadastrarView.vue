<template>
    <div class="register-area flip" id="p3">
        <div class="container-center">
            <form v-on:submit="doRegister($event)">
                <div class="input-group">
                    <input type="email" placeholder="Email" v-model="email" required>
                </div>
                <div class="input-group">
                    <input type="password" placeholder="Senha" min="8" v-model="password" required>
                    <div class="role-password">
                        <ul>
                            <li>
                                <span :class="validations.specialChars"></span>
                                Uma caracter especial
                            </li>
                            <li>
                                <span :class="validations.uppercase"></span>
                                Uma letra maiúscula
                            </li>
                            <li>
                                <span :class="validations.numberMinimium"></span>
                                Um número
                            </li>
                            <li>
                                <span :class="validations.qtdMinimium"></span>
                                Mínimo 8 caracteres
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="input-group">
                    <input type="password" @focusout="PasswordEqual()" placeholder="Confirmar senha" min="8" v-model="password_confirm" required>
                </div>

                <span class="text-danger error" v-if="error">
                    {{ error }}
                </span>
                <div class="enter">
                    <button class="btn-enter">Cadastrar</button>
                </div>
            </form>
            <label for="c2" class="back-btn color-black">Voltar</label>
        </div>

    </div>
</template>

<script>

export default {

    data() {
        return {
            email: '',
            password: '',
            password_confirm: '',
            error: '',
            validations: {
                specialChars: 'invalid',
                uppercase: 'invalid',
                numberMinimium: 'invalid',
                qtdMinimium: 'invalid',
            }
        }
    },
    methods: {
        doRegister(e) {
            if ( ! this.validatePassword() ) {
                e.preventDefault();
            }
            
        },
        validatePassword() {
            for( let validate in this.validations ) {
                if (this.validations[validate] == 'invalid') {
                    return false
                }
            }
            if (this.password_confirm != this.password && this.password_confirm != "") {
                this.error = "As senhas não coincidem";
                return false
            }
            
            this.error = ""
            return true
        }
    },
    computed: {
        password: {
            set (val) {
                this.password = val
                if ( val.length >= 8 ) {
                    this.validations.qtdMinimium = 'valid'
                } else {
                    this.validations.qtdMinimium = 'invalid'
                }

                let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
                if ( val.match(specialChars) ) {
                    this.validations.specialChars = 'valid'
                } else {
                    this.validations.specialChars = 'invalid'
                }

                let upperCaseLetters = /[A-Z]/g;
                if ( val.match(upperCaseLetters) ) {
                    this.validations.uppercase = 'valid'
                } else {
                    this.validations.uppercase = 'invalid'
                }

                let number = /[0-9]/g;
                if ( val.match(number) ) {
                    this.validations.numberMinimium = 'valid'
                } else {
                    this.validations.numberMinimium = 'invalid'
                }
            },
            get () {
                return this.password
            }
        }
    }

}

</script>

<style>

.container-center {
    width: 100%;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.register-area {
    border-radius: 0 15px 15px 0;
    margin: auto;
    width: 100%;
    background-color: #fff;

}

.role-password {
    font-size: 12px;
    margin: 10px 0;
}
.role-password ul {
    text-decoration: none;
    list-style: none;
    padding: 0;
}

.valid:before {
  position: relative;
  color: green;
  content: "✔";
}

.invalid:before {
  position: relative;
  color: red;
  content: "X";
}

</style>