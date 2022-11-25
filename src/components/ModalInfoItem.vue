<template>

    <div class="container__">
        <div class="background__items_option">
            <div class="input_item_div border-tb" v-if="itemphonearray.tag == 'img'" >
                <img :src="srcValue" class="img-size">
            </div>

            <div class="input_item_div border-tb" v-else-if="itemphonearray.tag == 'input'">
              <div class="d-flex flex-direction-column">
                <div class="user-box">
                    <input type="text" name="" maxlength="20" placeholder="Escreva seu título" v-model="valueInput">
                    <label for="">Título</label>
                </div>
                <label for="">Alinhamento</label>
                <div class="options-style">
                  <div class="text-start" @click="alignClass(`text-start`)">
                    <img src="../assets/icons/align-left.png" alt="" class="icon">
                  </div>
                  <div class="text-center" @click="alignClass(`text-center`)">
                    <img src="../assets/icons/align-center.png" alt="" class="icon">
                  </div>
                  <div class="text-end" @click="alignClass(`text-end`)">
                    <img src="../assets/icons/align-right.png" alt="" class="icon">
                  </div>
                </div>
                <label for="">Cor da fonte</label>
                <div class="options-style">
                  <div class="primary" @click="addColor('color-primary')">
                    <div class="div-color-primary">

                    </div>
                  </div>
                  <div class="secondary" @click="addColor('color-secondary')">
                    <div class="div-color-secondary">

                    </div>
                  </div>
                  <div class="tertiary" @click="addColor('color-tertiary')">
                    <div class="div-color-tertiary">

                    </div>
                  </div>
                  <div class="quartiary" @click="addColor('color-quartiary')">
                    <div class="div-color-quartiary">

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="input_item_div flex-direction-row border-tb" v-else-if="itemphonearray.tag == 'item'">

                <img :src="srcValue" class="img-size">

                <div class="texts">
                    <div class="user-box">
                        <input type="text" name="" maxlength="20" placeholder="Título do item" v-model="itemName">
                        <label>Título</label>
                    </div>
                    <div class="user-box">
                        <input type="number" name="" step='0.01' maxlength="20" placeholder="Preço" v-model="itemPrice">
                        <label>Preço</label>
                    </div>
                    <textarea name="" id="" cols="30" rows="3" maxlength="40" placeholder="Descrição..." v-model="description"></textarea>
                </div>

            </div>
            <div class="d-flex-text-center" v-else>
              <p>
                Clique em um item para editá-lo.
              </p>
            </div>
        </div>
    </div>

</template>
<script>

    export default {
        props: ['itemphonearray', 'chave'],
        data() {
            return {
                
            }
        },
        methods: {
          alignClass (align) {
            let classe = this.$parent.items[this.chave].classe;

            classe.forEach((element, index) => {
              let pos = element.indexOf('text-');
              if (pos > -1){
                classe.splice(index, 1);
              }
            });

            (classe).push(align);
          },
          addColor (nameClass) {
            let classe = this.$parent.items[this.chave].classe;

            classe.forEach((element, index) => {
              let pos = element.indexOf('color-');
              if (pos > -1){
                classe.splice(index, 1);
              }
            });

            (classe).push(nameClass);
          }
        },
        computed: {
            valueInput: {
                get() {
                    return this.$parent.items[this.chave].value;
                },
                set(val) {
                    let it = JSON.parse(JSON.stringify(this.$parent.items[this.chave]))
                    it.value = val;
                    this.$parent.items.splice(this.chave, 1);
                    this.$parent.items.splice(this.chave, 0, it)
                }
            },
            srcValue: {
                get() {
                    return this.$parent.items[this.chave].path;
                },
                set() {

                }
            },
            itemName: {
                get() {
                    return this.$parent.items[this.chave].name;
                },
                set(val) {
                    let it = JSON.parse(JSON.stringify(this.$parent.items[this.chave]))
                    it.name = val;
                    this.$parent.items.splice(this.chave, 1);
                    this.$parent.items.splice(this.chave, 0, it)
                }
            },
            description : {
                get() {
                    return this.$parent.items[this.chave].description;
                },
                set(val) {
                    let it = JSON.parse(JSON.stringify(this.$parent.items[this.chave]))
                    it.description = val;
                    this.$parent.items.splice(this.chave, 1);
                    this.$parent.items.splice(this.chave, 0, it)
                }
            }, 
            itemPrice: {
                get() {
                    return this.$parent.items[this.chave].price;
                },
                set(val) {
                    let it = JSON.parse(JSON.stringify(this.$parent.items[this.chave]))
                    it.price = val;
                    this.$parent.items.splice(this.chave, 1);
                    this.$parent.items.splice(this.chave, 0, it)
                }
            }
        },
    }

</script>

<style scoped>
.background__items_option {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    min-height: 700px;
    padding: 50px;
    border-radius: 25px;
    box-shadow: rgb(255 255 255 / 10%) 0px 1px 1px 0px inset, rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px;
}
.img-size{
    width: 100%;
    border-radius: 25px;
}

.flex-direction-row{
    display: flex;
    flex-direction: column;
}

textarea {
    outline:none;
    box-shadow: none;
    border: none;
    white-space: pre-wrap;
}

html {
  height: 100%;
}
body {
  margin:0;
  padding:0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
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

.d-flex-text-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-direction-column{
  flex-direction: column;
}

.options-style{
  display: flex;
  justify-content: space-around;
}
.options-style div{
  margin: 10px;
  cursor: pointer;
}

.div-color-primary {
  width: var(--width-div-color);
  height: var(--height-div-color);
  background-color: var(--color-div-font-item-primary);
  border-radius: var(--radius-div-color);
}
.div-color-secondary {
  width: var(--width-div-color);
  height: var(--height-div-color);
  background-color: var(--color-div-font-item-secondary);
  border-radius: var(--radius-div-color);
}
.div-color-tertiary {
  width: var(--width-div-color);
  height: var(--height-div-color);
  background-color: var(--color-div-font-item-tertiary);
  border-radius: var(--radius-div-color);
}
.div-color-quartiary {
  width: var(--width-div-color);
  height: var(--height-div-color);
  background-color: var(--color-div-font-item-quartiary);
  border-radius: var(--radius-div-color);
}

</style>