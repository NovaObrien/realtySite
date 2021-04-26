<template>
  <nav class="navbar navbar-expand-lg">
    <side-nav />
    <p class="company-name">
      Cascade Lake Realty
    </p>
    <button class="contact-top btn">
      Contact
    </button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Navbar',

  setup() {
    const router = useRouter()
    return {
      homePage() {
        router.push({ name: 'HomePage' })
      }
    }
  }
}
</script>

<style scoped>
/* .home-button{
  max-height: 25vh;
  max-width: 55vw;
}
button:hover{
  outline: 0;
} */
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

.contact-top{
  background-color: var(--secondary);
  /* height: 50px; */
  border-radius: 25px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 800;
  font-size: 12px;

}
.company-name{
  font-weight: 700;
}
</style>
