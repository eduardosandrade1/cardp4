<template >

<div class="container" v-show="show">
    <button @click="back()">back</button>
    <div class="container-img-preview">
        <img :src="item.path" class="img-preview" alt="" srcset="">
    </div>
</div>

</template>

<script>

export default {

    props: [
        'item',
        'show',
    ],

    methods: {
        back() {
            this.$parent.showPreviewItem = false;
        }
    }

}

</script>

<style>

.container-img-preview {
    width: 100%;
}

.img-preview {
    width: 100%;
}



</style>