<script setup>
    import Navbar from '../Components/Navbar.vue';
    import Jumbotron from '../Components/Jumbotron.vue';
    import Footer from '../Components/Footer.vue';
</script>

<template>
    <Navbar/>
    <Jumbotron/>
        <slot/>
    <Footer/>
</template>