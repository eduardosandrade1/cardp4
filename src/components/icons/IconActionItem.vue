<template>

    <div class="space_opt_items" v-if="place_item == 'screen'">
            <div class="top invert" @click="toTop()">
                <img src="../../assets/icons/up-arrow.png" alt="" class="icon">
            </div>
            <div class="bottom invert" @click="toBottom()">
                <img src="../../assets/icons/chevron.png" alt="" class="icon">
            </div>
            <div class="trash invert" :chave="chave" @click="toTrash()">
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
        flex-direction: column;
        color: black;
        justify-content: space-around;
        background-color: #0000004d;
        margin-left: 4px;
        border-radius: 10px;
    }

    .space_opt_items div {
        cursor: pointer;
    }
</style>