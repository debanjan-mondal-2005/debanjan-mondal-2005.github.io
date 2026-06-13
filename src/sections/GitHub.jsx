import React from 'react';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { FiGithub } from 'react-icons/fi';

export default function GitHub({ theme }) {
  const username = "debanjan-mondal-2005";
  
  const calendarTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  const statTheme = theme === 'dark' ? 'tokyonight' : 'default';

  return (
    <section id="github" className="py-24 bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <FiGithub className="w-7 h-7 text-slate-800 dark:text-white" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              GitHub Contributions
            </motion.h2>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mt-3"
          />
        </div>

        {/* Calendar Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center mb-12 select-none overflow-x-auto shadow-md"
        >
          <div className="min-w-[700px] md:min-w-0 w-full flex justify-center text-slate-700 dark:text-slate-300">
            <GitHubCalendar
              username={username}
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              theme={calendarTheme}
              colorScheme={theme}
            />
          </div>
        </motion.div>

        {/* Dynamic Image Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 rounded-2xl flex items-center justify-center min-h-[200px]"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${statTheme}&hide_border=true&bg_color=00000000&title_color=6366f1&icon_color=4f46e5&text_color=94a3b8`}
              alt="GitHub Stats"
              className="max-w-full h-auto select-none pointer-events-none"
              loading="lazy"
            />
          </motion.div>

          {/* Card 2: Langs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 rounded-2xl flex items-center justify-center min-h-[200px]"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${statTheme}&hide_border=true&bg_color=00000000&title_color=6366f1&text_color=94a3b8`}
              alt="Top Languages"
              className="max-w-full h-auto select-none pointer-events-none"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
