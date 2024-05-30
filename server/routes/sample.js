const express = require('express');
const router = express.Router();
const Sample = require('../models/User');
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const samples = await User.find();
    res.json(samples);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/add', async (req, res) => {
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

module.exports = router;
