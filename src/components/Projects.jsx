
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Cpu, Smartphone, Layout, Wrench } from "lucide-react";

const projects = [
  {
    title: "GreenGuardian",
    company: "AI-Powered Platform",
    description: "Software engineer for Mobile and web Application. Integrated local Qwen 8B model for offline AI functionality and 100% data privacy. Developed a RAG-based expert system for botanical advice and engineered a Computer Vision module for tree health diagnosis.",
    tech: ["Flutter", "Firebase", "Qwen 8B (Local)", "RAG", "Computer Vision"],
    github: "https://github.com/karimballoumi1",
    icon: <Cpu size={24} />,
  },
  {
    title: "Mobile Management App",
    company: "RIATICA",
    description: "FlutterFlow Developer Intern. Developed a comprehensive mobile management application, reducing development time by 40%. Integrated Firebase for real-time database management and secure user authentication.",
    tech: ["FlutterFlow", "Firebase", "UI/UX Design", "User Testing"],
    github: "https://github.com/karimballoumi1",
    icon: <Smartphone size={24} />,
  },
  {
    title: "Full Stack Web Developer",
    company: "Cloudini",
    description: "Built a full-scale e-commerce platform featuring dynamic product catalogs, shopping cart logic, and secure payment gateways. Designed a custom administrative dashboard for inventory and order management.",
    tech: ["React.js", "PHP", "MySQL", "E-commerce Architecture"],
    github: "https://github.com/karimballoumi1",
    icon: <Layout size={24} />,
  },
  {
    title: "IT Maintenance Intern",
    company: "Smart Tunisian Technoparks",
    description: "Designed and implemented a preventative maintenance calendar ensuring 99% hardware uptime. Resolved complex network issues and collaborated with multidisciplinary teams.",
    tech: ["IT Maintenance", "Network Troubleshooting", "Preventative Care"],
    github: "https://github.com/karimballoumi1",
    icon: <Wrench size={24} />,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-12"
        >
          <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase">
            03. Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Work <span className="text-blue-500">History</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 group flex flex-col"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    {project.icon}
                  </div>
                  <div className="flex gap-4 text-gray-400">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex justify-between items-center mt-1">
                        <span className="text-blue-500 text-sm font-medium">{project.company}</span>
                    </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-mono text-blue-300 bg-blue-900/20 px-3 py-1 rounded-full border border-blue-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
