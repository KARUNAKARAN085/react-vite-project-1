// component: Hello
const Hello = () => {
  return <h1>Hello, world!-Hello</h1>
}


// component: App
const App = () => {
  return (
    <div>
      <h1>INDEX-App</h1>
      <Hello />    
      <Hello />
      <Hello />
    </div>
  )
}


export default App;