const express = require('express');
const { submitForm, getDonorsList, getDonorById } = require('../Controller/eyeDonorController'); // Add the new controller method

const router = express.Router();

// Submit Form route
router.post('/submit-form', submitForm);

// Get Donors List route (this is the new route you're looking for)
router.get('/donors', getDonorsList);  // Ensure that getDonorsList is correctly imported and defined in the controller

// Add this new route
router.get('/donor/:id', getDonorById);

module.exports = router;
