<template>
    <div>

        <LoaderComponent v-if="isLoading" />
        <div v-else>
            
            <div class="pagination-buttons-container">
                <a href="#" @click="goToFirstPage()">|<<</a>
                <a href="#" @click="goToPreviousPage()">Previous</a>
                <span> Page n° {{ currentPage }}</span>
                <a href="#" @click="goToNextPage()">Next</a>
                <a href="#" @click="goToLastPage()">>>|</a>
            </div>
            
            <section class="cards-container">
                
                <PostCard v-for="post in posts" :key="post.id" :post="post"/>
            </section>
            
            <div class="pagination-buttons-container">
                <a href="#" @click="goToFirstPage()">|<<</a>
                <a href="#" @click="goToPreviousPage()">Previous</a>
                <span> Page n° {{ currentPage }}</span>
                <a href="#" @click="goToNextPage()">Next</a>
                <a href="#" @click="goToLastPage()">>>|</a>
            </div>
            
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import PostCard from "../components/PostCard.vue";
import LoaderComponent from "../components/LoaderComponent.vue";

export default {

    name: "MainComponent",

    components: {
        PostCard,
        LoaderComponent
    },

    data: function() {
        return {
            posts : [],
            previousPage: 0,
            currentPage: 1,
            nextPage: 0,
            lastPage: 0,
            isLoading: true,
        }
    },

    methods: {
        getPosts: function() {
            axios.get("api/posts", {params: {"page" : this.currentPage}})
            .then((response)=> {
                this.posts = response.data.result.data;
                this.currentPage = response.data.result.current_page;
                this.lastPage = response.data.result.last_page;
                this.previousPage = this.currentPage - 1;
                this.nextPage = this.currentPage + 1;
                this.isLoading = false;
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

<style lang="scss" scoped>
 
h1 {
    text-transform: uppercase;
    font-size: 4rem;
    text-align: center;
    margin-top: 2rem;
}

section.cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 5rem auto;
}

div.pagination-buttons-container {
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