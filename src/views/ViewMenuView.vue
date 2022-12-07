<template>
    <div class="container__view" v-if="!showPreviewItem">
        <img :src="background_phone_preview" alt="" class="background__image">
        <div class="itens" v-for="(item, k) in items" @click="showItem(item)">
            <Item 
                :chave="k"
                :type="item.tag"
                :class="item.classe"
                :src="item.path"
                :alt="item.alt"
                :value="item.value"
                :place_item="'screen'"
                :name="item.name"
                :description="item.description"
                :price="item.price"
                :show-action="false"
            />
        </div>
    </div>

</template>

<script>

import Item from '../components/Item.vue'
import PreviewItem from '../components/PreviewItem.vue';

import menu from '../services/menu'

export default {

    data() {
        return {
            items:[],
            itemSelected: {},
            showPreviewItem: false,
            classe: [],
            background_phone_preview: '',
        }
    },

    methods: {
        showItem(item) {
            console.log(item)
            this.itemSelected = item
            this.showPreviewItem = true
        }
    },
    mounted () {
        let tk = '';
        if (sessionStorage.getItem('ID')) {
            tk = 'Bearer ' + sessionStorage.getItem('access_tk');
        }
        const headers = {
            'Authorization': tk,
        }

        menu.getToView(this.$route.params.id, headers).then(res => {
            if (typeof res.data != "undefined") {
                this.items = res.data.items
            if (typeof res.data.background != "undefined") {
                console.log(res.data.background)
                this.background_phone_preview = res.data.background
            }
        }
        }).catch(failed => {
            if (401 == failed.response.status) {

                this.error = true
                this.titleError = "Sessão expirada!"
                this.messageError = "Por favor, efetue o login novamente!";

                setTimeout(() => {
                window.location.href = '/';
                }, 7000)
            }
        });
    },
    components: {
        Item,
        PreviewItem,
    }

}

</script>

<style>
#app {
    padding: 0 !important;
}
.container__view{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.background__image {
    position: absolute;
    width: 95%;
    min-height: 98%;
    border-radius: 35px;
    background-color: #F8F8F8;
    max-height: 98%;
}

.itens {
    margin-top: 18px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>