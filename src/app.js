const express = require("express");

const app = express();

app.use(express.json());

app.use(require("./routers/crud.routers"))

app.listen(4321, console.log("SERVIDOR CORRIENDO EN PUERTO 4321"));
