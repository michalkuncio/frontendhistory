<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';

const props = defineProps<{
    year: string;
}>();

const emit = defineEmits<{
  scrollEnd: [year: string]
}>();

interface HistoryItem {
    date: string;
    title: string;
    link: string;
    icon: string;
}

const { data: historyItems } = await useFetch<HistoryItem[]>(`/year/${props.year}`);

const intersectionHelper = ref(null);

const { stop } = useIntersectionObserver(
    intersectionHelper,
    ([{ isIntersecting }]) => {
        if (isIntersecting) {
            emit('scrollEnd', props.year);
            stop();
        }
    }
);

</script>

<template>
    <div class="history-group">
        <div class="year">
            {{ year }}
        </div>
        <div class="history-items">
            <HistoryLine />
            <HistoryItem v-for="(historyItem, index) in historyItems" :key="historyItem.date" :history-item="historyItem" :index="index" />
        </div>
        <span ref="intersectionHelper" />
    </div>
</template>

<style scoped>
.history-items {
    position: relative;
}

.year {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    position: sticky;
    top: 0;
    background: var(--background-color);
    z-index: 3;
    padding: 30px 0;
    line-height: 1;

    @media (width >= 768px ) {
        padding: 50px 0;
    }
}
</style>
