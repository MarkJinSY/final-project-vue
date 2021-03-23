<template>
  <div>
      <h1>{{post.title}}</h1>
      <p>{{post.content}}</p>
      <router-view></router-view>
  </div>
</template>

<script>
import {posts} from '../data/posts';
import {computed} from 'vue';
import { useRouter, useRoute} from 'vue-router'

export default {
  setup() {
    const route = useRoute();

    const postId = route.params.id;

    console.log(route.params.id);
    const post = computed(() => {
      return posts.find(post => {
        return post.id === parseInt(postId);
      })
    })

    return {
      post
    }
  }
}
</script>

<style>

</style>