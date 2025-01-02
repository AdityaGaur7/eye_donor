import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './GenerateCertificate.css';
import Certificate from "../assets/certificate.jpg"
const GenerateCertificate = () => {
    const [donor, setDonor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchDonorData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/forms/donor/${id}`);
                setDonor(response.data.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching donor details');
                setLoading(false);
                console.error('Error:', error);
            }
        };

        fetchDonorData();
    }, [id]);

    if (loading) return <div className="text-center p-5">Loading...</div>;
    if (error) return <div className="text-center p-5 text-danger">{error}</div>;
    if (!donor) return <div className="text-center p-5">Donor not found</div>;

    return (
        <div>
        
            <div className='certificate'>
                <img src={Certificate} alt='certi'/>
                <div className='certificate-details'>
               <h6> This is to certify that {donor.firstName} {donor.lastName} has made an invaluable gift by donating eyes and has helped us to move the
bling from darkness to light. The kind gesture and concern for the suffering is worth emulating.This certificate
conveys appreciation of the staff of the hospital and the gratitude our blind patients towards the Donor & their
relatives.</h6>

                </div>

            </div>
            <button className="btn btn-primary" onClick={() => window.print()}> Print Certificate </button>
        </div>
    );
};

export default GenerateCertificate;