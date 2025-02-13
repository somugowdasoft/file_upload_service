# file_upload_service

This is a File Upload Service built with Node.js, Express, Multer, Cloudinary, and MongoDB. It allows users to upload files to Cloudinary and store the file URLs in a MongoDB database.

## Features

- Upload files using Multer

- Store files in Cloudinary

- Save file URLs in MongoDB

- Fetch uploaded file URLs

- Structured MVC pattern

## Technologies Used

- Node.js

- Express.js

- Multer (for handling file uploads)

- Cloudinary (for file storage)

- MongoDB (for storing file URLs)

- Mongoose (ODM for MongoDB)

- Dotenv (for environment variables)


## Installation

1️⃣ Clone the Repository

``` 
git clone https://github.com/somugowdasoft/file_upload_service.git
cd file_upload_service
 ```

2️⃣ Install Dependencies
```
npm install
```

3️⃣ Set Up Environment Variables

Create a .env file in the root directory and add the following:

```
PORT=5001

# MongoDB Connection
MONGO_URL=your_mongodb_connection_string

# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

```
4️⃣ Start the Server
``
npm start
```
The server will run at http://localhost:5001

## API Endpoints

### Upload File

#### POST /upload

#### Request (Form-Data):

file (File) - The file to be uploaded

Response:
```
{
  "message": "File uploaded successfully",
  "url": "https://res.cloudinary.com/.../uploaded_file.jpg"
}
```

## Get All Uploaded Files

### GET /images
Response:
```
[
  {
    "_id": "6623b5f3c71d14a6b56b3c1e",
    "fileUrl": "https://res.cloudinary.com/.../uploaded_file.jpg",
    "uploadedAt": "2025-02-12T10:45:00.000Z"
  }
]
```


## Contact

For any queries, feel free to reach out:

### GitHub: https://github.com/somugowdasoft



