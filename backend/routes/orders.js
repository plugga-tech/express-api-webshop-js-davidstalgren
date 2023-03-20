var express = require('express');
var router = express.Router();


router.post('/add', function(req, res, next) {

  // SKAPA ORDER FÖR EN SPECIFIK USER // PRODUCTS ÄR EN ARRAY MOTSVARANDE INNEHÅLLET I KUNDVAGN

/*   {
    "user": "{{getUsers.response.body.$[0].id}}",
        "products": [
      {
        "productId": "// ID PÅ EN PRODUKT",
        "quantity": 1
      },
      {
        "productId": "// ID PÅ EN PRODUKT",
        "quantity": 2
      }
    ]
  } */

  res.send('respond with a resource');
});


router.get('/all', function(req, res, next) {

  // HÄMTA ALLA ORDERS

  res.send('respond with a resource');
});


module.exports = router;
