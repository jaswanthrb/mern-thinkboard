# 🧠 ThinkBoard - MERN Stack Notes App

ThinkBoard is a full-stack note-taking application built with the MERN (MongoDB, Express, React, Node.js) stack. It lets users create, view, update, and delete notes with a clean, minimal interface.

This project is deployed on [Render](https://render.com) as a monolithic app — the React frontend is served as static files by the Express backend.

### 🔗 Live App  
👉 [https://mern-thinkboard-z9i7.onrender.com](https://mern-thinkboard-z9i7.onrender.com)

> ⏳ On Render's free plan, the server sleeps after 15 minutes of inactivity. Cold starts may take up to 50 seconds.

---

## 📌 Features

- 📝 Create, Read, Update, and Delete notes
- ⚡ Monolithic deployment using Express
- 📦 MongoDB Atlas integration
- ⚛️ React frontend with Vite, Tailwind CSS & DaisyUI
- 🔥 Notifications using react-hot-toast
- ✅ Axios for API calls
- 🧩 Organized folder structure

---

## ⚙️ Tech Stack

| Layer       | Tech Used                                                   |
|-------------|-------------------------------------------------------------|
| Frontend    | React, Vite, Tailwind CSS, DaisyUI, Axios, React Router     |
| Backend     | Node.js, Express, MongoDB, Mongoose                         |
| Deployment  | Render.com (monolith - single backend serving static files) |
| Tools       | dotenv, nodemon, react-hot-toast                            |

---

## 🗂️ Folder Structure

mern-thinkboard/
├── client/               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/          # axios setup
│   │   └── …
│   ├── package.json
│   └── vite.config.js
├── models/               # Mongoose schemas
├── routes/               # Express routes
├── server.js             # Entry point for Express server
├── .env                  # Environment variables
└── package.json          # Backend dependencies


