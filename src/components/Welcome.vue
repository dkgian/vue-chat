<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">

        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name :</label>
          <input title="" type="text" name="name" v-model="name" />
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn teal">Enter chatroom!</button>
        </form>
        <button @click="init">Init</button>
        <button @click="get">Get</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      feedback: null,
    }
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({
          name: 'Chat',
          params: {
            name: this.name,
          },
        })
      } else {
        this.feedback = 'Please enter your name!'
      }
    },
    init() {
      this.$store.dispatch('users/seed')
      this.$store.dispatch('conversations/seed')
    },
    get() {
    },
  },
}
</script>

<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;

}
.welcome h2 {
  font-size: 3em;
}
.welcome button {
  margin: 40px auto;
}
</style>
