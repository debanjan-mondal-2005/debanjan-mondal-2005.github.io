import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"
        >
          <div className="flex gap-4 mb-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                animate={{ y: [-12, 0, -12] }}
                transition={{
                  duration: 1.0,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
                className="w-4 h-4 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.6)]"
              />
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="text-slate-300 text-sm font-semibold tracking-widest uppercase font-mono"
          >
            Initializing Portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
