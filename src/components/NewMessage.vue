<template>
  <div class="new-message">
    <form @submit.prevent="sendMessage">
      <label for="new-message">New message: </label>
      <input title="" type="text" name="new-message" v-model="newMessage"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewMessage',
  props: ['name'],
  data() {
    return {
      newMessage: null,
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage !== null) {
        const message = {
          name: this.name,
          text: this.newMessage,
          time: Date().now(),
        }
      }
    },
  },
}
</script>

<style>
</style>
