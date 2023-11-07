<template>
    <div class="line">
        <div class="dot dot-top" />
        <div class="dot dot-bottom" />
    </div>
</template>

<style scoped>
.line {
    width: 4px;
    height: 100%;
    position: absolute;
    left: 23px;
    border-radius: 10px;
    background: linear-gradient(-45deg, var(--gradient-color-1), var(--gradient-color-2), var(--gradient-color-3), var(--gradient-color-4));

    @media (width >= 768px) {
        left: 50%;
        translate: -50% 0;
    }
}

.dot {
    position: absolute;
    left: 50%;
    translate: -50% 0;
    border-radius: 50%;
}

.dot-top {
    width: 20px;
    height: 20px;
    top: 0;
    background: var(--gradient-color-4);
}

.dot-bottom {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    bottom: 0;
    background: var(--gradient-color-1);
}
</style>
