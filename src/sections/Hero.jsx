import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiLinkedin, FiGithub, FiMail, FiChevronDown } from 'react-icons/fi';
import ParticleBackground from '../components/ParticleBackground';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ theme }) {
  const typedText = useTypingEffect(personalInfo.subtitles);

  const coreBadges = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Data Science",
    "MongoDB",
    "Flask"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.6 }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 120 } }
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.offsetTop - 85;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-dark-bg transition-colors duration-300 pt-20 pb-12"
    >
      {/* Background Particles */}
      <ParticleBackground theme={theme} />

      {/* Abstract Glowing Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[15%] right-[5%] w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl animate-float-slow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Availability Status Tag */}
          <motion.div
            variants={itemVariants}
            className="mb-6 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 shadow-sm flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {personalInfo.availability}
          </motion.div>

          {/* Profile Circle Frame */}
          <motion.div
            variants={itemVariants}
            className="relative w-32 h-32 md:w-36 md:h-36 mb-6 select-none"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-amber-500 animate-spin opacity-80" style={{ animationDuration: '12s' }} />
            <div className="absolute inset-1 rounded-full bg-slate-50 dark:bg-dark-bg transition-colors duration-300" />
            <img
              src="assets/profile.jpeg"
              alt={personalInfo.name}
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full shadow-md"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";
              }}
            />
          </motion.div>

          {/* Core Education/Header Badge */}
          <motion.span
            variants={itemVariants}
            className="text-slate-500 dark:text-slate-400 font-mono text-xs md:text-sm tracking-wider font-semibold uppercase mb-2"
          >
            BCA AI/ML Student @ Lovely Professional University
          </motion.span>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 max-w-3xl leading-tight"
          >
            {personalInfo.headline}
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-base md:text-xl font-medium text-slate-600 dark:text-slate-300 min-h-[35px] mb-4 font-mono max-w-2xl"
          >
            Status:{' '}
            <span className="text-amber-600 dark:text-amber-400 font-semibold">
              {typedText}
            </span>
            <span className="animate-pulse text-indigo-500 font-bold">|</span>
          </motion.h2>

          {/* Short Value Proposition */}
          <motion.p
            variants={itemVariants}
            className="text-slate-650 dark:text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed mb-6"
          >
            {personalInfo.valueProp}
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-550 shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/25 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
            >
              Contact Me <FiArrowRight />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Debanjan_Mondal_Resume.pdf"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-850 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
            >
              <FiDownload /> Download Resume
            </a>
          </motion.div>

          {/* Floating Skill Badges */}
          <motion.div
            variants={badgeContainerVariants}
            className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mb-8"
          >
            {coreBadges.map((badge, idx) => (
              <motion.span
                key={idx}
                variants={badgeVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/50 shadow-sm backdrop-blur-sm select-none"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Down Chevron */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center z-10 pointer-events-none">
        <motion.a
          href="#about"
          onClick={(e) => handleScrollTo(e, 'about')}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
          className="p-2 text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors pointer-events-auto"
        >
          <FiChevronDown className="w-6 h-6" />
        </motion.a>
      </div>
    </section>
  );
}
