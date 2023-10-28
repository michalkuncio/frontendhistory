<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Home` : 'Home';
    }
});
</script>

<template>
    <Hero />
    <History />
</template>
