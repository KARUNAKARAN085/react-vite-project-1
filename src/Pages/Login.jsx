import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div><br />
          <h1 className="mx-4">Login</h1><br />
          <form>
            <input className="form-control w-50 mx-4" type="email" placeholder="Email" /><br />
            <input className="form-control w-50 mx-4" type="password" placeholder="Password" /><br />
            <button className="btn btn-primary mx-4" type="submit">Login</button><br /><br />
            <p className="mx-2">Don't have an account? <Link to="/register">Register</Link></p>
          </form>
      </div>
    )
  }
  
  export default Login;