<template>
    <div class="container__view">
        <div class="itens" v-for="(item, k) in items">
            <Item 
                :chave="k"
                :type="item.tag"
                :src="'../'+item.path"
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

import menu from '../services/menu'

export default {

    data() {
        return {
            items:[],
        }
    },

    mounted () {
        if (sessionStorage.getItem('ID')) {
            let tk = 'Bearer ' + sessionStorage.getItem('access_tk');
            const headers = {
              'Authorization': tk,
            }

            menu.get(this.$route.params.id, headers).then(res => {
                this.items = res.data;
            }).catch(failed => {
              console.log(failed)
            });
        }
    },
    components: {
        Item
    }

}

</script>