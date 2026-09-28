

Zoom Clone

A full-stack video conferencing application inspired by Zoom. This project provides users with a platform to create and join meetings and communicate through a modern web interface.

## Features

- User authentication
- User registration and login
- Create video meetings
- Join meetings using a meeting link
- Audio and video controls
- Meeting communication
- Multiple participants
- Responsive user interface
- Protected routes
- REST API backend

## Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB
- REST API
- JWT Authentication

### Other Technologies

- Git and GitHub
- WebRTC
- Socket.io

## Project Structure



```text
zoom-clone/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```


Installation

1. Clone the Repository
   ```
   git clone https://github.com/mihirprabhakar/zoom-clone.git
   ```
2. Navigate to the Project
   ```
   cd zoom-clone
   ```
3. Install Backend Dependencies
   ```
   cd backend
   npm install
   ```
4. Install Frontend Dependencies
   Open another terminal and run:

```
cd frontend
npm install
```

Environment Variables

```
Create a .env file inside the backend directory.
```

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Running the Application
Start the Backend
From the backend directory:

```
npm run dev
```

or:

```
npm start
```

The backend will run on:

```
http://localhost:8000
```

Start the Frontend
From the frontend directory:

```
npm run dev
```

The frontend will usually run on:

```
http://localhost:5173
```

Application Flow

```
User
  |
  v
Frontend
  |
  +-- Register / Login
  |
  v
Backend API
  |
  +-- Authentication
  +-- Users
  +-- Meetings
  +-- Database
  |
  v
MongoDB
```

API Structure
The backend follows a REST API architecture.

Example endpoints:

```
POST   /api/auth/register
POST   /api/auth/loginGET    /api/users
GET    /api/users/:idPOST   /api/meetings
GET    /api/meetings
GET    /api/meetings/:id
```


Update these endpoints according to the actual routes implemented in the project.

Video Calling
The application can use WebRTC for real-time audio and video communication between participants.

Typical video call flow:

```
User A
  |
  | Camera + Microphone
  v
WebRTC Connection
  ^
  |
  | Camera + Microphone
  |
User BSocket.io can be used for signaling and real-time meeting events.
```



## Security

The project follows basic security practices such as:

* Password authentication
* JWT-based authorization
* Protected API routes
* Environment variables for secrets
* `.gitignore` for sensitive files
* `node_modules` excluded from Git

## Future Improvements

* Screen sharing
* Meeting recording
* Chat during meetings
* Host controls
* Participant management
* Waiting room
* Meeting scheduling
* Email notifications
* Dark mode
* Cloud deployment

Screenshots
Add screenshots of your application here:

* login
* dashboard

* meeting room

Contributing
Contributions are welcome.

Fork the repository.

Create a new branch.

```
git checkout -b feature/new-feature
```

Make your changes.

Commit your changes.

```
git commit -m "Add new feature"
```

Push the branch.

```
git push origin feature/new-feature
```

Open a Pull Request.

License
This project is for educational and learning purposes.

Author

```
Mihir Prabhakar
```

```
GitHub: https://github.com/mihirprabhakar
```
