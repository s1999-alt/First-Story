import React from 'react'
import { Link } from 'react-router-dom'


const BookCard = ({book}) => {
  return (
    <Link
     to={`/books/{book.slug}`}
     className="border rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      <img
        src={book.main_image || "/placeholder.png"}
        alt={book.title}
        className="h-48 w-full object-cover"
      />

      <div className='p-4'>
        <h2 className="font-semibold text-lg">{book.title}</h2>
        <p className="text-purple-600 font-bold mt-2">₹{book.price}</p>
      </div>

    </Link>
  )
}

export default BookCard

