<template>
  <div>
    <input v-model="role" type="text" placeholder="role">
    <button @click="submit">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  auth: false,
  data: () => {
    return {
      role: null
    }
  },
  methods: {
    submit () {
      const code = this.$route.query.code
      const codeVerifier = localStorage.getItem('auth.sigUpGoogle.pkce_code_verifier')
      const redirectURI = 'http://localhost:3000/signup'
      const data = {
        code,
        code_verifier: codeVerifier,
        role: this.role,
        redirect_uri: redirectURI
      }
      this.$axios.post('/signup-with-google', data).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
