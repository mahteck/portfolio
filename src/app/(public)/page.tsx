"use client";

import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    {
      title: "Expense Management System",
      description: "Record your daily expenses with this user-friendly, responsive module.",
      image: "/images/expense.png",
      link: "http://203.170.78.100:1142/login.aspx",
    },
    {
      title: "MIS Services",
      description: "Create business reports with Power BI, including custom dashboards.",
      image: "/images/mis.jpg",
      link: "https://orbitrax.macpac.com.pk/",
    },
    {
      title: "Gate Management System",
      description: "Track daily in/out gate passes and monitor visitors efficiently.",
      image: "/images/gms.png",
      link: "https://ims.macpac.com.pk/",
    },
    {
      title: "Resume Builder",
      description: "The Ultimate Online CV Builder",
      image: "/images/resume-builder.png",
      link: "https://resume-builder-eta-tawny.vercel.app/home.html",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <motion.h1
        className="flex justify-center items-center text-center text-5xl font-bold text-teal-400 my-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I am SHOAIB MUNIR
      </motion.h1>

      {/* About Section with Circular Image */}
      <div className="max-w-6xl mx-auto bg-teal-800 rounded-xl shadow-lg overflow-hidden md:flex mb-12 transform transition-all duration-300 hover:scale-105">
        
        {/* Profile Image (Circular) */}
        <motion.img
          className="object-cover rounded-full w-72 h-72 mx-auto md:mx-0"
          src="/images/shoaib.png"
          alt="Profile Picture"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* About Text */}
        <div className="p-8">
          <motion.div
            className="uppercase tracking-wide text-sm text-teal-500 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About Myself
          </motion.div>
          
          <motion.a
            href="/about"
            className="block mt-4 text-lg leading-tight font-medium text-gray-300 hover:no-underline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My name is Shoaib Munir, and I have graduated in both Science and Commerce. I have over 15+ years of experience in Application Development, ERP implementation, and more. 
            <span className="text-teal-400"> Read more about me →</span>
          </motion.a>
        </div>
      </div>

      <a href="/projects" className="block text-center">
        <motion.h1
          className="text-4xl font-bold text-teal-400 hover:text-teal-300 my-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          View My Projects
        </motion.h1>
      </a>

      {/* Projects Section */}
      {/* <h2 className="text-4xl font-bold text-teal-700 text-center mt-10">My Projects</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
