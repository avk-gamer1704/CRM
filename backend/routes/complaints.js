const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// Get all complaints
router.get('/', async (req, res) => {
  console.log('Request received at /api/complaints');
  try {
    const data = await Complaint.find();
    res.json(data);
  } catch (err) {
    console.error('Error fetching complaints:', err);
    res.status(500).json({ error: 'Failed to fetch complaints' });
  }
});

router.get('/test', async (req, res) => {
  console.log('Request received at /api/complaints/test');
  try {
    await client.connect();
    const db = client.db('db'); // Your database name
    const collection = db.collection('crm_data'); // Your collection name

    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (err) {
    console.error('Error fetching complaints:', err);
    res.status(500).json({ error: 'Failed to fetch complaints' });
  } finally {
    await client.close();
  }
});

// Get a single complaint
router.get('/:id', async (req, res) => {
  const data = await Complaint.findById(req.params.id);
  res.json(data);
});

// Update a complaint
router.put('/:id', async (req, res) => {
  const updated = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Add a new complaint (from email/audio etc.)
router.post('/', async (req, res) => {
  const complaint = new Complaint(req.body);
  await complaint.save();
  res.json(complaint);
});

router.get('/hello', (req, res) => {
  res.send('Hello from the complaints route!');
});
module.exports = router;

