const express = require('express');
let router = express.Router();
// Require de FS
const fs = require('fs');
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/../data/heroes.json', 'utf-8'));

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get('/', (req, res) => {
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/detalle/:id', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let elheroe = heroes.find((heroe) => {
		return heroe.id == req.params.id;
	});
	// Si se encuentra al héroe se envía el nombre y su profesión
	if(elheroe != null){
		let texto = `Hola, mi nombre es <b> ${elheroe.nombre} </b> y soy ${elheroe.profesion}.`;
		res.send(texto);
	} else {// Si NO se encuentra se envía el mensaje de no encontrado
		res.send("No existe un heroe para ese Id.")
	}
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get('/bio/:id/:ok?', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let elheroe = heroes.find((heroe)=>{
		return heroe.id == req.params.id;
	});

	// Si NO se encuentra al héroe se envía un mensaje
	if(elheroe == null)
	{
		res.send("No existe un heroe para ese Id.")
	} else {// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		if(params.ok != undefined && params.ok == 'ok'){
			res.send(
				`Hola, mi nombre es ${elheroe.nombre} y esto es un poco acerca de mi:  \n ${elheroe.resenia}`
			);
		} else {// Si nó vino el parámetro se envía el mensaje de error
			res.send(
				`Hola, mi nombre es ${elheroe.nombre}. Lamento que no desees saber más de mi :(`
			);
		}
	}
});

module.exports = router;