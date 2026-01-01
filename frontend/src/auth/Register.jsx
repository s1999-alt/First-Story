import React, { useState } from 'react'
import api from '../axios_instance/axios'

function Register() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  })

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/user/register/", formData)
      alert("Registered Successfuly. Please Login")
    } catch (error) {
      console.error(error.responce?.data)
      alert("Registration failed");
    }
  }

  return (
    <>
     <form onSubmit={submit}>
      <input
        name='username'
        placeholder='Username'
        value={formData.username}
        onChange={handleChange}
        required
      />

      <input
        name='email'
        type='email' 
        placeholder='Email'
        value={formData.email} 
        onChange={handleChange}
        required
      />

      <input
        name='password'
        type='password' 
        placeholder='Password'
        value={formData.password} 
        onChange={handleChange}
        required
      />

      <input
        name='confirm_password'
        type='password' 
        placeholder='Confirm Password'
        value={formData.confirm_password} 
        onChange={handleChange}
        required
      />
      <button type='submit'> Register </button>
     </form>
    </>
  )
}

export default Register
