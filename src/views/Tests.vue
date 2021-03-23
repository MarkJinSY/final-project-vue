<template>
    <div>
        <h1>Tests</h1>
        <router-link 
            v-for="{post, index} in postData" 
            :key="index" 
            :to="'/posts/${post.id}'">
            {{post.title}}
        </router-link>
        <router-view></router-view>
    </div>
    
</template>

<script>
import {posts} from '../data/posts'
export default {
    setup() {
        return {
            posts
        }
    }
}
</script>

<style lang="sass" scoped>

</style>