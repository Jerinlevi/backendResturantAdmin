Here is a clean, properly formatted README.md that you can directly copy–paste into GitHub.
I’ve fixed spacing, headings, code blocks, and made it submission-ready.

⸻


# Restaurant Admin Dashboard – Backend

## 📌 Project Overview
Backend API for a restaurant admin dashboard that manages menu items, orders, and analytics.  
This project demonstrates RESTful API design, MongoDB schema modeling, and real-world backend practices.

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## ⚙️ Setup Instructions

### 1. Clone Repository
```bash
git clone <repo-url>
cd server

2. Install Dependencies

npm install

3. Environment Variables

Create a .env file inside the server folder:

PORT=8000
MONGODB_URI=your_mongodb_connection_string

4. Run Server

npm run dev

Server will start on:

http://localhost:8000


⸻

📚 API Documentation

Menu APIs
	•	GET /api/menu – Get all menu items
	•	GET /api/menu/search?q= – Search menu items by name or ingredients
	•	POST /api/menu – Create a new menu item
	•	PUT /api/menu/:id – Update a menu item
	•	PATCH /api/menu/:id/availability – Toggle availability
	•	DELETE /api/menu/:id – Delete a menu item

⸻

Order APIs
	•	POST /api/orders – Create a new order
	•	GET /api/orders – Get all orders (supports filtering & pagination)
	•	GET /api/orders/:id – Get order by ID with populated menu details
	•	PATCH /api/orders/:id/status – Update order status

⸻

✅ Features Implemented
	•	Menu CRUD operations
	•	Search using MongoDB text indexing
	•	Optimistic UI support (backend-ready)
	•	Secure order price calculation (server-side)
	•	Order status management
	•	Proper error handling and validation

⸻

🚀 Future Improvements
	•	Authentication & authorization
	•	Role-based access control
	•	Analytics dashboard
	•	React frontend integration
	•	Deployment (Render / Netlify)

⸻

👤 Author

Jerin J

