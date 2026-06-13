import React, { Suspense } from 'react';
import Loader from './components/Loader';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Timeline from './sections/Timeline';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import CodingProfiles from './sections/CodingProfiles';
import Footer from './sections/Footer';

// Lazy load larger components to improve initial page load speed
const Projects = React.lazy(() => import('./sections/Projects'));
const GitHub = React.lazy(() => import('./sections/GitHub'));
const Contact = React.lazy(() => import('./sections/Contact'));

function SectionSkeleton() {
  return (
    <div className="py-24 max-w-6xl mx-auto px-6 space-y-6 animate-pulse">
      <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mx-auto" />
      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-60 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="min-h-screen relative text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Loading Overlay */}
      <Loader />

      {/* Floating Theme Button */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <Hero theme={theme} />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section (Lazy Loaded) */}
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>

      {/* Education Timeline */}
      <Timeline />

      {/* Verified Credentials Gallery */}
      <Certifications />

      {/* Achievements Card Deck */}
      <Achievements />

      {/* GitHub Board (Lazy Loaded) */}
      <Suspense fallback={<SectionSkeleton />}>
        <GitHub theme={theme} />
      </Suspense>

      {/* Coding Profiles Cards */}
      <CodingProfiles />

      {/* Contact Form (Lazy Loaded) */}
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
  );
}
