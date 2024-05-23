const App = () => {

  const friends =[
    { id:1,name:"john",age:10},
    { id:2,name:"kaaa",age:20}
  ]

  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {
        friends.map((friend) =>
          <li key={friend.id}>{friend.name} {friend.age}</li>
        )
      }
      </ul>
    </div>
  )
}

export default App