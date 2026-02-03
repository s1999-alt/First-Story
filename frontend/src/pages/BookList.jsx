import { useEffect, useState } from 'react'
import api from '../axios_instance/axios'
import BookCard from '../components/BookCard'

const BookList = () => {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    const fetchBooks = async ()=> {
      try {
        const res = await api.get("api/products/books/")
        setBooks(res.data)
      } catch (error) {
        console.log(error.response?.data || error.message)
      }
    }
    fetchBooks()
  },[])
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default BookList
