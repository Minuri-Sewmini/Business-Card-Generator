import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaBriefcase, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaGlobe, FaCode } from "react-icons/fa";
import axios from "axios";

function CreateCard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Form එකේ දත්ත ලබාගැනීමට State එක
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    portfolio: "",
    skills: "" // Skills ටික මුලින්ම කමා (,) වලින් වෙන් කරපු string එකක් විදිහට ගන්නවා
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // LocalStorage එකෙන් දැනට ලොග් වෙලා ඉන්න User ගේ නම හෝ ඊමේල් එක (හෝ ID එක සේව් කරලා තියෙනවා නම් ඒක) ගන්නවා
    // සටහන: ඔයාගේ AuthResponse එකේ දැනට userId එකක් එවන්නේ නැති නිසා, අපි තාවකාලිකව userName එක userId එක විදිහට පාවිච්චි කරමු.
    const userId = localStorage.getItem("userName") || "guest_user";

    // Skills ටික string එකක ඉඳන් array (List) එකකට හරවනවා (उदा: "Java, React" -> ["Java", "React"])
    const skillsArray = formData.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "");

    const finalCardData = {
      userId: userId,
      name: formData.name,
      title: formData.title,
      phone: formData.phone,
      email: formData.email,
      linkedin: formData.linkedin,
      github: formData.github,
      portfolio: formData.portfolio,
      skills: skillsArray
    };

    try {
      // අපේ Spring Boot Backend එකේ සාදපු `@PostMapping("/api/cards")` එකට දත්ත යවනවා
      const response = await axios.post("http://localhost:8082/api/cards", finalCardData);
      
      alert(response.data); // "Business Card saved successfully!"
      navigate("/dashboard"); // සාර්ථක වුණාට පස්සේ Dashboard එකට හරවා යවනවා
    } catch (err) {
      setError("Failed to save Business Card. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-2xl backdrop-blur-xl bg-white/10 border border-white/10 rounded-[2rem] shadow-2xl p-8 md:p-10">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text">
            Create Your Digital Business Card
          </h1>
          <p className="text-sm text-indigo-200/70 mt-2">
            Enter your professional details manually to generate your public profile
          </p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/40 rounded-xl p-3 mb-6 text-center text-red-300 text-sm font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Grid Layout එකක් Inputs ලස්සනට පේන්න */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Name */}
            <div className="relative group">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 outline-none focus:border-emerald-400 transition-all"
              />
            </div>

            {/* Job Title */}
            <div className="relative group">
              <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
              <input
                type="text"
                name="title"
                placeholder="Job Title (e.g. Full Stack Developer)"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 outline-none focus:border-emerald-400 transition-all"
              />
            </div>

            {/* Phone */}
            <div className="relative group">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 outline-none focus:border-emerald-400 transition-all"
              />
            </div>

            {/* Email */}
            <div className="relative group">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 outline-none focus:border-emerald-400 transition-all"
              />
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn URL"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 outline-none focus:border-emerald-400 transition-all"
              />
            </div>

            {/* GitHub */}
            <div className="relative group">
              <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
              <input
                type="url"
                name="github"
                placeholder="GitHub URL"
                value={formData.github}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 outline-none focus:border-emerald-400 transition-all"
              />
            </div>

            {/* Portfolio */}
            <div className="relative group md:col-span-2">
              <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
              <input
                type="url"
                name="portfolio"
                placeholder="Portfolio Website URL"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 outline-none focus:border-emerald-400 transition-all"
              />
            </div>

            {/* Skills */}
            <div className="relative group md:col-span-2">
              <FaCode className="absolute left-4 top-6 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
              <textarea
                name="skills"
                placeholder="Skills (Separate with commas, e.g. Java, React, Spring Boot, Tailwind)"
                value={formData.skills}
                onChange={handleChange}
                rows="3"
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 border border-white/10 outline-none focus:border-emerald-400 transition-all resize-none"
              />
            </div>

          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="w-1/3 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold transition-all shadow-lg active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Saving Details..." : "Save Business Card"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default CreateCard;