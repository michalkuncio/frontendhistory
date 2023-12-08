<script setup lang="ts">
import '@fontsource/inter';
import '@fontsource/inter/800.css';
import '@/assets/style.css';
import MainLayout from '@/layouts/MainLayout.vue';

useHead({
    title: 'The history of Frontend',
    meta: [
        { name: 'description', content: 'Get to know the most important events in the history of Frontend' }
    ],
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }
    ]
});

useSeoMeta({
    ogTitle: 'The history of Frontend',
    ogDescription: 'Get to know the most important events in the history of Frontend',
    ogImage: '/ogimagefb.jpg',
    ogUrl: 'http://localhost:3000/',
    twitterTitle: 'The history of Frontend',
    twitterDescription: 'Get to know the most important events in the history of Frontend',
    twitterImage: 'https://frontendhistory.com/twittercard.jpg',
    twitterCard: 'summary'
});

</script>

<template>
    <MainLayout>
        <NuxtPage />
    </MainLayout>
</template>
