// Require de FS
const fs = require('fs');
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/../data/heroes.json', 'utf-8'));

let heroesControllers={
    devolverTodos:(req, res) => {
        res.send(heroes);
        },
    devolverUno:(req, res) =>{
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
    },
    devolverBio:(req, res) => {
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
    },

};

module.exports = heroesControllers;