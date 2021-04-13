<template>
  <nav class="navbar navbar-expand-lg">
    <button class="btn navbar-brand d-flex" @click="HomePage">
      <img src="../assets/img/small_logo.gif" alt="">
      Home
    </button>
    <router-link class="navbar-brand d-flex" :to="{ name: 'AboutPage' }">
      <button class="btn">
        About
      </button>
    </router-link>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Navbar',

  setup() {
    const router = useRouter()
    return {
      HomePage() {
        router.push({ name: 'HomePage' })
      }
    }
  }
}
</script>

<style scoped>
button:hover{
  outline: 0;
}
:focus{
  outline: 3px solid var(--success);

  /* border-bottom: 10px; */
}
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
