import React, { useState } from "react";
import axios from "axios";
import "./DonationForm.css";

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
    <form onSubmit={handleSubmit}>
      <h2>DONOR'S REGISTRATION FORM</h2>
      <div>
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
        <div className="radio-group">
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
            name="agreeToTerms"
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
