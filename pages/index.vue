<template>
    <div>
        <transition name="loader">
            <Loader v-if="isLoading"/>
        </transition>
        <div class="content">
            <img src="@/assets/img/icon-inverted.png" alt="Logo">
            <h1>
                {{ data.title }}<span>{{ data.alt_title }}</span>
            </h1>
            <h3>{{ data.description }}</h3>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Loader from '@/components/Loader.vue'

    export default {
        components: {
            Loader
        },

        data () {
            return {
                isLoading: true,
                data: {}
            }
        },

        mounted () {
            setTimeout(function () {
                this.isLoading = false
            }.bind(this), 3000)
        },

        created () {
            axios.get('https://manager.lucasalt.fr/api/singletons/get/homepage?token=account-6e3de89496304b7f2ce1c14bf9a704')
                .then(result => this.data = result.data)
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

        background-image: url("../assets/img/wallpaper.jpg");
        background-size: cover;
        background-repeat: no-repeat;

        color: #FFFFFF;

        img {
            position: absolute;
            top: 50px;
            left: 50px;

            height: 50px;
            width: 50px;
        }

        h1 {
            text-transform: uppercase;

            font-size: 48px;
            letter-spacing: 0.03em;

            @media (min-width: 992px) {
                font-size: 72px;
            }

            span {
                font-family: 'Roboto Mono Light', monospace;
            }
        }

        h3 {
            font-family: 'Roboto Mono Light', monospace;
            font-size: 18px;

            @media (min-width: 992px) {
                font-size: 24px;
            }
        }
    }
</style>
