import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // Google Icon එක සඳහා
import { useGoogleLogin } from "@react-oauth/google"; // Google Custom Login Hook එක
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 1. සාමාන්‍ය EMAIL/PASSWORD LOGIN එක
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8082/api/auth/login", {
        email: email,
        password: password
      });

      if (response.data.success) {
        alert("Login Successful!");
        
        // LocalStorage එකේ දත්ත සහ Role එක සේව් කරගන්නවා
        localStorage.setItem("userName", response.data.userName); 
        localStorage.setItem("userRole", response.data.role); 
        localStorage.setItem("isLoggedIn", "true");
        
        // Role එක අනුව අදාළ Dashboard එකට යවනවා
        if (response.data.role === "ADMIN") {
          navigate("/admin-dashboard");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again!");
      }
    } finally {
      setLoading(false);
    }
  };

  // 2. GOOGLE SIGN-IN එක
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setLoading(true);
      setError("");
      try {
        // Google Access Token එකෙන් User ගේ තොරතුරු (Email, Name) ගන්නවා
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );

        // ඒ තොරතුරු අපේ Spring Boot Backend එකට යවනවා
        const backendResponse = await axios.post("http://localhost:8082/api/auth/google-login", {
          email: userInfo.data.email,
          name: userInfo.data.name
        });

        if (backendResponse.data.success) {
          alert("Google Sign-In Successful!");
          
          localStorage.setItem("userName", backendResponse.data.userName);
          localStorage.setItem("userRole", backendResponse.data.role);
          localStorage.setItem("isLoggedIn", "true");

          // Role එක බලා Redirect කිරීම
          if (backendResponse.data.role === "ADMIN") {
            navigate("/admin-dashboard");
          } else {
            navigate("/dashboard");
          }
        }
      } catch (err) {
        setError("Google Authentication Failed. Please try again!");
      } finally {
        setLoading(false);
      }
    },
    onError: () => setError("Google Login Failed!"),
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative font-sans selection:bg-green-500 selection:text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1600')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 w-full max-w-md mx-4 transform transition-all duration-500 hover:scale-[1.01]">
        {/* Main Glassmorphism Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] p-10 md:p-12 transition-all duration-300 hover:border-white/30">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-md bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text">
              Welcome Back
            </h1>
            <p className="text-sm text-emerald-200/80 font-medium mt-2 uppercase tracking-widest">
              Sign in to your account
            </p>
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/40 rounded-2xl p-3 mb-6">
              <p className="text-red-300 text-center text-sm font-semibold">{error}</p>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="relative group">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-400 transition-colors duration-300" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-5 py-3.5 rounded-2xl bg-white/10 text-white placeholder-gray-400 border border-white/10 outline-none transition-all duration-300 focus:bg-white/15 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20"
              />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-400 transition-colors duration-300" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-5 py-3.5 rounded-2xl bg-white/10 text-white placeholder-gray-400 border border-white/10 outline-none transition-all duration-300 focus:bg-white/15 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold text-lg transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* OR Separator Line */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-white/10"></div>
            <span className="px-3 text-xs text-gray-400 uppercase font-bold tracking-wider">Or continue with</span>
            <div className="flex-1 border-t border-white/10"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={() => handleGoogleLogin()}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-base transition-all duration-300 hover:bg-white/10 hover:border-white/25 active:scale-[0.98] disabled:opacity-50 cursor-pointer"
          >
            <FcGoogle className="text-2xl" />
            <span>Sign in with Google</span>
          </button>

          {/* Footer Link */}
          <p className="text-center text-gray-300/90 mt-8 text-sm font-medium">
            Don't have an account?{" "}
            <Link 
              to="/register" 
              className="text-emerald-300 font-semibold hover:text-emerald-200 transition-colors duration-200 underline underline-offset-4 decoration-emerald-400/40 hover:decoration-emerald-300"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;