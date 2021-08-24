<template>
  <div>Loading</div>
</template>

<script>
export default {
  mounted () {
    this.$axios.post('http://adonis-js-ayocoding.rover.digitalservice.id/api/login-with-google').then((res) => {
      this.$auth.setUserToken(res.data.token, res.data.refreshToken)
        .then(() => this.$router.push('/home'))
    })
  }
}
</script>
