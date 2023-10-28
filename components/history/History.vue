<script setup lang="ts">
const { data: availableYears } = await useFetch('/years');
const loadedYears = ref<string[]>([]);

// at firt, load only the first year
if (availableYears.value) {
    loadedYears.value.push(availableYears.value?.[0]);
}

function loadNextYear (previousYear: string) {
    const previousYearIndex = availableYears.value?.findIndex(year => year === previousYear);

    if (previousYearIndex === undefined || previousYearIndex === availableYears.value?.length) { return; }

    const nextYear = availableYears.value?.[previousYearIndex + 1];

    if (!nextYear || loadedYears.value.includes(nextYear)) { return; }

    loadedYears.value.push(nextYear);
}
</script>

<template>
    <div class="history">
        <HistoryGroup v-for="year in loadedYears" :key="year" :year="year" @scroll-end="loadNextYear" />
    </div>
</template>

<style scoped>
.history {
    padding-bottom: 40px;
}
</style>
