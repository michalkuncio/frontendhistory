<script setup lang="ts">
import { useDateFormat } from '@vueuse/core';
import type { HistoryItem } from '@/types/history';

interface Props {
    historyItem: HistoryItem;
    index: number;
}

const props = defineProps<Props>();

const dateFormatted = props.historyItem.date ? useDateFormat(props.historyItem.date, 'DD.MM') : 'no exact date';

const right = !!(props.index & 1);

const iconComponent = computed(() => {
    const iconName = props.historyItem.icon || 'calendar';
    return defineAsyncComponent(() => import(`@/components/icons/logos/${iconName}.vue`));
});
</script>

<template>
    <div class="history-item" :class="{ right: right }">
        <span v-if="right" class="date" :class="{ 'no-exact': !props.historyItem.date }">{{ dateFormatted }}</span>

        <div class="history-item-card">
            <div class="icon-wrapper">
                <component :is="iconComponent" />
            </div>
            <div class="info">
                <a v-if="historyItem.link" :href="historyItem.link" target="_blank" class="history-item-title">{{ historyItem.title }}</a>
                <span v-else :href="historyItem.link" class="history-item-title">{{ historyItem.title }}</span>
            </div>
        </div>

        <span v-if="!right" class="date" :class="{ 'no-exact': !props.historyItem.date }">{{ dateFormatted }}</span>
    </div>
</template>

<style lang="scss" scoped>
.history-item {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 50px;
    padding: 30px 0 30px 60px;
    position: relative;
    width: calc(100% - 12px);
    margin: 0 auto;

    @media (width >= 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding: 40px 0;
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

        &::before {
            content: '';
            height: 16px;
            width: 16px;
            position: absolute;
            background: var(--gray-dark);
            left: -50px;
            top: 50%;
            border-radius: 50%;
            z-index: 2;
            transform: translate(0, -50%);

            @media (width >= 768px) {
                right: -34px;
                left: unset;
            }
        }

        &::after {
            content: '';
            height: 5px;
            width: 34px;
            position: absolute;
            background: var(--gray-dark);
            left: -35px;
            top: 50%;
            transform: translate(0, -50%);

            @media (width >= 768px) {
                right: -32px;
                left: unset;
                width: 32px;
            }
        }

        .icon-wrapper {
            width: 40px;
            height: 40px;

            svg {
                fill: var(--white);
                height: 40px;
                width: 40px;
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: 5px;

            .history-item-title {
                font-size: 14px;
                color: var(--white);
            }
        }
    }

    .date {
        display: flex;
        align-items: center;
        color: var(--gray);
        position: absolute;
        rotate: 270deg;
        left: -20px;
        top: 50%;
        translate: 0 -50%;

        @media (width >= 768px) {
            position: static;
            rotate: inherit;
            translate: inherit;
        }

        &.no-exact {
            left: -50px;
        }
    }

    &.right {
        .history-item-card {
            @media (width >= 768px) {
                grid-column: 2;

                &::before {
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

                &::after {
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
        }

        .date {
            justify-content: flex-end;
        }
    }
}
</style>
