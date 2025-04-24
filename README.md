#MyLocat - Frontend

This is the frontend for MyLocat, a personal safety web application designed to work with a wearable device. Built with React and Vite, this interface allows users to manage emergency contacts, trigger alerts, and interact with location data – all powered by a Spring Boot API.

This project connects to the [MyLocat Backend API](https://github.com/lix02/mylocat-backend).

---

#Project Status

#Finished
- React project setup with Vite
- Contact list connected to backend API
- Form for adding new contact
- Clean folder structure
- .env configuration and API integration

#In Progress

- Edit and delete functionality for contacts
- Integration with backend alert system (/alerts)
- Integration with location system (/locations)
- Displaying alerts and location history

#Planned / Next

- Routing with React Router (multi-page layout)
- UI styling and layout improvements
- Form validation and loading states
- Location visualization (Google Maps or similar)
- Authentication and role-based access

---
#How to Run Locally

1. Clone this repository
   git clone https://github.com/lix02/mylocat-frontend.git
2. Install dependencies
   npm install
3. Create a .env file in the root directory with this content:
   VITE_API_URL=http://localhost:8080
   (Adjust the port if your backend runs on something other than 8080)
4. Start the development server
   npm run dev

This app will be available at http://localhost:5173
(If this port is taken, Vite will use the next available one automatically.)

---

#Tech Stack

- Language: JavaScript  
- Framework: React  
- Build Tool: Vite  
- API: Native fetch  
- Dev Tools: VS Code  

---

#Author

Linda Stumpf. Full-stack learner building real-world apps with Spring Boot & React.

---

#Disclaimer

This project is a learning-driven work in progress. Features will expand as skills grow.
