# Task Manager – Frontend (Next.js)

A modern **Task Manager frontend application** built using **Next.js (App Router)** and **Tailwind CSS**, designed to work seamlessly with the Task Manager backend API, focusing on clean UI, proper API integration, and real-world frontend practices.

---

## ✨ Features

* 📝 Create, view, update & delete tasks
* 🔄 Task status update (Pending / Completed)
* ⚡ Optimistic UI updates for better UX
* 🔔 Toast notifications using **Sonner**
* 🎨 Clean & responsive UI using **Tailwind CSS**
* 🔐 Cookie-based authentication support
* ♻️ Axios instance with auto token refresh
* 📅 Consistent date & time formatting using utility functions

---

## 🛠 Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **API Calls:** Axios
* **Notifications:** Sonner
* **State Management:** React useState / useEffect
* **Authentication:** JWT (handled via backend cookies)

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

> ⚠️ This should point to your **backend server URL**.

---

## 🚀 Project Setup (Local)

### 1️⃣ Clone the Repository

```
git clone https://github.com/Pritammandal77/TaskManager-Frontend.git
cd TaskManager-Frontend
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Run the Development Server

```
npm run dev
```

The app will run on:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🔗 Backend Dependency

This frontend depends on the **Task Manager Backend API**.

Make sure the backend is:

* Running locally or deployed
* Cookies enabled (`credentials: true` in Axios)
* CORS configured properly

---

## 🔁 Axios & Token Refresh Flow

* Axios instance is configured in `axiosInstance.js`
* Cookies are used for authentication
* `ClientAuthProvider` triggers token refresh on app load
* Access token is refreshed silently using refresh token

## 📌 Deployment

This project is currently configured for **local usage**, but can be easily deployed on:

* Vercel
* Netlify

---

## 🧠 Notes

* Project focuses on **clean architecture & real-world patterns**
* Proper error handling & UI updates are implemented

---

## 👨‍💻 Author

**Pritam Mandal**
Full Stack Developer

---

⭐ If you found this project useful, don’t forget to star the repo!
