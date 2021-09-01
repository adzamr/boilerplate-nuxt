<template>
  <div>
    <button @click="signIn">
      Login with Google
    </button>
    <button @click="signUp">
      Sign Up with Google
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    signIn () {
      this.$auth.loginWith('google')
    },
    signUp () {
      this.$auth.loginWith('sigUpGoogle', { params: { role: 'admin' } })
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
