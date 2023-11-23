<template>
    <nav>
        <NuxtLink to="/">
            Home
        </NuxtLink>

        <NuxtLink to="/about">
            About
        </NuxtLink>

        <NuxtLink to="/contributions">
            Contributions
        </NuxtLink>

        <a href="https://github.com/michalkuncio/frontendhistory" target="_blank">
            <IconsIconGithub />
        </a>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    display: flex;
    gap: 15px;
    margin: auto;

    @media (width >= 768px) {
        font-size: 20px;
    }
}

a {
    display: flex;
    align-items: center;
    font-size: 14px;

    @media (width >= 768px) {
        font-size: 16px;
    }
}

.router-link-exact-active {
    text-decoration: underline;
}

svg {
    height: 20px;
    fill: var(--white);
}
</style>
