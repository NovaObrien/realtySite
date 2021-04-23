<template>
  <div class="footer-nav container-fluid">
    <div class="row">
      <div class="col">
        <button class="btn" @click="homePage">
          Home
        </button>
        <button class="btn" @click="aboutPage">
          About Us
        </button>
        <button class="btn" @click="staffPage">
          Staff
        </button>
        <button class="btn" @click="mlsPage">
          MLS search
        </button>
      </div>
      <div class="col">
        <button class="btn" @click="listingsPage">
          Featured Listings
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
  background-color: rgba(0, 0, 0, 0.411);
  color: white;
}
.btn{
  color: white
}
</style>
