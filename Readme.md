# Getting Started
MongoDB: A document-oriented NoSQL database (download and install from https://www.mongodb.com/try/download/community)

## To run the project:

Project database is done with MongoDB, and backend connects to mongoDB through .env file that is located at.

Install MongoDB Driver: Install the official MongoDB driver for your chosen backend language. These drivers provide methods to interact with your MongoDB database instance.
Establish MongoDB Connection: Within your backend API code, configure the connection details to your MongoDB database. This typically involves specifying the hostname, port, database name, and credentials (if applicable).

Project also requires Mapbox token and cloudinary token. 

## .env setup:
//Mapbox access token
MAPBOX_TOKEN=

//Cloudinary access tokens
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=

//mongo cluster url
DB_URL=

### Running the Application

Start the MongoDB server

Terminal command:
node app.js






