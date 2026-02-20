
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Engineering Degree in Software Engineering",
    institution: "SESAME University",
    period: "2024 – Present",
    focus: "Advanced Software Architecture, System Design, and Algorithmic Optimization."
  },
  {
    degree: "Bachelor’s Degree (Licence) in Web Development & Multimedia",
    institution: "Higher Institute of Technological Studies (ISET)",
    period: "2021 – 2024",
    focus: "Full-stack web development, multimedia integration, and database management."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Text */}
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
            <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase block mb-2">
                01. About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Who I <span className="text-blue-500">Am</span>
            </h2>
            
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 shadow-xl space-y-8">
                <p className="text-gray-300 text-lg leading-relaxed text-justify">
                  With over three years of professional experience, I architect scalable digital ecosystems that bridge the gap between technical excellence and real-world impact. I approach every project with an engineering mindset, prioritizing structure, reliability, and long-term maintainability.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed text-justify">
                  I specialize in <strong>Web & Mobile Development</strong>, crafting high-performance, responsive, and cross-platform applications. My expertise spans modern frameworks like React.js, React Native, and Flutter, ensuring seamless user experiences across all devices.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed text-justify">
                  In addition, I am an expert in <strong>AI Integration & Automation</strong>. I design and implement advanced RAG pipelines, orchestrate intelligent agents with LangChain, and build complex automation workflows that transform static systems into dynamic, AI-driven solutions.
                </p>
                <p className="text-blue-400 text-lg leading-relaxed font-semibold text-justify">
                  I am currently open to opportunities where I can contribute to innovative teams and work on impactful, technology-driven projects.
                </p>
            </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
            <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase block mb-2">
                Education
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Learning <span className="text-blue-500">Journey</span>
            </h2>

            <div className="space-y-8">
                {education.map((item, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500" />
                        <div className="flex items-center gap-2 text-blue-400 text-sm mb-1">
                            <Calendar size={14} />
                            <span>{item.period}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                        <p className="text-gray-400 font-medium mb-2">{item.institution}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.focus}</p>
                    </div>
                ))}
            </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
