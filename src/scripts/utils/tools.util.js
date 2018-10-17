module.exports = {
  hashParse() {
    let query = {}
    let hash = location.hash.slice(1)
    if (hash.indexOf('?') != -1) {
      let queryString = hash.substr(hash.indexOf('?')+1)
      let queryArray = queryString.split('&')
      queryArray.forEach((value, index) => {
        let tempArray = value.split('=')
        query[tempArray[0]] = tempArray[1]
      })
    }
    return query
  }
}
