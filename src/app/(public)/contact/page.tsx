"use client";

import { useState } from "react";
<<<<<<< HEAD
=======
import emailjs from "emailjs-com";
>>>>>>> 6b1013b0fd6ee5b60fcfa390670b1cb09d0ed25f
import Navbar from "../components/Navbar";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
<<<<<<< HEAD
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
=======
  const [status, setStatus] = useState(""); // To show success or error messages

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
      to_email: "mahteckteach@gmail.com", // Your Gmail address where you want to receive the email
    };

    emailjs
      .send(
        "service_skpx1ss", // Service ID (from EmailJS)
        "template_pli75hr", // Template ID (from EmailJS)
        templateParams,
        "e42KwkE0Z12pUW3jf" // User ID (from EmailJS)
      )
      .then(
        (response) => {
          console.log("Success:", response.status, response.text);
          setStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Failed:", error);
          setStatus("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <main className="flex-grow p-8">
        <h1 className="text-5xl font-bold text-teal-400 text-center mb-10">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-800 p-10 rounded-xl shadow-lg">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 text-black rounded-lg border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-xl"
>>>>>>> 6b1013b0fd6ee5b60fcfa390670b1cb09d0ed25f
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

<<<<<<< HEAD
          <div className="mb-5">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-slate-600/60 bg-slate-900/80 p-3 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/50"
=======
          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 text-black rounded-lg border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-xl"
>>>>>>> 6b1013b0fd6ee5b60fcfa390670b1cb09d0ed25f
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

<<<<<<< HEAD
          <div className="mb-5">
            <textarea
              placeholder="Your Message"
              className="w-full rounded-xl border border-slate-600/60 bg-slate-900/80 p-3 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-500/50"
=======
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              className="w-full p-4 text-black rounded-lg border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-xl"
>>>>>>> 6b1013b0fd6ee5b60fcfa390670b1cb09d0ed25f
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
<<<<<<< HEAD
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
=======
            className="w-full bg-teal-500 text-white py-4 rounded-lg hover:bg-teal-600 transition duration-300 text-xl"
          >
            Send Message
          </button>

          {status && (
            <p className={`text-center mt-6 text-xl ${status.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
>>>>>>> 6b1013b0fd6ee5b60fcfa390670b1cb09d0ed25f
              {status}
            </p>
          )}
        </form>
      </main>
    </div>
  );
}
