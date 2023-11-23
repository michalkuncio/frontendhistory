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

        <Faq />
        <Roadmap />
    </div>
</template>
