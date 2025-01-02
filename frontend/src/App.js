import React from 'react';
import DonationForm from './Component/DonationForm';
import DonationList from './Component/DonationList'; // Add this import

function App() {
  return (
    <div>
      <DonationForm />
      <DonationList />  {/* Display the donor list */}
    </div>
  );
}

export default App;
