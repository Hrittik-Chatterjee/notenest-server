

# **Note Nest Backend**

## **Features**
- RESTful API to support CRUD operations for notes.
- MongoDB for database management.

## **Technologies Used**
- **Backend Framework**: Node.js, Express.js.
- **Database**: MongoDB.
- **Other Libraries**: CORS, dotenv, nodemon.

## **Setup and Installation**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following content:
   ```env
   PORT=5000
   DATABASE_URL=your-mongodb-connection-uri
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

## **API Endpoints**
Here’s a list of the key API endpoints:

### **Notes**
- **GET /api/notes**: Fetch all notes.
- **POST /api/notes**: Create a new note.
- **PUT /api/notes/:id**: Update an existing note.
- **DELETE /api/notes/:id**: Delete a note.

---

## **Environment Variables**
The backend requires the following environment variables:

```env
PORT=5000
DATABASE_URL=your-mongodb-connection-uri
```

---

### **Dependencies**
Make sure to install the required dependencies by running `npm install`. Here's a list of the dependencies:

```json
"dependencies": {
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.21.1",
  "mongodb": "^6.11.0",
  "nodemon": "^3.1.7"
}
```

---
