
import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certs" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Industry <span className="text-emerald-500">Credentials</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900 transition-colors"
          >
            <div className="p-3 bg-slate-800 rounded-xl">
              {cert.icon}
            </div>
            <div>
              <h4 className="font-semibold text-slate-200">{cert.title}</h4>
              <p className="text-xs text-slate-500 mt-1">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
