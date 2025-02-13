// config/cloudinary.js

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || "dlyir53vk",
  api_key: process.env.API_KEY || "656414396264851",
  api_secret: process.env.API_SECRET || "RR-kE1JPcj9-CzA4d7HbUueKheg"
});

module.exports = cloudinary;
