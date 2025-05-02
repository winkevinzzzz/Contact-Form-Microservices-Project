# Contact-Form-Microservices-Project
# 📬 Contact Form Microservices Project

A simple microservices-based contact form system with:
- 🧑‍💻 A React Frontend (form UI)
- 📮 A Form API (receives and queues messages)
- 🛠 A Processor (consumes from Redis and logs messages)
- 🧵 Redis Queue (message broker)

---

## 📁 Folder Structure
```bash
contact-microservices/
├── docker-compose.yml
├── frontend/ # React contact form UI
├── form-api/ # Express API to receive and push to Redis
├── processor/ # Service to consume messages from Redis
└── .gitignore
```

---

## 🚀 Getting Started

You can run this project either with Docker or manually using `npm`.

---

## 📦 Option 1: Run with Docker (Recommended)

### 1. Clone the project
```bash
git clone https://github.com/your-username/contact-microservices.git


cd contact-microservices


2. Start all services
bash
Copy
Edit
docker-compose up --build
3. Access the app
Frontend: http://localhost:3000

Form API: http://localhost:3001

Redis: used internally (port 6379)

🧑‍🔧 Option 2: Run Manually (Without Docker)
Prerequisites
Node.js (v16+)

Redis server running locally on localhost:6379

1. Install dependencies
In each subfolder:

👉 frontend

cd frontend
npm install
npm start
👉 form-api

cd ../form-api
npm install
node index.js
👉 processor

cd ../processor
npm install
node index.js
📬 API Endpoint
POST /submit
URL: http://localhost:3001/submit

Body (JSON):

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
Response:

{ "status": "ok" }
✅ What Happens After Submitting the Form?
frontend sends form data to form-api

form-api pushes the message to Redis queue

processor consumes the message and logs it to terminal

🔧 Built With
React

Node.js

Express

Redis

Docker & Docker Compose
```
🙌 License
MIT — free to use, modify, and distribute.


---

Would you like me to push this into a real GitHub repository template or prepare a `.zip` with everything inside?