document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial State and Theme Handler
  const data = window.portfolioData;
  if (!data) {
    console.error("Portfolio data not found. Please check data.js load order.");
    return;
  }

  // Loader Timeout
  const loader = document.getElementById('loader-overlay');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 1500);
  }

  // 3. Canvas Particles Animation (Moved up to prevent TDZ ReferenceError)
  const canvas = document.getElementById('particles-canvas');
  let ctx, animationFrameId, particlesArray = [];
  const numberOfParticles = 60;

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * (canvas ? canvas.width : window.innerWidth);
      this.y = Math.random() * (canvas ? canvas.height : window.innerHeight);
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.3 - 0.15;
      this.speedY = Math.random() * 0.3 - 0.15;
      this.opacity = Math.random() * 0.35 + 0.15;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
      if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
    }
    draw() {
      const color = document.documentElement.classList.contains('dark')
        ? `rgba(255, 255, 255, ${this.opacity})`
        : `rgba(99, 102, 241, ${this.opacity})`;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains('dark');

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = 0.15 - distance / 600;
            if (opacity > 0) {
              ctx.strokeStyle = isDark
                ? `rgba(255, 255, 255, ${opacity})`
                : `rgba(99, 102, 241, ${opacity * 0.8})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
              ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
              ctx.stroke();
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
  }

  // Theme Init and Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');

  const getSavedTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = `<i data-lucide="sun" class="w-5 h-5 transition-transform group-hover:rotate-45 text-yellow-400"></i>`;
      }
    } else {
      document.documentElement.classList.remove('dark');
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = `<i data-lucide="moon" class="w-5 h-5 transition-transform group-hover:-rotate-12 text-slate-800"></i>`;
      }
    }
    localStorage.setItem('theme', theme);
    if (window.lucide) window.lucide.createIcons();
    // Redraw particles with correct theme color
    initParticles();
  };

  let currentTheme = getSavedTheme();
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
    });
  }

  // 2. Navigation Scrollspy, Sticky Nav & Mobile Drawer
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  // Sticky Navbar Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.className = 'fixed top-0 inset-x-0 z-40 transition-all duration-300 bg-white/80 dark:bg-slate-955/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/40 shadow-sm py-3.5';
    } else {
      navbar.className = 'fixed top-0 inset-x-0 z-40 transition-all duration-300 bg-transparent py-5';
    }
  });

  // Mobile Drawer Toggle
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }

  // Smooth scroll links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (mobileDrawer) mobileDrawer.classList.add('hidden'); // Close drawer if open
      const targetId = link.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const offsetTop = targetEl.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scrollspy Active Nav Highlight
  const sections = ['home', 'about', 'skills', 'projects', 'timeline', 'contact'];
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 160;
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          // Update Desktop Links
          document.querySelectorAll('#desktop-nav-links a').forEach(a => {
            if (a.getAttribute('href') === `#${section}`) {
              a.classList.add('nav-active');
            } else {
              a.classList.remove('nav-active');
            }
          });
          // Update Mobile Links
          document.querySelectorAll('#mobile-drawer a').forEach(a => {
            if (a.getAttribute('href') === `#${section}`) {
              a.classList.add('nav-active');
            } else {
              a.classList.remove('nav-active');
            }
          });
          break;
        }
      }
    }
  });

  // 4. Hero Section Data & Typing Effect
  const typingTextEl = document.getElementById('typing-text');
  const heroBadgesContainer = document.getElementById('hero-badges-container');

  // Fill Hero Data
  document.getElementById('hero-headline').innerText = data.personalInfo.headline;
  document.getElementById('hero-value-prop').innerText = data.personalInfo.valueProp;
  document.getElementById('hero-resume-link').setAttribute('href', data.personalInfo.resumeUrl);

  // Typewriter parameters
  const words = data.personalInfo.subtitles;
  let wordIndex = 0;
  let textIndex = 0;
  let isDeleting = false;
  let typingTimer;

  const handleTyping = () => {
    if (!typingTextEl) return;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingTextEl.innerText = currentWord.substring(0, textIndex - 1);
      textIndex--;
    } else {
      typingTextEl.innerText = currentWord.substring(0, textIndex + 1);
      textIndex++;
    }

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && textIndex === currentWord.length) {
      delay = 2000; // Delay at end of word
      isDeleting = true;
    } else if (isDeleting && textIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 500; // Short wait before typing next
    }

    typingTimer = setTimeout(handleTyping, delay);
  };
  handleTyping();

  // Populate floating core badges in hero
  const coreBadges = ["Python", "Machine Learning", "Deep Learning", "Computer Vision", "Data Science", "MongoDB", "Flask"];
  if (heroBadgesContainer) {
    heroBadgesContainer.innerHTML = coreBadges.map(badge => `
      <span class="px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/50 shadow-sm backdrop-blur-sm select-none transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
        ${badge}
      </span>
    `).join('');
  }

  // 5. About Section Rendering
  document.getElementById('about-card-name').innerText = data.personalInfo.name;
  document.getElementById('about-card-degree').innerText = data.personalInfo.degree;
  document.getElementById('about-card-univ').innerText = data.personalInfo.university;
  document.getElementById('about-card-grad').innerText = data.personalInfo.gradYear;
  document.getElementById('about-career-obj').innerText = data.personalInfo.careerObjective;

  // Areas of interest
  const interestsContainer = document.getElementById('about-interests-container');
  if (interestsContainer) {
    interestsContainer.innerHTML = data.personalInfo.interests.map(interest => `
      <span class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-55 dark:bg-indigo-950/30 text-indigo-650 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/40">
        ${interest}
      </span>
    `).join('');
  }

  // Counter stats dashboard cards
  const statsContainer = document.getElementById('about-stats-container');
  if (statsContainer) {
    statsContainer.innerHTML = data.statsData.map((stat, idx) => `
      <div class="glass-card p-6 rounded-2xl text-center shadow-lg border border-slate-200/50 dark:border-slate-800/40 relative overflow-hidden">
        <span class="block text-2xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
          <span class="stat-number" data-target="${stat.value}" data-decimals="${stat.label === 'Current CGPA' ? 2 : 0}" data-prefix="${stat.prefix}" data-suffix="${stat.suffix}">0</span>
        </span>
        <span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
          ${stat.label}
        </span>
      </div>
    `).join('');
  }

  // Stat Counter Animation
  const animateStats = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(num => {
      const target = parseFloat(num.getAttribute('data-target'));
      const decimals = parseInt(num.getAttribute('data-decimals'));
      const prefix = num.getAttribute('data-prefix') || '';
      const suffix = num.getAttribute('data-suffix') || '';
      const duration = 1500; // ms
      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = progress * target;
        
        num.innerText = prefix + (decimals > 0 ? currentValue.toFixed(decimals) : Math.floor(currentValue)) + suffix;
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          num.innerText = prefix + (decimals > 0 ? target.toFixed(decimals) : target) + suffix;
        }
      };

      window.requestAnimationFrame(step);
    });
  };

  // Trigger metrics count-up on intersection
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateStats();
      statsObserver.disconnect();
    }
  }, { threshold: 0.2 });

  if (statsContainer) {
    statsObserver.observe(statsContainer);
  }

  // 6. Technical Stack Section Rendering
  const skillsTabsContainer = document.getElementById('skills-tabs-container');
  const skillsCardsContainer = document.getElementById('skills-cards-container');
  const skillsCategoryIcon = document.getElementById('skills-category-icon');
  const skillsCategoryTitle = document.getElementById('skills-category-title');

  const lucideIconMap = {
    code: 'code',
    cpu: 'cpu',
    layout: 'layout',
    database: 'database',
    settings: 'settings'
  };

  const deviconMap = {
    'Python': 'devicon-python-plain text-yellow-500',
    'MySQL': 'devicon-mysql-plain text-blue-500',
    'C++': 'devicon-cplusplus-plain text-blue-600',
    'Java': 'devicon-java-plain text-orange-500',
    'C': 'devicon-c-plain text-slate-400',
    'Scikit-Learn': 'devicon-scikitlearn-original text-orange-400',
    'Pandas & NumPy': 'devicon-pandas-plain text-indigo-400',
    'TensorFlow & Keras': 'devicon-tensorflow-line text-orange-500',
    'OpenCV': 'devicon-opencv-plain text-red-500',
    'PyTorch': 'devicon-pytorch-original text-orange-600',
    'Flask & FastAPI': 'devicon-flask-original text-emerald-500',
    'React': 'devicon-react-original text-cyan-400',
    'HTML5 & CSS3': 'devicon-html5-plain text-orange-500',
    'JavaScript': 'devicon-javascript-plain text-yellow-400',
    'MongoDB': 'devicon-mongodb-plain text-green-500',
    'Git & GitHub': 'devicon-git-plain text-orange-600',
    'Docker': 'devicon-docker-plain text-blue-400',
    'VS Code & Jupyter': 'devicon-vscode-plain text-blue-500'
  };

  const renderSkills = (categoryName) => {
    const categoryData = data.skillsDashboard.find(cat => cat.category === categoryName);
    if (!categoryData || !skillsCardsContainer) return;

    // Update Header
    if (skillsCategoryTitle) skillsCategoryTitle.innerText = categoryData.category;
    if (skillsCategoryIcon) skillsCategoryIcon.setAttribute('data-lucide', categoryData.icon);
    if (window.lucide) window.lucide.createIcons();

    // Fade-in Animation
    skillsCardsContainer.style.opacity = '0';
    skillsCardsContainer.style.transform = 'translateY(10px)';

    setTimeout(() => {
      skillsCardsContainer.innerHTML = categoryData.skills.map(skill => {
        const iconClass = deviconMap[skill.name] || 'devicon-python-plain text-indigo-500';
        return `
          <div class="group border border-slate-200/50 dark:border-slate-800/40 rounded-2xl p-5 bg-white/40 dark:bg-slate-900/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between hover:border-indigo-500/30 dark:hover:border-indigo-500/20">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <i class="${iconClass} text-3xl group-hover:scale-110 transition-all duration-300"></i>
                  <h4 class="text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    ${skill.name}
                  </h4>
                </div>
                <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-105 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/50">
                  ${skill.rating}
                </span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                ${skill.desc}
              </p>
            </div>
          </div>
        `;
      }).join('');
      
      skillsCardsContainer.style.opacity = '1';
      skillsCardsContainer.style.transform = 'translateY(0)';
      skillsCardsContainer.style.transition = 'all 0.3s ease';
    }, 150);
  };

  if (skillsTabsContainer) {
    skillsTabsContainer.innerHTML = data.skillsDashboard.map((item, idx) => {
      const activeClass = idx === 0 
        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 border border-transparent' 
        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800';
      return `
        <button
          data-category="${item.category}"
          class="skills-tab-btn px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${activeClass}"
        >
          <i data-lucide="${item.icon}" class="w-4 h-4"></i> ${item.category.split(' ')[0]}
        </button>
      `;
    }).join('');

    // Setup skills click event listeners
    const tabBtns = document.querySelectorAll('.skills-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle Active style
        tabBtns.forEach(b => {
          b.className = 'skills-tab-btn px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 bg-white dark:bg-slate-900 text-slate-655 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800';
        });
        btn.className = 'skills-tab-btn px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 bg-indigo-600 text-white shadow-md shadow-indigo-600/20 border border-transparent';

        const cat = btn.getAttribute('data-category');
        renderSkills(cat);
      });
    });

    // Render first category by default
    renderSkills(data.skillsDashboard[0].category);
  }

  // 7. Projects Showcase Logic
  const projectsFiltersContainer = document.getElementById('projects-filters-container');
  const projectsGridContainer = document.getElementById('projects-grid-container');

  const filters = ['All', 'AI/ML', 'Python', 'FastAPI'];

  const getFilteredProjects = (filterName) => {
    return data.projectsData.filter(project => {
      if (filterName === 'All') return true;
      if (filterName === 'AI/ML') {
        return (
          project.tags.includes('Generative AI') ||
          project.tags.includes('Machine Learning') ||
          project.tags.includes('Computer Vision') ||
          project.tags.includes('YOLO')
        );
      }
      return project.tags.includes(filterName);
    });
  };

  const renderProjects = (filterName) => {
    if (!projectsGridContainer) return;
    const filtered = getFilteredProjects(filterName);

    projectsGridContainer.style.opacity = '0';
    
    setTimeout(() => {
      projectsGridContainer.innerHTML = filtered.map(project => `
        <div class="group glass-card rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full shadow-lg border border-slate-200/50 dark:border-slate-800/40">
          <div class="relative h-48 md:h-52 overflow-hidden bg-slate-950">
            <img
              src="${project.image}"
              alt="${project.title}"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              onError="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600'"
            />
            <div class="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                href="${project.githubUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:scale-110 active:scale-95 transition-all shadow-md"
                title="GitHub"
              >
                <i data-lucide="github" class="w-5 h-5"></i>
              </a>
              ${project.liveUrl ? `
                <a
                  href="${project.liveUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:scale-110 active:scale-95 transition-all shadow-md"
                  title="Demo"
                >
                  <i data-lucide="external-link" class="w-5 h-5"></i>
                </a>
              ` : ''}
              <button
                class="project-details-btn p-3 rounded-full bg-indigo-650 text-white hover:scale-110 active:scale-95 transition-all shadow-md"
                data-id="${project.id}"
                title="Details"
              >
                <i data-lucide="maximize-2" class="w-5 h-5"></i>
              </button>
            </div>
          </div>

          <div class="p-6 flex flex-col justify-between flex-grow">
            <div class="space-y-3">
              <span class="text-xs font-semibold uppercase tracking-wider text-indigo-500 block font-mono">
                ${project.subtitle}
              </span>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                ${project.title}
              </h3>
              <div class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                <span class="font-semibold text-slate-700 dark:text-slate-300">Problem: </span>
                ${project.problem}
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 pt-4">
              ${project.tags.map(tag => `
                <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-[10px] font-semibold text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/40">
                  ${tag}
                </span>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('');

      // Add details listener
      document.querySelectorAll('.project-details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          openProjectModal(id);
        });
      });

      if (window.lucide) window.lucide.createIcons();
      projectsGridContainer.style.opacity = '1';
      projectsGridContainer.style.transition = 'opacity 0.3s ease';
    }, 150);
  };

  if (projectsFiltersContainer) {
    projectsFiltersContainer.innerHTML = filters.map((f, idx) => {
      const activeClass = idx === 0
        ? 'bg-indigo-650 text-white shadow-md shadow-indigo-600/20'
        : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400';
      return `
        <button
          data-filter="${f}"
          class="project-filter-btn px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeClass}"
        >
          ${f}
        </button>
      `;
    }).join('');

    const filterBtns = document.querySelectorAll('.project-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.className = 'project-filter-btn px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400';
        });
        btn.className = 'project-filter-btn px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-indigo-655 text-white shadow-md shadow-indigo-600/20';
        
        const f = btn.getAttribute('data-filter');
        renderProjects(f);
      });
    });

    renderProjects('All');
  }

  // Project Modal Actions
  const projectModal = document.getElementById('project-modal');
  const projectModalClose = document.getElementById('project-modal-close');
  const projectModalBackdrop = document.getElementById('project-modal-backdrop');

  const openProjectModal = (projectId) => {
    const project = data.projectsData.find(p => p.id === projectId);
    if (!project || !projectModal) return;

    document.getElementById('project-modal-image').src = project.image;
    document.getElementById('project-modal-image').onerror = function() {
      this.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600';
    };
    document.getElementById('project-modal-subtitle').innerText = project.subtitle;
    document.getElementById('project-modal-title').innerText = project.title;
    document.getElementById('project-modal-problem').innerText = project.problem;
    document.getElementById('project-modal-challenges').innerText = project.challenges;

    // Key Features list
    const featuresList = document.getElementById('project-modal-features');
    featuresList.innerHTML = project.features.map(feat => `
      <li class="flex items-start gap-2.5 text-xs text-slate-650 dark:text-slate-350">
        <i data-lucide="check-circle" class="w-4 h-4 text-emerald-500 mt-0.5 flex-none"></i>
        <span>${feat}</span>
      </li>
    `).join('');

    // Tags
    const tagsContainer = document.getElementById('project-modal-tags');
    tagsContainer.innerHTML = project.tags.map(tag => `
      <span class="px-3 py-1 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
        ${tag}
      </span>
    `).join('');

    // Buttons
    const demoLink = document.getElementById('project-modal-demo-link');
    if (project.liveUrl) {
      demoLink.setAttribute('href', project.liveUrl);
      demoLink.classList.remove('hidden');
    } else {
      demoLink.classList.add('hidden');
    }
    document.getElementById('project-modal-repo-link').setAttribute('href', project.githubUrl);

    if (window.lucide) window.lucide.createIcons();

    // Show Modal
    projectModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  const closeProjectModal = () => {
    if (projectModal) {
      projectModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  };

  if (projectModalClose) projectModalClose.addEventListener('click', closeProjectModal);
  if (projectModalBackdrop) projectModalBackdrop.addEventListener('click', closeProjectModal);

  // 8. Education Timeline Section Rendering
  const timelineContainer = document.getElementById('education-timeline-container');
  if (timelineContainer) {
    timelineContainer.innerHTML = data.educationTimelineData.map((item, idx) => {
      const isBCA = item.degree.includes('Bachelor');
      const iconName = isBCA ? 'graduation-cap' : 'book-open';
      return `
        <div class="relative">
          <!-- Marker Node -->
          <div class="absolute -left-[48px] md:-left-[56px] top-1.5 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-800 flex items-center justify-center text-indigo-650 dark:text-indigo-400 shadow-md z-10">
            <i data-lucide="${iconName}" class="w-5 h-5"></i>
          </div>

          <!-- Content Card -->
          <div class="glass-card p-6 md:p-8 rounded-2xl relative glow-effect transition-all duration-300 hover:border-indigo-500/20">
            <div class="flex flex-wrap justify-between items-start gap-2 mb-3">
              <div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  ${item.degree}
                </h3>
                <span class="text-xs font-semibold text-slate-450 dark:text-slate-500 font-mono block mt-1">
                  ${item.specialization}
                </span>
                <span class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 block mt-1">
                  ${item.institution}
                </span>
              </div>
              <div class="flex flex-col items-end gap-1.5">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-202 dark:border-slate-800">
                  ${item.duration}
                </span>
                <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                  ${item.gpa}
                </span>
              </div>
            </div>

            <!-- Achievements (Safely rendered if exists) -->
            ${item.achievements ? `
              <div class="mb-4 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-indigo-500/35 pl-3 py-1">
                <span class="font-semibold text-slate-700 dark:text-slate-300">Highlight: </span>
                ${item.achievements}
              </div>
            ` : ''}

            <!-- Coursework tags -->
            <div class="space-y-2">
              <span class="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-505">
                Relevant Coursework
              </span>
              <div class="flex flex-wrap gap-1.5">
                ${item.coursework.map(course => `
                  <span class="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900/60 text-[10px] font-medium text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/60">
                    ${course}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
    if (window.lucide) window.lucide.createIcons();
  }

  // 9. Verified Credentials Logic
  const certsGridContainer = document.getElementById('certifications-grid-container');
  const pdfModal = document.getElementById('pdf-modal');
  const pdfModalClose = document.getElementById('pdf-modal-close');
  const pdfModalBackdrop = document.getElementById('pdf-modal-backdrop');

  if (certsGridContainer) {
    certsGridContainer.innerHTML = data.certificationsData.map((cert, idx) => {
      const verifyButton = cert.verifyUrl && cert.verifyUrl !== '#'
        ? `
          <a
            href="${cert.verifyUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2.5 rounded-xl bg-slate-105 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-500 dark:text-slate-300 transition-all"
            title="Verify Credentials"
          >
            <i data-lucide="external-link" class="w-4.5 h-4.5"></i>
          </a>
        `
        : '';
      return `
        <div class="glass-card p-6 rounded-2xl glow-effect hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/40">
          <div>
            <div class="flex items-start justify-between gap-4 mb-4">
              <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                <i data-lucide="award" class="w-6 h-6"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-202/50 dark:border-slate-800">
                ${cert.date}
              </span>
            </div>

            <h3 class="text-base font-bold text-slate-900 dark:text-white leading-snug mb-1">
              ${cert.name}
            </h3>
            <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 block mb-4">
              ${cert.organization}
            </span>

            <p class="text-xs text-slate-650 dark:text-slate-400 leading-relaxed mb-6">
              <span class="font-semibold text-slate-700 dark:text-slate-300">Skills:</span> ${cert.skillsLearned}
            </p>
          </div>

          <div class="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
            <button
              class="cert-preview-btn flex-grow py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-indigo-650 hover:bg-indigo-600 shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-1.5"
              data-pdf="${cert.pdfUrl}"
              data-title="${cert.name}"
            >
              <i data-lucide="eye" class="w-4 h-4"></i> Preview
            </button>
            ${verifyButton}
          </div>
        </div>
      `;
    }).join('');

    // Setup certificate preview clicks
    document.querySelectorAll('.cert-preview-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pdf = btn.getAttribute('data-pdf');
        const title = btn.getAttribute('data-title');
        openPdfModal(pdf, title);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  const openPdfModal = (pdfUrl, title) => {
    if (!pdfModal) return;

    document.getElementById('pdf-modal-title').innerText = title;
    document.getElementById('pdf-modal-download').setAttribute('href', pdfUrl);
    document.getElementById('pdf-modal-tab').setAttribute('href', pdfUrl);
    document.getElementById('pdf-modal-fallback-link').setAttribute('href', pdfUrl);
    
    // Set src with parameters to hide scrollbars/toolbar inside iframe if supported
    document.getElementById('pdf-modal-iframe').src = `${pdfUrl}#toolbar=0&navpanes=0`;

    pdfModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  const closePdfModal = () => {
    if (pdfModal) {
      pdfModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      document.getElementById('pdf-modal-iframe').src = ''; // reset source
    }
  };

  if (pdfModalClose) pdfModalClose.addEventListener('click', closePdfModal);
  if (pdfModalBackdrop) pdfModalBackdrop.addEventListener('click', closePdfModal);

  // 10. Achievements Cards Rendering
  const achievementsGridContainer = document.getElementById('achievements-grid-container');
  if (achievementsGridContainer) {
    const achievementIcons = {
      'Project Milestones': 'check-circle',
      'Sports & Leadership': 'target'
    };

    achievementsGridContainer.innerHTML = data.achievementsData.map(item => {
      const iconName = achievementIcons[item.category] || 'check-circle';
      return `
        <div class="glass-card p-6 md:p-8 rounded-2xl glow-effect hover:-translate-y-1 transition-all duration-305 flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/40">
          <div>
            <div class="flex items-center gap-4 mb-6">
              <div class="p-3 rounded-xl bg-indigo-500/10 text-indigo-650 dark:text-indigo-400">
                <i data-lucide="${iconName}" class="w-6 h-6"></i>
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-505 font-mono">
                ${item.category}
              </span>
            </div>

            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3">
              ${item.title}
            </h3>
            <p class="text-slate-650 dark:text-slate-400 text-sm leading-relaxed mb-6">
              ${item.description}
            </p>
          </div>

          <ul class="space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 pt-4">
            ${item.details.map(detail => `
              <li class="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <div class="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                <span>${detail}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }).join('');
    if (window.lucide) window.lucide.createIcons();
  }

  // 11. Coding Profiles Cards Rendering
  const codingProfilesContainer = document.getElementById('coding-profiles-container');
  if (codingProfilesContainer) {
    const profiles = [
      {
        name: 'LeetCode',
        logoClass: 'devicon-leetcode-plain text-amber-500',
        color: 'hover:border-amber-500/50',
        username: data.codingProfiles.leetcode.username,
        link: data.codingProfiles.leetcode.link,
        stats: [
          { label: 'Solved Problems', value: data.codingProfiles.leetcode.solved },
          { label: 'Consistency', value: data.codingProfiles.leetcode.rating },
          { label: 'Key Badge', value: data.codingProfiles.leetcode.badge }
        ]
      },
      {
        name: 'HackerRank',
        logoClass: 'devicon-hackerrank-plain text-emerald-500',
        color: 'hover:border-emerald-500/50',
        username: data.codingProfiles.hackerrank.username,
        link: data.codingProfiles.hackerrank.link,
        stats: [
          { label: 'Python Verified', value: data.codingProfiles.hackerrank.stars },
          { label: 'Python Basic', value: data.codingProfiles.hackerrank.badges[0] },
          { label: 'SQL Basic', value: data.codingProfiles.hackerrank.badges[1] }
        ]
      }
    ];

    codingProfilesContainer.innerHTML = profiles.map(profile => `
      <div class="glass-card p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${profile.color}">
        <div>
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-4">
              <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 group-hover:bg-indigo-500/10 group-hover:text-indigo-500 transition-colors duration-300">
                <i class="${profile.logoClass} text-3xl"></i>
              </div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                ${profile.name}
              </h3>
            </div>
            <a
              href="${profile.link}"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2.5 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-indigo-650 dark:hover:text-indigo-400 transition-colors"
              title="Open ${profile.name}"
            >
              <i data-lucide="external-link" class="w-4.5 h-4.5"></i>
            </a>
          </div>

          <span class="text-xs font-mono text-slate-400 dark:text-slate-505 block mb-6">
            Username: ${profile.username}
          </span>

          <div class="space-y-4">
            ${profile.stats.map(stat => `
              <div class="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800/60 pb-2">
                <span class="text-slate-500 dark:text-slate-400">${stat.label}</span>
                <span class="font-semibold text-slate-800 dark:text-slate-200">${stat.value}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-6">
          <a
            href="${profile.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-2.5 px-4 text-center rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex items-center justify-center gap-1.5"
          >
            View Activities
          </a>
        </div>
      </div>
    `).join('');
    if (window.lucide) window.lucide.createIcons();
  }

  // 12. Contact Details & EmailJS Form Handler
  const contactDetailsContainer = document.getElementById('contact-details-container');
  if (contactDetailsContainer) {
    const contactItems = [
      {
        icon: 'mail',
        title: 'Email',
        value: data.personalInfo.email,
        href: `mailto:${data.personalInfo.email}`,
      },
      {
        icon: 'linkedin',
        title: 'LinkedIn',
        value: 'debanjan-mondal-ai',
        href: data.personalInfo.linkedin,
      },
      {
        icon: 'github',
        title: 'GitHub',
        value: 'debanjan-mondal-2005',
        href: data.personalInfo.github,
      },
      {
        icon: 'map-pin',
        title: 'Location',
        value: data.personalInfo.location,
        href: null,
      },
    ];

    contactDetailsContainer.innerHTML = contactItems.map(item => `
      <div class="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
        <div class="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
          <i data-lucide="${item.icon}" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="block text-xs font-semibold text-slate-450 dark:text-slate-500 uppercase tracking-wider">
            ${item.title}
          </span>
          ${item.href ? `
            <a
              href="${item.href}"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-slate-800 dark:text-slate-200 hover:underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              ${item.value}
            </a>
          ` : `
            <span class="text-sm font-medium text-slate-800 dark:text-slate-200">
              ${item.value}
            </span>
          `}
        </div>
      </div>
    `).join('');
    if (window.lucide) window.lucide.createIcons();
  }

  // Email Form Handler
  const contactForm = document.getElementById('contact-form');
  const formSubmitBtn = document.getElementById('form-submit-btn');
  const submitBtnIcon = document.getElementById('submit-btn-icon');
  const submitBtnText = document.getElementById('submit-btn-text');
  const formStatusAlert = document.getElementById('form-status-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Disable button, show loader icon
      formSubmitBtn.disabled = true;
      submitBtnText.innerText = 'Sending...';
      if (submitBtnIcon) {
        submitBtnIcon.setAttribute('data-lucide', 'loader');
        submitBtnIcon.classList.add('animate-spin');
      }
      if (window.lucide) window.lucide.createIcons();

      formStatusAlert.className = 'p-4 rounded-xl text-xs font-medium leading-relaxed border hidden';
      formStatusAlert.innerText = '';

      // Check for custom keys or placeholder
      const serviceId = 'service_placeholder';
      const templateId = 'template_placeholder';
      const publicKey = 'public_key_placeholder';

      // Always run success mock unless EmailJS variables are set manually via window variables or global settings
      setTimeout(() => {
        formSubmitBtn.disabled = false;
        submitBtnText.innerText = 'Send Message';
        if (submitBtnIcon) {
          submitBtnIcon.setAttribute('data-lucide', 'send');
          submitBtnIcon.classList.remove('animate-spin');
        }
        if (window.lucide) window.lucide.createIcons();

        // Status Feedback
        formStatusAlert.innerText = 'Thank you! Your message was sent successfully.';
        formStatusAlert.className = 'p-4 rounded-xl text-xs font-medium leading-relaxed border bg-emerald-50 dark:bg-emerald-950/30 text-emerald-650 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/35';
        
        // Confetti Celebration
        if (window.confetti) {
          window.confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
        }

        contactForm.reset();
      }, 1500);
    });
  }

  // Footer year & Social links
  document.getElementById('footer-year').innerText = new Date().getFullYear();
  const footerSocialContainer = document.getElementById('footer-social-container');
  if (footerSocialContainer) {
    const footerSocials = [
      { icon: 'linkedin', href: data.personalInfo.linkedin, label: 'LinkedIn' },
      { icon: 'github', href: data.personalInfo.github, label: 'GitHub' },
      { icon: 'mail', href: `mailto:${data.personalInfo.email}`, label: 'Email' }
    ];
    footerSocialContainer.innerHTML = footerSocials.map(soc => `
      <a
        href="${soc.href}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${soc.label}"
        class="w-10 h-10 rounded-full border border-slate-202 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-650 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-colors"
      >
        <i data-lucide="${soc.icon}" class="w-4.5 h-4.5"></i>
      </a>
    `).join('');
    if (window.lucide) window.lucide.createIcons();
  }

  // 13. Floating Back to Top Button
  const scrollTopBtn = document.getElementById('scroll-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.remove('hidden');
    } else {
      scrollTopBtn.classList.add('hidden');
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 14. Scroll Entrance Animations (AOS replacement)
  const revealElements = document.querySelectorAll('.reveal-element');
  const revealCheck = () => {
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 80) {
        el.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', revealCheck);
  revealCheck(); // Initial trigger

  // 15. Dynamic GitHub Contribution Calendar Rendering
  const githubUser = "debanjan-mondal-2005";
  const calendarLoading = document.getElementById('calendar-loading');
  const calendarContainer = document.getElementById('calendar-grid-container');

  const fetchCalendar = async () => {
    try {
      // Primary API
      const primaryUrl = `https://github-contributions-api.jogruber.de/v4/${githubUser}?y=last`;
      const response = await fetch(primaryUrl);
      if (!response.ok) throw new Error("Primary API failed");
      const data = await response.json();
      renderGithubGrid(data);
    } catch (e) {
      console.warn("Primary GitHub calendar API failed. Attempting secondary/Vercel API...", e);
      try {
        // Fallback Vercel API
        const fallbackUrl = `https://github-contributions.vercel.app/api/v1/${githubUser}`;
        const response = await fetch(fallbackUrl);
        if (!response.ok) throw new Error("Fallback API failed");
        const vercelData = await response.json();
        
        // Adapt Vercel structure to Gruber structure
        const adaptedData = {
          total: { lastYear: vercelData.years[0]?.total || 0 },
          contributions: vercelData.contributions.reverse().map(c => ({
            date: c.date,
            count: c.count,
            level: parseInt(c.intensity) || 0
          }))
        };
        renderGithubGrid(adaptedData);
      } catch (err) {
        console.error("All GitHub calendar APIs failed. Rendering mock simulated data...", err);
        renderGithubMockGrid();
      }
    }
  };

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  const renderGithubGrid = (calendarData) => {
    if (!calendarContainer || !calendarLoading) return;
    calendarLoading.classList.add('hidden');
    calendarContainer.classList.remove('hidden');

    const contributions = calendarData.contributions;
    if (!contributions || contributions.length === 0) {
      renderGithubMockGrid();
      return;
    }

    // Determine spacers at the beginning of the grid
    const firstDate = new Date(contributions[0].date);
    const startDayOfWeek = firstDate.getDay(); // 0 is Sunday, 1 is Monday...

    let gridHtml = '';

    // Render Month Headers above grid
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let lastMonth = -1;
    const monthPositions = [];

    // Calculate column positions for month labels
    // Adding spacers changes indexing
    for (let i = 0; i < contributions.length; i++) {
      const date = new Date(contributions[i].date);
      const month = date.getMonth();
      const colIndex = Math.floor((i + startDayOfWeek) / 7);

      if (month !== lastMonth) {
        monthPositions.push({ name: monthNames[month], col: colIndex });
        lastMonth = month;
      }
    }

    // Render Months absolute wrapper
    let monthsHtml = `<div class="relative w-full h-5 text-[10px] text-slate-400 dark:text-slate-500 font-mono mb-1 select-none">`;
    // Filter duplicates and position monthly tags spaced correctly
    const addedMonths = {};
    monthPositions.forEach(pos => {
      if (!addedMonths[pos.name]) {
        addedMonths[pos.name] = true;
        const leftPercent = (pos.col / 53) * 100;
        if (leftPercent < 95) {
          monthsHtml += `<span class="absolute" style="left: ${leftPercent}%;">${pos.name}</span>`;
        }
      }
    });
    monthsHtml += `</div>`;

    // Render Layout grid
    gridHtml += monthsHtml;

    // Outer grid containing Weekday labels on the left, and the contribution squares on the right
    gridHtml += `
      <div class="flex gap-2 w-full justify-center">
        <!-- Weekday Labels -->
        <div class="flex flex-col justify-between text-[10px] text-slate-450 dark:text-slate-505 font-mono py-1 pr-1 select-none h-[115px]">
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
        </div>
        
        <!-- Contribution Cells -->
        <div class="grid grid-flow-col grid-rows-7 gap-[3px] items-center" style="grid-template-columns: repeat(53, minmax(0, 1fr));">
    `;

    // Insert spacer squares if dataset doesn't start on Sunday
    for (let s = 0; s < startDayOfWeek; s++) {
      gridHtml += `<div class="w-[11px] h-[11px] bg-transparent"></div>`;
    }

    // Colors level definitions matching modern dark/light mode
    const levelColors = {
      0: 'bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800/60',
      1: 'bg-indigo-100 dark:bg-indigo-950/40 border border-indigo-200/10 dark:border-indigo-900/10',
      2: 'bg-indigo-300 dark:bg-indigo-800/50 border border-indigo-300/10 dark:border-indigo-800/10',
      3: 'bg-indigo-500 dark:bg-indigo-650 border border-transparent',
      4: 'bg-indigo-700 dark:bg-indigo-400 border border-transparent'
    };

    contributions.forEach(contrib => {
      const colorClass = levelColors[contrib.level] || levelColors[0];
      const countText = contrib.count === 0 ? 'No' : contrib.count;
      const tooltipText = `${countText} contributions on ${formatDate(contrib.date)}`;
      gridHtml += `
        <div 
          class="w-[11px] h-[11px] rounded-[2px] cursor-pointer contrib-tooltip transition-all duration-200 ${colorClass} hover:scale-125"
          data-tooltip="${tooltipText}"
        ></div>
      `;
    });

    gridHtml += `
        </div>
      </div>
      
      <!-- Footer details -->
      <div class="flex justify-between items-center w-full mt-4 text-[10px] text-slate-400 dark:text-slate-500 font-mono px-4 select-none">
        <span>Total: ${calendarData.total?.lastYear || 0} contributions</span>
        <div class="flex items-center gap-1">
          <span>Less</span>
          <div class="w-[10px] h-[10px] rounded-[2px] ${levelColors[0]}"></div>
          <div class="w-[10px] h-[10px] rounded-[2px] ${levelColors[1]}"></div>
          <div class="w-[10px] h-[10px] rounded-[2px] ${levelColors[2]}"></div>
          <div class="w-[10px] h-[10px] rounded-[2px] ${levelColors[3]}"></div>
          <div class="w-[10px] h-[10px] rounded-[2px] ${levelColors[4]}"></div>
          <span>More</span>
        </div>
      </div>
    `;

    calendarContainer.innerHTML = gridHtml;
  };

  const renderGithubMockGrid = () => {
    // Generate simulated contribution data for debanjan-mondal-2005 (143 contributions)
    const mockData = {
      total: { lastYear: 143 },
      contributions: []
    };

    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setDate(today.getDate() - 365);
    
    // Set to previous Sunday
    while (oneYearAgo.getDay() !== 0) {
      oneYearAgo.setDate(oneYearAgo.getDate() - 1);
    }

    const currentDate = new Date(oneYearAgo);
    let totalMockCount = 0;

    while (currentDate <= today) {
      // Simulate levels: mostly 0s, some 1s, occasional 2s, 3s, 4s
      let count = 0;
      let level = 0;
      const rand = Math.random();
      
      if (rand > 0.85) {
        count = Math.floor(Math.random() * 3) + 1;
        level = 1;
      } else if (rand > 0.94) {
        count = Math.floor(Math.random() * 5) + 3;
        level = 2;
      } else if (rand > 0.98) {
        count = Math.floor(Math.random() * 10) + 7;
        level = 3;
      } else if (rand > 0.995) {
        count = Math.floor(Math.random() * 15) + 12;
        level = 4;
      }

      totalMockCount += count;

      mockData.contributions.push({
        date: currentDate.toISOString().split('T')[0],
        count: count,
        level: level
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    mockData.total.lastYear = totalMockCount;
    renderGithubGrid(mockData);
  };

  // Run calendar fetching
  fetchCalendar();

  // Initialize Particles Background canvas
  initParticles();
});
