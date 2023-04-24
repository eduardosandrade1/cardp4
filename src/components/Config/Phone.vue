<template>
<!-- src="https://i.pinimg.com/736x/43/99/70/439970978afe5410fdc8d1d7b272453e.jpg" -->
    <div class="background__">
        <img :src="background_phone_preview" alt="" class="background__image">
        <input type="file" name="" id="" ref="background__image" @change="uploadFile()" accept=".jpg,.png,.jpeg" />
        <div class="phone-top">
            <div class="camera">

            </div>
        </div>
        <div class="top__bar">
            <div class="left ">
                <span class="time">
                    {{hour}}
                </span>
            </div>
            <div class="right ">
                <div class="mobile-network">
                    <img class="icon" src="../../assets/icons/signal.png" alt="" >
                </div>
                <div class="wifi">
                    <img class="icon" src="../../assets/icons/wifi.png" alt="" >
                </div>
                <div class="icon battery">
                    <img class="icon" src="../../assets/icons/icon-battery.png" alt="" >
                </div>

            </div>
        </div>
        <div 
            class="screen__"
            @drop="onDrop($event, 1)"
        >
            <div 
                class="div_item"
                v-for="(item, k) in getList()"
                draggable="true"
                @dragstart="startDrag($event, item)"
            >
                <Item 
                    :chave="k"
                    :class="item.classe"
                    :classeTitilo="item.classe_titilo"
                    :classeDescricao="item.classe_descricao"
                    :type="item.tag"
                    :src="typeof item.linkPreview == 'undefined' || item.linkPreview == '' ? item.path : item.linkPreview"
                    :alt="item.alt"
                    :value="item.value"
                    :place_item="'screen'"
                    :name="item.name"
                    :description="item.description"
                    :price="item.price"
                    :show-action="showAction"
                 />
            </div>
        </div>
    </div>
</template>

<script>

import Item from './Item.vue';

export default {
    name: "Phone",
    props: [
        'type', 'src', 'alt', 'value', 'showAction', 'background_phone_preview',
    ],
    data() {
        return {
            hour: "",
        }
    },
    created() {
        setInterval(this.getHour(), 10000);
    },
    components: {
        Item,
    },
    methods: {
        getList (){
            return this.$parent.getList();
        },

        startDrag (event, item) {
            this.$parent.startDrag(event, item);
        },

        onDrop (event, list) {
            this.$parent.onDrop(event, list);
        },

        toTop(arrPosition) {
            this.$parent.toTop(arrPosition);
        },

        toBottom(arrPosition) {
            this.$parent.toBottom(arrPosition);
        },

        toTrash(arrPosition) {
            this.$parent.toTrash(arrPosition)
        },

        getHour() {
            const today = new Date();
            const time = this.formatNumber(today.getHours()) + ":" + this.formatNumber(today.getMinutes());
            this.hour = time;
        },

        formatNumber(num) {
            if (num < 10)
                return '0'+num;
            return num
        },

        showInfoDiv(typeItem, indexElement) {
            this.$parent.showInfoDiv(typeItem, indexElement)
        },
        uploadFile() {
            const linkPreview = window.URL.createObjectURL(this.$refs.background__image.files[0]);
            this.$parent.configPhone.linkPreview    = linkPreview;
            this.$parent.configPhone.refImage       = this.$refs.background__image.files[0];
        },
        clickBanner() {
            this.$refs.background__image.click();
            return false
        },
    },
    computed: {
        background_phone_preview: {
            get() {
                return typeof this.$parent.configPhone.linkPreview == "undefined" || this.$parent.configPhone.linkPreview == '' ? this.background_phone_preview : this.$parent.configPhone.linkPreview ;
            }, 
        }
    }
}

</script>

<style scoped>

.background__{
    width: 309px;
    min-height: 610px;
    max-height: 610px;
    background-color: #000000;
    border: 3.4px solid #4C4B4B;
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
    /* box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
    /* border: 0.3vw solid #a7a6ab; */
    /* box-shadow: rgba(0, 0, 0, 0.35) 0px 15px 30px;
     */
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
    /* box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, .09) 0px 4px 2px inset, rgba(0, 0, 0, 0.09) 0px 8px 4px inset, rgba(0, 0, 0, 0.09) 0px 16px 8px inset, rgba(0, 0, 0, 0.09) 0px 32px 16px inset; */
    flex-direction: column;
}

.background__image {
    position: absolute;
    width: 95%;
    min-height: 98%;
    border-radius: 35px;
    background-color: #F8F8F8;
    max-height: 98%;
}

.background__ .top__bar{
    color: #000000;
    width: 95%;
    padding: 3px 15px;
    border-radius: 50px 50px 0 0 ;
    background-color: #0000001c;
    display: flex;
    justify-content: space-between;
}

.background__ .top__bar .left .time {
    font-weight: 700;
    font-size: 12px;
}

.background__ .top__bar .right{
    display: flex;
}

.background__ .top__bar .right .icon{
    margin: 0px 3px;
}

.background__ .screen__ {
    width: 95%;
    min-height: 93%;
    max-height: 90%;
    border-radius: 0 0 35px 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow:auto;
    padding: 0 20px;
}

.screen__::-webkit-scrollbar{
    display: none;
}

.div_item {
    margin-top: 5px;
}

.icon{
    max-width: 16px;
}

.camera {
    content: "";
    position: absolute;
    left: 50%;
    background: #131313;
    box-shadow: none;
    z-index: 1;
    top: 8px;
    width: 14px;
    height: 14px;
    margin-left: -7px;
    border-radius: 50%;
}

</style>