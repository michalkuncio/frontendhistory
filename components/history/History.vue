<script setup lang="ts">
import { historyItems } from '@/data/history';
</script>

<template>
    <div class="history">
        <HistoryGroup v-for="historyGroup in historyItems" :key="historyGroup.year" :history-group="historyGroup" />
    </div>
</template>

<style lang="scss" scoped>
.history {
    padding-bottom: 40px;
}
</style>
