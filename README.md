# Product Management SPA

A React Single Page Application (SPA) that consumes a RESTful Product API and provides a user interface for performing complete CRUD operations.

This project was developed as part of the InterSpark internship Task 2.

---

## 📌 Project Overview

The application provides a frontend interface for managing products through a REST API.

Users can:

- View all products
- View details of a single product
- Create new products
- Edit existing products
- Delete products
- View loading states while data is being fetched
- View error messages when API requests fail
- Navigate between pages using React Router

The React frontend communicates with the REST API using the browser's Fetch API.

---

## 🚀 Features

### Product Management

- **Create Product** — Add a new product through a form.
- **Read Products** — Display all products retrieved from the REST API.
- **Read Single Product** — View complete details of an individual product.
- **Update Product** — Edit existing product information.
- **Delete Product** — Remove products after confirmation.

### React Features

- Functional React components
- React Hooks
  - `useState`
  - `useEffect`
- React Router for SPA navigation
- Fetch API for REST API communication
- Loading states
- Error handling
- Form validation using HTML form attributes
- Reusable components

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript (ES6+)
- React Router
- HTML5
- CSS3
- Fetch API
- Vite

### Backend

The frontend consumes the REST API developed in the previous internship task using:

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📁 Project Structure

```text
product-frontend/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── Loading.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── CreateProduct.jsx
│   │   ├── ProductDetails.jsx
│   │   └── EditProduct.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
