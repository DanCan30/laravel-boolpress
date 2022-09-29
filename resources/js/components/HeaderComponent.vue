<template>
  <header>
    <h1>Boolpress</h1>
    <nav>
        <ul>
            <li>Posts</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
    name: "HeaderComponent",

}
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav ul {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            gap: 2rem;
        }
    }
</style>