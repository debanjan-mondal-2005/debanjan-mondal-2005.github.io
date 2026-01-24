
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24 text-center">
      <div className="max-w-2xl mx-auto p-12 rounded-[3rem] bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
        
        <h2 className="text-4xl font-bold mb-6">Let's <span className="gradient-text">Innovate</span> Together</h2>
        <p className="text-slate-400 mb-10 text-lg">
          Currently seeking Data Science internships and collaborative projects. 
          Ready to contribute to AI-driven teams.
        </p>

        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-900/20 transition-all transform hover:-translate-y-1 mb-10"
        >
          <Send className="w-5 h-5" />
          Send a Message
        </a>

        <div className="flex justify-center items-center space-x-8 text-slate-500">
          <a href={PERSONAL_INFO.links.linkedin} target="_blank" className="hover:text-blue-400 transition-colors flex items-center gap-2">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a href={PERSONAL_INFO.links.github} target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
            <Github className="w-5 h-5" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
