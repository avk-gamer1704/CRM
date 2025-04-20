import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ComplaintForm.css'; // Import the CSS file

function ComplaintForm() {
  const { id } = useParams(); // Get the complaint ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customer_name: '',
    email: '',
    phone: '',
    product_name: '',
    product_model: '',
    complaint: '',
  });

  useEffect(() => {
    if (id) {
      // Fetch the complaint data for editing
      axios
        .get(`http://localhost:5000/api/complaints/${id}`)
        .then((res) => setFormData(res.data))
        .catch((err) => console.error('Error fetching complaint:', err));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // Update the complaint
      axios
        .put(`http://localhost:5000/api/complaints/${id}`, formData)
        .then(() => navigate('/'))
        .catch((err) => console.error('Error updating complaint:', err));
    } else {
      // Add a new complaint
      axios
        .post('http://localhost:5000/api/complaints', formData)
        .then(() => navigate('/'))
        .catch((err) => console.error('Error adding complaint:', err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-field">
        <label>Name</label>
        <input
          name="customer_name"
          value={formData.customer_name}
          onChange={handleChange}
          placeholder="Enter customer name"
          required
        />
      </div>
      <div className="form-field">
        <label>Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>
      <div className="form-field">
        <label>Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />
      </div>
      <div className="form-field">
        <label>Product Name</label>
        <input
          name="product_name"
          value={formData.product_name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
        />
      </div>
      <div className="form-field">
        <label>Product Model</label>
        <input
          name="product_model"
          value={formData.product_model}
          onChange={handleChange}
          placeholder="Enter product model"
        />
      </div>
      <div className="form-field">
        <label>Complaint</label>
        <textarea
          name="complaint"
          value={formData.complaint}
          onChange={handleChange}
          placeholder="Enter complaint details"
          required
        />
      </div>
      <button type="submit" className="submit-button">
        {id ? 'Update Complaint' : 'Add Complaint'}
      </button>
      <button
        type="button"
        onClick={() => navigate('/')}
        className="cancel-button"
      >
        Cancel
      </button>
    </form>
  );
}

export default ComplaintForm;