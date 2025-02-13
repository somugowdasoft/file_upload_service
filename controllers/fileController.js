// controllers/fileController.js

const cloudinary = require('../config/cloudinary');
const File = require('../model/fileModel');
const streamifier = require('streamifier');

// File upload handler
const uploadFile = async (req, res) => {  
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Create a stream to upload to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },
      async (error, result) => {        
        if (error) {
          console.error("Cloudinary Upload Error:", error);
          return res.status(500).json({ error: error.message });
        }

        console.log("Uploaded File URL:", result.secure_url);

        // Save the file URL in MongoDB
        const newFile = new File({ fileUrl: result.secure_url });
        await newFile.save();

        res.json({ message: 'File uploaded successfully', url: result.secure_url });
      }
    );

    // Convert Buffer to Stream and pipe it to Cloudinary
    streamifier.createReadStream(req.file.buffer).pipe(uploadStream);

  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: 'Upload failed' });
  }
};

// Get all uploaded files
const getFiles = async (req, res) => {
  try {
    const files = await File.find(); // Get all files
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch files' });
  }
};

module.exports = { uploadFile, getFiles };
