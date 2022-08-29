const express = require('express')
const pageController = require('../controllers/pageController')

const router = express.Router()

router.route('/').get(pageController.getIndexPage)
router.route('/about').get(pageController.getAboutPage)
router.route('/contact').get(pageController.getContactPage)
router.route('/furnitures').get(pageController.getFurnituresPage)

module.exports = router;