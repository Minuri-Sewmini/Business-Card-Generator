import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaSignOutAlt,
  FaQrcode,
  FaEye,
  FaUserTie,
  FaRobot, // 💡 AI අයිකන් එක එකතු කරා
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    // 1. SECURITY CHECK: යූසර් ලොග් වෙලා නැත්නම් ඩෑෂ්බෝඩ් එක පෙන්වන්නේ නැතුව ලොගින් එකට යවනවා
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    // 2. ලොග් වුණු යූසර්ගේ නම ගන්නවා
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, [navigate]);

  // LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.clear(); // ඔක්කොම ඩේටා ක්ලියර් කරනවා
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center font-sans selection:bg-green-500 selection:text-white relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1600')",
      }}
    >
      {/* Deep Gradient Overlay */}
      <div className="min-h-screen bg-gradient-to-br from-black/80 via-black/60 to-black/90 backdrop-blur-[1px]">

        {/* Navbar */}
        <nav className="backdrop-blur-xl bg-white/5 border-b border-white/10 px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight bg-gradient-to-r from-white via-gray-200 to-emerald-300 bg-clip-text text-transparent">
            Business Card Generator
          </h1>

          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-semibold px-5 py-2.5 rounded-2xl transition-all duration-300 active:scale-95 shadow-[0_4px_15px_rgba(244,63,94,0.2)] cursor-pointer"
          >
            <FaSignOutAlt className="text-sm" />
            <span>Logout</span>
          </button>
        </nav>

        <div className="max-w-7xl mx-auto p-6 md:p-10">

          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Welcome Back, <span className="text-emerald-400">{userName}</span> 👋
              </h2>
              <p className="text-gray-300/90 font-medium mt-2 text-sm md:text-base">
                Manage and share your digital business cards effortlessly.
              </p>
            </div>

            <Link
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)] active:scale-98"
            >
              <FaPlus className="text-sm" />
              <span>Create New Card</span>
            </Link>
          </div>

          {/* Stats Cards Section */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {/* Stat 1 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-6 text-white shadow-2xl transition-all duration-300 hover:border-white/20 group">
              <div className="p-3 bg-white/5 w-fit rounded-2xl mb-4 group-hover:bg-emerald-500/10 transition-colors">
                <FaUserTie className="text-3xl text-emerald-400" />
              </div>
              <h3 className="text-4xl font-black tracking-tight">12</h3>
              <p className="text-gray-400 font-medium mt-1 text-sm uppercase tracking-wider">Total Cards</p>
            </div>

            {/* Stat 2 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-6 text-white shadow-2xl transition-all duration-300 hover:border-white/20 group">
              <div className="p-3 bg-white/5 w-fit rounded-2xl mb-4 group-hover:bg-blue-500/10 transition-colors">
                <FaEye className="text-3xl text-blue-400" />
              </div>
              <h3 className="text-4xl font-black tracking-tight">547</h3>
              <p className="text-gray-400 font-medium mt-1 text-sm uppercase tracking-wider">Total Views</p>
            </div>

            {/* Stat 3 */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-6 text-white shadow-2xl transition-all duration-300 hover:border-white/20 group sm:col-span-2 md:col-span-1">
              <div className="p-3 bg-white/5 w-fit rounded-2xl mb-4 group-hover:bg-purple-500/10 transition-colors">
                <FaQrcode className="text-3xl text-purple-400" />
              </div>
              <h3 className="text-4xl font-black tracking-tight">321</h3>
              <p className="text-gray-400 font-medium mt-1 text-sm uppercase tracking-wider">QR Scans</p>
            </div>
          </div>

          {/* My Cards Grid Header */}
          <h3 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-tight">
            My Business Cards
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Premium Business Card Component */}
            <div className="backdrop-blur-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-[2.5rem] p-6 text-white shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <img
                      src="https://i.pravatar.cc/100"
                      alt="profile"
                      className="w-16 h-16 rounded-full border-2 border-emerald-400 object-cover shadow-md"
                    />
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></span>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-300">
                      Lakrose
                    </h4>
                    <p className="text-xs font-semibold text-emerald-300/90 uppercase tracking-wider mt-0.5">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <p className="text-sm font-medium text-gray-300 mb-6 bg-white/5 px-4 py-2 rounded-xl border border-white/5 w-fit">
                  📧 lakrose@gmail.com
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2.5 mt-4">
                <button className="flex-1 bg-white/10 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-sm transition-all duration-300 cursor-pointer active:scale-95 border border-white/5 hover:border-blue-400">
                  View
                </button>
                <button className="flex-1 bg-white/10 hover:bg-yellow-500 text-white font-bold py-2.5 rounded-xl text-sm transition-all duration-300 cursor-pointer active:scale-95 border border-white/5 hover:border-yellow-400">
                  Edit
                </button>
                <button className="flex-1 bg-white/10 hover:bg-red-500 text-white font-bold py-2.5 rounded-xl text-sm transition-all duration-300 cursor-pointer active:scale-95 border border-white/5 hover:border-red-400">
                  Delete
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 💡 [ADDED] FLOATING AI CHATBOT BUTTON */}
      <Link
        to="/ai-chatbot"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-black font-black px-5 py-4 rounded-full md:rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_10px_40px_rgba(16,185,129,0.6)] hover:-translate-y-1 active:translate-y-0 group"
        title="Ask Cardify AI"
      >
        <FaRobot className="text-xl md:text-lg animate-bounce group-hover:animate-none" />
        <span className="hidden md:inline text-sm">Ask Cardify AI</span>
      </Link>

    </div>
  );
}

export default Dashboard;