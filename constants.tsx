
import React from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Database, 
  Terminal, 
  Layers, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Award,
  BookOpen
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Debanjan Mondal",
  title: "Aspiring Data Scientist & AI Specialist",
  email: "debanjan.mondal.ai@gmail.com",
  phone: "+91 9332343058",
  location: "Bankura, West Bengal - 722202",
  summary: "Data science practitioner skilled in Python, machine learning, and computer vision, pursuing BCA at Lovely Professional University. Experienced in building full-stack ML applications and applying analytical techniques to solve real-world problems.",
  links: {
    linkedin: "https://www.linkedin.com/in/debanjan-mondal-ai/",
    github: "https://github.com/debanjan-mondal-ai", // inferred from common naming
  }
};

export const SKILL_CATEGORIES = [
  {
    name: "Machine Learning",
    icon: <BrainCircuit className="w-6 h-6 text-blue-400" />,
    skills: ["Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Computer Vision", "NLP", "Model Evaluation"]
  },
  {
    name: "Programming",
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    skills: ["Python", "C", "C++", "Java"]
  },
  {
    name: "Tools & Frameworks",
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
    skills: ["Flask", "Git/GitHub", "Jupyter Notebook", "Google Colab", "Kaggle", "MySQL"]
  }
];

export const PROJECTS = [
  {
    title: "Diagno Vista",
    subtitle: "ML Web Application",
    date: "Apr 2025",
    description: "Built a full-stack disease risk prediction system in Flask using 15+ clinical features.",
    highlights: [
      "Reached 89% accuracy on a dataset of 20,000 patient entries.",
      "Optimized model development and hyperparameter tuning.",
      "Integrated trained models with Flask RESTful routes."
    ],
    github: "diabetes_disease_prediction",
    tags: ["Python", "Flask", "Machine Learning", "Healthcare"]
  },
  {
    title: "Attrition Forecast Engine",
    subtitle: "ML Web Application",
    date: "Jul 2025",
    description: "Engineered a churn prediction tool to analyze telecom service usage patterns and predict customer attrition.",
    highlights: [
      "Achieved 96% accuracy on a dataset of 10,000 records.",
      "Integrated SHAP-based explainability for transparent AI decisions.",
      "Deployed with interactive visualizations for business insight."
    ],
    github: "customer-churn-prediction",
    tags: ["Scikit-learn", "Flask", "SHAP", "Analytics"]
  }
];

export const CERTIFICATIONS = [
  {
    title: "Oracle Cloud Infrastructure 2025",
    issuer: "Certified Data Science Professional (OCI25DSOCP)",
    icon: <Award className="w-5 h-5 text-orange-400" />
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM Developer Skills Network (ML0101EN)",
    icon: <Award className="w-5 h-5 text-blue-400" />
  },
  {
    title: "Data Visualization",
    issuer: "IBM Developer Skills Network (CEDV1IN)",
    icon: <Award className="w-5 h-5 text-blue-400" />
  }
];

export const EDUCATION = [
  {
    school: "Lovely Professional University",
    degree: "Bachelor of Computer Application (AI & ML Specialization)",
    period: "Aug, 2024 – Present",
    location: "Punjab, India",
    details: "CGPA: 6.96 / 10"
  },
  {
    school: "Barjora High School (H.S)",
    degree: "Higher Secondary (Science)",
    period: "May 2024",
    location: "West Bengal, India"
  }
];

export const EXTRA_CURRICULAR = [
  "Led a team of four in the Code-a-Haunt Hackathon at LPU, reaching Round 2 among 50+ teams.",
  "Secured 1st place twice in the 500-meter race at Barjora High School."
];
