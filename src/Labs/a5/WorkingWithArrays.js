import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [todo, setTodo] = useState({
        id: 1, title: "Learn NodeJS", due: "2021-09-09",
        description: "Create a NodeJS server with ExpressJS and various RESTful APIs",
        completed: false,
    });
    const API = "http://localhost:4000/a5/todos";
    const [todos, setTodos] = useState([]);
    const postTodo = async () => {
    const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
    };
    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const updateTitle = async (id, title) => {
        const response = await axios.get(
          `${API}/${id}/title/${title}`);
        setTodos(response.data);
    };    
    const deleteTodo = async (todo) => {
        try {
          const response = await axios.delete(
            `${API}/${todo.id}`);
          setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
          console.log(error);
          setErrorMessage(error.response.data.message);
        }
      };    
      const updateTodo = async () => {
        try {
          const response = await axios.put(
            `${API}/${todo.id}`, todo);
          setTodos(todos.map((t) => (
            t.id === todo.id ? todo : t)));
          setTodo({});
        } catch (error) {
          console.log(error);
          setErrorMessage(error.response.data.message);
        }
      };
      const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
      };    
    useEffect(() => {
    fetchTodos();
    }, []);

    return (
      <div>
        <h2>Working with Arrays</h2>
        <input
            value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
            className="form-control mb-2"
            type="number"
        />
        <input
            value={todo.title}
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}
            className="form-control mb-2"
            type="text"
        />
        <textarea className="form-control mb-2"
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })}
        value={todo.description} type="text"
      /> <br />
      <input className="form-control mb-2"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })}
        value={todo.due} type="date"
      /> <br />
      <label>
        <input
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label><br />
      <button onClick={postTodo} className="btn btn-warning mb-2 w-100">
        Post Todo
      </button> <br />
      <button onClick={createTodo} className="btn btn-primary mb-2 w-100">
        Create Todo
        </button> <br />
      <button onClick={updateTodo} className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}


        <ul className="list-group">
            {todos.map((todo) => (
                <li key={todo.id} className="list-group-item">
                    <button
                    onClick={() => fetchTodoById(todo.id)}
                    className="btn btn-warning me-2 float-end" >
                    Edit
                    </button>
                    <button
                        onClick={() => deleteTodo(todo)}
                        className="btn btn-danger float-end ms-2">
                        Delete
                    </button>

                    <input
                        checked={todo.completed}
                        type="checkbox" readOnly
                    />
                    {todo.title}
                    <p>{todo.description}</p>
                    <p>{todo.due}</p>
                </li>
            ))}
        </ul>

        <h3>Updating an Item in an Array</h3>
        <a
            href={`${API}/${todo.id}/title/${todo.title}`}
            className="btn btn-primary me-2" >
            Update Title to {todo.title}
        </a>
        <label className="btn btn-primary me-2">
            <input
                onChange={(e) => setTodo({
                    ...todo, completed: e.target.checked })}
                value={todo.completed} type="checkbox"
            />
            Completed
        </label>
        <a
            href={`${API}/${todo.id}/description/${todo.description}`}
            className="btn btn-primary me-2" >
            Update Description to {todo.description}
        </a>
        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`}
            className="btn btn-primary me-2">
            Delete Todo with ID = {todo.id}
        </a>

        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input
            value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
            className="form-control mb-2"
            type="number"
        />
        <a href={`${API}/${todo.id}`}
            className="btn btn-primary me-2">
            Get Todo by ID
        </a>
        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`}
            className="btn btn-primary me-2" >
            Get Completed Todos
        </a>
        <h4>Creating new Items in an Array</h4>
        <button onClick={createTodo} className="btn btn-primary">
        Create Todo
        </button>

      </div>
    );
  }
  export default WorkingWithArrays;