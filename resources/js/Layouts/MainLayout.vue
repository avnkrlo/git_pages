<script setup>
    import Navbar from '../Components/Navbar.vue';
    import Jumbotron from '../Components/Jumbotron.vue';
    import Footer from '../Components/Footer.vue';
    import Breadcrumb from '../Components/Breadcrumb.vue';
</script>

<template>
    <Navbar/>
    <Jumbotron/>
    <Breadcrumb/>
        <slot/>
    <Footer/>
</template>