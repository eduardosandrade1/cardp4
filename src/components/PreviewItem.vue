<template >

<div class="container" v-show="show">
    <div v-for="it in item">
        {{ it }}
        foi
    </div>
</div>

</template>

<script>

export default {

    props: [
        'item',
        'show',
    ]

}

</script>