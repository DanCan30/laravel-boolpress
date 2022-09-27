<template>
  <div class="container">
    <ul>
        <li v-for="post in posts" :key="post.id">
            {{ post.title }}
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data: function() {
        return {
            posts : [],
            previousPage: 0,
            currentPage: 1,
            nextPage: 0,
            loading: false,
        }
    },

    methods: {
        getPosts: function() {
            axios.get("api/posts?page=" + this.currentPage)
            .then((response)=> {
                this.posts = response.data.data.data;
                this.currentPage = response.data.data.current_page;
                this.previousPage = this.currentPage - 1;
                this.nextPage = this.currentPage + 1;
                this.loading = false;
            }).catch((error) => console.error(error.message));
        }
    },

    created() {
        this.getPosts();
    },
    
}
</script>

<style>

</style>