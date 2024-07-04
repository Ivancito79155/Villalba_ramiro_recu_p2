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

rout.get("/students", getAllStudent);

rout.get("/students/:id", getStudentById);

rout.post("/students", postNewStudent);

rout.put("/students/:id", putStudent);

rout.delete("/students/:id", deleteStudent);

module.exports = rout;
