import 'whatwg-fetch'

export default (method, path, values, callback) => {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const options = {
    method,
    headers: myHeaders,
    cache: 'default',
    mode: 'cors'
  }

  fetch(path, options)
  .then((response) => {
    console.log('response before text', response)
    return response.json()
  })
  .then((response) => {
    console.log('what response?', response, 'rubber baby buggy bumpers')
    return response
  })
  .then(callback)
}
