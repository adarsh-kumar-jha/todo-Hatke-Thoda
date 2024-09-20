
# 📝 Todo App

Welcome to the **Todo App**, a simple yet elegant task management tool built with a beautiful **frontend** using **HTML, CSS, and JavaScript**, and a robust **backend** powered by **Express** and **Node.js**. This app also features a **secure authentication system** using **bcrypt** and **salt**.

## 🌟 Features

- **Create, Read, Update, Delete (CRUD) Tasks**  
  Easily manage your to-do tasks with all essential functionalities.
  
- **Responsive Design**  
  The app is designed to look great on any screen size.

- **Smooth Animations**  
  Enjoy a clean and modern interface with smooth animations and transitions.

- **Data Persistence**  
  All tasks are stored in the backend and persist between sessions.

- **Secure Authentication**  
  The app uses **bcrypt** to hash passwords and employs **salting** to provide extra security, ensuring that user credentials are kept safe.

## 🛠️ Technologies Used

### Frontend:
- **HTML5** for structure
- **CSS3** for styling and responsiveness
- **JavaScript** for interactive functionality

### Backend:
- **Node.js** for the runtime environment
- **Express.js** for creating APIs and server management

### Authentication:
- **bcrypt** for password hashing
- **Salting** for enhanced security in authentication

### Database:
- **MongoDB** (or any other database you've used) to store the tasks and user credentials

---

## 🚀 Getting Started

Follow these steps to get the Todo App up and running on your local machine.

### Prerequisites
Ensure you have the following installed:
- **Node.js** (version 12.x or above)
- **MongoDB** (or your preferred database)
- **NPM** (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd todo-app
   ```

3. **Install backend dependencies:**

   ```bash
   npm install
   ```

4. **Set up your environment variables:**

   Create a `.env` file and configure your database and authentication settings.

   ```bash
   DB_URL=mongodb://localhost:27017/todoapp
   PORT=3000
   SALT_ROUNDS=10
   ```

5. **Run the application:**

   ```bash
   npm start
   ```

6. **Open the app in your browser:**

   Visit `http://localhost:3000` to view the todo app.

---

## 📁 Project Structure

```bash
├── public/
│   ├── css/
│   │   └── styles.css      # All CSS styling
│   ├── js/
│   │   └── main.js         # Frontend JavaScript logic
│   └── index.html          # Main HTML page
├── routes/
│   └── todos.js            # API routes for tasks
├── models/
│   ├── Todo.js             # Mongoose schema for tasks
│   └── User.js             # Mongoose schema for users and authentication
├── auth/
│   └── authController.js   # Authentication logic using bcrypt and salt
├── app.js                  # Main server file
└── package.json            # NPM dependencies and scripts
```

---

## 🔐 Secure Authentication

We use **bcrypt** to ensure the security of user passwords, with the following methods:

- **Password Hashing:** Each password is hashed using bcrypt.
- **Salting:** Random salt is added to the hash for an extra layer of security.
- **Secure Storage:** User credentials are securely stored in the database.

Here’s a brief overview of how authentication works:

1. During registration, passwords are hashed and salted before being stored in the database.
2. During login, the stored hash is compared to the hash of the entered password using bcrypt’s comparison methods.

---

## 🛤️ API Endpoints

The app uses RESTful APIs to interact with the backend. Below are the available endpoints:

- **GET** `/api/todos` - Retrieve all tasks
- **POST** `/api/todos` - Add a new task
- **PUT** `/api/todos/:id` - Update an existing task
- **DELETE** `/api/todos/:id` - Delete a task
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Log in an existing user

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Fork the repo
- Create a new branch
- Submit a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---



---

## 💬 Feedback

If you have any feedback or suggestions, feel free to reach out at (mailto:jhaadarsh234@gmail.com).

---

Made with 💻 by **[ADARSH]**
```

### Updates:
- Added **bcrypt and salt** to secure the authentication process.
- Included **authentication API endpoints**.
- Updated **project structure** to show the authentication files.

Let me know if you'd like to refine any other details!
