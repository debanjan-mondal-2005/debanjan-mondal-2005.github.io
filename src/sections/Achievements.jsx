import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTrendingUp, FiTarget } from 'react-icons/fi';
import { achievementsData } from '../data/portfolioData';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Certifications':
      return FiCheckCircle;
    case 'Academic Accomplishments':
      return FiTrendingUp;
    case 'Sports & Extracurriculars':
      return FiTarget;
    default:
      return FiCheckCircle;
  }
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
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
            Key Achievements
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mt-3"
          />
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, idx) => {
            const Icon = getCategoryIcon(item.category);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ type: 'spring', stiffness: 80, damping: 15, delay: idx * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-2xl glow-effect hover:-translate-y-1 transition-all duration-305 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-650 dark:text-indigo-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Subdetails List */}
                <ul className="space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
