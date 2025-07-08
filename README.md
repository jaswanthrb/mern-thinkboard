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
- 🧠 Redis-based rate limiting
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

---

## 🛠️ Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/jaswanthrb/mern-thinkboard.git
cd mern-thinkboard

## 🧪 2. env Setup

### Backend (`/backend`)

```
MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```

## 🔧 Run the Backend

```
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```
cd frontend
npm install
npm run dev
```

🧩 Future Improvements
	•	🔐 Authentication (JWT)

