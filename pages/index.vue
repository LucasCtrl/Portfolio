<template>
    <div class="cover">
        <div class="loader play"></div>
    </div>
</template>

<script>
    import { setTimeout } from 'timers';
    export default {
        created () {
            setTimeout(() => {
                this.$router.replace('home')
            }, 3000)
        }
    }
</script>


<style lang="scss" scoped>
    .cover {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #01031A;

        z-index: 9999;

        @keyframes loading {
            0% {
                background-position: 0px 0px;
            }

            100% {
                background-position: -12000px 0px;
            }
        }

        .loader {
            width: 100px;
            height: 100px;

            background-image: url(../assets/img/loader.svg);
            background-repeat: no-repeat;

            animation-duration: 2000ms;
            animation-timing-function: steps(120);
            animation-fill-mode: forwards;

            &.play {
                animation-name: loading;
            }
        }
    }
</style>
