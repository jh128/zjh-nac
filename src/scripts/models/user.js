const sign = (data, uri) => {
  return $.ajax({
    url: '/api/users/' + uri,
    type: 'post',
    data,
    success: (result) => {
      return result
    }
  })
}

const isSignin = (token) => {
  return $.ajax({
    url: '/api/users/issignin',
    type: 'post',
    headers: {
      'X-Access-Token': token
    },
    success(result) {
      return result
    }
  })
}

module.exports = {
  sign,
  isSignin
}
