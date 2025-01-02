import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DonationList.css';
import { useNavigate } from 'react-router-dom';

const DonationList = () => {
  const [donors, setDonors] = useState([]);
  const [totalDonors, setTotalDonors] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
const navigate= useNavigate();
  // Fetch Donors with Pagination
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/forms/donors?page=${currentPage}&limit=${itemsPerPage}`);
        setDonors(response.data.data);
        setTotalDonors(response.data.total);
      } catch (error) {
        console.error('Error fetching donor list:', error);
      }
    };
    fetchDonors();
  }, [currentPage, itemsPerPage]);  
  const formatDate = (date) => {
    const d = new Date(date);
    const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    let hour = d.getHours();
    const minute = d.getMinutes();
    const second = d.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12;
    hour = hour ? hour : 12;
    const formattedMinute = minute < 10 ? '0' + minute : minute;
    const formattedSecond = second < 10 ? '0' + second : second;

    return `${day}/${month}/${year} ${hour}:${formattedMinute}:${formattedSecond} ${ampm}`;
  };

  // Handle Page Change
  const changePage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(totalDonors / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalDonors / itemsPerPage);

  return (
    <div>
      <h2>Donors List</h2>
      <button 
          className="btn btn-outline-secondary m-4"
          onClick={() => navigate('/')}
        >
          Add Donor
        </button>
      <table>
        <thead>
          <tr>
            <th>Donor Name</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Association</th>
            <th>State Name</th>
            <th>City Name</th>
            <th>District Name</th>
            <th>Postal Code</th>
            <th>Relative List</th>
            <th>Submission Date</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {donors.map((donor, index) => (
            <tr key={index}>
              <td>{donor.firstName} {donor.lastName}</td>
              <td>{donor.gender}</td>
              <td>{donor.address}</td>
              <td>{donor.association}</td>
              <td>{donor.stateName || ''}</td>
              <td>{donor.cityName || ''}</td> 
              <td>{donor.districtName || ''}</td>
              <td>{donor.postalCode}</td>
              <td>{donor.nameOfRelative} ({donor.phoneNoOfRelative})</td>
              <td>{formatDate(donor.submittedAt)}</td>
              <td> <button 
          className="btn btn-outline-primary m-4"
          onClick={() => navigate(`/generate-certificate/${donor._id}`)}
        >Generate Certificate
        </button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <p>Page {currentPage} of {totalPages} ({totalDonors} items)</p>
    </div>
  );
};

export default DonationList;
