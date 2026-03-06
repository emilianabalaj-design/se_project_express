# WTWR Backend API

This project is the backend server for the WTWR (What To Wear) application.  
It provides user authentication, authorization, and API endpoints for managing users and clothing items.

The server is built with **Node.js**, **Express**, and **MongoDB**.

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

---

## Running the Project

Install dependencies:

bash
npm install

## Project Pitch Video

Check out this video where I explain my project and the challenges I faced:

[Watch the video] https://www.loom.com/share/c315cb3757e74273a6e66f57dca34eca

```

```
