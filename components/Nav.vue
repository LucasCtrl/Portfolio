<template>
    <nav>
        <nuxt-link to="/home">Home</nuxt-link> -
        <nuxt-link to="/projects">Projects</nuxt-link> -
        <nuxt-link to="/tos">TOS</nuxt-link>
    </nav>
</template>

<style lang="scss" scoped>
    nav {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;

        height: 40px;

        text-align: center;
    }
</style>
