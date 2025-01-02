const FormModel = require('../Model/eyeDonorModel');

exports.submitForm = async (req, res) => {
  try {
    const formData = req.body;
    const newForm = await FormModel.create(formData);
    res.status(201).json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Error submitting form', error });
  }
};
