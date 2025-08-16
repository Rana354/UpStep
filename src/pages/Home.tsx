import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Camera,
  Brain,
  FileText,
  Search,
  Users,
  MessageSquare,
  Calendar,
  HelpCircle,
  BookOpen,
  Star,
  RotateCcw,
  MessageSquare as Forum,
  UserCheck,
  GraduationCap,
  PenTool,
  Mic,
  Globe,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Zap,
  Play,
} from "lucide-react";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-600 to-emerald-900 text-white">
      {/* Navbar */}
      <nav className="w-full p-6 flex justify-between items-center bg-emerald-700 shadow-lg">
        <Link to="/" className="text-3xl font-extrabold tracking-tight">
          SmartClass
        </Link>
        <div className="hidden md:flex space-x-6 font-semibold">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/features" className="hover:text-gray-200 transition">
            Features
          </Link>
          <Link to="/about" className="hover:text-gray-200 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-200 transition">
            Contact
          </Link>
        </div>
        <Link
          to="/login"
          className="bg-white text-emerald-700 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Login
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to{" "}
          <span className="text-yellow-400">SmartClass</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Your AI-powered learning companion: Notes, Smart Groups, Assignments,
          Tests, and More — All in One Place.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link
            to="/signup"
            className="group bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            <span>Start Learning Free</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/dashboard"
            className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center space-x-3"
          >
            <Play className="h-6 w-6" />
            <span>View Dashboard</span>
          </Link>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6 bg-emerald-800">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Features that make learning <span className="text-yellow-400">Smarter</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: FileText, title: "Smart Notes", desc: "Generate and organize notes per subject with AI assistance." },
            { icon: Brain, title: "AI Tutor", desc: "Get instant answers and explanations from your personal AI mentor." },
            { icon: Forum, title: "Smart Groups", desc: "Chat with classmates, collaborate, and study together effectively." },
            { icon: Calendar, title: "Assignments & Tests", desc: "Manage, submit, and track assignments and exams seamlessly." },
            { icon: BookOpen, title: "E-Books & Resources", desc: "Access curated study materials, past papers, and e-books." },
            { icon: Users, title: "Peer Learning", desc: "Connect with peers and enhance learning through collaboration." },
            { icon: Camera, title: "Doubt Scanner", desc: "Scan handwritten questions and get instant AI-powered solutions." },
            { icon: HelpCircle, title: "Q&A Forum", desc: "Ask questions, share knowledge, and solve doubts together." },
            { icon: PenTool, title: "AI-Powered Writing", desc: "Generate essays, assignments, and reports with AI assistance." },
            { icon: Mic, title: "Voice Learning", desc: "Use voice notes and speech-to-text for quick learning." },
            { icon: Globe, title: "Global Connect", desc: "Join study groups across the world and share knowledge." },
            { icon: RotateCcw, title: "Revision Mode", desc: "Summarize key topics quickly before exams." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-emerald-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-200">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-emerald-900 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} SmartClass. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Home;
