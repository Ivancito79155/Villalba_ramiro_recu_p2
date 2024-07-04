const db = require("../db");

function HOME(req, res) {
  res.send("HOME");
}

function getAllStudent(req, res) {
  if (db.length === 0) {
    return res.send("ACTUALMENTE NO HAY REGISTROS ACTUALMENTE");
  }
  res.json(db);
}

function getStudentById(req, res) {
  const id = parseInt(req.params.id);
  const getStudent = db.find((fullName) => fullName.id === id);
  if (!getStudent) {
    return res.send("NO SE ENCONTRO EL REGISTRO DEL ESTUDIANTE.");
  }
  res.json(getStudent);
}

function postNewStudent(req, res) {
  const id = new Date().getTime();
  const { fullName, age, curse } = req.body;
  if (!fullName || !age || !curse) {
    return res.send("DATOS FALTANTES");
  }
  const repeatName = db.find((db) => db.fullName === fullName);
  if (repeatName) {
    return res.send("YA EXISTE UN REGISTRO CON ESTE NOMBRE");
  }
  db.push({
    id: id,
    fullName: fullName,
    age: age,
    curse: curse,
  });
  res.send("SE CREO UN NUEVO REGISTRO");
}

function putStudent(req, res) {
  const id = parseInt(req.params.id);
  let { fullName, age, curse } = req.body;
  fullName = fullName.trim();
  age = parseInt(age);
  curse = curse.trim;
  if (!fullName || !age || !curse) {
    return res.send("DATOS FALTANTES");
  }
  const indexStuden = db.findIndex((db) => db.id === id);
  if (indexStuden === -1) {
    return res.send("EL REGISTRO QUE BUSCA NO EXISTE");
  }
  db[indexStuden].id = id;
  db[indexStuden].fullName = fullName;
  db[indexStuden].age = age;
  db[indexStuden].curse = curse;
  res.send("SE MODIFICO EL REGISTRO CON ÉXITO");
}

function deleteStudent(req, res) {
  const id = parseInt(req.params.id);
  const indexStuden = db.findIndex((db) => db.id === id);
  if (indexStuden === -1) {
    return res.send("EL REGISTRO QUE BUSCA NO EXISTE");
  }
  db.splice(indexStuden, 1);
  res.send("SE ELIMINO EL REGISTRO CON EXITO");
}

module.exports = {
  HOME,
  getAllStudent,
  getStudentById,
  postNewStudent,
  putStudent,
  deleteStudent,
};
