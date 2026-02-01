# Restaurant Admin Dashboard – Backend

## 📌 Project Overview
Backend API for a restaurant admin dashboard that manages menu items, orders, and analytics.

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose

## ⚙️ Setup Instructions

### 1. Clone Repository
```bash
git clone <repo-url>
cd server

2.Install Dependencies
    npm install

3. Environment Variables
PORT=8000
MONGODB_URI=your_mongodb_connection_string

4. Run Server
npm run dev

5.📚 API Documentation

Menu APIs
	•	GET /api/menu
	•	GET /api/menu/search?q=
	•	POST /api/menu
	•	PUT /api/menu/:id
	•	PATCH /api/menu/:id/availability
	•	DELETE /api/menu/:id

Order APIs
	•	POST /api/orders
	•	GET /api/orders
	•	GET /api/orders/:id
	•	PATCH /api/orders/:id/status



⸻

✅ Features Implemented
	•	Menu CRUD
	•	Search with text index
	•	Optimistic updates support
	•	Secure order price calculation
	•	Order status management


⸻

🚀 Future Improvements
	•	Authentication
	•	Role-based access
	•	Frontend dashboard