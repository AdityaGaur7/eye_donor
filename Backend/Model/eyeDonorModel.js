const mongoose = require('mongoose');

const eyeDonorSchema = new mongoose.Schema({
  association: { type: String, default: 'NONE' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  dob: { type: Date, required: true },
  mobileNo: { type: String, required: true },
  otherContactNo: { type: String },
  email: { type: String, required: true },
  address: { type: String, required: true },
  postalCode: { type: String, required: true },
  primaryDiagnosis: { type: String },
  relativeName: { type: String },
  relativePhone: { type: String },
  friendName: { type: String },
  friendPhone: { type: String },
  submittedAt: { type: Date, default: Date.now },
  agreeToTerms: { type: Boolean, required: true },
}, { timestamps: true });

module.exports = mongoose.model('EyeDonor', eyeDonorSchema);
