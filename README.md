# ResumeBuilder Project

## 📑 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Technologies Used](#technologies-used)
5. [Installation](#installation)
6. [Running the Project](#running-the-project)
7. [Environment Variables](#environment-variables)
8. [API Endpoints](#api-endpoints)
9. [Usage](#usage)
10. [Contributing](#contributing)
11. [License](#license)
12. [Notes](#notes)

---

## 📌 Project Overview

**ResumeBuilder** is a full-stack web application that allows users to create, customize, and share professional resumes.  
Built using **React** for the frontend and **Node.js + Express** for the backend, the platform offers real‑time previews and collaborative features such as **public sharing**.

Users can:

- Add personal information, experience, education, projects, skills
- Customize templates and styling
- Generate enhanced summaries using AI
- Share resumes via a public link or QR code

---

## ✨ Features

- 🔐 User authentication (JWT-based)
- 📝 Create & manage multiple resumes
- 🎨 Template + Color customization
- ⚡ Real-time preview
- 🤖 AI-enhanced professional summary
- 🔗 Public shareable resume links
- 📱 Fully responsive UI
- 📄 _(Coming soon)_ Export PDF download

---

## 📂 Project Structure

```
resumebuilder/
├─ client/                 # React frontend
│  ├─ src/
│  │  ├─ components/      # UI components + templates
│  │  ├─ pages/           # Route pages
│  │  ├─ assets/          # Images/icons
│  │  ├─ app/             # Redux store + slices
│  │  ├─ configs/         # Axios API helpers
│  │  ├─ main.jsx         # React entry point
│  │  └─ App.jsx
│  └─ package.json
│
├─ server/                # Backend server
│  ├─ controllers/        # Route logic
│  ├─ models/             # Mongoose Schemas
│  ├─ routes/             # API endpoints
│  ├─ middleware/         # Auth + error handling
│  ├─ server.js
│  └─ package.json
│
├─ package.json           # Root for running both apps
└─ .gitignore
```

---

## 🛠️ Technologies Used

### Frontend

- React
- Redux Toolkit
- TailwindCSS
- React Router
- Axios

### Backend

- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt for password hashing

### Development Tools

- Nodemon
- Concurrently

---

## 📥 Installation

Clone and enter the project:

```bash
git clone https://github.com/kikoolz/resume_quick.git
cd resumebuilder
```

Install dependencies for both:

```bash
cd client && npm install
cd ../server && npm install
cd ..
npm install   # root dev dependencies
```

---

## 🚀 Running the Project

Run frontend + backend together:

```bash
npm run dev
```

- Frontend → http://localhost:5173
- Backend API → http://localhost:3000/api

Run individually:

```bash
# Client
npm run client

# Server
npm run server
```

---

## 🔐 Environment Variables

Create `server/.env`:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> ⚠️ Never commit `.env` to GitHub!

---

## 🔗 API Endpoints

### Auth

| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| POST   | `/api/users/register` | Register new user |
| POST   | `/api/users/login`    | Login user        |

### Resumes

| Method | Endpoint                        | Description                        |
| ------ | ------------------------------- | ---------------------------------- |
| POST   | `/api/resumes/create`           | Create resume                      |
| GET    | `/api/users/resumes`            | Get all resumes for logged-in user |
| GET    | `/api/resumes/:resumeId`        | Get specific resume                |
| PUT    | `/api/resumes/update`           | Update resume                      |
| DELETE | `/api/resumes/delete/:resumeId` | Delete resume                      |
| GET    | `/api/resumes/public/:resumeId` | Fetch public resume                |

### AI

| Method | Endpoint                  | Description                      |
| ------ | ------------------------- | -------------------------------- |
| POST   | `/api/ai/enhance-pro-sum` | AI-generated summary enhancement |

---

## 🧑‍💻 Usage

1. Register or log in
2. Create a resume
3. Add/edit information
4. Customize template + colors
5. Toggle **Public mode** to share
6. Copy public link or QR code
7. _(Future)_ Export downloadable PDF

---

## 🤝 Contributing

1. Fork repository
2. Create branch:

```bash
git checkout -b feature/YourFeature
```

3. Commit changes:

```bash
git commit -m "Add new feature"
```

4. Push branch and create Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ⚙️ Notes

- Ensure MongoDB is running (Local or Atlas)
- Use `npm run dev` for full development environment
- Keep environment keys secure ✨

---

🚀 **Build your resume in minutes — ResumeQuick makes it easy!**
