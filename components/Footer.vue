<template>
    <footer>
        <span class="created-by">Created by <a href="https://michalkuncio.com/" target="_blank">Michał Kuncio</a></span>
        <a href="https://michalkuncio.com/" title="Michal Kuncio personal website" target="_blank"><IconsIconWebsite /></a>
        <a href="https://twitter.com/michalkuncio" title="Michal Kuncio twitter" target="_blank"><IconsIconX /></a>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    position: sticky;
    bottom: 0;
    padding: 10px 20px;
    z-index: 4;
    background: var(--background-color);
    border-top: 1px solid var(--gray-dark);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
}

.created-by {
    color: var(--gray);
    font-size: 12px;
}

svg {
    height: 15px;
    fill: white;
}

a {
    display: inline-flex;
    align-items: center;
}
</style>
