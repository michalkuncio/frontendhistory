<script setup lang="ts">
import { useDateFormat } from '@vueuse/core';
import type { HistoryItem } from './history.types';

interface Props {
    historyItem: HistoryItem
    index: number
}

const props = defineProps<Props>();

const dateFormatted = useDateFormat(props.historyItem.date, 'DD.MM');

const right = !!(props.index & 1);

const iconComponent = computed(() => {
    const iconName = props.historyItem.icon || 'calendar';
    return defineAsyncComponent(() => import(`./../icons/logos/${iconName}.vue`));
});
</script>

<template>
    <div class="history-item" :class="{right: right}">
        <span v-if="right" class="date">{{ dateFormatted }}</span>

        <div class="history-item-card">
            <div class="icon-wrapper">
                <component :is="iconComponent" />
            </div>
            <div class="info">
                <span>{{ historyItem.title }}</span>
                <a :href="historyItem.link" target="_blank">more</a>
            </div>
        </div>

        <span v-if="!right" class="date">{{ dateFormatted }}</span>
    </div>
</template>

<style scoped>
.history-item {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 50px;
    padding: 30px 0 30px 60px;
    position: relative;
}

@media (width >= 768px) {
    .history-item {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding: 40px 0;
    }
}

.history-item-card {
    border-radius: 5px;
    padding: 20px;
    border: 1px solid var(--gray-dark);
    position: relative;
    box-shadow: 3px 3px 14px -6px var(--gray);
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
}

.history-item-card::before {
    content: '';
    height: 15px;
    width: 15px;
    position: absolute;
    background: var(--gray-dark);
    left: -46px;
    top: 50%;
    border-radius: 50%;
    z-index: 2;
    transform: translate(0, -50%);
}

@media (width >= 768px) {
    .history-item-card::before {
        right: -34px;
        left: unset;
    }
}

.history-item-card::after {
    content: '';
    height: 5px;
    width: 37px;
    position: absolute;
    background: var(--gray-dark);
    left: -37px;
    top: 50%;
    transform: translate(0, -50%);
}

@media (width >= 768px) {
    .history-item-card::after {
        right: -24px;
        left: unset;
    }
}

.icon-wrapper {
    width: 40px;
    height: 40px;
}

.icon-wrapper svg {
    fill: var(--white);
    height: 40px;
    width: 40px;
}

.info {
    display: flex;
    flex-direction: column;
}

.info a {
    font-size: 14px;
}

.date {
    display: flex;
    align-items: center;
    color: var(--gray);
    position: absolute;
    rotate: 270deg;
    left: -36px;
    top: 50%;
    translate: 0 -50%;
}

@media (width >= 768px) {
    .date {
        position: static;
        rotate: inherit;
        translate: inherit;
    }
}

@media (width >= 768px) {
    .right .history-item-card {
        grid-column: 2;
    }

    .right .history-item-card::before {
        content: '';
        height: 15px;
        width: 15px;
        position: absolute;
        background: var(--gray-dark);
        left: -33px;
        top: 50%;
        border-radius: 50%;
        z-index: 2;
        transform: translate(0, -50%);
    }
}

@media (width >= 768px) {
    .right .history-item-card::after {
        content: '';
        height: 5px;
        width: 24px;
        position: absolute;
        background: var(--gray-dark);
        right: unset;
        left: -24px;
        top: 50%;
    }
}

.right .date {
    justify-content: flex-end;
}
</style>
