import {useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name is Required';
  }
  if (!values.email) {
    errors.email = 'Email is Required';
  }
  if (!values.password) {
    errors.password = 'Password is Required';
  }

  return errors;
}
const App = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validate,
    onSubmit: values =>{
      console.log(values);
    }
  })

  const style = {
    color: 'red',
    fontSize: '12px',
  }
  return (
    <form onSubmit={formik.handleSubmit} className='m-4'>
      <div>
        <label htmlFor="name">Name: </label>
      <input 
        type="text" 
        placeholder="Name"
        name="name"
        id="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      </div>
      <div style={style}>{formik.errors.name}</div>
      <br />
      <div>
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          placeholder="Email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div style={style}>{formik.errors.email}</div>
      <br />
      <div>
        <label htmlFor="password">Password: </label>
        <input 
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <div style={style}>{formik.errors.password}</div>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default App;