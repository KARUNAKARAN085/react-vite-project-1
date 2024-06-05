import axios from "axios"

const TodoItem = ({ todo, onUpdateTodo }) => {

    const handleCheckboxChange = async () => {
        try{
            const updatedTodo = {
                ...todo,
                completed: !todo.completed
            };
            const response = await axios.put(
                `https://665eb2bf1e9017dc16f0f58f.mockapi.io/todos/${todo.id}`,
                updatedTodo
            );

            onUpdateTodo && onUpdateTodo(response.data);
            
            }catch(error)
            {
                console.error(`Failed to update todo: ${error}`);
            }
    }

  return (
    <div className="mx-5">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={handleCheckboxChange}
      />
      <span>
        <strong>{todo.title}</strong>
        <br />
        <em>{todo.description}</em>
      </span>
    </div>
  );
};

export default TodoItem;
