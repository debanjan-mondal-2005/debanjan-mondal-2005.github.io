
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certs' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.05 }}
          className="font-bold text-2xl tracking-tighter bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
        >
          DM.
        </motion.a>
        
        <div className="hidden md:flex items-center space-x-1 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05, color: '#fff' }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer relative z-[110]"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05, backgroundColor: '#3b82f6' }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-full transition-all shadow-lg shadow-blue-500/20 cursor-pointer z-[110]"
          >
            Get in Touch
          </motion.a>
        </div>

        {/* Mobile Menu Placeholder - can be expanded later */}
        <div className="md:hidden">
          <button className="p-2 text-slate-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
