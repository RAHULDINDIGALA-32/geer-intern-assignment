# 🛒 Geer Intern Assignment – Fullstack E-Commerce Platform

This is a fullstack e-commerce web application built using **Next.js**. It demonstrates a basic product listing page, dynamic routing for individual product details, and backend API functionality (GET, POST, DELETE) using **Next.js API Routes**, making it seamlessly deployable on platforms like Vercel.

✅ **Deployed Live:** [https://geer-intern-assignment.vercel.app](https://geer-intern-assignment-delta.vercel.app/)

---

## 📦 Tech Stack

### Frontend
- Next.js (Pages Router)
- React
- Tailwind CSS

### Backend
- Next.js API Routes (No external server needed)
- In-memory product data (mock database)

---
## App Folder Structure
```
geer-intern-assignment/
├── components/                 # Resuable UI Components
│   ├── BestSeller.js
│   ├── Collections.js
│   ├── Essentials.js
│   ├── Footer.js
│   ├── Layout.js
│   ├── Navbar.js
│   ├── ProductCard.js
│   └── ShopByPrice.js
├── context/
│   └── SearchContext.js
├── data/
│   └── mock_products.js        # In-memory product data
├── pages/
│   ├── api/
│   │   └── products/
│   │       ├── index.js        # GET and POST product APIs
│   │       └── [id].js         # GET and DELETE product by ID
│   ├── _app.js                 # Custom App component
│   ├── _document.js            # Custom Document
│   ├── index.js                # Home page
│   └── products/
│       ├── index.js            # Product listing page
│       └── [id].js             # Dynamic product detail page
├── public/
│   ├── logo.ico                # Favicon
│   └── placeholder.jpg         # Static images used in product cards & home page
├── styles/
│   └── globals.css             # Tailwind global styles
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
```
---

## 🚀 How to Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/RAHULDINDIGALA-32/geer-intern-assignment.git
cd geer-intern-assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be running at: http://localhost:3000



