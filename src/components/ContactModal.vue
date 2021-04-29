<template>
  <div class="contact-modal">
    <!-- Trigger the modal with a button -->
    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
            <h4 class="modal-title">
              Contact
            </h4>
          </div>
          <div class="modal-body">
            <p>Office: (208) 382-4921</p>
            <p>Email: clr@cascadelakerealty.com</p>
            <p>Location: 204 N Main st Cascade, ID</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactModal',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
