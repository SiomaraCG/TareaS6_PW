var con = require('../config/dbconfig');

var Autores = `CREATE TABLE IF NOT EXISTS Autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50),
    Biografia TEXT
  )`;
  
  con.query(Autores, function (err, result) {
    if (err) throw err;
    console.log("Tabla Autores creada");
  });
  
var Libros = `CREATE TABLE IF NOT EXISTS Libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    descripcion TEXT,
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES Autores(id) ON DELETE CASCADE
)`;

con.query(Libros, function (err, result) {
  if (err) throw err;
  console.log("Tabla Libros creada");
});


con.end(function(err) {
  if (err) throw err;
  console.log("Connection closed");
});