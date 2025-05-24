
"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Input change handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.submit();
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* Background SVG Animation */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff20"
            fillOpacity="1"
            d="M0,64L60,90.7C120,117,240,171,360,192C480,213,600,203,720,186.7C840,171,960,149,1080,133.3C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Map & Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.124950200284!2d67.15436798635285!3d24.825400223775393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33a58ba4a19e5%3A0x6c446501c752e9f!2sKorangi%20Zoo!5e0!3m2!1sen!2s!4v1732951420341!5m2!1sen!2s"
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            style={{ filter: "contrast(1.2) opacity(0.5)" }}
          ></iframe>

          <div className="relative bg-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-xl w-11/12 mx-auto mt-8 text-white z-10">
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-yellow-300">
              📍 Contact Info
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">Address:</p>
                <p>Korangi Zoo, Karachi</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <a href="mailto:aayanu52@gmail.com" className="text-cyan-200 hover:underline">
                  aayanu52@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p>0343-XXXXXXX</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl ring-4 ring-yellow-300"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-[#f97316]">📬 Get in Touch</h2>
          <form action="https://formspree.io/f/xbljqyky" method="POST" onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-[#1a2a6c]">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#f97316] focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-[#1a2a6c]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#f97316] focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-[#1a2a6c]">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#f97316] focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-[#1a2a6c]">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#f97316] focus:outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#f97316] via-[#f59e0b] to-[#eab308] hover:brightness-110 text-white py-3 rounded-xl text-lg transition"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-600 text-center font-semibold mt-3">
                ✅ Message sent! Thank you.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
