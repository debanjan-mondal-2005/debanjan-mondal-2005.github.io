import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiEye } from 'react-icons/fi';
import { certificationsData } from '../data/portfolioData';
import PDFPreviewer from '../components/PDFPreviewer';

export default function Certifications() {
  const [activePdf, setActivePdf] = useState(null);
  const [activeTitle, setActiveTitle] = useState('');

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
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
            Verified Credentials
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mt-3"
          />
        </div>

        {/* Certifications Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 80, damping: 15, delay: idx * 0.05 }}
              className="glass-card p-6 rounded-2xl glow-effect hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/40"
            >
              <div>
                {/* Top Details Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                    <FiAward className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-1">
                  {cert.name}
                </h3>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 block mb-4">
                  {cert.organization}
                </span>

                {/* Skills summary */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  <span className="font-semibold text-slate-700 dark:text-slate-350">Skills:</span> {cert.skillsLearned}
                </p>
              </div>

              {/* Actions Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  onClick={() => {
                    setActivePdf(cert.pdfUrl);
                    setActiveTitle(cert.name);
                  }}
                  className="flex-grow py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-indigo-650 hover:bg-indigo-600 shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-1.5"
                >
                  <FiEye /> Preview
                </button>
                {cert.verifyUrl && cert.verifyUrl !== '#' && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-500 dark:text-slate-300 transition-all"
                    title="Verify Credentials"
                  >
                    <FiExternalLink className="w-4.5 h-4.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Dialog */}
      <PDFPreviewer
        isOpen={!!activePdf}
        onClose={() => {
          setActivePdf(null);
          setActiveTitle('');
        }}
        pdfUrl={activePdf}
        title={activeTitle}
      />
    </section>
  );
}
