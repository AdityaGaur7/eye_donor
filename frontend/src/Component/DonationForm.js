import React, { useState } from "react";
import axios from "axios";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    association: "NONE",
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
    agreeToTerms: false, // Match with backend model
  });

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
        "http://localhost:5000/api/forms/submit-form", // Backend URL
        formData
      );
      alert(response.data.message);
      setFormData({
        association: "NONE",
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
        agreeToTerms: false, // Reset state
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Eye Donation Form</h2>
      <div>
        <label>In Association:</label>
        <input
          type="text"
          name="association"
          value={formData.association}
          onChange={handleChange}
          disabled
        />
      </div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Gender:</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              required
            />
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mobile No:</label>
        <input
          type="text"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Other Contact No.:</label>
        <input
          type="text"
          name="otherContactNo"
          value={formData.otherContactNo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email ID:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Postal Code:</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Primary Diagnosis:</label>
        <textarea
          name="primaryDiagnosis"
          value={formData.primaryDiagnosis}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Name of Relative:</label>
        <input
          type="text"
          name="nameOfRelative"
          value={formData.nameOfRelative}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone No. of Relative:</label>
        <input
          type="text"
          name="phoneNoOfRelative"
          value={formData.phoneNoOfRelative}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Name of Friend:</label>
        <input
          type="text"
          name="nameOfFriend"
          value={formData.nameOfFriend}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone No. of Friend:</label>
        <input
          type="text"
          name="phoneOfFriend"
          value={formData.phoneOfFriend}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="agreeToTerms" // Match with backend model
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
          />
          I agree with terms for eye donation.
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DonationForm;
