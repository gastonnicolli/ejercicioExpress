# Remota 04 - Nodejs

Una clase muy buena!

## Levantar un servidor http

```js
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
    });
    const responseText = "Hola Mundo!";
    res.end(responseText);
}).listen(3030, "localhost");
```

## Leer un archivo de JSON

```js
const fs = require("fs");

const obj = JSON.parse(fs.readFileSync("ruta/al/archivo.json", {
    encoding: "utf-8",
});
```
