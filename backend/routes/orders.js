var express = require('express');
var router = express.Router();
const OrderModel = require('../models/order-model');
const ProductModel = require('../models/product-model');

// Snyggt!

router.post('/add', async(req, res, next) => {

  // SKAPA ORDER FÖR EN SPECIFIK USER // PRODUCTS ÄR EN ARRAY MOTSVARANDE INNEHÅLLET I KUNDVAGN

  try {
    const { products } = req.body;

    // Inser nu själv att jag glömt göra denna check i min egen kod, tack och bra jobbat!
    for (const item of products) {
      const product = await ProductModel.findById(item.productId);
      console.log(product);

      if (product.lager < item.quantity) {
        res.status(400).json({ message: `insufficient stock for ${product._id}` });
        return;
      };

      product.lager -= item.quantity;
      await product.save();
    };
    const order = new OrderModel(req.body);
    await order.save();
    res.status(201).json(order);

  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
});

// Bra!
router.get('/all', async (req, res, next) => {

  // HÄMTA ALLA ORDERS

  try {
    const orders = await OrderModel.find();
    res.status(200).json(orders)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
});


module.exports = router;
