<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Contributions` : 'Contributions';
    }
});
</script>

<template>
    contributions
</template>
