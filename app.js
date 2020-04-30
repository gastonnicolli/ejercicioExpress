// Require de Express
const express = require('express');
const heroesRutas = require('./routes/heroesRutas.js');
const mainRutas = require('./routes/mainRutas.js');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

app.use('/heroes', heroesRutas);
app.use('/',mainRutas);

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});