"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Title */}
      <motion.h1
        className="flex justify-center items-center text-teal-600 text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      {/* Card with animated sections */}
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        
        {/* Name & Career Summary */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            {/* <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">My Name is Shoaib Munir</div> */}
            {/* <br /> */}
            <h2 className="text-teal-600 text-2xl font-bold mb-4">Career Summary</h2>
            <ul className="mt-2 text-slate-500 list-disc pl-5">
              <li>15+ years of experience in Application Development and ERP implementation.</li>
              <li>Software programmer with a history of productivity and successful project outcomes.</li>
              <li>Enhanced existing business systems using efficient business applications.</li>
              <li>Exploration of new techniques and methodologies in Business Software Development.</li>
            </ul>
          </div>
        </motion.div>

        {/* Technical Profile */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-teal-600 text-2xl font-bold mb-4">Technical Profile</h2>
          <p className="mt-2 text-slate-500">Projects: Business Reports - Power BI, School Management System, Gate Management System, Expense Management System, Web APIs (MVC), Corporate and eCommerce Websites.</p>
          <p className="mt-2 text-slate-500">Languages: VB6, VB.NET, Flutter, ASP.NET, MVC, HTML, CSS, TypeScript, Next.js</p>
        </motion.div>

        {/* Field Experience */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-teal-600 text-2xl font-bold mb-4">Field Experience</h2>
          <p className="mt-2 text-slate-500">Company: Bays International as Team Lead IT (Jan 2021 – Present)</p>
          <p className="mt-2 text-slate-500">Company: Macpac Films Ltd as AM MIS (Nov 2019 – Jan 2021)</p>
          <p className="mt-2 text-slate-500">Company: Bays International as AM MIS (Sept 2018 – Oct 2019)</p>
          <p className="mt-2 text-slate-500">Company: Efrotech Services as Software Engineer (Mar 2009 – Aug 2018)</p>
        </motion.div>

        {/* Education Profile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-teal-600 text-2xl font-bold mb-4">Education Profile</h2>
          <p className="mt-2 text-slate-500">Bachelor of Commerce - Govt. Jinnah College (2019)</p>
          <p className="mt-2 text-slate-500">Intermediate in Commerce - Govt. Jinnah College (2007)</p>
          <p className="mt-2 text-slate-500">Matric - National English Grammar School (2005)</p>
        </motion.div>

      </div>
    </div>
  );
}
