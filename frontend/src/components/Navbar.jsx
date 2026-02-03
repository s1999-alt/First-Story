import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import api from "../axios_instance/axios";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state) => Boolean(state.auth.accessToken)
  );

  const onLogout = async () => {
    try {
      await api.post("api/user/logout/");
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      dispatch(logout());
      navigate("/login", { replace: true });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900 text-white animate-fade-slide">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">

        {/* Brand */}
        <Link
          to="/"
          className="text-lg font-semibold bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 `bg-size-[length:200%_200%]` bg-clip-text text-transparent animate-gradient-shift"
        >
          First Story
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="text-sm transition hover:text-indigo-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm transition hover:text-indigo-300"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={onLogout}
              className="rounded bg-red-500 px-4 py-1.5 text-sm font-medium
                         transition hover:bg-red-600 active:animate-shake"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
