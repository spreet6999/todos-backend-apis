const express = require("express");
const app = express();
const todosJSON = require("./assets/data/todos.json");
const bodyParser = require("body-parser");
const fs = require("fs/promises");
const port = 3002;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json(todosJSON);
});

app.get("/todos", (req, res) => {
  const { id } = req.query;
  if (id) {
    const todo = todosJSON.find((todo) => todo.id == id);
    if (!todo) {
      res.status(404).json({
        statusMessage: `Todo with id:${id} not found!`,
      });
      return;
    }
    res.status(200).json(todo);
  }
  res.json(todosJSON);
});

app.post("/todos", (req, res) => {
  const { id, title } = req.body;
  todosJSON.push(req.body);

  //* Reading and writing data to file in todos json
  fs.writeFile(
    "./assets/data/todos.json",
    JSON.stringify(todosJSON),
    (error) => {
      if (error) {
        console.log("An error has occurred ", error);
        res.status(500).json({
          statusMessage: `Something went wrong while updating!`,
        });
        return;
      }
      console.log("Data written successfully to todos json");
    }
  );
  res.status(200).json({
    statusMessage: `Todo with id:${id} title:${title} added successfully!`,
  });
});

app.put("/todos", (req, res) => {
  const { id } = req.query;
  const { title, completed } = req.body;
  const updatedTodo = todosJSON.find((todo) => todo.id == id);
  updatedTodo.title = title;
  updatedTodo.completed = completed;

  //* Reading and writing data to file in todos json
  fs.writeFile(
    "./assets/data/todos.json",
    JSON.stringify(
      todosJSON.map((todo) => (todo.id == id ? updatedTodo : todo))
    ),
    (error) => {
      if (error) {
        console.log("An error has occurred ", error);
        res.status(500).json({
          statusMessage: `Something went wrong while updating!`,
        });
        return;
      }
      console.log("Data written successfully to todos json");
    }
  );
  res.status(200).json({
    statusMessage: `Todo with id:${id} updated successfully!`,
  });
});

app.delete("/todos", (req, res) => {
  const { id } = req.query;
  todosJSON.splice(
    todosJSON.findIndex((todo) => todo.id == id),
    1
  );

  fs.writeFile(
    "./assets/data/todos.json",
    JSON.stringify(todosJSON),
    (error) => {
      if (error) {
        console.log("An error has occurred ", error);
        res.status(500).json({
          statusMessage: `Something went wrong while updating!`,
        });
        return;
      }
      console.log("Data written successfully to todos json");
    }
  );

  res.status(200).json({
    statusMessage: `Todo with id:${id} deleted successfully!`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
