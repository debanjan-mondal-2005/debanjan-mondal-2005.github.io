// Centralized data file for portfolio contents - Redesigned for AI/ML student branding
window.portfolioData = {
  personalInfo: {
    name: "Debanjan Mondal",
    tagline: "Aspiring AI Engineer | Software Engineer",
    headline: "Aspiring AI Engineer | Software Engineer Focused on Machine Learning, Computer Vision, and Generative AI",
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
    cgpa: "7.39 / 10",
    gradYear: "2027",
    careerObjective: "Dedicated and analytical BCA student specializing in AI & ML, seeking opportunities to contribute as an AI Engineer, Machine Learning Engineer, Software Engineer, or Data Scientist. Passionate about building production-grade intelligent systems, designing robust backend architectures, and translating complex data into actionable business value.",
    availability: "🟢 Available for Summer 2026 Internships & Research Collaborations",
    interests: ["Deep Learning & Neural Networks", "Computer Vision (YOLO, OpenCV)", "Generative AI & LLMs (RAG, Agents)", "MLOps & Cloud Deployments"]
  },

  statsData: [
    { label: "Projects Built", value: 4, prefix: "", suffix: "" },
    { label: "Certifications", value: 8, prefix: "", suffix: "" },
    { label: "LeetCode Solved", value: 75, prefix: "", suffix: "+" },
    { label: "Current CGPA", value: 7.39, prefix: "", suffix: "" }
  ],

  skillsDashboard: [
    {
      category: "Programming Languages",
      icon: "code",
      skills: [
        { name: "Python", rating: "Basic to Intermediate", desc: "Core coding language for machine learning, data engineering, and automation scripts." },
        { name: "MySQL", rating: "Basic to Intermediate", desc: "Relational database querying, join operations, and schema designs." },
        { name: "C++", rating: "Basic to Intermediate", desc: "Object-oriented software development and algorithmic logic." },
        { name: "Java", rating: "Basic", desc: "Foundational object-oriented concepts and language syntax." },
        { name: "C", rating: "Basic", desc: "Fundamentals of structured programming, pointers, and memory operations." }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "cpu",
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
      icon: "layout",
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
        { name: "MongoDB", rating: "Intermediate", desc: "NoSQL JSON document stores, aggregations, and CRUD queries." }
      ]
    },
    {
      category: "Tools & Cloud Platforms",
      icon: "settings",
      skills: [
        { name: "Git & GitHub", rating: "Advanced", desc: "Version control workflows, branches, pulls, and actions." },
        { name: "Docker", rating: "Intermediate", desc: "Containerizing python models for production independence." },
        { name: "VS Code & Jupyter", rating: "Expert", desc: "Primary development editors and exploratory data analyses." }
      ]
    }
  ],

  projectsData: [
    {
      id: "careermind-ai",
      title: "CareerMind AI",
      subtitle: "Intelligent Career Preparation System",
      problem: "Job seekers struggle to identify precise skill gaps between their resumes and target job profiles, leading to inefficient applications.",
      features: [
        "Developed an AI-driven career mentoring system that automates skill gap analysis, interview preparation, and personalized career recommendations.",
        "Integrated Retrieval Augmented Generation (RAG) using LangChain and LLM APIs to enable contextual question answering and adaptive learning."
      ],
      challenges: "Optimized parsing speed for heavy multi-column resumes. Resolved extraction latency by implementing caching layers, reducing response times by 35%.",
      image: "assets/project1.jpg",
      tags: ["Python", "FastAPI", "LangChain", "LLM APIs", "Vector Database", "HTML", "CSS"],
      liveUrl: "https://github.com/debanjan-mondal-2005",
      githubUrl: "https://github.com/debanjan-mondal-2005"
    },
    {
      id: "sentiment-analyzer",
      title: "Social Media Sentiment Analyzer",
      subtitle: "Sentiment Prediction System",
      problem: "Organizations and individuals lack an automated, real-time method to classify large volumes of social media text into positive, negative, or neutral sentiment.",
      features: [
        "Deployed a real-time sentiment prediction API and web interface using FastAPI to classify social media text as positive, negative, or neutral.",
        "Optimized and compared Bi-LSTM models using TensorFlow/Keras to achieve peak classification accuracies of 91% and 96%."
      ],
      challenges: "Evaluated and compared two Bi-LSTM models, achieving 91% and 96% accuracy with optimized preprocessing.",
      image: "assets/project2.jpg",
      tags: ["Python", "FastAPI", "TensorFlow", "Keras", "HTML", "CSS"],
      liveUrl: "https://github.com/debanjan-mondal-2005", // Fixed url from debanjan-mondal-205 to correct debanjan-mondal-2005
      githubUrl: "https://github.com/debanjan-mondal-2005"
    },
    {
      id: "smart-guardian",
      title: "Smart Guardian",
      subtitle: "Real-Time Threat Detection System",
      problem: "Traditional security cameras require continuous human monitoring to identify physical threats and weapons, leading to delayed response times.",
      features: [
        "Engineered a real-time weapon detection system using YOLO-based computer vision models on live camera feeds with automated threat alerts.",
        "Developed a responsive desktop application using Tkinter and OpenCV to display live video streams and real-time bounding box detections."
      ],
      challenges: "Incorporated YOLO models via Roboflow API with real-time alert mechanisms and continuous framing.",
      image: "assets/project3.jpg",
      tags: ["Python", "OpenCV", "YOLO", "Tkinter", "Roboflow"],
      liveUrl: "",
      githubUrl: "https://github.com/debanjan-mondal-2005"
    },
    {
      id: "churn-prediction",
      title: "Customer Churn Prediction System",
      subtitle: "Predictive Analytics Application",
      problem: "Subscription businesses fail to recognize early customer attrition indicators, leading to lost revenue and customer acquisition cost overheads.",
      features: [
        "Implemented a customer churn prediction application using Flask and XGBoost, achieving a 93% classification accuracy rate.",
        "Integrated SHAP explainability to translate complex machine learning model predictions into clear, actionable business visualizations."
      ],
      challenges: "Balanced highly skewed churn classes using SMOTE. Hyperparameter tuning using GridSearch achieved 93% accuracy and explained complex models via SHAP.",
      image: "assets/project4.jpg",
      tags: ["Python", "Flask", "SHAP", "HTML", "CSS"],
      liveUrl: "https://github.com/debanjan-mondal-2005",
      githubUrl: "https://github.com/debanjan-mondal-2005"
    }
  ],

  educationTimelineData: [
    {
      degree: "Bachelor's of Computer Application (BCA)",
      specialization: "Specializing in Artificial Intelligence and Machine Learning",
      institution: "Lovely Professional University",
      duration: "2024 - 2027 (Expected)",
      gpa: "CGPA: 7.39 / 10",
      achievements: "Specializing in AI/ML track; maintaining a strong CGPA of 7.39 while building practical projects.",
      coursework: ["Machine Learning", "Probability & Statistics", "Data Structures & Algorithms", "Database Management Systems", "Python Programming", "Linear Algebra"]
    },
    {
      degree: "Higher Secondary Certificate (Class 12)",
      specialization: "Science Stream (PCM - Physics, Chemistry, Mathematics)",
      institution: "Barjora High School(H.S.)",
      duration: "2022 - 2024",
      gpa: "Percentage: 65%",
      achievements: "Focused on core analytical subjects like Physics, Chemistry, and Mathematics with C++ programming.",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science (C++)"]
    },
    {
      degree: "Secondary School Certificate (Class 10)",
      specialization: "General Education",
      institution: "Barjora High School(H.S.)",
      duration: "2014 - 2022",
      gpa: "Percentage: 68%",
      achievements: "Acquired a strong foundation in Mathematics, General Science, and Languages.",
      coursework: ["Mathematics", "Science", "History", "Geography", "English"]
    }
  ],

  certificationsData: [
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
      name: "Data Visualization with Python",
      organization: "IBM via Lovely Professional University",
      date: "2025",
      skillsLearned: "Data Visualization, Matplotlib, Seaborn, interactive plots, dashboards, storytelling.",
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
  ],

  achievementsData: [
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
  ],

  codingProfiles: {
    leetcode: {
      username: "debanjan-mondal-2005",
      link: "https://leetcode.com/u/debanjan_mondal_2005/",
      solved: "75+",
      rating: "Active",
      badge: "DSA Focus"
    },
    hackerrank: {
      username: "debanjan-mondal-2005",
      link: "https://www.hackerrank.com/profile/debanjanm32",
      stars: "5-Star Python",
      badges: ["Python Basic", "SQL Basic"]
    }
  }
};
