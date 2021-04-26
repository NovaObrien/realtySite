<template>
  <div class="home-page container-fluid">
    <div class="row d-flex justify-content-center">
      <img
        class="feature-img"
        src="../assets/img/home_page_image.jpg"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  setup() {
    return {

    }
  }

}
</script>

<style scoped lang="scss">
.feature-img{
  width: 85vw;
  height: 29vh;
  border-radius: 19px;
}
.large{
  min-width: 40vw;
  max-height: 20vh;
}
</style>
