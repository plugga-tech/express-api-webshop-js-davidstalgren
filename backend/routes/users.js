var express = require('express');
var router = express.Router();
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
    
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/add', async(req, res, next) => {
  
  // SKAPA USER

  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }
});



router.post('/login', async (req, res, next) => {

  // LOGGA IN USER

  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Something went wrong' });
  }

/*   {
    "email": "// EN USER EMAIL",
    "password": "// EN USER PASSWORD"
  } */

});

module.exports = router;
