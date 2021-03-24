<template>
  <div>
    <!-- My Vue
    <router-link to="/Home">Home</router-link>
    <router-link to="/Tests">! Test</router-link>
    <router-link to="/login">! Login</router-link> -->
    <router-view></router-view>
  </div>
  
</template>

<script>

export default {

}
</script>

<style>
html, body, #app {
  height: 100%;
}

#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
