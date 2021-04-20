<template>
  <div class="footer-nav">
    <button class="btn" @click="homePage">
      <h5>
        Home
      </h5>
    </button>
    <button class="btn" @click="stafPage">
      <h5>
        Staff
      </h5>
    </button>
    <button class="btn" @click="contactPage">
      <h5>
        Contact
      </h5>
    </button>
    <button class="btn" @click="mlsPage">
      <h5>
        MLS search
      </h5>
    </button>

    <div>
      Office: 208-382-****
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
        router.push({ name: 'HomePage' })
      },
      contactPage() {
        router.push({ name: 'HomePage' })
      },
      mlsPage() {
        router.push({ name: 'mlsPage' })
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
</style>
