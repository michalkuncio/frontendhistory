<script setup lang="ts">
const faqItems = [
    {
        question: 'I want to contribute and add some new items. Which items will be accepted?',
        answer: "If you think it's important to the frontend community, go ahead and add it. Adding JS libraries can be a tad trickier because if we were to include every single JS package in this calendar, it'd be way too big. I think we should only list the relevant packages here, so you got to decide for yourself if a library is worth adding."
    },
    {
        question: 'What stack is used here?',
        answer: 'Nuxt'
    },
    {
        question: 'Why not Astro, Tailwind, HTMX, HTML, XYZ?',
        answer: 'I love those tools but I feel the most comfortable with Vue and Nuxt'
    }
];
</script>

<template>
    <h2>FAQ</h2>
    <div v-for="(faqItem, index) in faqItems" :key="index" class="faq-item">
        <div class="faq-question">
            {{ faqItem.question }}
        </div>
        <div class="faq-answer">
            {{ faqItem.answer }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.faq-item {
    margin-bottom: 20px;

    .faq-question {
        font-weight: 600;
        margin-bottom: 5px;
    }
}
</style>
