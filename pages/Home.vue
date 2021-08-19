<template>
  <div>
    <h1>
      Welcome to Home
    </h1>
    <button @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  mounted () {
    const token = this.$auth.strategy.token.get()
    console.log(token)
  },
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
