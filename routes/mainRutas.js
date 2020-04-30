const express = require('express');
const controller = require('../controllers/mainController.js')

let router = express.Router();


// Ruta Raíz / ➝ Home
router.get('/', controller.home);
// Ruta Créditos
router.get('/creditos',controller.creditos);

module.exports = router;