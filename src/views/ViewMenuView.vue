<template>
    <div class="container__view" v-if="!showPreviewItem">
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
            this.items = res.data;
        }).catch(failed => {
            console.log(failed)
        });
    },
    components: {
        Item,
        PreviewItem,
    }

}

</script>

<style>

.container__view{
    display: flex;
    justify-content: center;
    width: 100%;
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