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
    {
      title: "E-Commerce Store - Clothing",
      description: "A modern online clothing store with seamless UI & secure payments.",
      image: "/images/ecommerce1.png",
      link: "https://clothing-store.example.com",
    },
    {
      title: "E-Commerce Store - furniture-ecommerce",
      description: "The furniture brand for the future, with timeless designs.",
      image: "/images/ecommerce2.png",
      link: "https://ecommerce-website-tan-nine.vercel.app/",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />

      <motion.h1
        className="text-center text-5xl font-extrabold text-teal-400 my-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I am SHOAIB MUNIR
      </motion.h1>

      {/* About Section */}
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 mb-12 transform transition-all duration-300 hover:scale-105">
        <motion.img
          className="rounded-full w-40 h-40 border-4 border-teal-400"
          src="/images/shoaib.png"
          alt="Profile Picture"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <div>
          <motion.div
            className="text-lg text-teal-400 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About Myself
          </motion.div>
          <motion.p
            className="mt-4 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My name is Shoaib Munir, and I have over 15+ years of experience in Application Development, ERP implementation, and more.
            <a href="/about" className="text-teal-400"> Read more about me →</a>
          </motion.p>
        </div>
      </div>

      {/* Projects Section */}
      <motion.h2
        className="text-center text-4xl font-bold text-teal-400 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
