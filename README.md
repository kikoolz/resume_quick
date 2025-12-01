ResumeBuilder Project

Table of Contents 1. Project Overview￼ 2. Features￼ 3. Project Structure￼ 4. Technologies Used￼ 5. Installation￼ 6. Running the Project￼ 7. Environment Variables￼ 8. API Endpoints￼ 9. Usage￼ 10. Contributing￼ 11. License￼

⸻

Project Overview

ResumeBuilder is a full-stack web application that allows users to create, customize, and share professional resumes. The project integrates React for the frontend and Node.js with Express for the backend, providing a seamless user experience. Users can add personal information, work experience, education, projects, skills, and a professional summary. The app also supports AI-generated enhancements for the professional summary and public resume sharing.

⸻

Features
• User authentication (login and registration)
• Create and manage multiple resumes
• Add/edit personal info, education, experience, projects, and skills
• AI-enhanced professional summary generation
• Template and color customization
• Preview resumes in real-time
• Public resume sharing with copyable links
• Download resume as PDF (future enhancement)
• Fully responsive design

⸻

Project Structure

resumebuilder/
├─ client/ # React frontend
│ ├─ src/
│ │ ├─ components/ # Reusable UI components
│ │ ├─ pages/ # React pages
│ │ ├─ assets/ # Images, icons, and other assets
│ │ ├─ app/ # Redux store and slices
│ │ ├─ configs/ # Axios configuration and API helpers
│ │ ├─ main.jsx # React entry point
│ │ └─ App.jsx # Root app component
│ └─ package.json
│
├─ server/ # Node.js backend
│ ├─ controllers/ # Route controllers
│ ├─ models/ # Database models (MongoDB or other)
│ ├─ routes/ # API routes
│ ├─ middleware/ # Auth and error handling middleware
│ ├─ server.js # Main server file
│ └─ package.json
│
├─ package.json # Root package.json to run client & server together
└─ .gitignore

⸻

Technologies Used
• Frontend: React, Redux, Tailwind CSS, React Router, Axios
• Backend: Node.js, Express, MongoDB/Mongoose
• Authentication: JWT tokens, bcrypt for password hashing
• Utilities: Nodemon for server development, concurrently to run client/server
• AI Integration: Axios calls to AI service for professional summary enhancement

⸻

Installation 1. Clone the repository:

git clone https://github.com/kikoolz/resume_quick.git
cd resumebuilder

    2.	Install dependencies for client and server:

cd client
npm install
cd ../server
npm install

    3.	Install root dev dependencies:

cd ../
npm install

⸻

Running the Project

From the project root, run both client and server concurrently:

npm run dev

    •	Frontend: http://localhost:5173
    •	Backend API: http://localhost:3000/api

Alternatively, you can run each separately:

# Run client

npm run client

# Run server

npm run server

⸻

Environment Variables

Create a .env file in the server/ folder with the following variables:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

(Optional) .env for client if needed for API base URL or other keys.

⸻

API Endpoints
• Auth:
• POST /api/users/register - Register a new user
• POST /api/users/login - Login user
• Resumes:
• POST /api/resumes/create - Create a new resume
• GET /api/users/resumes - Get all resumes for logged-in user
• GET /api/resumes/:resumeId - Get a specific resume
• PUT /api/resumes/update - Update resume
• DELETE /api/resumes/delete/:resumeId - Delete resume
• GET /api/resumes/public/:resumeId - Fetch public resume
• AI Enhancements:
• POST /api/ai/enhance-pro-sum - Generate AI-enhanced professional summary

⸻

Usage 1. Register an account or login. 2. Create a new resume. 3. Fill out sections: Personal Info, Education, Experience, Projects, Skills, Professional Summary. 4. Customize template and accent colors. 5. Preview your resume in real-time. 6. Toggle public visibility and share the public link. 7. (Future) Download the resume as PDF.

⸻

Contributing 1. Fork the repository. 2. Create a feature branch (git checkout -b feature/YourFeature). 3. Commit your changes (git commit -m 'Add new feature'). 4. Push to branch (git push origin feature/YourFeature). 5. Open a Pull Request.

⸻

License

This project is licensed under the MIT License.

⸻

Notes
• Ensure MongoDB is running locally or via Atlas.
• Keep .env files private and never commit them to GitHub.
• Use the root npm run dev command for easier development.

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

🚀 **Build your resume in minutes — ResumeBuilder makes it easy!**
