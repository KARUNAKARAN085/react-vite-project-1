function App() {

  const islogedin = true;

  //normal way
  // if(islogedin){
  //   return <h1>Welcome Back</h1>
  // }else{
  //   return <h1>Please login!</h1>
  // }


  // easy way
  return (
    <div>
      {
        islogedin ? <h1>Welcome Back!</h1> : <h1>Please login!</h1>
      }
    </div>
  )


  // && way
  // return (
  //   <div>
  //     {islogedin && <h1>Welcome Back!</h1>}
  //     {!islogedin && <h1>Please login!</h1>}
  //   </div>
  // )
}

export default App