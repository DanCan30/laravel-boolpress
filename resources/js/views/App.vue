<template>
    <div>

        <h1>Check the newest posts: </h1>

        <section class="container">

            <PostCard v-for="post in posts" :key="post.id" :post="post"/>
        </section>
        
        <div class="button-container">
            <a href="#" @click="goToFirstPage()">|<<</a>
            <a href="#" @click="goToPreviousPage()">Previous</a>
            <a href="#" @click="goToNextPage()">Next</a>
            <a href="#" @click="goToLastPage()">>>|</a>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import PostCard from "../components/PostCard.vue";
import PostCard1 from "../components/PostCard.vue";

export default {

    components: {
    PostCard,
    PostCard1
},

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
            axios.get("api/posts", {params: {"page" : this.currentPage}})
            .then((response)=> {
                this.posts = response.data.data.data;
                this.currentPage = response.data.data.current_page;
                this.lastPage = response.data.data.last_page;
                this.previousPage = this.currentPage - 1;
                this.nextPage = this.currentPage + 1;
                this.loading = false;
            }).catch((error) => console.error(error.message));
        },

        goToNextPage: function() {
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

        goToPreviousPage: function() {
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
        },

        goToFirstPage: function() {
            this.currentPage = 1;
            this.previousPage = 0;
            this.nextPage = 2;

            this.getPosts();
        },

        goToLastPage: function() {
            this.currentPage = this.lastPage;
            this.previousPage = this.lastPage - 1;
            this.nextPage = 1;

            this.getPosts();
        },
    },

    created() {
        this.getPosts();
    },
    
}
</script>

<style lang="scss">

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
}

h1 {
    text-transform: uppercase;
    font-size: 4rem;
    text-align: center;
    margin-top: 2rem;
}

    section.container {
        max-width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 5rem auto;
    }

    div.button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin-bottom: 3rem;

        a {
            text-decoration: none;
            color: blue;
        }
    }
</style>