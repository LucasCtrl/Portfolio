<template>
    <div>
        <img src="@/assets/img/icon-inverted.png" alt="Logo">
        <h1>
            Lucas<span>Alt</span>
        </h1>
        <h3>Front-end developer</h3>
    </div>
</template>

<style lang="scss" scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        height: 100vh;
        width: 100%;

        background-image: url("../assets/img/wallpaper.jpg");
        background-size: cover;

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
