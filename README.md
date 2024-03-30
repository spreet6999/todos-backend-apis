# Todos API with Node.js and Express

This project implements a simple RESTful API for managing a list of todos using Node.js and Express. It allows you to:

- Retrieve all todos: Get a list of all todos.

- Retrieve a specific todo: Get the details of a todo by its ID.

- Create a new todo: Add a new todo with a title and optional completion status.

- Update a todo: Modify the title and completion status of an existing todo.

- Delete a todo: Remove a todo from the list.

## Installation

**_Prerequisites_**: Ensure you have Node.js (version 14 or later) and npm (Node Package Manager) installed on your system. You can verify this by running the following commands in your terminal:

```Bash
node -v
npm -v
```

Clone the repository: If you haven't already, clone this repository using Git:

```Bash
git clone https://your-github-repository-url.git
```

Replace https://your-github-repository-url.git with the actual URL of your repository.

Install dependencies: Navigate to the project directory and install the required dependencies:

```Bash
cd todos-api
npm install
```

Running the API

Start the server: Use Nodemon to start the server in development mode, which automatically restarts the server whenever you make changes to the code:

```Bash
npm run dev
```

API endpoints: The API is accessible at http://localhost:3002 (default port). Here's a summary of the endpoints:

| Method | Endpoint       | Description                                                            |
| ------ | -------------- | ---------------------------------------------------------------------- |
| GET    | /              | Get all todos.                                                         |
| GET    | /todos         | Get all todos (optional: filter by ID using query parameter ?id=<id>). |
| POST   | /todos         | Create a new todo.                                                     |
| PUT    | /todos?id=<id> | Update an existing todo (specify the ID in the query parameter).       |
| DELETE | /todos?id=<id> | Delete a todo (specify the ID in the query parameter).                 |

### Data Persistence

Currently, the API stores todos in the ./assets/data/todos.json file. For production environments, consider using a more robust database solution like MongoDB or PostgreSQL.

## Usage Examples

### Get all todos:

```Bash
curl http://localhost:3002/
```

### Get a specific todo (ID: 1):

```Bash
curl http://localhost:3000/todos?id=1
```

### Create a new todo:

```Bash
curl -X POST -H "Content-Type: application/json" -d '{"title": "Buy groceries", "completed": false}' http://localhost:3002/todos
```

### Update a todo (ID: 2):

```Bash
curl -X PUT -H "Content-Type: application/json" -d '{"title": "Updated title", "completed": true}' http://localhost:3002/todos?id=2
```

### Delete a todo (ID: 3):

```Bash
curl -X DELETE http://localhost:3002/todos?id=3
```

### Testing

While this example doesn't include specific unit tests, consider using a testing framework like Jest to write unit tests for your API endpoints to ensure they behave as expected and catch potential regressions.

### Further Enhancements

- Implement authentication and authorization mechanisms for secure access control.
- Integrate with a front-end application for user interaction.
- Use a database for persistent storage of todos.
- Add validation for incoming data to ensure data integrity.
- Implement error handling to provide more informative messages in case of unexpected issues.
