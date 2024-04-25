<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Contributions` : 'Contributions';
    }
});
</script>

<template>
    <div class="contributions">
        <h1>Contributions</h1>
        <p>This is a long-term community project that will be as valuable as its contributions. Anyone can contribute and help write down the history of Frontend.</p>

        <h2>How to contribute?</h2>
        For instructions on how to contribute, please visit the <a href="https://github.com/michalkuncio/frontendhistory" target="_blank">GitHub repository</a>.

        <h2>Contributors</h2>
        <ul>
            <li>
                <a href="https://github.com/michalkuncio/">michalkuncio</a>
            </li>
            <li>
                <a href="https://github.com/CARLOSGINER">CARLOSGINER</a>
            </li>
            <li>
                <a href="https://github.com/eranshmil">eranshmil</a>
            </li>
            <li>
                <a href="https://github.com/Kaamkiya">Kaamkiya</a>
            </li>
            <li>
                <a href="https://github.com/danielroe">danielroe</a>
            </li>
            <li>
                <a href="https://github.com/mario-neuhold">mario-neuhold</a>
            </li>
        </ul>
        <p>contribute and get listed here! 🥳</p>
    </div>
</template>
