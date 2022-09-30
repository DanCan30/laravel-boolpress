<template>
  <header>
    <h1>Boolpress</h1>
    <nav>
        <ul>
            <li><router-link :to="{name: 'home'}">Posts</router-link></li>
            <li><router-link :to="{name: 'categories'}">Categories</router-link></li>
            <li><router-link :to="{name: 'tags'}">Tags</router-link></li>
            <li><router-link :to="{name: 'about'}">About us</router-link></li>
            <li><router-link :to="{name: 'contact'}">Contact</router-link></li>
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
        padding-block: 1rem;

        nav ul {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            gap: 2rem;

            li a {
                color: #000;
                text-decoration: none;
                font-weight: bold;
            }
        }
    }
</style>