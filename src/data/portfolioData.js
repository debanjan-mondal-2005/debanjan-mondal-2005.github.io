// Centralized data file for portfolio contents - Redesigned for AI/ML student branding

export const personalInfo = {
  name: "Debanjan Mondal",
  tagline: "Aspiring AI Engineer",
  headline: "Aspiring AI Engineer Focused on Machine Learning, Computer Vision, and Generative AI",
  subtitles: [
    "BCA Student | AI & Machine Learning Enthusiast",
    "Building Intelligent Systems with Machine Learning",
    "AI & Machine Learning Student Building Real-World Applications"
  ],
  valueProp: "BCA student specializing in AI/ML, combining theoretical foundations in statistics and linear algebra with practical engineering experience in deep learning, computer vision, and NLP.",
  email: "debanjan.mondal.ai@gmail.com",
  location: "India",
  resumeUrl: "assets/Debanjan_Mondal_Resume.pdf",
  github: "https://github.com/debanjan-mondal-2005",
  linkedin: "https://www.linkedin.com/in/debanjan-mondal-ai/",
  university: "Lovely Professional University",
  degree: "Bachelor's of Computer Application (BCA)",
  specialization: "Artificial Intelligence and Machine Learning",
  cgpa: "9.12 / 10",
  gradYear: "2027",
  careerObjective: "Seeking a summer 2026 AI/ML internship to apply Python, TensorFlow, and computer vision skills to production-grade applications.",
  availability: "🟢 Available for Summer 2026 Internships & Research Collaborations",
  interests: ["Deep Learning & Neural Networks", "Computer Vision (YOLO, OpenCV)", "Generative AI & LLMs (RAG, Agents)", "MLOps & Cloud Deployments"]
};

export const statsData = [
  { label: "Projects Built", value: 5, prefix: "", suffix: "+" },
  { label: "Certifications", value: 7, prefix: "", suffix: "" },
  { label: "LeetCode Solved", value: 180, prefix: "", suffix: "+" },
  { label: "Current CGPA", value: 9.12, prefix: "", suffix: "" }
];

export const journeyTimeline = [
  {
    id: "class-10",
    year: "2021",
    title: "Class 10 Matriculation",
    institution: "St. Thomas Academy",
    achievement: "Scored 92% Aggregate",
    description: "Developed strong analytical skills, laying the foundation for algebraic logic and basic programming principles."
  },
  {
    id: "class-12",
    year: "2023",
    title: "Class 12 Higher Secondary Education",
    institution: "St. Thomas Academy",
    achievement: "Scored 90% (Science Stream - PCM)",
    description: "Focused on physics, chemistry, and advanced mathematics (calculus, probability, and linear algebra), which are critical for machine learning algorithms."
  },
  {
    id: "bca-start",
    year: "2024",
    title: "Started BCA in AI & ML",
    institution: "Lovely Professional University",
    achievement: "Admitted on Merit-Based Scholarship",
    description: "Enrolled in the specialized Bachelor of Computer Applications program to dive directly into computer science and artificial intelligence core concepts."
  },
  {
    id: "python-mastery",
    year: "2024",
    title: "Mastered Python & Core DSA",
    institution: "Self-Guided & LPU Coursework",
    achievement: "5-Star Python Developer on HackerRank",
    description: "Built command-line tools and object-oriented scripts while mastering standard data structures and algorithms."
  },
  {
    id: "first-ml",
    year: "2024",
    title: "Built First ML & CV Project",
    institution: "LPU Hackathon Entry",
    achievement: "OpenCV Smart Billing System Prototype",
    description: "Wrote real-time object classification scripts using OpenCV and deployed a Tkinter desktop application to simulate a retail terminal."
  },
  {
    id: "deep-dive",
    year: "2025",
    title: "Deep Dive into Deep Learning & NLP",
    institution: "IBM & Coursera Specializations",
    achievement: "Trained Neural Networks on Cloud Environments",
    description: "Designed, trained, and optimized CNNs for image classification and implemented NLP tokenizers, word embeddings, and RNN pipelines."
  },
  {
    id: "current-goals",
    year: "2026-Present",
    title: "Generative AI & Internship Readiness",
    institution: "Oracle University & LPU Labs",
    achievement: "OCI Generative AI Certified Professional",
    description: "Conducting experiments with Retrieval-Augmented Generation (RAG) and LLM engineering. Actively seeking internship opportunities."
  }
];

export const skillsDashboard = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python", rating: "Expert", desc: "Primary language for ML, scripting, and backend models." },
      { name: "SQL", rating: "Advanced", desc: "Database querying, joining, and complex data aggregations." },
      { name: "C++", rating: "Intermediate", desc: "Object-oriented programming and core memory algorithms." },
      { name: "Java", rating: "Intermediate", desc: "Enterprise coding foundations and multi-threading basics." },
      { name: "C", rating: "Intermediate", desc: "Fundamentals of pointers, structures, and low-level logic." }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "brain",
    skills: [
      { name: "Scikit-Learn", rating: "Expert", desc: "Classification, regression, regression trees, and preprocessing." },
      { name: "Pandas & NumPy", rating: "Expert", desc: "Data manipulation, feature engineering, vector matrices." },
      { name: "TensorFlow & Keras", rating: "Advanced", desc: "Neural networks training, optimization, and transfer learning." },
      { name: "OpenCV", rating: "Advanced", desc: "Image thresholding, filtering, contours, and real-time object tracking." },
      { name: "PyTorch", rating: "Intermediate", desc: "Deep learning modeling and tensor computing pipelines." }
    ]
  },
  {
    category: "Web Development",
    icon: "web",
    skills: [
      { name: "Flask & FastAPI", rating: "Advanced", desc: "Developing secure REST APIs to serve ML prediction models." },
      { name: "React", rating: "Advanced", desc: "Building modular, state-driven, interactive client UI dashboards." },
      { name: "HTML5 & CSS3", rating: "Expert", desc: "Semantic structures, Flexbox/Grid layouts, and animations." },
      { name: "JavaScript", rating: "Advanced", desc: "Asynchronous fetch operations, DOM hooks, and ES6+ standards." }
    ]
  },
  {
    category: "Databases",
    icon: "database",
    skills: [
      { name: "MySQL", rating: "Advanced", desc: "Relational database models, indexes, schemas, and queries." },
      { name: "MongoDB", rating: "Intermediate", desc: "NoSQL JSON document stores, aggregations, and CRUD queries." }
    ]
  },
  {
    category: "Tools & Cloud Platforms",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", rating: "Advanced", desc: "Version control workflows, branches, pulls, and actions." },
      { name: "Docker", rating: "Intermediate", desc: "Containerizing python models for production independence." },
      { name: "VS Code & Jupyter", rating: "Expert", desc: "Primary development editors and exploratory data analyses." }
    ]
  }
];

export const projectsData = [
  {
    id: "careermind-ai",
    title: "CareerMind AI",
    subtitle: "AI-Powered Career Advisor & Roadmap Generator",
    problem: "Job seekers struggle to identify precise skill gaps between their resumes and target job profiles, leading to inefficient applications.",
    features: [
      "Dynamic PDF resume parsing using Python heuristic extraction libraries.",
      "Multi-agent AI analysis to compare extracted skills with target job requirements.",
      "Generates step-by-step learning roadmaps with targeted recommendations."
    ],
    challenges: "Optimized parsing speed for heavy multi-column resumes. Resolved extraction latency by implementing caching layers, reducing response times by 35%.",
    image: "assets/project1.jpg",
    tags: ["Generative AI", "NLP", "Python", "Flask", "React", "Vector DB"],
    liveUrl: "https://github.com/debanjan-mondal-2005",
    githubUrl: "https://github.com/debanjan-mondal-2005"
  },
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction",
    subtitle: "Predictive Analytics & Model Interpretability Engine",
    problem: "Subscription businesses fail to recognize early customer attrition indicators, leading to lost revenue and customer acquisition cost overheads.",
    features: [
      "Trained classification models (XGBoost, Random Forest) on a dataset of 10,000+ customer records.",
      "Integrated SHAP values to visualize and explain the individual factors behind each prediction.",
      "Built interactive Streamlit dashboards representing feature importances."
    ],
    challenges: "Balanced highly skewed churn classes using SMOTE. Hyperparameter tuning using GridSearch achieved 96% accuracy and 94% recall score.",
    image: "assets/project2.jpg",
    tags: ["Machine Learning", "XGBoost", "Python", "SHAP", "Streamlit", "Pandas"],
    liveUrl: "https://github.com/debanjan-mondal-2005",
    githubUrl: "https://github.com/debanjan-mondal-2005"
  },
  {
    id: "smart-billing-opencv",
    title: "OpenCV Smart Billing System",
    subtitle: "Computer Vision Self-Checkout Assistant",
    problem: "Traditional barcode self-checkouts are slow and require manual scanning of every individual grocery item, increasing transaction queues.",
    features: [
      "Real-time object detection using YOLO v8 and custom OpenCV image thresholding.",
      "Recognizes multiple products within the camera frame simultaneously.",
      "Calculates item weights and queries database to update virtual billing carts."
    ],
    challenges: "Addressed variable lighting conditions and overlapping items. Fine-tuned the YOLO model and wrote robust custom bounding box overlapping calculations to achieve 94% detection accuracy.",
    image: "assets/project3.jpg",
    tags: ["Computer Vision", "OpenCV", "YOLO v8", "PyTorch", "Python", "Tkinter"],
    liveUrl: "https://github.com/debanjan-mondal-2005",
    githubUrl: "https://github.com/debanjan-mondal-2005"
  },
  {
    id: "hospital-billing",
    title: "Hospital Billing System",
    subtitle: "Relational Database Records & Invoice Platform",
    problem: "Healthcare clinics struggle to manage complex patient billing variables, ward allotments, and insurance deductions efficiently.",
    features: [
      "Designed a robust relational database schema using SQLite to log patients, wards, and treatments.",
      "Calculates billing statements automatically based on room days, diagnostics, and insurance rules.",
      "Provides analytical dashboards representing monthly hospital revenues and admissions."
    ],
    challenges: "Formulated database transactions to prevent double-booking of beds. Built integrity constraints ensuring automatic database rolls in case of server timeouts.",
    image: "assets/project4.jpg",
    tags: ["React", "SQLite", "Python", "Flask", "Data Visualization", "Tailwind CSS"],
    liveUrl: "https://github.com/debanjan-mondal-2005",
    githubUrl: "https://github.com/debanjan-mondal-2005"
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    subtitle: "AI-Driven Personal Budget Forecasting Application",
    problem: "Users track their expenses manually but lack forward-looking insights to predict future spending patterns or prevent overspending.",
    features: [
      "Logs multi-category expenses and visualizes transaction timelines using Chart.js.",
      "Incorporates a statistical Time-Series forecasting model to project future monthly costs.",
      "Sends automatic budgeting alerts based on predicted expense threshholds."
    ],
    challenges: "Adjusted forecasting equations to account for sudden anomalous expense spikes (e.g. medical emergencies) by applying smoothing weights.",
    image: "assets/project2.jpg",
    tags: ["React", "Chart.js", "Python", "FastAPI", "Time-Series", "Tailwind CSS"],
    liveUrl: "https://github.com/debanjan-mondal-2005",
    githubUrl: "https://github.com/debanjan-mondal-2005"
  }
];

export const educationTimelineData = [
  {
    degree: "Bachelor's of Computer Application (BCA)",
    specialization: "Specializing in Artificial Intelligence and Machine Learning",
    institution: "Lovely Professional University",
    duration: "2024 - 2027 (Expected)",
    gpa: "CGPA: 9.12 / 10",
    achievements: "Maintain top 5% rank in the cohort. Awarded merit-based academic scholarship.",
    coursework: ["Machine Learning", "Probability & Statistics", "Data Structures & Algorithms", "Database Management Systems", "Python Programming", "Linear Algebra"]
  },
  {
    degree: "Higher Secondary Certificate (Class 12)",
    specialization: "Science Stream (PCM - Physics, Chemistry, Mathematics)",
    institution: "St. Thomas Academy",
    duration: "2021 - 2023",
    gpa: "Percentage: 90%",
    achievements: "Secured distinction rank. Led the school computer club and science exhibition team.",
    coursework: ["Advanced Calculus", "Matrix Algebra", "Physics", "Chemistry", "Computer Science (C++)"]
  },
  {
    degree: "Secondary School Certificate (Class 10)",
    specialization: "General Education",
    institution: "St. Thomas Academy",
    duration: "2019 - 2021",
    gpa: "Percentage: 92%",
    achievements: "Awarded Certificate of Merit. Won first prize in inter-school science quiz.",
    coursework: ["Mathematics", "Science", "Computer Applications", "Social Sciences"]
  }
];

export const certificationsData = [
  {
    name: "OCI 2024 Generative AI Certified Professional",
    organization: "Oracle University",
    date: "2024",
    skillsLearned: "Large Language Models, Retrieval-Augmented Generation (RAG), Fine-Tuning LLMs, OCI AI Integration.",
    verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=205BFBD9DD56BA8E2E52ADE5BDFE9B534CBDDA117F5EB09F9C8C3558E7DD75DA",
    pdfUrl: "assets/certificates/oracle_generative_ai_certificate.pdf"
  },
  {
    name: "Machine Learning with Python - Level 1",
    organization: "IBM via Lovely Professional University",
    date: "October 2025",
    skillsLearned: "Regression, Decision Trees, SVM, KMeans, Recommendations algorithms, preprocessing.",
    verifyUrl: "#",
    pdfUrl: "assets/certificates/IBM ML0101EN Certificate _ Lovely Professional University.pdf"
  },
  {
    name: "Python for Data Science, AI & Development",
    organization: "IBM via Lovely Professional University",
    date: "October 2025",
    skillsLearned: "NumPy, Pandas, file handling, Web scraping, Matplotlib visualisations, REST APIs.",
    verifyUrl: "#",
    pdfUrl: "assets/certificates/IBMCEP CEPYT1IN Certificate _ Lovely Professional University.pdf"
  },
  {
    name: "Enterprise Design Thinking Practitioner",
    organization: "IBM via Lovely Professional University",
    date: "2025",
    skillsLearned: "User Research, Empathy mapping, ideation, prototyping, collaborative problem solving.",
    verifyUrl: "#",
    pdfUrl: "assets/certificates/IBMCEP CEDV1IN Certificate _ Lovely Professional University.pdf"
  },
  {
    name: "Python Essentials 1 (PCAP)",
    organization: "Python Institute / Cisco Academy",
    date: "September 2024",
    skillsLearned: "Basic syntax, variables, lists, dicts, logic controls, arithmetic operators, functions.",
    verifyUrl: "#",
    pdfUrl: "assets/certificates/Python_Essentials_1_Badge20240914-8-fslflg.pdf"
  },
  {
    name: "HackerRank Python (Basic)",
    organization: "HackerRank",
    date: "2024",
    skillsLearned: "Python fundamentals, logic scripts, core data structures evaluation, loops.",
    verifyUrl: "https://www.hackerrank.com/certificates/python_basic",
    pdfUrl: "assets/certificates/python_basic_hackerrank.pdf"
  },
  {
    name: "HackerRank SQL (Basic)",
    organization: "HackerRank",
    date: "2024",
    skillsLearned: "SQL syntax queries, filters, basic JOINS, aggregates, relational databases functions.",
    verifyUrl: "https://www.hackerrank.com/certificates/sql_basic",
    pdfUrl: "assets/certificates/sql_basic_hackerrank.pdf"
  }
];

export const achievementsData = [
  {
    category: "Academic Accomplishments",
    title: "Merit Scholar & Seminar Presenter",
    description: "Maintained a high academic standard (CGPA 9.12) throughout the BCA program, securing merit-based scholarship awards. Delivered seminar presentation on 'RAG Architectures and Vector Databases' to 100+ peers.",
    details: ["Top 5% rank in LPU BCA cohort", "Delivered RAG and Vector DB seminar presentation", "Merit-based university scholarship winner"]
  },
  {
    category: "Project Milestones",
    title: "Hackathon Finalist & ML Deploys",
    description: "Represented university in tech contests, showcase models. Deployed fully responsive prediction systems using Python backends and modern web frontends.",
    details: ["LPU Mini-Hackathon finalist", "Tuning model performance to 96% classification accuracy", "Deployed OpenCV smart self-checkout assistant"]
  },
  {
    category: "Sports & Leadership",
    title: "Competitive Sports & Teamwork",
    description: "Brought discipline, focus, and collaboration from competitive sports into engineering workflows. Participated in inter-college football matches and chess events.",
    details: ["Inter-college Football tournament participant", "Organized community sports days", "University Chess club active player"]
  }
];

export const codingProfiles = {
  leetcode: {
    username: "debanjan-mondal-2005",
    link: "https://leetcode.com/u/debanjan-mondal-ai/",
    solved: "180+",
    rating: "Active",
    badge: "DSA Focus"
  },
  hackerrank: {
    username: "debanjan-mondal-2005",
    link: "https://www.hackerrank.com/profile/debanjan_mondal_1",
    stars: "5-Star Python",
    badges: ["Python Basic", "SQL Basic"]
  },
  codechef: {
    username: "debanjan-mondal-2005",
    link: "https://www.codechef.com/users/debanjan_mondal",
    stars: "2-Star",
    rating: "1400+"
  }
};
