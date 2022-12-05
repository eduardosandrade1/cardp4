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
    flex-direction: column;
    justify-content: center;
    box-shadow: rgb(255 255 255 / 10%) 0px 1px 1px 0px inset, rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px;
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
        },
        editBackground() {
            this.$parent.showInfoDiv('bg-img-phone', 0)
        }
    }

}

</script>