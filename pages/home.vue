<template>
    <div>
        <div class="content">
            <img src="@/assets/img/icon-inverted.png" alt="Logo">
            <h1>
                lucas<span>Alt</span>
            </h1>
            <h2>Front-end developer</h2>
        </div>
        <Nav />
    </div>
</template>

<script>
    import Nav from '@/components/Nav.vue'

    export default {
        components: {
            Nav
        }
    }
</script>


<style lang="scss" scoped>
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        height: 100vh;
        width: 100%;

        background-image: url("../assets/img/wallpaper1.jpg");
        background-size: cover;
        background-repeat: no-repeat;

        color: #FFFFFF;

        img {
            position: absolute;
            top: 20px;
            left: 5%;

            height: 50px;
            width: 50px;

            @media (min-width: 992px) {
                top: 50px;
                left: 50px;

                height: 50px;
                width: 50px;
            }
        }

        h1 {
            text-transform: uppercase;

            font-size: 3em;
            letter-spacing: 0.03em;

            @media (min-width: 992px) {
                font-size: 5em;
            }

            span {
                font-family: 'Roboto Mono Light', monospace;
            }
        }

        h2 {
            font-family: 'Roboto Mono Light', monospace;
            font-size: 1.2em;

            @media (min-width: 992px) {
                font-size: 1.8em;
            }
        }
    }
</style>
