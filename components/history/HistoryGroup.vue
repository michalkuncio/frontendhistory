<script setup lang="ts">
import type { HistoryGroup } from '@/types/history';

defineProps<{
    historyGroup: HistoryGroup
}>();

</script>

<template>
    <div class="history-group">
        <div class="year">
            {{ historyGroup.year }}
        </div>
        <div class="history-items">
            <HistoryLine />
            <HistoryItem v-for="(historyItem, index) in historyGroup.items" :key="historyItem.date" :history-item="historyItem" :index="index" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.history-items {
    position: relative;
}

.year {
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    position: sticky;
    top: 0;
    background: var(--background-color);
    z-index: 3;
    padding: 30px 0;
    line-height: 1;
    box-shadow: 0 -7px 0 7px var(--black);

    @media (width >= 768px ) {
        padding: 50px 0;
        box-shadow: none;
    }
}
</style>
