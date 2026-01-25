import { useState } from "react";
import api from "../axios_instance/axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirm_password) {
      setError("Passwords do not match");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    try {
      await api.post("/user/register/", form);
      alert("Registered successfully");
    } catch {
      setError("Registration failed");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center
      bg-linear-to-br from-indigo-50 via-white to-purple-50
      animate-gradient-shift">

      <div className={`w-full max-w-md bg-white/80 backdrop-blur-lg
        rounded-2xl shadow-xl p-8 animate-fade-slide
        ${shake ? "animate-shake" : ""}`}>

        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>

        <form onSubmit={submit} className="space-y-4">
          {["username", "email", "password", "confirm_password"].map((field) => (
            <input
              key={field}
              type={field.includes("password") ? "password" : "text"}
              name={field}
              placeholder={field.replace("_", " ")}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2
                focus:ring-purple-400 outline-none"
              required
            />
          ))}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button className="w-full py-3 rounded-lg text-white font-semibold
            bg-linear-to-r from-purple-600 to-pink-500
            hover:opacity-90 transition">
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

