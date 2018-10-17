module.exports = {
  render() {
    window.addEventListener('load', this.run.bind(this))
    window.addEventListener('hashchange', this.run.bind(this))
  },

  run() {
    this.setTitle()
    this.setNav()
  },

  setTitle() {
    let hash = location.hash.slice(1)
    hash = hash.split('?')[0]
    const match = {
      '/home': ['首页', '欢迎信息'],
      '/position': ['职位管理', '列表'],
      '/position_search': ['职位管理', '列表'],
      '/position_save': ['职位管理', '添加'],
      '/position_update': ['职位管理', '编辑']
    }
    var $h1 = $('.content-header h1')
    $h1.find('span').html(match[hash][0])
    $h1.find('small').html(match[hash][1])
  },

  setNav() {
    const hash = location.hash
    const $a = $(`ul.sidebar-menu a[href='${hash}']`)
    $a.parent().addClass('active').siblings().removeClass('active')
  }
}
