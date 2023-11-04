<template>
    <div class="loader-container">
        <span class="loader" />
    </div>
</template>

<style scoped>
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
}

.loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
}

.loader::after,
.loader::before {
    content: '';
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(300deg, var(--gradient-color-1), var(--gradient-color-2), var(--gradient-color-3), var(--gradient-color-4));
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 2s linear infinite;
}

.loader::after {
    animation-delay: 1s;
}

@keyframes animloader {
    0% {
        transform: scale(0);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: 0;
    }
}

</style>
