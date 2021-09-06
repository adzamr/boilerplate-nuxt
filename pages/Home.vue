<template>
  <div>
    <button @click="accessUser">
      Akses user
    </button>
    <h1>
      Welcome to Home
    </h1>
    <nuxt-link to="/about">
      About
    </nuxt-link>
    <button @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    async accessUser () {
      const res = await this.$axios.get('/user')
      console.log(res.data)
    },
    async logout () {
      const refreshToken = this.$auth.strategy.refreshToken.get()
      await this.$axios.post('/logout', { refresh_token: refreshToken })
      await this.$auth.logout()
    }
  }
}
</script>

<style>
button {
  background: green;
  color: white;
  border: none;
  padding: 1em;
  display: inline-block;
  cursor: pointer;
}
</style>
