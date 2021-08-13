<template>
  <div>
    <button @click="signIn">
      Login with Google
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    signIn () {
      this.$auth.loginWith('google')
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
