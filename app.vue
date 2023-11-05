<script setup lang="ts">
import '@fontsource/inter';
import '@fontsource/inter/800.css';
import './assets/style.css';
import MainLayout from './layouts/MainLayout.vue';

useHead({
    title: 'The history of Frontend',
    meta: [
        { name: 'description', content: 'The history of Frontend' }
    ]
});
</script>

<template>
    <MainLayout>
        <NuxtPage />
    </MainLayout>
</template>
