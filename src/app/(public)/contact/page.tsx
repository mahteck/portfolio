"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />

      <main className="mx-auto flex max-w-4xl flex-col gap-8 pb-14 pt-4 sm:pt-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-teal-300 sm:text-4xl">
            Contact Me
          </h1>
          <p className="mt-2 text-sm text-slate-300 sm:text-[15px]">
            Share your project idea, collaboration request, or any question
            below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl backdrop-blur sm:p-8"
        >
          <div className="mb-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-600/60 bg-slate-900/80 p-3 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/50"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-slate-600/60 bg-slate-900/80 p-3 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <textarea
              placeholder="Your Message"
              className="w-full rounded-xl border border-slate-600/60 bg-slate-900/80 p-3 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/50"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`mt-4 text-center text-sm ${
                status.includes("successfully")
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </main>
    </div>
  );
}
