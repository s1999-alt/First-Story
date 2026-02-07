import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                            BookStore
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Your one-stop destination for all your reading needs. We bring the best stories to your doorstep.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-400 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/books" className="text-gray-400 hover:text-white transition-colors">Books</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Categories</h4>
                        <ul className="space-y-3">
                            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Fiction</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Non-Fiction</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Science & Tech</Link></li>
                            <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Philosophy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>123 Book Street, City of Stories</li>
                            <li>+1 (555) 123-4567</li>
                            <li>support@bookstore.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} BookStore. All rights reserved.</p>
                    <p className="flex items-center gap-1 mt-2 md:mt-0">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> by You
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
