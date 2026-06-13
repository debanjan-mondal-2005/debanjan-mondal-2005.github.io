import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { codingProfiles } from '../data/portfolioData';

export default function CodingProfiles() {
  const profiles = [
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      color: 'hover:border-amber-500/50',
      username: codingProfiles.leetcode.username,
      link: codingProfiles.leetcode.link,
      stats: [
        { label: 'Solved Problems', value: codingProfiles.leetcode.solved },
        { label: 'Consistency', value: codingProfiles.leetcode.rating },
        { label: 'Key Badge', value: codingProfiles.leetcode.badge }
      ]
    },
    {
      name: 'HackerRank',
      icon: SiHackerrank,
      color: 'hover:border-emerald-500/50',
      username: codingProfiles.hackerrank.username,
      link: codingProfiles.hackerrank.link,
      stats: [
        { label: 'Python Verified', value: codingProfiles.hackerrank.stars },
        { label: 'Python Basic', value: codingProfiles.hackerrank.badges[0] },
        { label: 'SQL Basic', value: codingProfiles.hackerrank.badges[1] }
      ]
    },
    {
      name: 'CodeChef',
      color: 'hover:border-amber-700/50',
      icon: SiSiCodechefWrapper,
      username: codingProfiles.codechef.username,
      link: codingProfiles.codechef.link,
      stats: [
        { label: 'Contest Rating', value: codingProfiles.codechef.rating },
        { label: 'Stars Category', value: codingProfiles.codechef.stars },
        { label: 'Competitions', value: 'Active' }
      ]
    }
  ];

  return (
    <section id="coding-profiles" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
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
            Coding Profiles
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mt-3"
          />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ type: 'spring', stiffness: 80, damping: 15, delay: idx * 0.1 }}
                className={`glass-card p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${profile.color}`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 group-hover:bg-indigo-500/10 group-hover:text-indigo-500 transition-colors duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {profile.name}
                      </h3>
                    </div>
                    <a
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-indigo-650 dark:hover:text-indigo-400 transition-colors"
                      title={`Open ${profile.name}`}
                    >
                      <FiExternalLink className="w-4.5 h-4.5" />
                    </a>
                  </div>

                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 block mb-6">
                    Username: {profile.username}
                  </span>

                  {/* Profile stats */}
                  <div className="space-y-4">
                    {profile.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800/60 pb-2">
                        <span className="text-slate-550 dark:text-slate-400">{stat.label}</span>
                        <span className="font-semibold text-slate-850 dark:text-slate-200">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 text-center rounded-xl text-xs font-semibold border border-slate-205 dark:border-slate-800 text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex items-center justify-center gap-1.5"
                  >
                    View Activities
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Inline fallback for CodeChef icon
function SiSiCodechefWrapper(props) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
    </svg>
  );
}
