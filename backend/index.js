const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors()); // To allow cross-origin requests
app.use(bodyParser.json()); // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect('mongodb+srv://arorashivani74577:GwC0HPitkH75a9sf@cluster0.wwt59c5.mongodb.net/flatfinder',

)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Define the contact schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Endpoint to handle form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    message
  });

  newContact.save()
    .then(() => res.json({ message: 'Form data saved successfully!' }))
    .catch(err => res.status(400).json({ error: 'Error saving form data' }));
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
