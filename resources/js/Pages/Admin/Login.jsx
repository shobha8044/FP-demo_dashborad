import React, { useState } from 'react';
import { router } from '@inertiajs/react' // We need to import this router for making POST request with our form

export default function Create() {
    const [values, setValues] = useState({ // Form fields
        email: "",
        password: ""
    });

    // We will use function below to get
    // values from form inputs
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    // This function will send our form data to
    // store function of PostContoller
    function handleSubmit(e) {
        e.preventDefault()
        router.post('/admin/login/check' ,values)
    }

    return (
        <>
            <h1>Login From</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                {/* Pay attention how we create here input fields */}
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={values.email} onChange={handleChange} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={values.password} onChange={handleChange} />
                <button type="submit">login</button> 
            </form>
        </>
    )
}