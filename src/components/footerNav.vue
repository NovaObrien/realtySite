<template>
  <div class="footer-nav">
    <div class="row">
      <div class="col-4">
        <router-link class="nav-link pl-3" :to="{name: 'HomePage'}">
          Home
        </router-link>
        <router-link class="nav-link pl-3" :to="{name: 'AboutPage'}">
          About
        </router-link>
        <router-link class="nav-link pl-3" :to="{name: 'StaffPage'}">
          Staff
        </router-link>
        <router-link class="nav-link pl-3" :to="{name: 'AreasPage'}">
          Area Information
        </router-link>
      </div>
      <div class="col-4">
        <router-link class="nav-link pl-3" :to="{name: 'ListingsPage'}">
          Featured Listings
        </router-link>
        <router-link class="nav-link pl-3" :to="{name: 'ListingsPage'}">
          150,000 - 250,000
        </router-link>
        <router-link class="nav-link pl-3" :to="{name: 'ListingsPage'}">
          Listings
        </router-link>
        <router-link class="nav-link pl-3" :to="{name: 'ListingsPage'}">
          Listings
        </router-link>
        <router-link class="nav-link pl-3" :to="{name: 'ListingsPage'}">
          Listings
        </router-link>
      </div>
      <div class="col-4">
        <button class="btn">
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
      aboutPage() {
        router.push({ name: 'AboutPage' })
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
</style>
