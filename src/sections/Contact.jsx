import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend, FiLoader } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

    // Simulate success if variables are not set
    if (
      serviceId === 'service_placeholder' ||
      templateId === 'template_placeholder' ||
      publicKey === 'public_key_placeholder'
    ) {
      setTimeout(() => {
        setLoading(false);
        setStatus({
          type: 'success',
          message: 'Message sent successfully (Mock)! To send live emails, set VITE_EMAILJS service configs in a .env file.',
        });
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        formRef.current.reset();
      }, 1500);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setLoading(false);
          setStatus({ type: 'success', message: 'Thank you! Your message was sent successfully.' });
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
          });
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus({
            type: 'error',
            message: 'Oops! Something went wrong. Please try again or email me directly.',
          });
          console.error('EmailJS Error:', error);
        }
      );
  };

  const contactItems = [
    {
      icon: FiMail,
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FiLinkedin,
      title: 'LinkedIn',
      value: 'debanjan-mondal-ai',
      href: personalInfo.linkedin,
    },
    {
      icon: FiGithub,
      title: 'GitHub',
      value: 'debanjan-mondal-2005',
      href: personalInfo.github,
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-indigo-500 rounded-full mx-auto mt-3"
          />
        </div>

        {/* Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Let's Connect!</h3>
            <p className="text-slate-655 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              I am always open to discussing research collaborations, internships, machine learning projects, or professional opportunities in data science. Feel free to reach out!
            </p>

            <div className="space-y-4 pt-4">
              {contactItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30"
                  >
                    <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-450 dark:text-slate-500 uppercase tracking-wider">
                        {item.title}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:underline hover:text-indigo-605 dark:hover:text-indigo-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card p-6 md:p-8 rounded-3xl"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="user_name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors text-slate-800 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="user_email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors text-slate-800 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors text-slate-800 dark:text-white"
                  placeholder="ML Project Collaboration"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-sm focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors resize-none text-slate-800 dark:text-white"
                  placeholder="Message details..."
                />
              </div>

              {/* Status Alert */}
              {status.message && (
                <div
                  className={`p-4 rounded-xl text-xs font-medium leading-relaxed border ${
                    status.type === 'success'
                      ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-650 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/35'
                      : 'bg-rose-50 dark:bg-rose-950/30 text-rose-650 dark:text-rose-450 border-rose-200/50 dark:border-rose-900/35'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-550 disabled:bg-slate-350 dark:disabled:bg-slate-800 shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm focus:outline-none"
              >
                {loading ? (
                  <>
                    <FiLoader className="w-4.5 h-4.5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
