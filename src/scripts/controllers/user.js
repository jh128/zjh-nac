const headerTpl = require('../views/header.html')
const userModel = require('../models/user')

var wsCache = new WebStorageCache();

module.exports = {
  async render() {
    this.renderTpl({
      greeting: '',
      isSignin: false
    })

    this.bindEvent()
    this.isSignin()
  },

  bindEvent() {
    $('#click-btn').on('click', (e) => {
      if ($(e.target).attr('id') === 'btn-signin') {
        $('#user-submit').on('click', async() => {
          let {username, password} = {
            username: $('#username').val(),
            password: $('#password').val()
          }
          let result = await userModel.sign({username, password}, 'signin')
          if (result.ret) {
            // 将token保存到localstorage里
            wsCache.set('token', result.data.token)

            this.renderTpl({
              greeting: '你好，' + result.data.username,
              isSignin: true
            })
          }
          $('#username').add('#password').val('')
        })
      } else {
        $('#user-submit').on('click', async() => {
          let {username, password} = {
            username: $('#username').val(),
            password: $('#password').val()
          }

          let result = await userModel.sign({username, password}, 'signup')
          if (result.ret) {
            alert(result.data)
          }
          $('#username').add('#password').val('')
        })
      }
    })
    $('#user-signout').on('click', () => {
      wsCache.delete('token')
      this.renderTpl({
        greeting: '',
        isSignin: false
      })
    })
  },

  async isSignin() {
    let result = await userModel.isSignin(wsCache.get('token'))
    if (result.ret) {
      this.renderTpl({
        greeting: '你好，' + result.data.username,
        isSignin: true
      })
    } else {
      this.renderTpl({
        greeting: '',
        isSignin: false
      })
    }
  },

  renderTpl({greeting, isSignin}) {
    let html = template.render(headerTpl, {
      greeting,
      isSignin
    })
    $('.main-header').remove()
    $('.wrapper').prepend(html)
    this.bindEvent()
  }
}
