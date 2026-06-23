import { Link } from "react-router-dom";
import { 
  FaPlus, 
  FaQrcode, 
  FaShareAlt, 
  FaChartLine, 
  FaShieldAlt, 
  FaMagic, 
  FaQuoteLeft, 
  FaArrowRight,
  FaCheckCircle,
  FaMousePointer
} from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-emerald-500 selection:text-white scroll-smooth overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <nav className="backdrop-blur-xl bg-[#030712]/70 border-b border-white/5 px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-gray-200 to-emerald-400 bg-clip-text text-transparent">
          Cardify.
        </h1>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link 
            to="/register" 
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold px-5 py-2.5 rounded-2xl text-sm transition-all shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.45)] hover:scale-[1.02] active:scale-98"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* 2. HERO SECTION (Spacings tightened to bring text closer to Navbar) */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
            ✨ Next-Gen Business Cards
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.05] mb-6">
            The Smart Way to Share Your <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Professional Identity.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            Create premium, interactive digital business cards in minutes. Share instantly via QR code, link, or email, and track your profile growth seamlessly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/register" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black px-8 py-4 rounded-2xl text-lg transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_10px_35px_rgba(16,185,129,0.5)] transform hover:-translate-y-1 active:translate-y-0"
            >
              <span>Create Your Card Free</span>
              <FaArrowRight className="text-sm" />
            </Link>
            <a 
              href="#features" 
              className="w-full sm:w-auto border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:border-white/20"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* 3. TRUSTED STATS SECTION */}
      <section className="border-y border-white/5 bg-white/[0.01] backdrop-blur-sm py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 rounded-2xl hover:bg-white/[0.02] transition">
            <h3 className="text-4xl font-black text-emerald-400 tracking-tight">10K+</h3>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-2">Active Users</p>
          </div>
          <div className="p-4 rounded-2xl hover:bg-white/[0.02] transition">
            <h3 className="text-4xl font-black text-white tracking-tight">50K+</h3>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-2">Cards Generated</p>
          </div>
          <div className="p-4 rounded-2xl hover:bg-white/[0.02] transition">
            <h3 className="text-4xl font-black text-white tracking-tight">1M+</h3>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-2">Total Scans</p>
          </div>
          <div className="p-4 rounded-2xl hover:bg-white/[0.02] transition">
            <h3 className="text-4xl font-black text-emerald-400 tracking-tight">99.9%</h3>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-2">Uptime SLA</p>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section className="py-24 max-w-6xl mx-auto px-6 relative">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Create Your Card in 3 Simple Steps</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto font-medium">Get ready to networking like a pro in under two minutes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Step 1 */}
          <div className="text-center relative">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center rounded-2xl text-2xl font-black mb-6 shadow-xl shadow-emerald-500/20">1</div>
            <h3 className="text-xl font-bold mb-3">Fill Your Details</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">Enter your social handles, job titles, phone numbers, and profile photo easily.</p>
          </div>
          {/* Step 2 */}
          <div className="text-center relative">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center rounded-2xl text-2xl font-black mb-6 shadow-xl shadow-blue-500/20">2</div>
            <h3 className="text-xl font-bold mb-3">Pick a Premium Theme</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">Choose a modern layout that vibes perfectly with your industry or freelance brand.</p>
          </div>
          {/* Step 3 */}
          <div className="text-center relative">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center rounded-2xl text-2xl font-black mb-6 shadow-xl shadow-purple-500/20">3</div>
            <h3 className="text-xl font-bold mb-3">Share Anywhere</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">Instantly download your custom QR code or share your live bio link with anyone.</p>
          </div>
        </div>
      </section>

      {/* 5. FEATURES SECTION */}
      <section id="features" className="py-24 max-w-6xl mx-auto px-6 border-t border-white/5">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Packed with Powerful Features</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto font-medium">Everything you need to level up your professional circle.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.03] group hover:-translate-y-1">
            <div className="p-4 bg-emerald-500/10 text-emerald-400 w-fit rounded-2xl mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-inner">
              <FaMagic className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight">Stunning Themes</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">Choose from dozens of ultra-modern glassmorphism layouts tailored to your industry.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.03] group hover:-translate-y-1">
            <div className="p-4 bg-blue-500/10 text-blue-400 w-fit rounded-2xl mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-inner">
              <FaQrcode className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight">Dynamic QR Codes</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">Download high-res QR codes for print or display. Update details without changing the QR.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.03] group hover:-translate-y-1">
            <div className="p-4 bg-purple-500/10 text-purple-400 w-fit rounded-2xl mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-inner">
              <FaChartLine className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight">Real-time Analytics</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">Track views, button clicks, and QR scans to understand how your audience interacts.</p>
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section className="py-24 max-w-5xl mx-auto px-6 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Simple, Transparent Plans</h2>
          <p className="text-gray-400 mt-4 font-medium">Start for free and upgrade as you grow.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 relative flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold mb-2">Starter Plan</h4>
              <div className="text-4xl font-black mb-6">$0 <span className="text-sm font-normal text-gray-500">/ forever</span></div>
              <ul className="space-y-4 mb-8 text-gray-400 text-sm font-medium">
                <li className="flex items-center gap-2.5"><FaCheckCircle className="text-emerald-400" /> Create 1 Active Card</li>
                <li className="flex items-center gap-2.5"><FaCheckCircle className="text-emerald-400" /> Standard QR Code</li>
                <li className="flex items-center gap-2.5"><FaCheckCircle className="text-emerald-400" /> Basic Theme Options</li>
              </ul>
            </div>
            <Link to="/register" className="w-full text-center bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl transition text-sm">Get Started</Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/30 rounded-[2.5rem] p-8 relative flex flex-col justify-between shadow-[0_15px_30px_rgba(16,185,129,0.05)]">
            <span className="absolute -top-3.5 right-6 bg-emerald-500 text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">Popular</span>
            <div>
              <h4 className="text-xl font-bold mb-2 text-emerald-400">Pro Networker</h4>
              <div className="text-4xl font-black mb-6">$4.99 <span className="text-sm font-normal text-gray-500">/ month</span></div>
              <ul className="space-y-4 mb-8 text-gray-300 text-sm font-medium">
                <li className="flex items-center gap-2.5"><FaCheckCircle className="text-emerald-400" /> Unlimited Business Cards</li>
                <li className="flex items-center gap-2.5"><FaCheckCircle className="text-emerald-400" /> Custom Background & Analytics</li>
                <li className="flex items-center gap-2.5"><FaCheckCircle className="text-emerald-400" /> Priority QR Customization</li>
                <li className="flex items-center gap-2.5"><FaCheckCircle className="text-emerald-400" /> Remove Cardify Branding</li>
              </ul>
            </div>
            <Link to="/register" className="w-full text-center bg-emerald-500 hover:bg-emerald-600 text-black font-black py-3 rounded-xl transition text-sm shadow-lg shadow-emerald-500/20">Upgrade Now</Link>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FaQuoteLeft className="text-5xl text-emerald-500/20 mx-auto mb-8" />
          <p className="text-xl md:text-3xl italic text-gray-300 leading-relaxed font-semibold tracking-tight">
            "Switching to digital cards with Cardify was the best networking choice I made. Clients love the slick QR scan, and I love that I can edit my details in seconds without wasting paper!"
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <img 
              src="https://i.pravatar.cc/150?img=33" 
              alt="User profile" 
              className="w-14 h-14 rounded-full border-2 border-emerald-400 object-cover"
            />
            <div className="text-left">
              <h4 className="font-extrabold text-white text-lg">Minuri Lakrose</h4>
              <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mt-0.5">Founder & Tech Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="py-28 max-w-4xl mx-auto px-6 text-center relative">
        <div className="absolute inset-0 bg-emerald-500/5 rounded-[3rem] blur-2xl pointer-events-none"></div>
        <div className="relative z-10 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 rounded-[3rem] p-10 md:p-20 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">Ready to upgrade <br />your network?</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 font-medium text-lg">Create your custom interactive digital business card today. Completely free to start.</p>
          <Link 
            to="/register" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black px-10 py-4 rounded-2xl text-lg transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_10px_40px_rgba(16,185,129,0.6)] hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <span>Get Started for Free</span>
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="border-t border-white/5 py-10 text-center text-sm text-gray-500 font-medium">
        <p>&copy; 2026 Cardify Generator. Built with ❤️ by Minuri. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;