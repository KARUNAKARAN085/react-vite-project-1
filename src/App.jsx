import Hello from "./Components/Hello";


// component: App
const App = () => {

const name = 'KARAN!'

  return (
    <div>
      <h1>App Component</h1>
      <Hello 
        name={name}  
      />    
    </div>
  )
}

export default App;