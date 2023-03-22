var express = require('express');
var router = express.Router();
const OrderModel = require('../models/order-model');
const ProductModel = require('../models/product-model');


router.post('/add', async(req, res, next) => {

  // SKAPA ORDER FÖR EN SPECIFIK USER // PRODUCTS ÄR EN ARRAY MOTSVARANDE INNEHÅLLET I KUNDVAGN

  try {
    const order = await OrderModel.create(req.body);
    res.status(201).json(order)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
});


router.get('/all', async (req, res, next) => {

  // HÄMTA ALLA ORDERS

  try {
    const orders = await OrderModel.find();
    res.status(200).json(orders)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }

/*   try {
    const orders = await OrderModel.find();
    res.status(200).json(orders)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  } */
});


module.exports = router;
