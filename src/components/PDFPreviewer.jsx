import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiExternalLink } from 'react-icons/fi';

export default function PDFPreviewer({ isOpen, onClose, pdfUrl, title }) {
  if (!isOpen || !pdfUrl) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Content Box */}
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-4xl h-[80vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl z-10 flex flex-col"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <div className="max-w-[70%]">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-indigo-500">
                Credential Viewer
              </span>
              <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white truncate">
                {title}
              </h3>
            </div>
            
            <div className="flex items-center gap-2">
              <a
                href={pdfUrl}
                download
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-550 dark:text-slate-300 transition-colors"
                title="Download PDF"
              >
                <FiDownload className="w-5 h-5" />
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-550 dark:text-slate-300 transition-colors"
                title="Open in new tab"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-550 dark:text-slate-300 transition-colors"
                title="Close"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Iframe Frame */}
          <div className="flex-grow w-full h-full bg-slate-100 dark:bg-slate-950 relative">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              title={title}
              className="w-full h-full border-none"
            />
            {/* Fallback indicator */}
            <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-center p-6 text-slate-500">
              <p className="text-sm mb-4">If the PDF viewer is blocked, you can view the certificate directly:</p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-550 text-white font-semibold text-xs transition-all flex items-center gap-2"
              >
                Open PDF <FiExternalLink />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
