import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DonationList.css';
import {useNavigate, Link} from 'react-router-dom'

const DonationList = () => {
  const [donors, setDonors] = useState([]);
  const [totalDonors, setTotalDonors] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();

  // Fetch Donors with Pagination
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/forms/donors?page=${currentPage}&limit=${itemsPerPage}`);
        setDonors(response.data.data);
        console.log(response.data.data);
        
        setTotalDonors(response.data.total);
      } catch (error) {
        console.error('Error fetching donor list:', error);
      }
    };
    fetchDonors();
  }, [currentPage, itemsPerPage]);  
  const formatDate = (date) => {
    const d = new Date(date);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Donors List</h2>
        <button 
          className="btn btn-success"
          onClick={() => navigate('/')}
        >
          Add New Donor
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Donor Name</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Association</th>
              <th>Postal Code</th>
              <th>Relative Contact</th>
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
                <td>{donor.postalCode}</td>
                <td>{donor.nameOfRelative} ({donor.phoneNoOfRelative})</td>
                <td>{formatDate(donor.submittedAt)}</td>
                <td>
                  <Link 
                    to={`/generate-certificate/${donor._id}`} 
                    className="btn btn-primary btn-sm"
                  >
                    View Certificate
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <p className="mb-0">
          Page {currentPage} of {totalPages} ({totalDonors} items)
        </p>
        <nav aria-label="Page navigation">
          <ul className="pagination mb-0">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li 
                key={index} 
                className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DonationList;
