"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />

      {/* GitHub-style About Me section */}
      <main className="mx-auto max-w-4xl space-y-10 pb-14 pt-4 sm:pt-6">
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-7 shadow-2xl backdrop-blur sm:px-8 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
              <div className="flex justify-center sm:justify-start">
                <img
                  src="/images/shoaib.png"
                  alt="Shoaib Munir"
                  className="h-28 w-28 rounded-full border-[3px] border-teal-400 object-cover shadow-xl sm:h-32 sm:w-32"
                />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
                  ✨{" "}
                  <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent">
                    Shoaib Munir
                  </span>{" "}
                  ✨
                </h1>
                <p className="mt-3 text-sm font-medium text-slate-300 sm:text-[15px]">
                  Full Stack Developer · Head of Projects &amp; Technical Sales ·
                  ERP &amp; Fleet Systems Expert
                </p>
                <p className="mt-3 text-sm font-semibold tracking-[0.18em] text-teal-300">
                  Next.js &nbsp;|&nbsp; React &nbsp;|&nbsp; .NET &nbsp;|&nbsp;Python &nbsp;|&nbsp; .NetCore
                </p>
              </div>
            </div>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-600/70 to-transparent" />

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200">
              <div className="flex items-center gap-2 text-base font-semibold text-teal-200">
                <span className="text-xl">💻</span>
                <span>About Me</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-200/95">
                <li>
                  Full Stack Developer working on ERP systems, Fleet Tracking
                  Platforms, MDVR Dashboards, and School Management Systems.
                </li>
                <li>
                  Serving as Head of Projects &amp; Technical Sales (ERPNext,
                  Odoo, Custom Enterprise Platforms).
                </li>
                <li>
                  Expert in React, Next.js, ASP.NET Core, SQL Server,
                  PostgreSQL, Grafana, and API integrations.
                </li>
                <li>
                  Specialized in Vehicle Tracking, Temperature Monitoring, MDVR
                  Video Retrieval, and Telemetry Reporting.
                </li>
                <li>
                  Skilled in Cloudflare Tunnels, IIS Deployment, pfSense
                  Firewalls, Docker, and Windows Servers.
                </li>
                <li>
                  Passionate about building real-time dashboards, enterprise
                  applications, and secure infrastructure.
                </li>
                <li>
                  Exploring AI SDKs, Automation, Agents, and AI-powered
                  documentation systems.
                </li>
                <li>
                  Known for creating step-by-step debugging, deployment, and
                  optimization guides for engineering teams.
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Tech Stack badges */}
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 px-6 py-7 shadow-xl backdrop-blur sm:px-8 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <div className="flex items-center gap-2 text-base font-semibold text-slate-50">
              <span className="text-xl">💻</span>
              <span>Tech Stack</span>
            </div>
            <p className="mt-2 text-xs text-slate-400 sm:text-[13px]">
              A snapshot of the tools and platforms I work with day-to-day.
            </p>

            <div className="mt-5 grid gap-3 text-[11px] sm:text-xs md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Frontend
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-yellow-500/90 px-3 py-1 font-semibold text-slate-950">
                    JavaScript
                  </span>
                  <span className="rounded-full bg-sky-500/90 px-3 py-1 font-semibold text-slate-950">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-cyan-500/90 px-3 py-1 font-semibold text-slate-950">
                    React
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 font-semibold text-slate-100">
                    Next.js
                  </span>
                  <span className="rounded-full bg-emerald-500/90 px-3 py-1 font-semibold text-slate-950">
                    Tailwind CSS
                  </span>
                  <span className="rounded-full bg-indigo-600/90 px-3 py-1 font-semibold text-slate-50">
                    Bootstrap
                  </span>
                  <span className="rounded-full bg-orange-500/90 px-3 py-1 font-semibold text-slate-950">
                    HTML5
                  </span>
                  <span className="rounded-full bg-blue-500/90 px-3 py-1 font-semibold text-slate-950">
                    CSS3
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Backend &amp; Databases
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-600/90 px-3 py-1 font-semibold text-slate-50">
                    Node.js
                  </span>
                  <span className="rounded-full bg-purple-600/90 px-3 py-1 font-semibold text-slate-50">
                    C#
                  </span>
                  <span className="rounded-full bg-violet-700/90 px-3 py-1 font-semibold text-slate-50">
                    .NET / .NET Core
                  </span>
                  <span className="rounded-full bg-red-600/90 px-3 py-1 font-semibold text-slate-50">
                    SQL Server
                  </span>
                  <span className="rounded-full bg-sky-600/90 px-3 py-1 font-semibold text-slate-50">
                    PostgreSQL
                  </span>
                  <span className="rounded-full bg-emerald-600/90 px-3 py-1 font-semibold text-slate-50">
                    MongoDB
                  </span>
                  <span className="rounded-full bg-amber-500/90 px-3 py-1 font-semibold text-slate-950">
                    REST APIs
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  DevOps &amp; Infrastructure
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-sky-500/90 px-3 py-1 font-semibold text-slate-950">
                    Docker
                  </span>
                  <span className="rounded-full bg-orange-500/90 px-3 py-1 font-semibold text-slate-950">
                    Cloudflare
                  </span>
                  <span className="rounded-full bg-slate-700 px-3 py-1 font-semibold text-slate-100">
                    pfSense
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 font-semibold text-slate-100">
                    Firewalls
                  </span>
                  <span className="rounded-full bg-blue-700/90 px-3 py-1 font-semibold text-slate-50">
                    Windows Server
                  </span>
                  <span className="rounded-full bg-amber-600/90 px-3 py-1 font-semibold text-slate-950">
                    Grafana / Dashboards
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Design &amp; Collaboration
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-pink-500/90 px-3 py-1 font-semibold text-slate-950">
                    Figma
                  </span>
                  <span className="rounded-full bg-slate-700 px-3 py-1 font-semibold text-slate-100">
                    Documentation
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 font-semibold text-slate-100">
                    Playbooks &amp; Guides
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Existing detailed career/education sections */}
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 px-6 py-7 shadow-xl backdrop-blur sm:px-8 sm:py-8">
          {/* Name & Career Summary */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-teal-300">
              Career Summary
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200/90">
              <li>
                15+ years of experience in Application Development and ERP
                implementation.
              </li>
              <li>
                Software programmer with a history of productivity and
                successful project outcomes.
              </li>
              <li>
                Enhanced existing business systems using efficient business
                applications.
              </li>
              <li>
                Exploration of new techniques and methodologies in Business
                Software Development.
              </li>
            </ul>
          </motion.div>

          {/* Technical Profile */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <h2 className="text-2xl font-bold text-teal-300">
              Technical Profile
            </h2>
            <p className="mt-3 text-sm text-slate-200/90">
              Projects: Business Reports - Power BI, School Management System,
              Gate Management System, Expense Management System, Web APIs
              (MVC), Corporate and eCommerce Websites.
            </p>
            <p className="mt-2 text-sm text-slate-200/90">
              Languages &amp; frameworks: VB6, VB.NET, Flutter, ASP.NET, MVC,
              HTML, CSS, TypeScript, Next.js.
            </p>
          </motion.div>

          {/* Field Experience */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-teal-300">
              Field Experience
            </h2>
            <p className="mt-3 text-sm text-slate-200/90">
            Company: Megatech Trackers (June 2025 – Present)
            </p>
            <p className="mt-1 text-sm text-slate-200/90">
            Company: Bays International as Team Lead IT (Jan 2021 – June 2025)
            </p>
            <p className="mt-1 text-sm text-slate-200/90">
              Company: Macpac Films Ltd as AM MIS (Nov 2019 – Jan 2021)
            </p>
            <p className="mt-1 text-sm text-slate-200/90">
              Company: Bays International as AM MIS (Sept 2018 – Oct 2019)
            </p>
            <p className="mt-1 text-sm text-slate-200/90">
              Company: Efrotech Services as Software Engineer (Mar 2009 – Aug
              2018)
            </p>
          </motion.div>

          {/* Education Profile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="text-2xl font-bold text-teal-300">
              Education Profile
            </h2>
            <p className="mt-3 text-sm text-slate-200/90">
              Bachelor of Commerce - Govt. Jinnah College (2019)
            </p>
            <p className="mt-1 text-sm text-slate-200/90">
              Intermediate in Commerce - Govt. Jinnah College (2007)
            </p>
            <p className="mt-1 text-sm text-slate-200/90">
              Matric - National English Grammar School (2005)
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
