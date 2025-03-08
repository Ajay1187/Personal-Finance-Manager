# 💰 Personal Finance Manager

## 🚀 Overview

The **Personal Finance Manager** is a robust full-stack web application designed to help users gain better control over their personal finances. This application allows users to monitor their income, track expenses, and analyze their overall financial health. Built using **React.js** for the frontend and **Node.js** for the backend, with **MongoDB** serving as the database, it ensures smooth and secure financial management.

## ✨ Features

- ✅ **User Authentication:** Secure registration and login functionality.
- ✅ **Expense Tracking:** Track daily expenses with category segmentation.
- ✅ **Income Management:** Log and manage multiple income sources.
- ✅ **Data Visualization:** Visualize financial data through charts and graphs.
- ✅ **Secure Data Storage:** Utilizes MongoDB to securely store user information and transactions.

## 📁 Project Structure

The project is organized into two main directories:

### 📌 Backend
Path: `Backend/`

- **app.js:** Main entry point for the backend application.
- **Controllers:** Houses business logic for users and transactions.
- **Databases:** Handles MongoDB connection configurations.
- **Models:** Defines data schemas for users and transactions.
- **Routers:** Manages API routes.
- **package.json:** Maintains backend dependencies and scripts.

### 💻 Frontend
Path: `Frontend/`

- **src:** Contains the core React.js source code.
  - **Pages:** Includes pages like Login, Register, Home, etc.
  - **Components:** Modular and reusable UI components.
  - **Assets:** Static files like logos, images, and icons.
- **public:** Houses static files and the main HTML template.
- **package.json:** Lists frontend dependencies and scripts.

### 📜 Folder Structure

```
personal_finance_manager-main/
├── DB/                      # Database connection
├── Routers/                  # API Route Handlers
├── controllers/              # Business Logic for Transactions & Users
├── models/                    # Mongoose Schemas
├── public/                    # Static Assets (React)
├── src/                        # React Frontend Code
│   ├── Pages/                 # Page components
│   ├── assets/                 # Images and animations
│   ├── components/        # Reusable components
│   ├── utils/                   # Helper functions
│   └── index.js                 # React entry point
├── app.js                    # Express app entry point
├── package.json           # Node dependencies
└── README.md                # Project Documentation
```

## 🛠 Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js**
- **MongoDB**

### Clone the Repository

```bash
git clone <repository-url>
cd Personal-Finance-Manager-main
```

### Install Backend Dependencies

```bash
cd Backend
npm install
```

### Install Frontend Dependencies

```bash
cd ../Frontend
npm install
```

## ▶️ Running the Application

### Start the Backend Server

```bash
cd Backend
npm start
```

### Start the Frontend Server

```bash
cd ../Frontend
npm start
```

The application will be accessible at:
- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:5000](http://localhost:5000)

## 🔐 Environment Variables

Create a `.env` file in the `Backend/` directory with the following content:

```
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/users/register` | Register a new user |
| **POST** | `/api/users/login` | Login a user |
| **GET** | `/api/transactions` | Retrieve all transactions |
| **POST** | `/api/transactions` | Add a new transaction |
| **PUT** | `/api/transactions/:id` | Update a transaction by ID |
| **DELETE** | `/api/transactions/:id` | Delete a transaction by ID |

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are highly welcomed! If you encounter any bugs, have feature requests, or want to enhance functionality, feel free to open an issue or submit a pull request.

## 👨‍💻 Author

Developed and maintained by **Ajay Padghan**. For any inquiries or support, you can reach out via GitHub or email.

