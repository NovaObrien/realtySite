<template>
  <div class="footer-nav">
    <div class="row">
      <div class="col-4">
        <router-link class="nav-link pl-3" :to="{name: 'HomePage'}">
          Home
        </router-link>
        <router-link class="nav-link pl-3" :to="{name: 'StaffPage'}">
          Staff
        </router-link>
      </div>
      <div class="col-4">
        <router-link class="nav-link pl-3" :to="{name: 'ListingsPage'}">
          Listings
        </router-link>
        <router-link class="nav-link pl-3" :to="{name: 'AreasPage'}">
          Area Info
        </router-link>
      </div>
      <div class="col-4 d-flex align-items-center">
        <button type="button" class="btn text-light" data-toggle="modal" data-target="#myModal">
          Contact
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'FooterNav',
  setup() {
    const router = useRouter()
    return {
      homePage() {
        router.push({ name: 'HomePage' })
      },
      staffPage() {
        router.push({ name: 'StaffPage' })
      },
      areasPage() {
        router.push({ name: 'AreasPage' })
      },
      mlsPage() {
        router.push({ name: 'MlsPage' })
      },
      listingsPage() {
        router.push({ name: 'ListingsPage' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.footer-nav{
  // height: 20vh;
  background-color: rgba(0, 0, 0, 0.411);

}
.nav-link{
  font-size: 12px;
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
  color: white;
}
.btn{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

 @media(min-width: 769px){

.row{
  padding-left: 15vw;
  padding-right: 15vw;
}
}
</style>
