
import React from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Database, 
  Brain, 
  Smartphone,
  Globe,
  Languages
} from "lucide-react";

const skillsData = [
  {
    category: "Languages & Frameworks",
    icon: <Terminal className="w-6 h-6 text-blue-400" />,
    items: ["PHP", "Python", "JavaScript", "TypeScript", "C/C++", "Java", "Django"]
  },
  {
    category: "Web & Mobile",
    icon: <Globe className="w-6 h-6 text-green-400" />,
    items: ["React.js", "React Native", "Flutter", "FlutterFlow", "HTML5", "CSS3"]
  },
  {
    category: "AI & Automation",
    icon: <Brain className="w-6 h-6 text-red-400" />,
    items: ["RAG", "LangChain", "LangGraph", "n8n Automation", "Local LLM", "Computer Vision"]
  },
  {
    category: "Database & Backend",
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    items: ["MySQL", "SQL", "Firebase", "Node.js", "Express", "Microservices"]
  },
  {
    category: "Communication",
    icon: <Languages className="w-6 h-6 text-purple-400" />,
    items: ["French (Native - C2)", "English (Professional - B2)"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase">
            02. Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Professional <span className="text-blue-500">Toolkit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-xl hover:border-blue-500/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-slate-800 text-gray-300 text-xs font-medium rounded-full border border-slate-700 hover:border-blue-500 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
