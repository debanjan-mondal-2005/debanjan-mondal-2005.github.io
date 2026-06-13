import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiMaximize2, FiX, FiCheckCircle } from 'react-icons/fi';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filters = ['All', 'AI/ML', 'React', 'Python'];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'AI/ML') {
      return (
        project.tags.includes('Generative AI') ||
        project.tags.includes('Machine Learning') ||
        project.tags.includes('Computer Vision')
      );
    }
    return project.tags.includes(filter);
  });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Product Showcase
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mt-3"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 select-none">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                filter === f
                  ? 'bg-indigo-650 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-100 hover:bg-slate-205 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full shadow-lg border border-slate-200/50 dark:border-slate-800/40"
              >
                {/* Cover Frame */}
                <div className="relative h-48 md:h-52 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                    onError={(e) => {
                      e.target.src =
                        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-305 flex items-center justify-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:scale-110 active:scale-95 transition-all shadow-md"
                      title="GitHub"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:scale-110 active:scale-95 transition-all shadow-md"
                      title="Demo"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => setActiveProject(project)}
                      className="p-3 rounded-full bg-indigo-650 text-white hover:scale-110 active:scale-95 transition-all shadow-md"
                      title="Details"
                    >
                      <FiMaximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Info Card */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500 block font-mono">
                      {project.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Problem Statement preview */}
                    <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                      <span className="font-semibold text-slate-700 dark:text-slate-350">Problem: </span>
                      {project.problem}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-[10px] font-semibold text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-205 dark:border-slate-800 shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Icon */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Close"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Cover image banner */}
              <div className="h-56 sm:h-64 w-full overflow-hidden relative">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white max-w-[85%]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">
                    {activeProject.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-1">{activeProject.title}</h3>
                </div>
              </div>

              {/* Modal scrolling items */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-5 flex-grow">
                {/* Problem */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                    Problem Statement
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {activeProject.problem}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                    Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {activeProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-350">
                        <FiCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-none" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Engineering Challenges */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                    Challenges Solved & Model Metrics
                  </h4>
                  <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed bg-indigo-50/20 dark:bg-indigo-950/15 p-3 rounded-xl border border-indigo-100/30 dark:border-indigo-950/30">
                    {activeProject.challenges}
                  </p>
                </div>

                {/* Stack */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                    Tech Stack Integrated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] py-2.5 px-5 text-center rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-550 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] py-2.5 px-5 text-center rounded-xl text-xs font-semibold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-205 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                  >
                    <FiGithub /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
