"use strict";//Opcional. Para que salga error si no escribimos con buenas prácticas.
var http = require("http");//Exportamos un módulo que tiene JS, en este caso HTTP. Con el HTTP podemos crear servidores
const op = require("./operaciones.js");

var server = http.createServer(function (req, res) {//
    res.writeHead(200, { "content-type": "text/plain" });//Estado de la respuesta y tipo de info
    res.end("Hola Mundo");//Texto plano que se va a enviar.
});
console.log("RESULTADO", op.suma(3, 4));
console.log("Nombre es:", op.getNombre());
server.listen(8080);//Colocamos nuestra aplicación en un puerto específico.
//Todas las peticiones a ese puerto las captura server.listen()
