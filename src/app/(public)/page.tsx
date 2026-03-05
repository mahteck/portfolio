"use client";

import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    {
      title: "Mahteck - Software Solutions",
      description:
        "Official website for Mahteck Software Solutions showcasing services, projects, and client success stories.",
      image: "/images/mahteck.png",
      link: "https://mahteck.com",
    },
    {
      title: "Expense Management System",
      description:
        "Record your daily expenses with this user-friendly, responsive module.",
      image: "/images/expense.png",
      link: "http://203.170.78.100:1142/login.aspx",
    },
    {
      title: "School Management System",
      description:
        "Modern web-based school management system for students, staff, classes, exams, and fees.",
      image: "/images/sms.png",
      link: "https://sms.mahteck.com/login",
    },
    {
      title: "MIS Services",
      description:
        "Create business reports with Power BI, including custom dashboards.",
      image: "/images/mis.jpg",
      link: "https://orbitrax.macpac.com.pk/",
    },
    {
      title: "Gate Management System",
      description:
        "Track daily in/out gate passes and monitor visitors efficiently.",
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
      description:
        "A modern online clothing store with seamless UI & secure payments.",
      image: "/images/ecommerce1.png",
      link: "https://clothing-store.example.com",
    },
    {
      title: "E-Commerce Store - furniture-ecommerce",
      description:
        "The furniture brand for the future, with timeless designs.",
      image: "/images/ecommerce2.png",
      link: "https://ecommerce-website-tan-nine.vercel.app/",
    },
    {
      title: "Mah-Tech Cheque Printer",
      description:
        "Web-based cheque printing tool with manual entry and Excel upload, supporting multiple Pakistani banks.",
      image: "/images/cheque-printing.png",
      link: "https://cheque-printing.vercel.app/",
    },
  ];

  return (
    <div className="flex flex-1 flex-col pb-10">
      <Navbar />

      {/* Hero */}
      <section className="mt-4 grid gap-10 md:mt-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
        <div>
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Application Developer · Team Lead IT
          </motion.p>

          <motion.h1
            className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-sky-400 bg-clip-text text-transparent">
              Shoaib Munir
            </span>
            .
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            15+ years of experience building business applications, ERP
            implementations, MIS dashboards, and web-based systems like School
            Management, Expense Management, and Gate Management solutions.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="https://sms.mahteck.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:brightness-110"
            >
              View School Management System
              <span className="text-base leading-none">↗</span>
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-100 shadow-md transition hover:border-teal-400/70 hover:text-teal-200"
            >
              Browse all projects
            </a>
          </motion.div>
        </div>

        {/* About card */}
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl sm:p-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)]" />
          </div>

          <div className="relative flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200">
              About Myself
            </div>

            <p className="text-sm leading-relaxed text-slate-100/95 sm:text-[15px]">
              I specialize in designing and implementing business-critical
              solutions: School Management Systems, Expense & Gate Management,
              MIS dashboards, and corporate web applications. I focus on clean
              UIs, reliable architecture, and automation that actually supports
              day-to-day operations.
            </p>

            <a
              href="/about"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-teal-300 hover:text-teal-200"
            >
              Read more about my experience
              <span className="text-base leading-none">→</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="mt-12 md:mt-16">
        <motion.h2
          className="text-center text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="mt-2 text-center text-sm text-slate-400 sm:text-[15px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          A selection of real-world systems and web applications I&apos;ve
          delivered for organizations.
        </motion.p>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

