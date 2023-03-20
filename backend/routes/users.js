var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

  // HÄMTA ALLA USERS // SKICKA INTE MED LÖSENORD // BARA ID, NAMN + EMAIL PÅ ALLA USERS

  res.send('respond with a resource');
});


router.post('/', function(req, res, next) {

  // HÄMTA SPECIFIK USER // SKICKA HELA OBJEKTET

/*   {
    "id": "// EN USER ID"
  } */

  res.send('respond with a resource');
});


router.post('/add', function(req, res, next) {

  // SKAPA USER

/*   {
    "name": "Test Testsson",
    "email": "test@mail.com",
    "password": "test"
  } */

  res.send('respond with a resource');
});


router.post('/login', function(req, res, next) {

  // LOGGA IN USER

/*   {
    "email": "// EN USER EMAIL",
    "password": "// EN USER PASSWORD"
  } */


  res.send('respond with a resource');
});

module.exports = router;
