<template>
    <div class="roadmap">
        <h2>Roadmap</h2>
        <ul>
            <li>add more history items</li>
            <li>search history items</li>
            <li>reversed chronology</li>
            <li>jump to a specific year</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 15px;

        li {
            list-style: none;
            padding: 10px;
            border: 1px solid var(--gray-dark);
            border-radius: 5px;
            box-shadow: 3px 3px 14px -7px var(--gray);
        }
    }
</style>
