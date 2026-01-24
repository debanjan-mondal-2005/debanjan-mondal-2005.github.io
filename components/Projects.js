
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '../constants.js';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">ML <span className="text-purple-500">Showcase</span></h2>
          <p className="text-slate-400 text-lg">Real-world applications of machine learning algorithms and full-stack integration.</p>
        </div>
        <motion.a 
          href="https://github.com/debanjan-mondal-ai" 
          target="_blank" 
          whileHover={{ x: 5 }}
          className="text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center gap-2 group bg-blue-500/5 px-6 py-3 rounded-full border border-blue-500/10"
        >
          EXPLORE ALL CODE <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group relative"
          >
            {/* Hover Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-slate-700/50 transition-all p-10 flex flex-col h-full shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{project.subtitle}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                </div>
                <span className="text-slate-500 text-sm font-medium bg-slate-800/50 px-3 py-1 rounded-full">{project.date}</span>
              </div>
              
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                {project.highlights.map((item, i) => (
                  <div key={i} className="flex items-start text-base text-slate-300">
                    <div className="mr-3 mt-2 h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/50 uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-xl"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: '#1e293b' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-slate-800 border border-slate-700 rounded-2xl transition-all text-white"
                >
                  <Github className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
