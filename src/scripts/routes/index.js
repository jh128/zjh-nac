import SMERouter from 'sme-router'
const homeController = require('../controllers/home')
const positionController = require('../controllers/position')

const router = new SMERouter('router-view')

// route config
router.route('/position', (req, res, next) => {
  positionController.listPos({req, res, next, router})
})

router.route('/position_search', (req, res, next) => {
  positionController.listSearchPos({router, req, res, next})
})

router.route('/position_save', (req, res, next) => {
  positionController.addPos({router, req, res, next})
})

router.route('/position_update', (req, res, next) => {
  positionController.updatePos({router, req, res, next})
})

router.route('/home', (req, res, next) => {
  homeController.render({router, req, res, next})
})

router.route('*', (req, res, next) => {
  res.redirect('/home')
})
