var express = require('express');
var router = express.Router();
const ProductModel = require('../models/product-model');

// Bra!
router.get('/', async(req, res, next) => {

  // HÄMTA ALLA PRODUKTER

  try {
    const products = await ProductModel.find();
    res.status(200).json(products)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
});

// Bra!
router.get('/:id', async(req, res, next) => {

  // HÄMTA SPECIFIK PRODUKT

  try {
    const product = await ProductModel.findById({_id: req.params.id});
    
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Bra!
router.post('/add', async (req, res, next) => {

  // SKAPA PRODUKT

  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json(product)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
});


module.exports = router;
