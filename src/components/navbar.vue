<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="row border-bottom">
        <side-nav />
        <div class="col-2">
          <img src="../assets/img/logos/cascade-lake-realty-logo.svg" alt="">
        </div>
        <p class="company-name pt-3 px-1">
          Cascade Lake Realty, Inc
        </p>
        <div class="col d-flex justfiy-content-end">
          <button type="button" class="btn contact-top" data-toggle="modal" data-target="#myModal">
            Contact
          </button>
        </div>
      </div>
    </div>
  </nav>
  <contact-modal />
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
  height: 30px;
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
  font-size: 11px;
  letter-spacing: 3px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}

img{
  /* position: absolute; */
  max-height: 35px;
  max-width: 34px;
}
</style>
