<template>

    <div class="container">
        <div class="page" id="first">
            <div class="back">
                <div class="outer">
                    <div class="content">
                        <img src="https://tympanus.net/Development/BookBlock/images/demo1/1.jpg">
                    </div>
                </div>
            </div>
        </div>
        <div class="page second" id="second">
            <div class="front">
                <div class="outer">
                    <div class="content">
                        <img src="https://tympanus.net/Development/BookBlock/images/demo1/1.jpg">
                    </div>
                </div>
            </div>
            <div class="back" id="third">
                <div class="outer">
                    <div class="content">
                        <div class="helper-class-to-make-bug-visbile">
                            <img src="https://tympanus.net/Development/BookBlock/images/demo1/2.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page" id="fourth">
            <div class="front">
                <div class="outer">
                    <div class="content">
                        <img src="https://tympanus.net/Development/BookBlock/images/demo1/2.jpg">
                    </div>
                </div>
            </div>
        </div>

        <div id="prev" @click="prevImg()"></div>
        <div id="next" @click="nextImg()"></div>
    </div>

</template>

<script>


export default {
    methods: {
        nextImg() {
            this.$refs.second.style.msTransform = "rotateY(-180deg)";
            this.$refs.second.style.webkitTransform = "rotateY(-180deg)";
            this.$refs.second.style.transform = "rotateY(-180deg)";
        },
        prevImg() {
            this.$refs.second.style.msTransform = "rotateY(0deg)";
            this.$refs.second.style.webkitTransform = "rotateY(0deg)";
            this.$refs.second.style.transform = "rotateY(0deg)";
        }
    }
}

</script>

<style>

    body {
        margin: 4em;
    }

    .container {
        width: 400px;
        height: 300px;
        position: relative;

        z-index: 100;
        -webkit-perspective: 1300px;
        perspective: 1300px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .page {
        position: absolute;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        width: 50%;
        height: 100%;
        left: 50%;
        -webkit-transform-origin: left center;
        transform-origin: left center;
    }

    #first,
    #first .back {
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }

    #first {
        z-index: 102;
    }
    #second {
        z-index: 103;
        transition: transform 0.8s ease-in-out;
    }
    #third .content {
        width: 400px;
    }
    #fourth {
        z-index: 101;
    }

    .page > div,
    .outer,
    .content,
    .helper-class-to-make-bug-visbile {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .page > div {
        width: 100%;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }

    .back {
        -webkit-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
    }

    .outer {
        width: 100%;
        overflow: hidden;
        z-index: 999;
    }

    /* problematic class: `.content` */
    .content {
        width: 200%;
        background: red;
    }


    .front .content {
        left: -100%;
    }



    /* controls */
    #prev, #next {
        position: absolute;
        width: 50%;
        height: 100%;
        z-index: 999;
    }
    #prev:hover, #next:hover {
        background: rgba(0,0,0,0.05);
        cursor: pointer;
    }
    #prev {
        top: 0;
        left: 0;
    }
    #next {
        top: 0;
        left: 50%;
    }

</style>