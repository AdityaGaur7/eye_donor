import React, { useState } from "react";
import axios from "axios";
import "./DonationForm.css";
import {useNavigate} from 'react-router-dom'
const DonationForm = () => {
  const [formData, setFormData] = useState({
    association: "",
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    mobileNo: "",
    otherContactNo: "",
    email: "",
    address: "",
    postalCode: "",
    primaryDiagnosis: "",
    nameOfRelative: "",
    phoneNoOfRelative: "",
    nameOfFriend: "",
    phoneOfFriend: "",
    agreeToTerms: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/forms/submit-form", // Replace with your backend URL
        formData
      );
      alert(response.data.message);
      setFormData({
        association: "",
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        mobileNo: "",
        otherContactNo: "",
        email: "",
        address: "",
        postalCode: "",
        primaryDiagnosis: "",
        nameOfRelative: "",
        phoneNoOfRelative: "",
        nameOfFriend: "",
        phoneOfFriend: "",
        agreeToTerms: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="container py-5">
      
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                  <label htmlFor="association">In Association:</label>
        <select
          name="association"
          id="association"
          value={formData.association}
          onChange={handleChange}
          required
        >
          <option value="">None</option>
          <option value="JCI Midtown Gorakhpur">JCI Midtown Gorakhpur</option>
    <option value="Lodge Wallace 99">Lodge Wallace 99</option>
    <option value="Lodge Wgeel Club">Lodge Wgeel Club</option>
    <option value="Media">Media</option>
    <option value="NONE">NONE</option>
    <option value="Rotary Club Euphoria">Rotary Club Euphoria</option>
    <option value="Rotary Club Gorakhpur">Rotary Club Gorakhpur</option>
    <option value="Rotary Club Midtown">Rotary Club Midtown</option>
    <option value="Rotary Club of Gorakhpur Yugal">Rotary Club of Gorakhpur Yugal</option>
    <option value="Saksham">Saksham</option>
    <option value="Student">Student</option>
    <option value="Teacher">Teacher</option>
    <option value="Vyapar Mandal Gorakhpur">Vyapar Mandal Gorakhpur</option>
        </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">First Name:</label>
                    <input
                      type="text"
                      className="form-control1"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Last Name:</label>
                    <input
                      type="text"
                      className="form-control1"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Gender:</label>
                    <div className="d-flex gap-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="Male"
                          checked={formData.gender === "Male"}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-check-label">Male</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="Female"
                          checked={formData.gender === "Female"}
                          onChange={handleChange}
                          required
                        />
                        <label className="form-check-label">Female</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Date of Birth:</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Mobile No:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Other Contact No.:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="otherContactNo"
                      value={formData.otherContactNo}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email ID:</label>
                    <input
                      type="email"
                      className="form-control1"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Address:</label>
                    <textarea
                      className="form-control1"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label1">Postal Code:</label>
                    <input
                      type="text"
                      className="form-control1"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Primary Diagnosis:</label>
                    <textarea
                      className="form-control"
                      name="primaryDiagnosis"
                      value={formData.primaryDiagnosis}
                      onChange={handleChange}
                      required
                      rows="3"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Name of Relative:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nameOfRelative"
                      value={formData.nameOfRelative}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone No. of Relative:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneNoOfRelative"
                      value={formData.phoneNoOfRelative}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Name of Friend:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nameOfFriend"
                      value={formData.nameOfFriend}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone No. of Friend:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneOfFriend"
                      value={formData.phoneOfFriend}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                      />
                      <div>
                      I agree with terms for eye donation.
                      </div>

                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100" onClick={()=>navigate('/form')}>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;