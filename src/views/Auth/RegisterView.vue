<template>
    <RegisterArea />
</template>

<script>

    import RegisterArea from '../../components/Auth/RegisterArea.vue'

    export default {
        components: {
            RegisterArea
        }
    }

</script>

<style>
.container-center {
    width: 100%;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.register-area {
    border-radius: 0 15px 15px 0;
    margin: auto;
    width: 100%;
    background-color: #fff;
    height: 100%;

}

.role-password {
    font-size: 12px;
    margin: 10px 0;
}

.role-password ul {
    text-decoration: none;
    list-style: none;
    padding: 0;
}

.valid:before {
    position: relative;
    color: green;
    content: "✔";
}

.invalid:before {
    position: relative;
    color: red;
    content: "X";
}
</style>