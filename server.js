const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(201).json({ success: true, msg: 'Add a new bootcamp' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Modify bootcamp ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`)
);
