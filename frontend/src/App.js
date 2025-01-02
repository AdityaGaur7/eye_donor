import React from 'react';
import DonationForm from './Component/DonationForm';
import DonationList from './Component/DonationList'; // Add this import
import GenerateCertificate from './Component/GenerateCertificate';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<DonationForm />} />
      <Route path="/form" element={<DonationList />} />
      <Route path="/generate-certificate/:id" element={<GenerateCertificate />} />
      </Routes>
    </div>
  );
}

export default App;
