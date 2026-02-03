import { useEffect, useState } from "react"
import api from "../axios_instance/axios"
import { useDispatch } from "react-redux"
import { logout, setToken } from "../store/authSlice"

// This AuthProvider helps for not loggingout when refreshing the page. when we store the access token in memory.

const AuthProvider = ({children}) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const iniAuth = async () => {
      try {
        const res = await api.post('api/user/refresh/')
        dispatch(setToken(res.data.access))
      } catch (err) {
        dispatch(logout())
      } finally{
        setLoading(false)
      }
    }
    iniAuth()
  },[dispatch])

  if (loading) return <p>Checking session...</p> 

  return children
}

export default AuthProvider
