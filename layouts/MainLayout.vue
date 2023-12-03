<template>
    <div class="main-layout">
        <Header />
        <main>
            <div class="container">
                <slot />
            </div>
        </main>
        <Footer />
    </div>
</template>

<style>
.main-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
}

main {
    flex-grow: 1;
}

h1 {
    padding: 40px 0;
}

h2 {
    padding: 20px 0;
}

p {
    line-height: 1.6;
}
</style>
