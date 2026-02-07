import { useEffect, useState } from "react";
import api from "../axios_instance/axios";
import { useParams } from "react-router-dom";


export default function BookDetail() {
    const { slug } = useParams()
    const [book, setBooks] = useState(null)

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await api.get(`api/products/books/${slug}/`)
                setBooks(res.data)
            } catch (error) {
                console.log(error.response?.data || error.message)
            }
        }
        fetchBook()
    }, [slug])

    if (!book) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        )
    }

    const getImageUrl = (imagePath) => {
        if (!imagePath) return "/placeholder.png"
        if (imagePath.startsWith("http")) return imagePath
        return `http://localhost:8000${imagePath}`
    }

    return (
        <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">
            <img
                src={getImageUrl(book.images?.[0]?.image)}
                alt={book.title}
                className="w-full rounded-lg"
            />

            <div>
                <h1 className="text-3xl font-bold">{book.title}</h1>
                <p className="text-gray-500 mt-2">{book.category}</p>

                <p className="mt-4 text-lg">{book.description}</p>

                <p className="mt-6 text-2xl font-bold text-purple-600">
                    ₹{book.price}
                </p>

                <button
                    disabled={book.stock === 0}
                    className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg disabled:opacity-50"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}