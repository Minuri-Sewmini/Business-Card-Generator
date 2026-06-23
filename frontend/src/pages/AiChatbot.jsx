import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaRobot, FaPaperPlane, FaArrowRight, FaArrowLeft, FaBriefcase, FaPhone, FaEnvelope, FaCogs, FaUser } from "react-icons/fa";
import axios from "axios";

function AiChatbot() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [extractedData, setExtractedData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSend = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setError("");
    setExtractedData(null);

    try {
      // Backend AI Endpoint එකට Request එක යවනවා
      const response = await axios.post("http://localhost:8082/api/ai/chat", { message });
      
      let data = response.data;
      
      // ලැබෙන Response එක String එකක් නම් JSON Object එකක් කරගන්නවා
      if (typeof data === "string") {
        data = JSON.parse(data);
      }

      setExtractedData(data);
    } catch (err) {
      console.error(err);
      setError("AI could not extract data. Please try again or type more details!");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCard = async () => {
    const userId = localStorage.getItem("userName") || "guest_user";
    
    const finalCardData = {
      userId: userId,
      ...extractedData
    };

    try {
      const response = await axios.post("http://localhost:8082/api/cards", finalCardData);
      alert(response.data);
      navigate("/dashboard");
    } catch (err) {
      alert("Failed to save card data.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030712] via-[#0b1329] to-[#030712] flex flex-col items-center justify-center p-6 font-sans relative overflow-x-hidden">
      
      {/* Ambient Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* BACK TO DASHBOARD BUTTON */}
      <div className="w-full max-w-2xl mb-4 flex justify-start relative z-10">
        <Link 
          to="/dashboard" 
          className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors bg-white/5 border border-white/5 px-4 py-2 rounded-xl backdrop-blur-md"
        >
          <FaArrowLeft className="text-xs" /> Back to Dashboard
        </Link>
      </div>

      <div className="w-full max-w-2xl backdrop-blur-2xl bg-white/[0.02] border border-white/10 rounded-[2.5rem] shadow-2xl p-6 md:p-10 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex p-4 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-full text-purple-400 text-4xl mb-4 shadow-inner animate-pulse">
            <FaRobot />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Create Card with <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Cardify AI</span>
          </h1>
          <p className="text-sm text-gray-400 mt-2 font-medium">
            Just describe yourself naturally. AI will extract your professional details instantly!
          </p>
        </div>

        {/* Chat Input Form */}
        <form onSubmit={handleSend} className="space-y-4">
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Example: I am Minuri Sewmini. I'm a Full Stack Developer. Contact me at minuri@gmail.com or 0771234567. My skills are React, Spring Boot, and MongoDB..."
              rows="4"
              className="w-full p-5 rounded-2xl bg-white/[0.03] text-white placeholder-gray-500 border border-white/5 outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all resize-none text-base font-medium shadow-inner leading-relaxed"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-black flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-[0_4px_20px_rgba(147,51,234,0.25)] hover:shadow-[0_4px_25px_rgba(147,51,234,0.45)] hover:scale-[1.01] active:scale-98"
          >
            {loading ? (
              <span className="flex items-center gap-2 animate-pulse">AI is magical thinking...</span>
            ) : (
              <><FaPaperPlane className="text-sm" /> <span>Analyze with AI</span></>
            )}
          </button>
        </form>

        {error && <p className="text-red-400 text-center text-sm mt-4 font-semibold bg-red-500/10 border border-red-500/20 py-2 rounded-xl">{error}</p>}

        {/* EXTRACTED DATA PREVIEW CARD */}
        {extractedData && (
          <div className="mt-8 space-y-6 animate-fadeIn">
            <h3 className="text-sm font-bold uppercase tracking-widest text-purple-400 text-center">✨ AI Generated Live Preview</h3>
            
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/[0.04] to-purple-500/[0.05] border border-white/20 rounded-[2rem] p-6 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-md">
                    <FaUser />
                  </div>
                  <div>
                    <h4 className="font-black text-2xl tracking-tight text-white">{extractedData.name || "Your Name"}</h4>
                    <p className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
                      <FaBriefcase className="text-xs" /> {extractedData.title || "Profession / Title"}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-black px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full uppercase tracking-wider border border-purple-500/30">AI Verified</span>
              </div>

              <div className="space-y-3 text-sm text-gray-300 font-medium">
                <p className="flex items-center gap-2.5 bg-white/5 px-3 py-2 rounded-xl border border-white/5 w-fit">
                  <FaEnvelope className="text-purple-400 text-xs" /> {extractedData.email || "Not provided"}
                </p>
                <p className="flex items-center gap-2.5 bg-white/5 px-3 py-2 rounded-xl border border-white/5 w-fit">
                  <FaPhone className="text-purple-400 text-xs" /> {extractedData.phone || "Not provided"}
                </p>
                
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1 mb-2">
                    <FaCogs className="text-xs" /> Skills Matrix
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {Array.isArray(extractedData.skills) && extractedData.skills.length > 0 ? (
                      extractedData.skills.map((skill, index) => (
                        <span key={index} className="text-xs bg-white/10 border border-white/10 px-2.5 py-1 rounded-lg text-gray-200 font-semibold">
                          {skill}
                        </span>
                      ))
                    ) : extractedData.skills ? (
                      <span className="text-xs bg-white/10 border border-white/10 px-2.5 py-1 rounded-lg text-gray-200 font-semibold">{extractedData.skills}</span>
                    ) : (
                      <span className="text-xs text-gray-500 italic">No skills extracted</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm and Save Button */}
            <button
              onClick={handleSaveCard}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.4)] hover:scale-[1.01]"
            >
              <span>Confirm & Save Business Card</span> <FaArrowRight className="text-xs" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default AiChatbot;