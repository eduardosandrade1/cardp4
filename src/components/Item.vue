<template>
    <div class="input_item_div border-tb bg-transparent" v-if="type == 'input'">
        <input :value="value" readonly placeholder="Título" :class="class"  @click="showInfoDiv(type, chave)" />
        <IconActionItem :place_item="place_item" :chave="chave" v-show="showAction" />

    </div>
    
    <div class="input_item_div border-tb" v-if="type == 'img'">
        <label class="custom-file-upload" @click="showInfoDiv(type, chave)">
            <img :alt="alt" :src="src" class="img-size">
        </label>
        <IconActionItem :place_item="place_item" :chave="chave" v-show="showAction" />

    </div>

    <div class="input_item_div border-tb" v-if="type == 'item'">
        <div class="div_item_with_pic__" @click="showInfoDiv(type, chave)" >
            <img :alt="alt" :src="src" class="img_item_list">
            <div class="infos">
                <div class="top-titles">
                    <span :class="classeTitilo" >
                        {{ name }}
                    </span>
                    <div class="price">
                        R$ {{ price.toFixed(2) }}
                    </div>
                </div>
                
                <div :class="classeDescricao">
                    {{ description }}
                </div>
            </div>
        </div>
        <IconActionItem :place_item="place_item" :chave="chave" v-show="showAction" />
    </div>

</template>

<script>
    import IconActionItem from './icons/IconActionItem.vue';

    export default {
        name: "Item",
        props: ['showAction', 'type', 'src', 'alt', 'value', 'place_item', 'chave', 'name', 'description', 'price', 'class', 'classeTitilo', 'classeDescricao'],
        data() {
            return {

            }
        },
        methods: {
            setBanner(){

                let imgBann = document.getElementById("input-banner").files[0];

                this.additem('banner', window.URL.createObjectURL(imgBann));
            },
            toTop() {
                this.$parent.toTop(this.chave);
            },
            toBottom() {
                this.$parent.toBottom(this.chave);
            },
            toTrash() {
                this.$parent.toTrash(this.chave)
            },
            showInfoDiv(typeItem, indexElement) {
                if (typeof typeItem != 'undefined' && typeof indexElement != 'undefined' && this.showAction !== false) {
                    this.$parent.showInfoDiv(typeItem, indexElement)
                }
            },
        },
        components: {
            IconActionItem,
        },
        computed: {
            classe: {
                get() {
                    return this.class.join(" ")
                }
            }
        }
    }
</script>

<style>
    .input_item_div {
        display: flex;
    }
    .input_item_div input{
        font-size:  20pt;
        width: 100%;
        margin: 5px 2px;
        outline:none;
        box-shadow: none;
        border: none;
        border-radius: 3px;
    }
    .bg-transparent input{
        background-color: transparent;
    }
    .border-tb {
        margin-top: 6px;
        margin-bottom: 6px;
    }
    .img-size{
        width: 100%;
        border-radius: 25px;
    }
    input[type="file"] {
        display: none;
    }
    .div_item_with_pic__{
        display: flex;
        border-top: 6px;
        /* background-color: #ececec; */
        background-color: #F8F8F8;
        max-height: 76px;
        border-radius: 15px;
        font-size: 10pt;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        /* box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px; */
        /* box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; */
        /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    }
    .img_item_list {
        max-width: 100%;
        max-height: 100%;
        height: 100%;
        border-radius: 15px;
    }

    .infos {
        width: 100%;
        height: 100%;
    }

    .infos .title {
        font-weight: 800;
        font-size: 12pt;
        color: #000;
    }

    .infos .description {
        font-size: 8pt;
        padding: 0 10px;
        margin-left: 4px;
        color: #000;
        white-space: pre;
        font-weight: 500;

    }
    .infos .top-titles {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
    }
    .infos .top-titles .price {
        font-weight: 500;
    }
</style>