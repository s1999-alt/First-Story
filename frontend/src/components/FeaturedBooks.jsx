import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import api from "../axios_instance/axios";

const FeaturedBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch a few books for the featured section
        const fetchBooks = async () => {
            try {
                const response = await api.get("/books/");
                // Take only the first 4 books
                setBooks(response.data.slice(0, 4));
            } catch (error) {
                console.error("Error fetching featured books:", error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Curated Collection</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            Trending Now
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg">
                            Top picks from our readers this week. Dive into stories that everyone is talking about.
                        </p>
                    </motion.div>

                    <Link to="/books" className="hidden md:flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700 transition-colors text-lg group">
                        View All Books <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {books.map((book, index) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-4 transition-transform hover:-translate-y-2 duration-300"
                        >
                            <BookCard book={book} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Link to="/books" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700 transition-colors text-lg">
                        View All Books <ArrowRight size={24} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBooks;
