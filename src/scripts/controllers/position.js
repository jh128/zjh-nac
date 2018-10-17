// 引入三个view
const positionListTpl = require('../views/position.list.html')
const positionAddTpl = require('../views/position.add.html')
const positionUpdateTpl = require('../views/position.update.html')
const toolsUtil = require('../utils/tools.util')
const wsCache = new WebStorageCache();

const positionModel = require('../models/position')

const pageSize = 10
let currentHash = ''
// 定义position Controller (单例)
const positionController = {
  // 职位list列表接口
  async listPos({res, req, router}){
    positionController._renderList({res, req, router})
  },

  // 职位list search列表接口
  async listSearchPos({res, req, router}){
    positionController.handleSearchPos({res, req, router})
  },

  _renderPagination({start, count, router, result, res, req, keywords=''}) {
    let that = positionController

    let href = keywords ? '#/position_search?' : '#/position?'
    let preHref = '', nextHref = '', pages = []

    start = parseInt(start, 10)
    count = parseInt(count, 10)
    // 上一页
    if (start == 0) {
      preHref = href + 'start=0'
    } else {
      preHref = href + 'start=' + (start - count)
    }

    let pageCount = Math.ceil(result.data.total/count)
    // 下一页
    let lastStart = (pageCount - 1) * count
    if (start == lastStart) {
      nextHref = href + 'start=' + lastStart
    } else {
      nextHref = href + 'start=' + (start + count)
    }
    preHref += '&count=' + count + '&keywords=' + keywords
    nextHref += '&count=' + count + '&keywords=' + keywords

    // 页码
    let active = toolsUtil.hashParse().start || 0
    for (var i = 0; i < pageCount; i++) {
      pages.push({
        str: `${href}start=${i * count}&count=${count}&keywords=${keywords}`,
        active: i * count == active
      })
    }

    if (result.data.result.length) {
      let tpl = template.render(positionListTpl, {
        data: result.data.result,
        preHref,
        nextHref,
        pages,
        keywords
      })
      res.render(tpl)
    } else {
      let hash = location.hash.slice(1)
      let index = hash.indexOf('?')
      let path = hash.substring(0, index)
      let newStart = start > 0 ? start - pageSize : 0
      router.go(`${path}?start=${newStart}&count=${pageSize}`)
    }
    positionController.searchPos({req, res, router})

    // 重新绑定添加，删除和修改的事件
    that.removePos({res, req, router})
    that._updatePosInit({router})
    $('#addbtn').on('click', () => {
      currentHash = location.hash.slice(1)
      router.go('/position_save')
    })
  },

  async _renderList({res, req, router}) {
    let query = toolsUtil.hashParse()

    let { start, count } = !$.isEmptyObject(query) ? query : { start: 0, count: pageSize }
    let that = positionController
    let token = wsCache.get('token')
    let result = await positionModel.list({start, count, token})

    // 如果用户没有登录，不能显示列表信息
    if (!result.ret) {
      router.go('/home')
      return
    }

    // 渲染翻页
    that._renderPagination({start, count, router, result, res, req})

    $('#addbtn').on('click', () => {
      // currentHash = location.hash.slice(1)
      router.go('/position_save')
    })
    that.removePos({res, req, router})
    that._updatePosInit({router})

    // 搜索功能事件绑定，在list渲染完毕后
    this.searchPos({req, res, router})
  },

  // 职位添加接口
  addPos({res, req ,router}) {
    let that = positionController
    res.render(positionAddTpl)
    $('#posback').on('click', () => {
      router.go(currentHash)
    })
    that._handleSubmit(router)
  },

  _handleSubmit(router) {
    let that = positionController
    $('#possubmit').on('click', async () => {
      var options = {
        "success" : (result, status) => {
          that._resultForm(result, status, router)
        },
        "resetForm" : true,
        "dataType" : "json"
      };
      $("#possave").ajaxSubmit(options)
    })
  },

  _resultForm(result, status, router) {
    if (result.ret) {
      router.back()
    } else {
      alert('数据修改错误~')
    }
  },

  // 职位删除接口
  removePos({res, req, router}) {
    let that = positionController

    // console.log(hash);
    $('.pos-remove').on('click', async function () {
      let id = $(this).attr('posid')
      let filename = $(this).attr('filename')
      if (window.confirm('真的要删除吗')) {
        await positionModel.remove(id, filename)
        that._renderList({res, req, router})
      }
    })
  },

  // 修改职位信息初始化
  _updatePosInit({router}) {
    // 在list加载完的时候绑定
    $('.pos-edit').on('click', function () {
      currentHash = location.hash.slice(1)
      let id = $(this).attr('posid')
      router.go('/position_update', { id })
    })
  },

  // 职位修改接口（点击修改按钮的时候触发）
  async updatePos({res, req, router}) {
    let that = positionController
    let result = await positionModel.findById(req.body.id)
    let tpl = template.render(positionUpdateTpl, {data: result.data})
    router.render(tpl)

    that._handleSubmit(router)

    $('#posback').on('click', () => {
      router.go(currentHash)
    })
  },

  async handleSearchPos({req, res, router}) {
    let { start, count } = req.query || { start: 0, count: pageSize }
    let that = positionController

    let keywords = $('input[name=pos_search]').val()
    let result = await positionModel.findByKeywords({keywords, start, count})

    // 渲染翻页
    that._renderPagination({start, count, router, result, res, req, keywords})
  },

  // 职位搜索
  searchPos({req, res, router}) {
    if (req.query) {
      req.query.start = 0
      req.query.count = pageSize
    }

    $('#possearch').on('click', positionController.handleSearchPos.bind(this, {req, res, router}))
    $(document).on('keyup', function(e) {
      if (e.keyCode == 13) {
        positionController.handleSearchPos({req, res, router})
      }
    })
  }
}

const { addPos, listPos, updatePos, listSearchPos } = positionController

module.exports = {
  addPos, listPos, updatePos, listSearchPos
}
