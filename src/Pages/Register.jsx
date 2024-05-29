import { Link } from "react-router-dom";

const Register = () => {
    return (
      <div><br />
        <h1 className="mx-4">Register</h1><br />
        <form>
          <input className="form-control w-50 mx-4" type="text" placeholder="Name" /><br />
          <input className="form-control w-50 mx-4" type="email" placeholder="Email" /><br />
          <input className="form-control w-50 mx-4" type="password" placeholder="Password" /><br />
          <button className="btn btn-primary mx-4" type="submit">Register</button><br /><br />
          <p className="mx-2">Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    )
  }
  
  export default Register;