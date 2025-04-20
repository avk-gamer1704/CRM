const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  customer_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  product_model: {
    type: String,
    default: null,
  },
  complaint: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Complaint', complaintSchema);