<template>

    <div class="space_opt_items" v-if="place_item == 'screen'">
            <div class="top" @click="toTop()">
                <img src="../../assets/icons/up-arrow.png" alt="" class="icon">
            </div>
            <div class="bottom" @click="toBottom()">
                <img src="../../assets/icons/chevron.png" alt="" class="icon">
            </div>
            <div class="trash" :chave="chave" @click="toTrash()">
                <img src="../../assets/icons/delete.png" alt="" class="icon">
            </div>
        </div>

</template>

<script>

export default {
    props: ['place_item', 'chave'],
    data() {
        return {

        }
    },
    methods: {
        toTop() {
            this.$parent.toTop(this.chave);
        },
        toBottom() {
            this.$parent.toBottom(this.chave);
        },
        toTrash() {
            this.$parent.toTrash(this.chave);
        }
    }
}

</script>

<style scoped>

    .space_opt_items{
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: black;
        justify-content: space-around;
        background-color: transparent;
        margin-left: 4px;
    }
    .icon{
        max-width: 16px;
    }

    .space_opt_items div {
        cursor: pointer;
    }
</style>