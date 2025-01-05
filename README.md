MERN Stack Blog Platform:

A simple blog platform built with the MERN stack (MongoDB, Express, React, Node.js) where users can register, log in, and manage their blog posts.

# Features:

User registration and login with JWT authentication
CRUD operations for blog posts (create, read, update, delete)
Post tags and search functionality
Protected routes for creating/editing/deleting posts
Tech Stack
Frontend: React
Backend: Node.js with Express
Database: MongoDB
Authentication: JSON Web Tokens (JWT)

# Backend setup:

Clone the repository:

git clone https://github.com/rutyak/community-website.git

Install the required dependencies:

1. npm install
2. Create a .env file in the root directory and set the following environment variables:
PORT=8000
MongoDB_URL=mongodb+srv://rutikkhandekar123:rutik123@cluster0.hccew.mongodb.net/
JWT_SECRET=community_website_JWT_7448
3. Start the backend server:
npm start

# API Endpoints:

1. User Authentication :
POST /register: Register a new user.
Request Body: { name, email, password }

POST /login: Log in an existing user.
Request Body: { email, password }
Response: { token }


# Frontend Setup
Navigate to the frontend directory:

1. cd Frontend
2. Install the required dependencies: npm install
3. Start the frontend application: npm start
4. Create a .env file in the root directory and set the following environment variables: 
  
  REACT_APP_BACKEND_URL=https://community-website-m9v4.onrender.com

# Important links: 
  
   Github Link : https://github.com/rutyak/community-website.git
   Deployed Frontend Link : https://new-community-website.netlify.app
   Deployed Backend Link : https://community-website-m9v4.onrender.com
   Working demo video: https://drive.google.com/file/d/1VvcyJw-_fBitqh3WphBrn3ZFZFgxR6mR/view?usp=sharing
