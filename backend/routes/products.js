var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

  // HÄMTA ALLA PRODUKTER

  res.send('respond with a resource');
});


router.get('/productID', function(req, res, next) {

  // HÄMTA SPECIFIK PRODUKT

  res.send('respond with a resource');
});


router.post('/add', function(req, res, next) {

  // SKAPA PRODUKT

/*   {
    "name": "Produkt 1",
    "description": "Beskrivning av produkt 1",
    "price": 100, 
    "lager": 10
  } */

  res.send('respond with a resource');
});


module.exports = router;
