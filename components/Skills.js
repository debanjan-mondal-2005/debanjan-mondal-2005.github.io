
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants.js';

const Skills: React.FC = () => {
  // Use Variants type to ensure transition properties are correctly typed for motion components
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Use Variants type to ensure easing strings like "easeOut" are recognized as Easing literals
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Technical <span className="text-blue-500">Arsenal</span></h2>
        <p className="text-slate-400 max-w-2xl text-lg">Specialized tools and methodologies I leverage to extract insights from complex data.</p>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        {SKILL_CATEGORIES.map((category) => (
          <motion.div
            key={category.name}
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-8 bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-[2rem] hover:border-blue-500/40 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
            
            <div className="mb-6 p-4 bg-slate-800/50 border border-slate-700 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
              {category.icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-slate-100">{category.name}</h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-4 py-1.5 bg-slate-800/40 border border-slate-700/50 text-slate-300 text-sm rounded-xl hover:bg-slate-700 hover:text-white hover:border-blue-500/30 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
