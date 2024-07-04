const { Router } = require("express");

const {
  HOME,
  getAllStudent,
  getStudentById,
  postNewStudent,
  putStudent,
  deleteStudent,
} = require("../controllers/crud.controllers");

const rout = Router();

rout.get("/", HOME);

rout.get("/db", getAllStudent);

rout.get("/db/:id", getStudentById);

rout.post("/db", postNewStudent);

rout.put("/db/:id", putStudent);

rout.delete("/db/:id", deleteStudent);

module.exports = rout;
