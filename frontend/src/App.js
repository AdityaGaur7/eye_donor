import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import DonationForm from './Component/DonationForm';
import DonationList from './Component/DonorList/DonationList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<DonationForm />} />
          <Route path="/donors" element={<DonationList />} />  
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
