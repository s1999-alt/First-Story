import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import api from "../axios_instance/axios";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAuthenticated = useSelector(
    (state) => Boolean(state.auth.accessToken)
  );

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onLogout = async () => {
    try {
      await api.post("api/user/logout/");
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      dispatch(logout());
      navigate("/login", { replace: true });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/books" },
    { name: "About", path: "#" }, // Placeholder for now
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 flex items-center gap-2"
          >
            <span className="text-3xl">📚</span> First Story
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-purple-600 relative group ${location.pathname === link.path
                    ? "text-purple-600"
                    : "text-gray-700 dark:text-gray-200"
                  }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2 rounded-full font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 rounded-full font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-0.5"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                  <ShoppingBag size={20} />
                </button>
                <div className="relative group">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                    <User size={18} />
                    <span className="text-sm font-medium">Account</span>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    <button
                      onClick={onLogout}
                      className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors font-medium"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium ${location.pathname === link.path
                      ? "text-purple-600"
                      : "text-gray-700 dark:text-gray-200"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-100 dark:border-gray-800" />
              {!isAuthenticated ? (
                <div className="flex flex-col gap-3">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 text-center rounded-lg border border-gray-200 dark:border-gray-700 font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 text-center rounded-lg bg-purple-600 text-white font-medium"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <button
                  onClick={onLogout}
                  className="w-full py-3 text-center rounded-lg bg-red-50 text-red-600 font-medium"
                >
                  Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
