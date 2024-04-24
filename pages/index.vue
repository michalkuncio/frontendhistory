<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Home` : 'Home';
    }
});
</script>

<template>
    <div>
        <Hero />
        <History />
    </div>
</template>
