<template>
    <div class="layout">
        <img src="@/assets/img/icon-inverted.png" alt="Logo">
        <div class="content" v-html="tos"></div>
        <Nav />
    </div>
</template>

<script>
    import axios from 'axios'

    import Nav from '@/components/Nav.vue'

    export default {
        components: {
            Nav
        },

        data: () => ({
            tos: ''
        }),

        mounted () {
            axios.get('https://manager.lucasalt.fr/api/singletons/get/tos?token=account-6e3de89496304b7f2ce1c14bf9a704')
                .then((results) => {
                    this.tos = results.data.tos
                })
        }
    }
</script>


<style lang="scss" scoped>
    .layout {
        height: 100vh;
        width: 100%;

        background-image: url("../assets/img/wallpaper2.jpg");
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

        .content {
            margin: 0 auto;
            padding: 6em 0;

            max-width: 90%;

            font-family: 'Roboto Mono Light', monospace;

            @media (min-width: 992px) {
                max-width: 50%;
            }

            h3 {
                font-family: 'Roboto Mono Light', monospace;
                font-size: 1.2em;

                @media (min-width: 992px) {
                    font-size: 1.5em;
                }
            }
        }
    }
</style>
