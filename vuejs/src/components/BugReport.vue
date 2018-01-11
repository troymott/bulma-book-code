<template>
<div class="modal" :class="{'is-active': showModal}">
  <div class="modal-background" @click="closeModal"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Ohno, you found a bug?</p>
      <button class="delete" aria-label="close" @click="closeModal"></button>
    </header>
    <section class="modal-card-body">
      <div class="notification is-success" :class="{'is-hidden': hideNotification}">
        <p><span class="icon"><i class="fa fa-bug"></i></span>Thanks. Your bug has been reported.</p>
        <p>We will do our best to fix it as soon as possible</p>
      </div>

      <p v-if="!hideNotification" class="help">The following message was sent</p>
      <textarea class="textarea" placeholder="Let us know what problems you faced." :disabled="!hideNotification" v-model="reportMessage"></textarea>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-text">Cancel</button>
      <button class="button is-success" @click="sendReport">Send bugreport</button>
    </footer>
  </div>
</div>
</template>

<script>
export default {
  name: "BugReport",
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      reportMessage: "",
      hideNotification: true,
    }
  },
  methods: {
    sendReport() {
      //Do some ajax request to send and save data.
      this.hideNotification = false

      setTimeout(() => { 
        this.hideNotification = true;
        this.reportMessage = "";
        this.closeModal();
      }, 4000);
    },
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style>

</style>
