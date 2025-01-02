import React from 'react';
import DonationForm from './Component/DonationForm';
import DonationList from './Component/DonorList/DonationList'; // Add this import
import GenerateCertificate from './Component/GenerateCertificate';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <a href="/">Donation Form</a> 
            </li>
            <li>
              <a href="/donors">Donor List</a>  
            </li>
          </ul>
        </nav> */}

        {/* Define the Routes for different paths */}
        <Routes>
          <Route path="/" element={<DonationForm />} /> {/* Default route, renders DonationForm */}
          <Route path="/donors" element={<DonationList />} />  {/* Donor list route, renders DonationList */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
