<template>
  <div class="home">
  <section class="hero is-large">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Welcome to Tinder42!
      </h1>
      <h2 class="subtitle">
          Tinder42 is a place where you can find your love or friends.
      </h2>
      <b-button type="is-dark" tag="router-link" :to="{ path: '/Signup' }">JOIN TINDER42</b-button>
      <br>
      <span>or</span>
      <br>
      <b-button type="is-dark" tag="router-link" :to="{ path: '/login' }">Login</b-button>
    </div>
  </div>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    
  },mounted(){
      if (localStorage.token)
        this.$router.push({ path: '/dashboard'});
    }
}
</script>

<style>
#content{
  background-image: linear-gradient(90deg, rgba(254,114,86,1) 0%, rgba(253,38,124,1) 100%);
}
</style>


