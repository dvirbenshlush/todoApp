# TodoApp

**Author**: Dvir Ben Shlush  

## 📌 Description  
TodoApp is a full-stack task management application that allows users to create, edit, delete, and manage their tasks in real time.  
The project implements **authentication, authorization, real-time updates, and state management** to provide a seamless experience for the user.  

Key features include:
- User authentication with **JWT**.
- Task management with features such as adding, editing, and deleting tasks.
- Real-time updates using **WebSockets (Socket.io)**.
- An intuitive **Angular Material** interface.
- **NgRx** for state management to ensure a consistent and centralized application state.
- **Repository Design Pattern** on the backend to maintain a clean architecture.

---

## 🚀 Features  
- **User Authentication & Authorization** using JWT (JSON Web Token)  
- **AuthInterceptor** to handle token-based authentication in requests  
- **Repository Design Pattern** in the backend for cleaner architecture  
- **Angular Material UI** for a modern and accessible interface  
- **NgRx State Management** for managing the application state  
- **Real-Time Updates** using WebSockets (Socket.io)  
- **RESTful API** built with Express.js  
- **MongoDB Database** with Mongoose ORM  

---

## 🛠️ Technologies Used  

### **Frontend (Angular 17)**
- **State Management**: NgRx  
- **UI Components**: Angular Material  
- **Authentication**: JWT, HttpInterceptor  
- **Real-Time Communication**: Socket.io-client  

### **Backend (Node.js & Express)**
- **Authentication**: JWT  
- **WebSockets**: Socket.io  
- **Database**: MongoDB with Mongoose  
- **Repository Design Pattern** for cleaner API structure  

---

## 🏗️ Project Structure  






---

## ⚙️ Environment Variables Setup  

Create a `.env` file in the `todoApi/` folder and add the following environment variables:

```plaintext
MONGO_URI=mongodb+srv://dev_user:OnlineTodoPROJECT2025@todo-cluster.f9bey.mongodb.net/?retryWrites=true&w=majority&appName=todo-cluster
PORT=5000
JWT_SECRET='08084b7e-4b7b-4b7b-8b7b-7b7b7b7b7b7b'



1️⃣ Clone the Repository

git clone https://github.com/dvirbenshlush/todoApp.git
cd todoApp
2️⃣ Backend Setup
Navigate to the todoApi folder and install dependencies:

cd todoApi
npm install
Configure your .env file (as shown above).
Start the backend:

npm start
3️⃣ Frontend Setup
Navigate to the todoClient folder and install dependencies:


cd ../todoClient
npm install
Run the Angular application:
ng serve
Open your browser at http://localhost:4200
🔐 Authentication & Security
JWT Authentication: Users must log in to access protected routes.
AuthInterceptor: Automatically attaches JWT tokens to requests.
Authorization Middleware: Protects backend routes based on user roles.
🔄 Real-Time Functionality
Socket.io for live updates:
When a user creates, updates, or deletes a task, changes are broadcasted in real time to all connected clients.
WebSockets enhance collaboration when multiple users interact with tasks simultaneously.
🏗️ Repository Design Pattern (Backend)
The backend follows a repository pattern, which separates the data access layer from the business logic, making the codebase more maintainable and scalable.

Example structure:

Task Repository (repositories/taskRepository.js): Handles database interactions
Task Controller (controllers/taskController.js): Manages API logic and calls repository functions
🎨 UI & State Management
Angular Material for responsive UI components
NgRx for centralized state management and store handling
🎯 Contribution
Contributions are welcome! Feel free to fork the repo, create a new branch, and submit a pull request.

📝 License
This project is licensed under the MIT License. See the LICENSE file for details.
