"use client";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
<<<<<<< HEAD
      title: "Mahteck - Software Solutions",
      description:
        "Official Mahteck company website featuring services, portfolio projects, and client testimonials.",
      image: "/images/mahteck.png",
      link: "https://mahteck.com",
    },
    {
=======
>>>>>>> 6b1013b0fd6ee5b60fcfa390670b1cb09d0ed25f
      title: "Expense Management System",
      description: "Record your daily expenses with this user-friendly and responsive module.",
      image: "/images/expense.png",
      link: "http://203.170.78.100:1142/"
    },
    {
<<<<<<< HEAD
      title: "School Management System",
      description: "Web-based SMS for schools to manage students, classes, exams, and fees.",
      image: "/images/sms.png",
      link: "https://sms.mahteck.com/login"
    },
    {
=======
>>>>>>> 6b1013b0fd6ee5b60fcfa390670b1cb09d0ed25f
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
<<<<<<< HEAD
    },
    {
      title: "Mah-Tech Cheque Printer",
      description:
        "Cheque printing web app for Pakistani banks with Excel upload, PDF preview, and direct print.",
      image: "/images/cheque-printing.png",
      link: "https://cheque-printing.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl pb-14 pt-4 sm:pt-6">
        {/* Title */}
        <motion.h1
          className="text-center text-3xl font-bold text-teal-300 sm:text-4xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="mt-2 text-center text-sm text-slate-300 sm:text-[15px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          A collection of real-world applications including ERP modules, school
          management, dashboards, and ecommerce solutions.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-xl backdrop-blur"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-sky-500/10 to-emerald-500/10" />
              </div>
              <div className="relative flex flex-col gap-4 p-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 via-emerald-400 to-sky-500 text-sm font-bold text-slate-950 shadow-md">
                    {project.title.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-300/80">
                      Live Project
                    </div>
                    <div className="text-base font-semibold text-slate-50">
                      {project.title}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-300/90">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </main>
=======
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
>>>>>>> 6b1013b0fd6ee5b60fcfa390670b1cb09d0ed25f
    </div>
  );
}
