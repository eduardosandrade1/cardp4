<template>

<div class="option-items">
    <button class="btn" type="button" @click="save(true)">
        <img src="../assets/icons/play-52.png" alt="icone de play" class="icon">
    </button>
    <button class="btn" type="button" @click="editBackground()">
        <img src="../assets/icons/picture-32.png" alt="icone de imagem" class="icon">
    </button>
</div>

</template>

<style scoped>

    .option-items {
        display: flex;
        margin: auto 0;
        flex-direction: column;
    }

    .option-items button {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
    }

</style>

<script>

export default {

    methods: {
        save(simuled) {
            this.$parent.save(simuled);
        }
    }

}

</script>