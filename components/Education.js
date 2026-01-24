
import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, EXTRA_CURRICULAR } from '../constants.js';
import { BookOpen, Trophy } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <BookOpen className="text-blue-500" /> Education
          </h2>
          <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-slate-800">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative pl-10 group">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-slate-800 bg-slate-950 group-hover:border-blue-500 transition-colors z-10"></div>
                <div>
                  <h3 className="text-xl font-bold">{edu.school}</h3>
                  <p className="text-blue-400 font-medium mb-2">{edu.degree}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                  {edu.details && (
                    <div className="mt-3 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800 w-fit text-sm text-blue-300 font-semibold">
                      {edu.details}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Trophy className="text-yellow-500" /> Beyond the Screen
          </h2>
          <div className="space-y-6">
            {EXTRA_CURRICULAR.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800/50 hover:border-yellow-500/20 transition-all"
              >
                <p className="text-slate-300 leading-relaxed italic">
                  "{item}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
