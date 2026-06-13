import React from 'react';
import { motion } from 'framer-motion';
import { LuGraduationCap } from 'react-icons/lu';
import { FiBookOpen } from 'react-icons/fi';
import { educationTimelineData } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Education Path
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mt-3"
          />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-slate-205 dark:border-slate-800 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {educationTimelineData.map((item, index) => {
            const isBCA = item.degree.includes('Bachelor');
            const Icon = isBCA ? LuGraduationCap : FiBookOpen;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.05 }}
                className="relative"
              >
                {/* Marker Node */}
                <div className="absolute -left-[48px] md:-left-[56px] top-1.5 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-indigo-650 dark:text-indigo-400 shadow-md z-10">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content Card */}
                <div className="glass-card p-6 md:p-8 rounded-2xl relative glow-effect">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        {item.degree}
                      </h3>
                      <span className="text-xs font-semibold text-slate-450 dark:text-slate-500 font-mono block mt-1">
                        {item.specialization}
                      </span>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 block mt-1">
                        {item.institution}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800">
                        {item.duration}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 font-mono">
                        {item.gpa}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-indigo-500/35 pl-3 py-1">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Highlight: </span>
                    {item.achievements}
                  </div>

                  {/* Coursework tags */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Relevant Coursework
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900/60 text-[10px] font-medium text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/60"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
