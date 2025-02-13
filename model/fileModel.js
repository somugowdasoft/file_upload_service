// models/fileModel.js

const mongoose = require('mongoose');

// Define file schema
const fileSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: true
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the file model
const File = mongoose.model('File', fileSchema);
module.exports = File;
