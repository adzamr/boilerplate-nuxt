<template>
  <div>
    <h1>
      Welcome to Home
    </h1>
    <nuxt-link to="/about">About</nuxt-link>
    <button @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    async logout () {
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
