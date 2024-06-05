import axios from "axios";
import { useLoaderData } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import { useState } from "react";

//define a loader function
export const loader = async () => {
  //make an asyn call fetch data from API
  const todos = await axios.get(
    "https://665eb2bf1e9017dc16f0f58f.mockapi.io/todos"
  );
  //return the data
  return {todos: todos.data};
};

const Todos = () => {
  // use the data using the useloader hook
  const {todos: initialTodos} = useLoaderData();
  const [todos, setTodos] = useState(initialTodos);

  const handleUpdateTodo = (updatedTodo) => {
    //update the todo in the state
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)))
  }

  return (
    <>
      <h1>Todos list</h1>
        {
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onUpdateTodo={handleUpdateTodo}
              />
            ))
        }
    </>
  );
};

export default Todos;
