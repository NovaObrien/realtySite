<template>
  <nav class="navbar sticky-top">
    <div class="container">
      <div class="row">
        <side-nav />
        <p class="company-name">
          Cascade Lake Realty
        </p>
        <button class="contact-top btn">
          Contact
        </button>
      </div>
    </div>
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
  color: var(--light);
  border-radius: 25px;
  text-align: center;
  letter-spacing: 1px;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;

}
.company-name{
  font-size: 12px;
  letter-spacing: 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}
</style>
