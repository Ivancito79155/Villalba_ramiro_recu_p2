const { type } = require("os");
const students = require("../students");

function HOME(req, res) {
  res.send("HOME");
}

function getAllStudent(req, res) {
  if (students.length === 0) {
    return res.send("ACTUALMENTE NO HAY REGISTROS ACTUALMENTE");
  }
  res.json(students);
}

function getStudentById(req, res) {
  const id = parseInt(req.params.id);
  const getStudent = students.find((fullName) => fullName.id === id);
  if (!getStudent) {
    return res.send("NO SE ENCONTRO EL REGISTRO DEL ESTUDIANTE.");
  }
  res.json(getStudent);
}

function postNewStudent(req, res) {
  const id = new Date().getTime();
  let { fullName, age, curse } = req.body;
  if (!fullName || !age || !curse) {
    return res.send("DATOS FALTANTES");
  }
  fullName = fullName.trim();
  age = parseInt(age);
  curse = curse.trim();
  if (age > 65 || age < 6) {
    return res.send("LA EDAD ESTA EN UN VALOR INVALIDO");
  }
  if (typeof fullName === Number) {
    return res.send("ESTE CAMPO DEBE DE SER TEXTO");
  }
  if (typeof curse === Number) {
    return res.send("ESTE CAMPO DEBE DE SER TEXTO");
  }
  const repeatName = students.find((students) => students.fullName === fullName);
  if (repeatName) {
    return res.send("YA EXISTE UN REGISTRO CON ESTE NOMBRE");
  }
  students.push({
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
  curse = curse.trim();
  if (age > 65 || age < 6) {
    return res.send("LA EDAD ESTA EN UN VALOR INVALIDO");
  }
  if (typeof fullName === Number) {
    return res.send("ESTE CAMPO DEBE DE SER TEXTO");
  }
  if (typeof curse === Number) {
    return res.send("ESTE CAMPO DEBE DE SER TEXTO");
  }
  if (!fullName || !age || !curse) {
    return res.send("DATOS FALTANTES");
  }
  const indexStuden = students.findIndex((students) => students.id === id);
  if (indexStuden === -1) {
    return res.send("EL REGISTRO QUE BUSCA NO EXISTE");
  }
  students[indexStuden].id = id;
  students[indexStuden].fullName = fullName;
  students[indexStuden].age = age;
  students[indexStuden].curse = curse;
  res.send("SE MODIFICO EL REGISTRO CON ÉXITO");
}

function deleteStudent(req, res) {
  const id = parseInt(req.params.id);
  const indexStuden = students.findIndex((students) => students.id === id);
  if (indexStuden === -1) {
    return res.send("EL REGISTRO QUE BUSCA NO EXISTE");
  }
  students.splice(indexStuden, 1);
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
