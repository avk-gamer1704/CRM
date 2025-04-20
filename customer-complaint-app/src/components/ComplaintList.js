import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ComplaintList.css'; // Import the updated CSS file

function ComplaintList() {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate(); // Hook to navigate to the ComplaintForm

  useEffect(() => {
    // Fetch complaints from the backend
    axios
      .get('http://localhost:5000/api/complaints') // Ensure this URL matches your backend
      .then((res) => {
        setComplaints(res.data); // Update state with the fetched data
      })
      .catch((err) => {
        console.error('Error fetching complaints:', err);
      });
  }, []);

  const handleEditClick = (id) => {
    // Redirect to the ComplaintForm with the selected complaint's ID
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container">
      <h1 className="title">Customer Complaints</h1>
      <table className="complaints-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Product</th>
            <th>Model</th>
            <th>Complaint</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c._id}>
              <td>{c.customer_name}</td>
              <td>{c.phone}</td>
              <td>{c.email || 'N/A'}</td>
              <td>{c.product_name}</td>
              <td>{c.product_model || 'N/A'}</td>
              <td>{c.complaint}</td>
              <td>
                <button
                  onClick={() => handleEditClick(c._id)}
                  className="edit-button"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/upload" className="add-complaint-button">
        Add Complaint via Audio/Email
      </Link>
    </div>
  );
}

export default ComplaintList;