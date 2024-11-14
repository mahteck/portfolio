"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 text-black rounded-lg border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              className="w-full p-4 text-black rounded-lg border border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 text-xl"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-4 rounded-lg hover:bg-teal-600 transition duration-300 text-xl"
          >
            Send Message
          </button>

          {status && (
            <p className={`text-center mt-6 text-xl ${status.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
              {status}
            </p>
          )}
        </form>
      </main>
    </div>
  );
}
