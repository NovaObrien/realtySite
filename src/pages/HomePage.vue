<template>
  <div class="home-page container-fluid">
    <div class="row d-flex justify-content-center">
      <img
        class="feature-img"
        src="../assets/img/home_page_image.jpg"
        alt=""
      >
    </div>

    <div class="row d-flex justify-content-center py-5">
      <h5>
        Local Knowledge, Local Expertise, 167 Years of Combined Real Estate Experience
      </h5>
    </div>
    <div class="row pb-5 featured-rows d-flex align-items-center">
      <div class="col-6">
        <img class="rounded"
             src="https://via.placeholder.com/150
C/O https://placeholder.com/"
             alt=""
        >
      </div>
      <div class="col-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit qui accusamus dolor consequuntur reprehenderit.
      </div>
    </div>
    <div class="row pb-5 featured-rows d-flex align-items-center">
      <div class="col-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit qui accusamus dolor consequuntur reprehenderit.
      </div>
      <div class="col-6">
        <img class="rounded"
             src="https://via.placeholder.com/150
C/O https://placeholder.com/"
             alt=""
        >
      </div>
    </div>

    <div class="row pb-5 featured-rows d-flex align-items-center">
      <div class="col-6">
        <img class="rounded"
             src="https://via.placeholder.com/150
C/O https://placeholder.com/"
             alt=""
        >
      </div>
      <div class="col-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit qui accusamus dolor consequuntur reprehenderit.
      </div>
    </div>
    <div class="row pb-5 featured-rows d-flex align-items-center">
      <div class="col-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit qui accusamus dolor consequuntur reprehenderit.
      </div>
      <div class="col-6">
        <img class="rounded"
             src="https://via.placeholder.com/150
C/O https://placeholder.com/"
             alt=""
        >
      </div>
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

// ==========>
// Mobile
// =========
.feature-img{
  width: 85vw;
  height: 29vh;
  border-radius: 19px;
}
.large{
  min-width: 40vw;
  max-height: 20vh;
}
.featured-rows{
  font-family: 'Roboto', sans-serif;
}
  // =========
  // Tablets
  // ==========
 @media(min-width: 481px){
 .feature-img{
  height: 35vh;
  object-fit: cover;
}
}
// =================
// Small screeens Laptops
// ==================
 @media(min-width: 769px){

.container-fluid{
  padding-left: 30px;
}
}
// ===========
// Desktops
// ===========
 @media(min-width: 1024px){
.container-fluid{
  padding-left: 25vw;
  padding-right: 25vw;
}
.feature-img{
  width: 45vw;
}
.featured-rows{
  padding-left: 5vw;
  padding-right: 5vw;
}
}
// ============
// extra large screens
// ==============
 @media(min-width: 1200px){
// .feature-img{
//   width: 35vw;
//   height: 40vh;
//   border-radius: 19px;
// }

}
</style>
