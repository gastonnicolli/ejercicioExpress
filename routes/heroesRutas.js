const express = require('express');
const controller = require('../controllers/heroesController.js');

let router = express.Router();


// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get('/', controller.devolverTodos);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/detalle/:id', controller.devolverUno);

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get('/bio/:id/:ok?', controller.devolverBio);

module.exports = router;