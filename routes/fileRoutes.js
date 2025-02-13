// routes/fileRoutes.js

const express = require('express');
const multer = require('multer');
const fileController = require('../controllers/fileController');

// Set up multer memory storage (store files in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

// Route to upload files
router.post('/upload', upload.single('file'), fileController.uploadFile);

// Route to get all uploaded files
router.get('/files', fileController.getFiles);

module.exports = router;
