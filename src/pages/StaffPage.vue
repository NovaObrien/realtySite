<template>
  <div class="staff-page container-fluid">
    <div class="row mb-4">
      <div class="col-6">
        <img class="staff-image rounded shadow" src="../assets/img/staff/Dave.jpg" alt="">
      </div>
      <div class="col-6">
        <h6>Dave O'Brien, GRI, Broker/CEO</h6>
        <p class="small-font mt-4">
          If you are looking for a Broker with in-depth experience, Dave's 36 years working in Southern Valley County Real Estate market is hard to beat. Dave spends his free time with his family and playing in Central Idaho's Mountains.
        </p>
        <p class="medium-font">
          Contact: (208) 634-6551, Email: dave@cascadelakerealty.com
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <h6>
          KAROLYN PLEHAL, GRI, ASSOCIATE BROKER
        </h6>
        <p class="small-font">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tempore nobis tempora odio ut, aspernatur praesentium magni corporis nisi voluptatibus.
        </p>
        <p class="medium-font">
          Contact:(208) 630-3336, Email:  karolyn@CascadeLakeRealty.com
        </p>
      </div>
      <div class="col-6">
        <img class="staff-image rounded mt-5" src="../assets/img/staff/Karolyn.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StaffPage',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
// [class*="col-"] {
//   width: 100%;
// }

.staff-image{
  max-height: 55vh;
  max-width: 33vw;
}
  .small-font{
    font-size: 10px;
  }
  .medium-font{
    font-size: 12px;
    font-weight: 700;
  }
 @media(min-width: 576px){

  .small-font{
    font-size: 17px;
  font-weight: 600;

  }
  .medium-font{
  font-size: 20px;
  font-weight: 800;
  }
  .staff-image {
  max-height: 45vh;
  max-width: 35vw;
  }
}
</style>
