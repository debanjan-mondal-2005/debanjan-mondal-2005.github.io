import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-dark-bg border-t border-slate-200/50 dark:border-slate-900/60 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>

        {/* Footer social icons */}
        <div className="flex items-center gap-5">
          {[
            { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
            { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
            { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' }
          ].map((soc, i) => {
            const Icon = soc.icon;
            return (
              <a
                key={i}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.label}
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-650 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-colors"
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollTop}
            className="fixed bottom-24 right-6 z-50 p-3 rounded-full bg-indigo-650 hover:bg-indigo-600 text-white shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all focus:outline-none"
            aria-label="Back to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
