import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiCpu, FiLayout, FiDatabase, FiSettings } from 'react-icons/fi';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import {
  SiPython, SiCplusplus, SiC, SiMysql, SiScikitlearn,
  SiPandas, SiNumpy, SiTensorflow, SiOpencv, SiPytorch,
  SiReact, SiFlask, SiHtml5, SiJavascript,
  SiMongodb, SiGit, SiGithub, SiDocker, SiJupyter
} from 'react-icons/si';
import { skillsDashboard } from '../data/portfolioData';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Programming Languages':
      return FiCode;
    case 'AI & Machine Learning':
      return FiCpu;
    case 'Web Development':
      return FiLayout;
    case 'Databases':
      return FiDatabase;
    case 'Tools & Cloud Platforms':
      return FiSettings;
    default:
      return FiCode;
  }
};

const getSkillIcon = (name) => {
  switch (name) {
    case 'Python': return { icon: SiPython, color: 'group-hover:text-yellow-500 group-hover:border-yellow-500/40 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.15)]' };
    case 'SQL': return { icon: SiMysql, color: 'group-hover:text-blue-500 group-hover:border-blue-500/40 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]' };
    case 'C++': return { icon: SiCplusplus, color: 'group-hover:text-blue-600 group-hover:border-blue-600/40 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.15)]' };
    case 'Java': return { icon: FaJava, color: 'group-hover:text-orange-500 group-hover:border-orange-500/40 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]' };
    case 'C': return { icon: SiC, color: 'group-hover:text-slate-400 group-hover:border-slate-400/40' };
    case 'Scikit-Learn': return { icon: SiScikitlearn, color: 'group-hover:text-orange-400 group-hover:border-orange-400/40 group-hover:shadow-[0_0_15px_rgba(251,146,60,0.15)]' };
    case 'Pandas & NumPy': return { icon: SiPandas, color: 'group-hover:text-indigo-400 group-hover:border-indigo-400/40 group-hover:shadow-[0_0_15px_rgba(129,140,248,0.15)]' };
    case 'TensorFlow & Keras': return { icon: SiTensorflow, color: 'group-hover:text-orange-550 group-hover:border-orange-550/40 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]' };
    case 'OpenCV': return { icon: SiOpencv, color: 'group-hover:text-red-500 group-hover:border-red-500/40 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]' };
    case 'PyTorch': return { icon: SiPytorch, color: 'group-hover:text-orange-600 group-hover:border-orange-600/40 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.15)]' };
    case 'Flask & FastAPI': return { icon: SiFlask, color: 'group-hover:text-emerald-500 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]' };
    case 'React': return { icon: SiReact, color: 'group-hover:text-cyan-400 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]' };
    case 'HTML5 & CSS3': return { icon: SiHtml5, color: 'group-hover:text-orange-500 group-hover:border-orange-500/40 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]' };
    case 'JavaScript': return { icon: SiJavascript, color: 'group-hover:text-yellow-400 group-hover:border-yellow-400/40 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.15)]' };
    case 'MySQL': return { icon: SiMysql, color: 'group-hover:text-blue-500 group-hover:border-blue-500/40 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]' };
    case 'MongoDB': return { icon: SiMongodb, color: 'group-hover:text-green-500 group-hover:border-green-500/40 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.15)]' };
    case 'Git & GitHub': return { icon: SiGit, color: 'group-hover:text-orange-550 group-hover:border-orange-550/40 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]' };
    case 'Docker': return { icon: SiDocker, color: 'group-hover:text-blue-400 group-hover:border-blue-400/40 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.15)]' };
    case 'VS Code & Jupyter': return { icon: VscCode, color: 'group-hover:text-blue-500 group-hover:border-blue-500/40 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]' };
    default: return { icon: SiPython, color: 'group-hover:text-indigo-500' };
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillsDashboard[0].category);

  const activeCategoryData = skillsDashboard.find((cat) => cat.category === activeCategory) || skillsDashboard[0];
  const CategoryHeaderIcon = getCategoryIcon(activeCategoryData.category);

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Technical Stack
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mt-3"
          />
        </div>

        {/* Categories Tab Selectors */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 select-none">
          {skillsDashboard.map((item) => {
            const Icon = getCategoryIcon(item.category);
            return (
              <button
                key={item.category}
                onClick={() => setActiveCategory(item.category)}
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === item.category
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 border border-transparent'
                    : 'bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4.5 h-4.5" /> {item.category.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* Active Category Dashboard */}
        <div className="glass-card p-6 md:p-10 rounded-3xl shadow-xl min-h-[350px]">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800/80 pb-4">
            <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-405">
              <CategoryHeaderIcon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {activeCategoryData.category}
              </h3>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                Interactive Dashboard View
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {activeCategoryData.skills.map((skill) => {
                const { icon: Icon, color: hoverColorClass } = getSkillIcon(skill.name);
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className={`group border border-slate-200/50 dark:border-slate-800/40 rounded-2xl p-5 bg-white/40 dark:bg-slate-900/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between ${hoverColorClass}`}
                  >
                    <div>
                      {/* Title & Icon Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Icon className="w-7 h-7 text-slate-500 dark:text-slate-400 group-hover:scale-110 transition-all duration-300" />
                          <h4 className="text-base font-bold text-slate-800 dark:text-slate-250 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-450 border border-slate-200/40 dark:border-slate-800/50">
                          {skill.rating}
                        </span>
                      </div>
                      
                      <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-medium">
                        {skill.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
