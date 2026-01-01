import React, { useState } from 'react'
import api from '../axios_instance/axios'

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = async (e)=>{
    e.preventDefault()
    try {
      await api.post('user/login/', formData)
    } catch (error) {
      
    }
  }

  return (
    <>
     <form onSubmit={handleLogin}>

      <input
        name='email'
        placeholder='Email'
        type='email'
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        name='password'
        placeholder='Password'
        type='password'
        value={formData.password}
        onChange={handleChange}
        required
      />

     </form>
    </>
  )
}

export default Login
