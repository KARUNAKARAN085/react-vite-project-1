import { Outlet } from "react-router-dom";

const Home = () => {
    return (
      <div>
        <h1 className="mx-4 mt-3">Welcome to our Website</h1>
        <p className="mx-4 text-muted">Please register or login to access our services</p>
        
        <Outlet />
      </div>
    )
  }
  
  export default Home;