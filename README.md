🌍 World Atlas – React Frontend (Dockerized)

A modern World Atlas web application frontend built using React + Vite, fully containerized with Docker for easy development, deployment, and scalability.

This project displays country-related information in a clean, responsive UI and follows best practices in frontend structure and DevOps readiness.

🚀 Tech Stack

React.js – Component-based UI

Vite – Fast development & build tool

JavaScript (ES6+)

CSS – Styling

Docker – Containerization

ESLint – Code quality

📁 Project Structure
world-atlas/
│── public/            
│── src/               
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│── Dockerfile        
│── .dockerignore
│── .gitignore
│── index.html
│── package.json
│── vite.config.js
│── README.md

🐳 Docker Setup (Recommended)
🔹 Build Docker Image
docker build -t world-atlas .

🔹 Run Docker Container
docker run -p 3000:3000 world-atlas


👉 Open in browser:
http://localhost:3000
