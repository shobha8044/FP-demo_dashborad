import React from 'react'
import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
   
  })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/register', values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" value={values.name} onChange={handleChange} /> <br/>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={values.email} onChange={handleChange} /><br/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={values.password} onChange={handleChange} /> <br/>
      <label htmlFor="confirm_password">Confirm Password:</label>
      <input  type="password" id="confirm_password" value={values.confirm_password} onChange={handleChange} /> <br/>
      <button type="submit">Submit</button>
    </form>
  )
}

// const Register = () => {
//     return (
//         <div>
//                <h1>User Register From</h1>
//         </div>
       
//     )
// }

// export default Register