<template>
  <div class="container">
    <ul>
        <li v-for="post in posts" :key="post.id">
            {{ post.title }}
        </li>
    </ul>
    <a href="#" @click="getPreviousPage()">Previous</a>
    <a href="#" @click="getNextPage()">Next</a>
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
            lastPage: 0,
            loading: false,
        }
    },

    methods: {
        getPosts: function() {
            axios.get("api/posts?page=" + this.currentPage)
            .then((response)=> {
                this.posts = response.data.data.data;
                this.currentPage = response.data.data.current_page;
                this.lastPage = response.data.data.last_page;
                this.previousPage = this.currentPage - 1;
                this.nextPage = this.currentPage + 1;
                this.loading = false;
            }).catch((error) => console.error(error.message));
        },

        getNextPage: function() {
            if(this.currentPage === this.lastPage) {
                this.currentPage = 1;
                this.nextPage = this.currentPage + 1;
                this.previousPage = 0;
            } else {
                this.currentPage = this.currentPage + 1;
                this.nextPage = this.nextPage + 1;
                this.previousPage = this.previousPage + 1;
            }

            this.getPosts();
        },

        getPreviousPage: function() {
            if(this.previousPage === 0) {
                this.currentPage = this.lastPage;
                this.nextPage = 1;
                this.previousPage = this.currentPage - 1;
            } else {
                this.currentPage = this.currentPage - 1;
                this.nextPage = this.nextPage - 1;
                this.previousPage = this.previousPage - 1;
            }

            this.getPosts();
        }
    },

    created() {
        this.getPosts();
    },
    
}
</script>

<style>

</style>