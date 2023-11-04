<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | About` : 'About';
    }
});
</script>

<template>
    <div class="about">
        <h1>About the project</h1>

        <h2>Motivation</h2>

        <p>
            The frontend changes rapidly, with new libraries being released daily, and some features achieving full browser support. Likewise, some libraries and browsers become deprecated. What if we had something like a calendar that cataloged all significant events in the frontend world? This would allow us to stay informed about recent news and explore the distant history of frontend. It would be great to have a single comprehensive repository detailing the entire history of frontend development.
        </p>

        <h2>Stack</h2>
        <a href="https://nuxt.com/">Nuxt 3</a>
    </div>
</template>

<style scoped>
.about {
    padding: 40px 0;
}

h1 {
    padding-bottom: 40px;
}

p {
    line-height: 1.6;
}
</style>
