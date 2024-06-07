import axios from "axios";
import { useLoaderData } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import { useState } from "react";

//define a loader function
export const loader = async () => {
  //make an asyn call fetch data from API
  const todos = await axios.get("https://665eb2bf1e9017dc16f0f58f.mockapi.io/todos");
  
  //return the data
  return {todos: todos.data};
};

const Todos = () => {
  // use the data using the useloader hook
  const {todos: initialTodos} = useLoaderData();
  const [todos, setTodos] = useState(initialTodos);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleUpdateTodo = (updatedTodo) => {
    //update the todo in the state
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)))
  }

  const handleCtreateTodo = async (e) => {
    e.preventDefault();
    
    //create a new todo
    const newTodo ={
      title,
      description,
      completed
    }

  
    //api call to create new todo
    const response = await axios.post(`https://665eb2bf1e9017dc16f0f58f.mockapi.io/todos`,newTodo);
    
    if(response) {
      setTitle('');
      setDescription('');
      setCompleted(false);

      //update the state with the new todo
      response.data && setTodos([...todos, response.data])

      alert(`Todo created successfully!`)
    }
  }

  const handleDeleteTodo = async (id) => {
    //api call to delete todo
    setTodos(
      todos.filter((todo) => todo.id !== id)
    )
  }
  return (
    <div>
      <h1>Todos list</h1>
        {
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onUpdateTodo={handleUpdateTodo}
                onDeleteTodo={handleDeleteTodo}
              />
            ))
        }
        <form onSubmit={handleCtreateTodo}>
          <input 
            type="text" 
            placeholder="Enter title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Enter description"
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <select
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}
          >
            <option value={false}>Not Completed</option>
            <option value={false}>Completed</option>
          </select>
          <button type="submit">Add Todo</button>
        </form>
    </div>
  );
};

export default Todos;