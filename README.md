# Marvel Heroes Fetch Tutorial

A simple full-stack project using **Express** (backend) and **React** (frontend) to learn how to use the Fetch API. The app manages Marvel hero characters through CRUD operations.

## 📁 Project Structure

```
/root
├── backend
└── frontend
```

## ⚙️ Prerequisites

* Node.js (v14+)
* npm (v6+)

## 🚀 Setup & Run

### Backend

```bash
cd backend
npm install
npm run server
```

The backend will start on `http://localhost:3000`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The React app will run on `http://localhost:5173`.

## 🔌 Backend API Endpoints

| Method | Endpoint | Description                |
| ------ | -------- | -------------------------- |
| GET    | `/`      | Retrieve all characters    |
| POST   | `/`      | Create a new character     |
| GET    | `/:id`   | Retrieve a character by ID |
| PUT    | `/:id`   | Update a character by ID   |
| DELETE | `/:id`   | Delete a character by ID   |
