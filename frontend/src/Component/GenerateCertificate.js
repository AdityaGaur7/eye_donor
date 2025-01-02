import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './GenerateCertificate.css';

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
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Eye Donation Certificate</h2>
                            <div className="certificate-content">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <strong>Name:</strong> {donor.firstName} {donor.lastName}
                                    </div>
                                    <div className="col-md-6">
                                        <strong>Gender:</strong> {donor.gender}
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <strong>Date of Birth:</strong> {new Date(donor.dob).toLocaleDateString()}
                                    </div>
                                    <div className="col-md-6">
                                        <strong>Mobile:</strong> {donor.mobileNo}
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-12">
                                        <strong>Address:</strong> {donor.address}
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <strong>Postal Code:</strong> {donor.postalCode}
                                    </div>
                                    <div className="col-md-6">
                                        <strong>Email:</strong> {donor.email}
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-12">
                                        <strong>Primary Diagnosis:</strong> {donor.primaryDiagnosis}
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <strong>Emergency Contact (Relative):</strong>
                                        <div>{donor.nameOfRelative}</div>
                                        <div>{donor.phoneNoOfRelative}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <strong>Emergency Contact (Friend):</strong>
                                        <div>{donor.nameOfFriend}</div>
                                        <div>{donor.phoneOfFriend}</div>
                                    </div>
                                </div>

                                <div className="text-center mt-4">
                                    <button 
                                        className="btn btn-primary"
                                        onClick={() => window.print()}
                                    >
                                        Print Certificate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenerateCertificate;