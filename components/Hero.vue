<template>
    <h1>
        <span class="block">The history</span>
        of <span class="gradient">Frontend</span>
    </h1>
</template>

<style lang="scss" scoped>
h1 {
    font-size: 40px;
    font-weight: 800;
    text-align: center;

    @media (width >= 640px) {
        font-size: 60px;
    }

    @media (width >= 768px) {
        font-size: 100px;
    }

    @media (width >= 1024px) {
        font-size: 100px;
    }
}

.block {
    display: block;
}

.gradient {
    background-clip: text;
    background-image: linear-gradient(45deg, var(--gradient-color-1), var(--gradient-color-2), var(--gradient-color-3), var(--gradient-color-4));
    -webkit-text-fill-color: transparent;
}
</style>
