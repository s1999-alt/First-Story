import { useState } from "react";
import api from "../axios_instance/axios";
import { useDispatch } from "react-redux";
import { setToken } from "../store/authSlice";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const res = await api.post("/user/login/", form);
    dispatch(setToken(res.data.access));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center
      bg-linear-to-br from-indigo-50 via-white to-purple-50">

      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8
        animate-fade-slide">

        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={submit} className="space-y-4">
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <button className="w-full py-3 bg-purple-600 text-white rounded-lg">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          New here?{" "}
          <Link to="/register" className="text-purple-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}


