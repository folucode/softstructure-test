const express = require('express');
const authController = require('../src/controllers/authController');

const router = express.Router();

router.get('/', (req, res) => {
  req.send({
    message: "we're all set up!",
  });
});

router.post('/auth/signup', authController.signup);

module.exports = router;
