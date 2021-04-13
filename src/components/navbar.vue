<template>
  <nav class="navbar navbar-expand-lg">
    <router-link class="navbar-brand d-flex" :to="{ name: 'HomePage' }">
      <button class="btn">
        <img src="../assets/img/small_logo.gif" alt="">
        Home
      </button>
    </router-link>
    <router-link class="navbar-brand d-flex" :to="{ name: 'AboutPage' }">
      <button class="btn">
        About
      </button>
    </router-link>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  setup() {
    return {

    }
  }
}
</script>

<style scoped>

.navbar{
  background-color: #fffffffb;
}

@media(max-width: 600px){
  .large{
    display: none;
  }
  #logo{
    font-size: 30px;
    border: 4px solid;
  }
}
@media(min-width: 600px){
  .small{
    display: none;
  }
}

.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
</style>
