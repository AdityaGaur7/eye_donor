import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DonationList.css';
import { NavLink, useNavigate } from 'react-router-dom';

const DonationList = () => {
  const [donors, setDonors] = useState([]);
  const [totalDonors, setTotalDonors] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();

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
    return `${day}/${month}/${year}`;
  };

  const changePage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(totalDonors / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  const totalPages = Math.ceil(totalDonors / itemsPerPage);

  return (
    <div className="donor-list-container">
      <div className="list-header">
        <h2>Donors List</h2>
        
      </div>

      <div className="table-container">
        <table className="donor-table">
          <thead>
            <tr>
              <th>Donor Name</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Associator</th>
              <th>State Name</th>
              <th>City Name</th>
              <th>District Name</th>
              <th>Postal Code</th>
              <th>Relative List</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>
                 <NavLink to = {`/generate-certificate/${donor._id}`} >
                   {donor.firstName} {donor.lastName}
                   </NavLink>

                   </td>
                <td>{donor.gender}</td>
                <td>{donor.address}</td>
                <td>{donor.association}</td>
                <td>{donor.stateName || ''}</td>
                <td>{donor.cityName || ''}</td>
                <td>{donor.districtName || ''}</td>
                <td>{donor.postalCode}</td>
                <td>{donor.nameOfRelative} ({donor.phoneNoOfRelative})</td>
             
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span>Page {currentPage} of {totalPages} ({totalDonors} items)</span>
        <button 
          className="page-btn"
          onClick={() => changePage(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          «
        </button>
        {[...Array(totalPages)].map((_, index) => {
          if (
            index === 0 ||
            index === totalPages - 1 ||
            (index >= currentPage - 2 && index <= currentPage + 2)
          ) {
            return (
              <button
                key={index}
                className={`page-btn ${index + 1 === currentPage ? 'active' : ''}`}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </button>
            );
          } else if (
            index === currentPage - 3 || 
            index === currentPage + 3
          ) {
            return <span key={index}>...</span>;
          }
          return null;
        })}
        <button 
          className="page-btn"
          onClick={() => changePage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default DonationList;
