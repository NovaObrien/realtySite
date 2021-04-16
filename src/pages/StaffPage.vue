<template>
  <div class="staff-page container-fluid">
    <div class="row d-flex justify-content-center">
      <img src="../assets/img/logos/large_logo.jpg" alt="">
    </div>
    <div class="row">
      <div class="col-4">
        <img class="staff-image rounded shadow" src="../assets/img/staff/Dave.jpg" alt="">
      </div>
      <div class="col-4 mt-4">
        <h3>Dave O'Brien, GRI, Brocker/CEO</h3>
        <p class="small-font mt-4">
          If you are looking for a Broker with in-depth experience, Dave's 36 years working in Southern Valley County Real Estate market is hard to beat.  On a personal note Dave spends his free time with his family and playing in Central Idaho's Mountains.  Dave can be contacted at
        </p>
        <p class="medium-font">
          Office:  (208) 382-4921, Cell:  (208) 634-6551, Email: dave@cascadelakerealty.com
        </p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-5">
      </div>
      <div class="col-4">
        <h3>
          KAROLYN PLEHAL, GRI, ASSOCIATE BROKER
        </h3>
        <p>
          Experience:  More than 1,500 successful closings in 31 years at Cascade Lake Realty.  Broker's license, GRI.  A network of long-established relationships with lenders, title officers, surveyors, government officials and other professionals.
        </p>

        <p>
          Philosophy:  I love my work and pride myself in being professional and ethical.  I consider it my first responsibility to recognize potential complications and take care of them in advance.
        </p>
        <p>
          Personal:  43 years in Cascade (and love it still).  A terrific husband and two grown sons, with their young families.
        </p>
        <p>
          Karolyn's Personal Web Site: Web Site
        </p>
        <p>
          Contact: Office:  (208) 382-4921, Cell:  (208) 630-3336, Email:  karolyn@CascadeLakeRealty.com
        </p>
      </div>
      <div class="col-3">
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

@media(max-width: 600px){

   [class*="col-"] {
    width: 100%;
  }
  .small-font{
    font-size: 15px;
  }
  .medium-font{
    font-size: 15px;
  }
  h3{
    font-size: 25px;
  }
  .staff-image {
    max-height: 35vh;
    max-width: 35vw;
  }
}
@media(min-width: 600px){
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
