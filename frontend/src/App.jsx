import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ProtectedRoute from './auth/ProtectedRoute'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BookList from './pages/BookList'
import BookDetail from './pages/BookDetail'

import Snowfall from 'react-snowfall'

function App() {

  return (
    <BrowserRouter>
      <Snowfall
        snowflakeCount={100}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 9999, // Ensure it's on top or behind depending on preference, usually fixed covers everything. 
          // If on top, pointerEvents should be none. React-snowfall usually handles this but let's be safe if we want clicks to pass through.
          // By default react-snowfall canvas has pointer-events: none.
        }}
      />
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/:slug' element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
