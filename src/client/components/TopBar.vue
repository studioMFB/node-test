<script setup lang="ts">

</script>

<template>
    <div class="topbar">
        <header>
            <nav>
                <slot></slot>
            </nav>
        </header>
    </div>
</template>

<style scoped lang="scss">
.topbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    background-color: rgb(58, 58, 58);
}

header {
    line-height: 1.5;
    max-height: 100vh;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    nav {
        text-align: left;
        font-size: 1rem;
        padding: 1rem 0;
    }
}
</style>