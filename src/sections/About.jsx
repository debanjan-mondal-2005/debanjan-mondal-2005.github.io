import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCompass, FiActivity } from 'react-icons/fi';
import { personalInfo, statsData, journeyTimeline } from '../data/portfolioData';
import CountUp from '../components/UI/CountUp';

export default function About() {
  const [activeJourney, setActiveJourney] = useState(journeyTimeline[journeyTimeline.length - 1]);

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
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
            About Me & My Journey
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mt-3"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-20">
          {/* LEFT SIDE: Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex justify-center w-full"
          >
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden glass-card p-4 shadow-xl border border-slate-200/50 dark:border-slate-800/40">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src="assets/profile.jpeg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                    AI/ML Student
                  </span>
                  <h3 className="text-xl font-bold mt-0.5">{personalInfo.name}</h3>
                </div>
              </div>

              {/* Detail Items */}
              <div className="mt-4 space-y-2 text-xs md:text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-400 dark:text-slate-500 font-medium">Degree</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 truncate text-right max-w-[65%]">
                    {personalInfo.degree}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-400 dark:text-slate-500 font-medium">University</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 truncate text-right max-w-[65%]">
                    {personalInfo.university}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-400 dark:text-slate-500 font-medium">Graduation Year</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {personalInfo.gradYear}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: About text card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 space-y-6 w-full"
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-900 to-indigo-650 dark:from-white dark:to-indigo-400 bg-clip-text text-transparent flex items-center gap-2">
                  <FiCompass className="w-5 h-5 text-indigo-550" /> Career Objective
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                  {personalInfo.careerObjective}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <FiActivity className="w-5 h-5 text-indigo-550" /> Key Areas of Interest
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/30 text-indigo-650 dark:text-indigo-455 border border-indigo-100/50 dark:border-indigo-900/40"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics Counter Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl text-center shadow-lg border border-slate-200/50 dark:border-slate-805/40 relative overflow-hidden"
            >
              <span className="block text-2xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-450 mb-1">
                <CountUp
                  end={stat.value}
                  decimals={stat.label === 'Current CGPA' ? 2 : 0}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </span>
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Timeline Journey Wrapper */}
        <div className="glass-card p-6 md:p-8 rounded-3xl shadow-xl">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            My Journey Timeline
          </h3>

          {/* Node buttons */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 select-none scrollbar-thin">
            {journeyTimeline.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveJourney(item)}
                className={`flex-none px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeJourney.id === item.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/10'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                }`}
              >
                {item.year} - {item.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Milestone Details Card */}
          <div className="mt-8 border-t border-slate-100 dark:border-slate-800/80 pt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJourney.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      {activeJourney.title}
                    </h4>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 block mt-1">
                      {activeJourney.institution}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-450 border border-amber-100 dark:border-amber-900/30">
                    {activeJourney.achievement}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {activeJourney.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
