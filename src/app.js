const express = require("express");

const db = require("./db");

const app = express();

app.use(express.json());



app.listen(4321, console.log("SERVIDOR CORRIENDO EN PUERTO 4321"));
