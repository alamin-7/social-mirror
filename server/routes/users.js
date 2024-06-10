const express = require('express');
const router = express.Router();
const User = require('../models/User');

const {generateToken, verifyToken} = require('../utils/jwt');

router.get('/getUsers', async (req, res) => {
  try {
    const users = await User.find();
    console.log(`test`);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      email,
      password,
    });

    await user.save();

    res.json({ msg: 'User registered successfully', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  try {

    let user = await User.findOne( {email} );

    if(user){
      if(user.password == password){
        const token = generateToken({email:user.email});
        console.log('Generated Token:', token);
        res.json({token});
      }
      else{
        res.json("Invaild password");
      }
    }
    else{
      res.json("No such user");
    }

  } catch(err) {
    console.log(err.message);
    res.status(500).send('server error');
  }

});

router.get('/profile', (req, res) => {
  const token = req.headers['authorization'];
  console.log('Received Token:', token);
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const decoded = verifyToken(token);
  if (decoded) {
    res.json({ message: 'Profile data', user: decoded });
  } else {
    res.status(401).json({ message: 'Invalid token' });
  }
});

module.exports = router;
