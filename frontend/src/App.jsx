import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ProtectedRoute from './auth/ProtectedRoute'
import Navbar from './components/Navbar'
import BookList from './pages/BookList'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<ProtectedRoute>  <BookList/> </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
