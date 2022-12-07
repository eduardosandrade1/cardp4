<template>

    <div class="container__">
        <div class="menu_size__">
            <div 
                class="div_item" 
                v-for="item in getMenu()" 
                draggable="true" 
                @dragstart="startDrag($event, item)"
            >
                <Item 
                    :key="item.id" 
                    :classeTitilo="item.classe_titilo"
                    :classeDescricao="item.classe_descricao"
                    :type="item.tag" 
                    :src="item.path" 
                    :alt="item.alt" 
                    :value="item.value"
                    :place_item="''" 
                    :name="item.name" 
                    :description="item.description" 
                    :price="item.price" 
                />
            </div>
        </div>
    </div>

</template>

<script>

import Item from './Item.vue';

export default {
    name: "MenuSize",
    props: [
        'type', 'src', 'alt', 'value',
    ],
    data() {
        return {

        }
    },
    components: {
        Item,
    },
    methods: {
        getMenu() {
            return this.$parent.getMenu();
        },
        startDrag(event, item) {
            this.$parent.startDrag(event, item);
        },

        onDrop(event, list) {

            this.$parent.onDrop(event, list);
        }
    }
}

</script>

<style scoped>
.container__ {
    width: 398px;
}

.menu_size__ {
    background-color: rgb(168, 168, 168, 0.13);
    min-height: 50%;
    border-radius: 16px;
    padding: 50px;
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

}
</style>