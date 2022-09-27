<template>
  <div class="card">
    <h2>{{ post.title }}</h2>
    <h5>{{ post.category.name }} - <span v-for="tag in post.tags" :key="tag.id"> #{{ tag.name }} </span></h5>
    <div class="img-container">
        <img :src="imgUrl ? post.post_image : 'storage/' + post.post_image" alt="Post image">
    </div>
    <h4>
        {{ post.user.name }} | {{ post.date }}
    </h4>
    <p>
        {{ post.content.substring(0, 100) }}...
    </p>

  </div>
</template>

<script>
import { createDecipheriv } from 'crypto';

export default {
    props: {
        "post" : Object,
    },

    data: function() {
        return {
            imgUrl: new URL(this.post.post_image),
        }
    },

    created() {
        console.log(this.post.tags)
    }
}
</script>

<style lang="scss" scoped>
    div.card {
        width: calc(100% / 2 - 4rem);
        margin: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid black;

        h2 {
            text-align: center;
            padding: 1rem;
            align-self: flex-start;
        }

        h5 {
            align-self: flex-start;
            margin-left: 1rem;

            span {
                color: rgb(103, 141, 217);
            }
        }
        div.img-container {

            margin: 1rem;
            
            img {
                max-width: 100%;
            }
        }

        h4 {
            align-self: flex-start;
            margin-bottom: 1rem;
        }

    }
</style>