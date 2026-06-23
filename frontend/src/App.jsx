import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import CreateCard from "./pages/CreateCard";
import AiChatbot from "./pages/AiChatbot";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/create-card" element={<CreateCard />} />

        <Route path="/ai-chatbot" element={<AiChatbot />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;