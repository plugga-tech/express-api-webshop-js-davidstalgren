var express = require('express');
var router = express.Router();
const crypto = require('crypto-js');
const UserModel = require('../models/user-model');


router.get('/', async (req, res, next) => {

  // HÄMTA ALLA USERS // SKICKA INTE MED LÖSENORD // BARA ID, NAMN + EMAIL PÅ ALLA USERS

  try {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
});



router.post('/', async(req, res, next)  => {

  // HÄMTA SPECIFIK USER // SKICKA HELA OBJEKTET

  try {
    const user = await UserModel.findById({_id: req.body.id});
    
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/add', async(req, res, next) => {
  
  // SKAPA USER

  try {
    const { name, email, password } = req.body;
    const hashedPassword = crypto.SHA3(password).toString();
    const user = new UserModel({name, email, "password": hashedPassword})
    await user.save();
    res.status(201).json(user)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
});



router.post('/login', async (req, res, next) => {

  // LOGGA IN USER

  try {
    const user = await UserModel.findOne({email: req.body.email});

    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
    }

    const hashedPassword = crypto.SHA3(req.body.password).toString();
    
    if (hashedPassword == user.password) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }

  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
