var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomID = faker.finance.mask();
  var ramdomName = faker.name.findName();
  var randomContent = faker.name.jobDescriptor();
  var randomDate = faker.date.recent();
  var ramdomImage = faker.image.animals();
  return {
    ID: randomID,
    NOMBRE: ramdomName,
    CONTENIDO: randomContent,
    FECHA: randomDate,
    IMAGEN: ramdomImage
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/friends', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})


app.listen(3000);