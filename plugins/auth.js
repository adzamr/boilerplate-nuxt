export default function ({ $auth }) {
  $auth.onError((error, name, endpoint) => {
    console.log(name, error, endpoint)
  })
}
