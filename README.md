# WTWR Backend API

This project is the backend server for the WTWR (What To Wear) application.  
It provides user authentication, authorization, and API endpoints for managing users and clothing items.

The server is built with **Node.js**, **Express**, and **MongoDB**, and deployed on Google Cloud.

---

## Features

- User registration (`/signup`)
- User login with JWT authentication (`/signin`)
- Protected routes using authorization middleware
- Get current user (`/users/me`)
- Update user profile (`PATCH /users/me`)
- Create clothing items
- Delete clothing items
- Ownership validation so users cannot delete items created by others
- Password hashing with bcrypt
- Password protection using `select: false`
- Global error handling
- CORS configuration for frontend connection

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- CORS
- dotenv
- PM2
- Google Cloud (deployment)

---

## Authentication

This API uses JSON Web Tokens (JWT) for authentication.

- Users can sign up and log in
- A token is returned upon login
- Protected routes require a Bearer token in the Authorization header

---

## API Endpoints

### Public Routes

- POST /signup – create user
- POST /signin – login user

### Protected Routes

- GET /users/me – get current user
- GET /items – get items
- POST /items – create item

---

## Deployment

The backend is deployed on Google Cloud using a virtual machine and PM2.

Base URL:
https://api.emi28-app.com

---

## Running the Project

Install dependencies:

bash
npm install

## Project Pitch Video

Check out this video where I explain my project and the challenges I faced:

[Watch the video] https://www.loom.com/share/c315cb3757e74273a6e66f57dca34eca

## Fronend Repository

Frontend project:

https://github.com/emilianabalaj-design/se_project_react

## Author

Emiliana Balaj
TripleTen Software Engineering Program

```

```
