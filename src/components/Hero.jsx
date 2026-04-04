
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Download, ArrowRight } from "lucide-react";
import profilePic from "../assets/image/photoprofile.png";
import cvFile from "../assets/document/Balloumi Karim cv.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-400 font-semibold tracking-wider text-sm">
            HEY, I'M
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 leading-tight">
            Karim <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Balloumi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
            Software Engineer & AI Solutions Architect
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg text-justify">
            With over three years of experience, I architect scalable digital ecosystems that bridge technical excellence with real-world impact. I specialize in high-performance <span className="text-white font-semibold">Web & Mobile development</span> and advanced <span className="text-white font-semibold">AI integration</span>—from RAG pipelines to intelligent automation—to solve complex modern challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-blue-600/30"
            >
              View Projects <ArrowRight size={20} />
            </Link>
            <a
              href={cvFile}
              download="Balloumi_Karim_CV.pdf"
              className="px-8 py-3 border border-slate-700 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              Download CV <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          {/* Profile Image Area */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl shadow-purple-500/30">
            <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                 src={profilePic}
                 alt="Karim Balloumi"
                 className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-2xl -z-10 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
