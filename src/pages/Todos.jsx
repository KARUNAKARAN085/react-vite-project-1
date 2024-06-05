import { useLoaderData } from "react-router-dom";

//define a loader function
export const loader = async() => {
    //make an asyn call fetch data from API
    const response = await fetch('https://665eb2bf1e9017dc16f0f58f.mockapi.io/todos',
    {
        method: 'GET',
    });
    //parse the response
    const todos = await response.json();
    //return the data
    return todos;
}

const Todos = () => {
    // use the data using the useloader hook
    const todos = useLoaderData();

    console.log(todos)
  
    return (
    <div>Todos</div>
  )
}

export default Todos