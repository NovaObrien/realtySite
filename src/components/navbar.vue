<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand d-flex" :to="{ name: 'HomePage' }">
      <div class="d-flex flex-column align-items-center">
        Home
      </div>
    </router-link>
    <router-link class="navbar-brand d-flex" :to="{ name: 'CartPage' }">
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-shopping-cart"></i>
      </div>
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
  background-color: #666666fb;
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
