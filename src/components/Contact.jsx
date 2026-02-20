
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/karimballoumi87@gmail.com", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message - ${formData.name}`
        })
      });

      const data = await response.json();

      if (response.ok && data.success === "true") {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Background Decorative Elem */}
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase">
            04. Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=karimballoumi87@gmail.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50"
            >
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">karimballoumi87@gmail.com</p>
              </div>
            </a>
             <a href="https://www.linkedin.com/in/karim-balloumi-1b88913b1" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50">
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                <Linkedin size={24} />
              </div>
               <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="font-medium">Karim Balloumi</p>
              </div>
            </a>
             <a href="https://github.com/karimballoumi1" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50">
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                <Github size={24} />
              </div>
               <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <p className="font-medium">karimballoumi1</p>
              </div>
            </a>
            <div className="flex items-center gap-4 text-gray-300 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">+216 27 421 209</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-xl"
        >
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CheckCircle size={64} className="text-green-500 mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setStatus("")}
                className="mt-6 text-blue-400 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-gray-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-gray-500"
                  placeholder="Hello, I'd like to talk about..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status === "sending"}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-lg shadow-blue-600/20 ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {status === "sending" ? "Sending..." : "Send Message"} <Send size={18} />
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm mt-2 text-center">Something went wrong. Please try again or email me directly.</p>
              )}
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
