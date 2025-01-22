# Clean Architecture Overview

Clean Architecture is a software design philosophy that emphasizes separation of concerns, modularity, and ease of maintenance. It organizes code into distinct layers, each with a specific responsibility, and is particularly beneficial for complex applications.

## Key Principles of Clean Architecture

1. **Separation of Concerns:**  
   Each layer in the architecture has a specific responsibility and operates independently without interfering with other layers.

2. **Dependency Inversion:**  
   High-level modules should not depend on low-level modules. Both should rely on abstractions.

3. **Testability:**  
   By isolating concerns, each component can be tested independently.

4. **Independence:**  
   The architecture is technology-agnostic, allowing for easy replacement of frameworks, databases, or other technologies without affecting the entire system.

---

## Folder Structure Explanation

Below is a detailed explanation of the folder structure for a Node.js application using Clean Architecture principles:

```
project
│
├── src
│   ├── controllers
│   │   └── userController.js
│   ├── services
│   │   └── userService.js
│   ├── repositories
│   │   └── userRepository.js
│   ├── models
│   │   └── user.js
│   ├── routes
│   │   └── userRoutes.js
│   └── app.js
│
├── package.json
└── package-lock.json
```

### 1. `app.js`
**Purpose:** Entry point of the application.  
**Responsibilities:**
- Configures and starts the Express server.
- Sets up middleware (e.g., `body-parser`).
- Defines the base routes for the application.

---

### 2. `src/controllers/`
**Purpose:** Handles HTTP requests and responses.  
**Responsibilities:**
- Receives input from the client.
- Calls the appropriate service methods.
- Sends responses back to the client.

**Example:**  
`userController.js` handles user-related requests such as creating a user and signing in.

---

### 3. `src/services/`
**Purpose:** Contains the business logic of the application.  
**Responsibilities:**
- Implements core application functionality.
- Interacts with repositories to fetch and store data.
- Contains logic that can be tested independently of the web framework.

**Example:**  
`userService.js` contains methods for creating a user and signing in.

---

### 4. `src/repositories/`
**Purpose:** Manages data persistence and retrieval.  
**Responsibilities:**
- Provides an abstraction layer over data sources (e.g., databases, APIs).
- Implements methods to interact with the data source.

**Example:**  
`userRepository.js` provides methods to add and find users.

---

### 5. `src/models/`
**Purpose:** Defines the data structures used in the application.  
**Responsibilities:**
- Represents the application's domain entities.

**Example:**  
`user.js` defines the `User` model with properties like `id`, `username`, and `password`.

---

### 6. `src/routes/`
**Purpose:** Maps endpoints to their corresponding controller methods.  
**Responsibilities:**
- Defines routes and their handlers.

**Example:**  
`userRoutes.js` maps user-related endpoints to the `userController` methods.

---

## Benefits of This Structure

1. **Modularity:**  
   Each component is independent, making development, testing, and maintenance easier.

2. **Scalability:**  
   New features can be added or existing ones modified without impacting unrelated code.

3. **Maintainability:**  
   Clear separation of concerns enhances code readability and manageability.

4. **Testability:**  
   Isolated layers allow for independent testing, improving application reliability.

---

## How to Run the Application

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies:**
   ```bash
   cd project
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm start
   ```

4. **Test the Endpoints:**
   Use a tool like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to test the API endpoints.

---

## Example Endpoints

### User Routes
- **Create User:**
  ```http
  POST /api/users
  ```
  **Payload:**
  ```json
  {
    "username": "john_doe",
    "password": "secure_password"
  }
  ```

- **Sign In:**
  ```http
  POST /api/users/signin
  ```
  **Payload:**
  ```json
  {
    "username": "john_doe",
    "password": "secure_password"
  }
  ```

