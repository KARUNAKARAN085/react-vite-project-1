import axios from "axios";
import { useLoaderData } from "react-router-dom";

//define a loader function
export const loader = async() => {
    //make an asyn call fetch data from API
    const todos = await axios.get("https://665eb2bf1e9017dc16f0f58f.mockapi.io/todos");
    //return the data
    return todos.data;
}

const Todos = () => {
    // use the data using the useloader hook
    const todos = useLoaderData();

    console.log(todos)
  
    return (
    <>
        <h1>Todos list</h1>
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}><strong>{todo.title}</strong><br />
                    <em>{todo.description}</em></li>
                ))
            }
        </ul>
    </>
  )
}

export default Todos