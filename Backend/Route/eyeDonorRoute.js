const express = require('express');
const { submitForm } = require('../Controller/eyeDonorController');

const router = express.Router();

router.post('/submit-form', submitForm);

module.exports = router;
