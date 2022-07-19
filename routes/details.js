// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
const DetailsController = require('../controllers/DetailsController')

/* GET details page. */
router.get('/', DetailsController.index);

module.exports = router;