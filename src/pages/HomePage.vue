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
        Make Valley County your new home today
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
.feature-img{
  width: 85vw;
  height: 29vh;
  border-radius: 19px;
}
@media (min-width: 600px){
.feature-img{
  width: 98vw;
  height: 40vh;
}
}
.large{
  min-width: 40vw;
  max-height: 20vh;
}

// ==========>
// Mobile
// =========

  // =========
  // Tablets
  // ==========
 @media(min-width: 481px){

}
// =================
// Small screeens Laptops
// ==================
 @media(min-width: 769px){

}
// ===========
// Desktops
// ===========
 @media(min-width: 1024px){

}
// ============
// extra large screens
// ==============
 @media(min-width: 1200px){
.container-fluid{
  padding-left: 30vw;
  padding-right: 30vw;
  border: 10px;

}
.feature-img{
  width: 35vw;
  height: 40vh;
  border-radius: 19px;
}
.featured-rows{
  padding-left: 3vw;
  padding-right: 3vw;
}
}
</style>
