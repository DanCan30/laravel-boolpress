<template>
    <div>
        <PostCard :post="post"/>
    </div>
</template>

<script>

import PostCard from "../components/PostCard.vue";
import axios from "axios";

export default {
    name: "SingleCard",

    components: {
        PostCard,
    },

    data: function() {
        return {
            post: {},
            isLoading: false,
        }
    }, 
    
    methods: {
        getPost: function() {
            const id = this.$route.params.id;

            axios.get("/api/posts/" + id )
            .then((response) => {
                this.post = response.data.result;
            })
        }
    },

    created() {
        this.getPost();
        console.log(this.post)
    }
}
</script>

<style>

</style>