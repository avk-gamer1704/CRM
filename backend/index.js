const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const complaintRoutes = require('./routes/complaints');

const app = express();

// // Use CORS properly (don't manually set headers)
// // const cors = require("cors");
app.use(cors()); // Allow all origins by default
// // app.use(cors(corsOptions));

// app.use(express.json());

// MongoDB connection
const dbURI = 'mongodb://advaitkavishwar:zerobalance%402025@ac-xurgrj5-shard-00-00.s0gssbe.mongodb.net:27017,ac-xurgrj5-shard-00-01.s0gssbe.mongodb.net:27017,ac-xurgrj5-shard-00-02.s0gssbe.mongodb.net:27017/?replicaSet=atlas-mz48fr-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=DB';

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB Atlas connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/complaints', complaintRoutes);

// Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));