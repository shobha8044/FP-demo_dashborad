import React from 'react'
import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function Edit() {
  const [values, setValues] = useState({
    email: "",
    password: "",
   
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
    router.post('/login', values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={values.email} onChange={handleChange} /><br/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={values.password} onChange={handleChange} /> <br/>
      <button type="submit">Login</button>
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