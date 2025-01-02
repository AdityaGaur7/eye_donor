const FormModel = require('../Model/eyeDonorModel');

// Submit Form
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

// Get Donors List with Pagination
exports.getDonorsList = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;  // Current page
    const limit = parseInt(req.query.limit) || 10;  // Items per page
    const skip = (page - 1) * limit;  // Skip records based on page

    // Fetch the total count of donors
    const totalDonors = await FormModel.countDocuments();

    // Fetch the donors for the current page
    const donors = await FormModel.find()
      .select('firstName lastName gender address association postalCode nameOfRelative phoneNoOfRelative submittedAt')
      .skip(skip)
      .limit(limit);

    // Return donors data with total count for pagination
    res.status(200).json({
      message: 'Donors fetched successfully',
      data: donors,
      total: totalDonors,  // Total number of records for pagination calculation
    });
  } catch (error) {
    console.error('Error fetching donors list:', error);
    res.status(500).json({ message: 'Error fetching donors list', error });
  }
};
