
# Personal Finance Manager

This is a **Personal Finance Manager** application built using **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to register, log in, and manage their financial transactions.

## Features

- User Authentication (Register/Login)
- Add, Edit, Delete Transactions
- Visual Analytics for Expenses
- Avatar selection for users
- Responsive Design
- Real-time Data Fetching

---

## Tech Stack

| Layer               | Technology                |
|--------------------|---------------------|
| Frontend            | React.js            |
| Backend              | Node.js, Express.js   |
| Database           | MongoDB              |
| Styling                 | CSS                           |

---

## Project Structure

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

---

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/personal-finance-manager.git
    ```

2. Navigate into the project folder:

    ```bash
    cd personal-finance-manager-main
    ```

3. Install backend dependencies:

    ```bash
    npm install
    ```

4. Navigate into the frontend folder (`src` or where your client code is, if applicable) and install frontend dependencies:

    ```bash
    cd src
    npm install
    ```

---

## Environment Variables

Create a `.env` file in the root directory and specify:

```
MONGO_URI=your_mongo_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

---

## Running the Application

To start the **backend server**:

```bash
npm run server
```

To start the **React frontend**:

```bash
cd src
npm start
```

---

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /api/users/register | Register a new user |
| POST | /api/users/login | Login user |
| GET | /api/transactions | Get all transactions |
| POST | /api/transactions | Add new transaction |
| PUT | /api/transactions/:id | Update a transaction |
| DELETE | /api/transactions/:id | Delete a transaction |

---

## Screenshots (Optional)

You can add screenshots here to show off your app interface.

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.
