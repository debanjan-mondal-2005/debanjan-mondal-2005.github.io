
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="pt-20 lg:pt-32 scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Available for Internships</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name.split(' ')[0]}</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-slate-400 leading-relaxed mb-8 max-w-xl">
            {PERSONAL_INFO.summary}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center text-sm text-slate-500 mb-10">
            <div className="flex items-center space-x-2 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
              <Phone className="w-4 h-4 text-purple-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center space-x-6">
            <motion.a 
              href={PERSONAL_INFO.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: '#1e293b' }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-slate-900 border border-slate-800 rounded-2xl transition-all text-slate-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href={PERSONAL_INFO.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: '#1e293b' }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-slate-900 border border-slate-800 rounded-2xl transition-all text-slate-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href={`mailto:${PERSONAL_INFO.email}`}
              whileHover={{ scale: 1.1, backgroundColor: '#1e293b' }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-slate-900 border border-slate-800 rounded-2xl transition-all text-slate-300"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Floating Blobs */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"
          />

          <motion.div 
            whileHover={{ rotateY: 5, rotateX: -5 }}
            className="aspect-square relative max-w-md mx-auto perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative h-full w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex items-center justify-center group shadow-2xl">
              <img 
                src="https://picsum.photos/seed/debanjan/600/600" 
                alt="Debanjan Mondal" 
                className="opacity-60 object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Ongoing Pursuit</span>
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-100">Aspiring Data Scientist @ LPU</p>
                <div className="mt-3 w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '70%' }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-blue-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
