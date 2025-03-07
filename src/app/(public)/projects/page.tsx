"use client";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Expense Management System",
      description: "Record your daily expenses with this user-friendly and responsive module.",
      image: "/images/expense.png",
      link: "http://203.170.78.100:1142/"
    },
    {
      title: "MIS Services",
      description: "Create business reports with Power BI, including custom dashboards.",
      image: "/images/mis.jpg",
      link: "https://orbitrax.macpac.com.pk/"
    },
    {
      title: "Gate Management System",
      description: "Track daily in/out gate passes and monitor visitors efficiently.",
      image: "/images/gms.png",
      link: "https://ims.macpac.com.pk/Default.aspx#"
    },
    {
      title: "Resume Builder",
      description: "The Ultimate Online CV Builder",
      image: "/images/resume-builder.png",
      link: "https://resume-builder-eta-tawny.vercel.app/",
    },
    {
      title: "E-Commerce Store - Clothing",
      description: "A modern online clothing store with seamless UI & secure payments.",
      image: "/images/ecommerce1.png",
      link: "https://ecommerce-website-tan-nine.vercel.app/",
    },
    {
      title: "E-Commerce Store - furniture-ecommerce",
      description: "The furniture brand for the future, with timeless designs.",
      image: "/images/ecommerce2.png",
      link: "https://avion-ecommerce-ten.vercel.app/",
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* <h1 className="flex justify-center items-center text-center text-5xl font-bold text-teal-600 mt-12 mb-8">
        My Projects
      </h1> */}

      {/* Title */}
      <motion.h1
        className="flex justify-center items-center text-teal-600 text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mb-12">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img
              className="object-cover w-full h-64 md:h-50"
              src={project.image}
              alt={project.title}
            />
            <div className="p-6">
              <div className="uppercase tracking-wide text-sm font-semibold text-teal-600">
                {project.title}
              </div>
              <p className="mt-1 text-md leading-tight text-gray-700">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
