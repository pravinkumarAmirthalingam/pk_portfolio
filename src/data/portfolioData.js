/**
 * Authoritative portfolio data for Pravin Kumar A.
 * Strictly adheres to verified information from the resume and actual codebases.
 */

export const personalInfo = {
  name: "Pravin Kumar A",
  role: "Full-Stack Software Engineer & Applied AI Student",
  statusLine: "Final-year B.Tech AI & Data Science · Saveetha Engineering College (2027)",
  location: "Chennai, Tamil Nadu, India",
  email: "pravinkumaramirtha@gmail.com",
  phone: "+91 8667270905",
  github: "https://github.com/pravinkumarAmirthalingam",
  linkedin: "https://www.linkedin.com/in/pravinnamirtha",
  languages: ["English", "Tamil"],
  positioning: "I build software for problems that exist outside the screen.",
  subheading:
    "Developing resilient backend architectures in Java & Spring Boot, responsive web experiences in React, and privacy-preserving machine learning for civic and healthcare domains."
};

export const stats = [
  { label: "Graduation", value: "2027", detail: "Saveetha Engineering College" },
  { label: "Core Backend", value: "Java / Spring", detail: "REST APIs & Hibernate" },
  { label: "Frontend", value: "React & Vite", detail: "Component Architecture" },
  { label: "AI Focus", value: "Federated Learning", detail: "FedAvg & Decentralized ML" }
];

export const projects = [
  {
    id: "grievance-management",
    index: "01",
    tag: "Civic Technology",
    title: "Smart Public Grievance Management System",
    subtitle: "Accessible citizen complaint submission, tracking, and linguistic classification",
    summary:
      "A full-stack civic-tech platform that streamlines how citizens report infrastructure issues and enables municipal authorities to categorize, deduplicate, and resolve them systematically.",
    problemStatement:
      "Traditional municipal complaint portals create friction: citizens must navigate rigid administrative hierarchies, text forms discourage mobile users, and complaints written in conversational code-mixed language (Tanglish) often fail keyword-based triage.",
    approach:
      "Architected a multi-tier solution featuring voice-to-text input for quick reporting, structured geospatial tagging, an end-to-end Spring Boot REST workflow, and an NLP pipeline specifically designed for Tanglish complaints.",
    techStack: [
      "React.js",
      "Spring Boot",
      "MySQL",
      "Python NLP",
      "Vercel",
      "Render"
    ],
    architectureHighlights: [
      {
        layer: "Client Layer",
        desc: "React/Vite progressive web interface with voice recording and dynamic stage tracker"
      },
      {
        layer: "API Gateway & Services",
        desc: "Spring Boot REST controllers managing secure complaint lifecycle and state transitions"
      },
      {
        layer: "NLP Microservice",
        desc: "Python service handling Tanglish code-mixed classification and duplicate complaint detection"
      },
      {
        layer: "Persistence",
        desc: "Relational MySQL schema indexing departments, complaint timelines, and geospatial coordinates"
      }
    ],
    workflowStages: [
      "Submitted",
      "Under Review",
      "Assigned",
      "In Progress",
      "Resolved"
    ],
    implementedFeatures: [
      "Web interface for public grievance logging with category and photo attachments",
      "Voice-to-text integration enabling citizens to speak their grievances naturally",
      "Five-stage visual grievance tracking pipeline with status updates",
      "Geographic location tagging to cluster recurring infrastructure faults"
    ],
    inProgressFeatures: [
      "Tanglish (Tamil + English) code-mixed text classification model",
      "Cosine-similarity duplicate grievance detection across short-form citizen text",
      "Automated department recommendation microservice"
    ],
    statusBadge: "Active / Deployed",
    liveDemoUrl: "https://smart-public-grievance-managment.vercel.app",
    githubUrl: "https://github.com/Nithish23013509/Smart-Public-Grievance-Managment-System",
    repoNote: "Open source team repository with active deployment"
  },
  {
    id: "hospital-resource",
    index: "02",
    tag: "Healthcare Systems Engineering",
    title: "Hospital Resource Optimization System",
    subtitle: "Centralized bed, ICU, and patient capacity allocation across healthcare facilities",
    summary:
      "A centralized backend platform designed to coordinate bed capacity, ICU availability, and patient admission workflows across multi-facility healthcare networks.",
    problemStatement:
      "During regional emergencies or seasonal surges, individual hospitals lack real-time visibility into neighboring facilities' capacity. Patients are turned away at full emergency wards while nearby hospitals have available beds.",
    approach:
      "Built clean, strongly-typed Spring Boot REST APIs backed by JPA/Hibernate and MySQL to model hospitals, wards, and patient admissions, establishing the core data layer for intelligent emergency routing.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "REST APIs"
    ],
    architectureHighlights: [
      {
        layer: "Domain Entities",
        desc: "Structured JPA relational mappings for Hospital, Ward, Bed, and Patient entities"
      },
      {
        layer: "Service Layer",
        desc: "Business logic ensuring atomic bed status allocation and admission tracking"
      },
      {
        layer: "REST Endpoints",
        desc: "Clean HTTP contracts for facility resource metrics and capacity inspection"
      },
      {
        layer: "Extensibility Hook",
        desc: "Designed to ingest external emergency dispatch pings and dispatch demand forecasts"
      }
    ],
    workflowStages: [
      "Patient Intake",
      "Triage & Assessment",
      "Bed / ICU Allocation",
      "Transfer Coordination",
      "Discharge & Recalibration"
    ],
    implementedFeatures: [
      "Hospital entity schema and relationship models using JPA annotations",
      "RESTful CRUD controllers for facility details, capacity counts, and patient intake",
      "Service and Repository layers maintaining strict transaction boundaries in MySQL",
      "Validation and error-handling pipelines for healthcare data integrity"
    ],
    inProgressFeatures: [
      "Real-time bed and ICU availability synchronization across multi-hospital networks",
      "Proximity-based emergency routing algorithm to redirect ambulances to facilities with open beds",
      "Python FastAPI forecasting service to predict admission spikes from seasonal trends"
    ],
    statusBadge: "Backend Core Built",
    liveDemoUrl: null,
    githubUrl: null,
    repoNote: "Local engineering repository; code & architecture walkthrough available upon request"
  },
  {
    id: "federated-learning-ckd",
    index: "03",
    tag: "Privacy-Preserving AI",
    title: "Chronic Kidney Disease Prediction via Federated Learning",
    subtitle: "Decentralized model training using Federated Averaging (FedAvg) without sharing raw clinical data",
    summary:
      "A privacy-preserving machine learning architecture that trains diagnostic models for early Chronic Kidney Disease detection across decentralized hospital nodes while safeguarding sensitive medical records.",
    problemStatement:
      "Training reliable diagnostic AI models requires large, diverse clinical datasets. However, medical data privacy laws (HIPAA, GDPR) and ethical boundaries strictly prohibit aggregating patient records into a centralized cloud database.",
    approach:
      "Employed Federated Learning (FL) using the Federated Averaging (FedAvg) algorithm. Individual hospitals train local neural networks on private records, transmitting only model weights to a central aggregator.",
    techStack: [
      "Python",
      "TensorFlow / PyTorch",
      "Flask",
      "FedAvg Algorithm",
      "NumPy & Pandas",
      "Scikit-learn"
    ],
    architectureHighlights: [
      {
        layer: "Local Hospital Nodes",
        desc: "Decentralized client environments executing local training rounds on isolated datasets"
      },
      {
        layer: "FedAvg Aggregator",
        desc: "Central coordinator receiving model parameter deltas and computing federated weight averages"
      },
      {
        layer: "Preprocessing Pipeline",
        desc: "Data cleaning, clinical feature engineering, and robust normalization across nodes"
      },
      {
        layer: "Evaluation Metrics",
        desc: "Multi-client accuracy, precision, and convergence tracking across decentralized epochs"
      }
    ],
    workflowStages: [
      "Local Node Data Prep",
      "Client Training Round",
      "Encrypted Weight Dispatch",
      "FedAvg Weight Aggregation",
      "Global Model Broadcast"
    ],
    implementedFeatures: [
      "Federated Averaging (FedAvg) orchestration workflow across simulated client nodes",
      "Medical feature normalization, imputation, and encoding for clinical indicators",
      "Decentralized training loop ensuring zero raw patient attributes leave simulated clients",
      "Model evaluation benchmarks assessing convergence rate and predictive reliability"
    ],
    inProgressFeatures: [
      "Full-stack clinical web interface for medical practitioners to inspect prediction history",
      "Differential privacy layer adding calibrated noise to weight updates during dispatch"
    ],
    statusBadge: "Research & Model Built",
    liveDemoUrl: null,
    githubUrl: "https://github.com/pravinkumarAmirthalingam/Federated-Learning-Based-Prediction-of-Chronic-Kidney-Diseases",
    repoNote: "Codebase repository configured; model logs & implementation review available"
  }
];

export const skillCategories = [
  {
    category: "Backend & Systems",
    description: "Building resilient RESTful architectures, data models, and services",
    skills: [
      { name: "Java", note: "Primary OOP language" },
      { name: "Spring Boot", note: "REST APIs & Services" },
      { name: "Spring Security", note: "Auth & Access Control" },
      { name: "Spring Data JPA", note: "Data Access Layer" },
      { name: "Hibernate", note: "ORM & Relational Mapping" },
      { name: "REST APIs", note: "HTTP contracts & JSON" },
      { name: "C", note: "Low-level foundations" }
    ]
  },
  {
    category: "Frontend & UI",
    description: "Crafting structured, accessible, responsive component interfaces",
    skills: [
      { name: "React.js", note: "Components & State" },
      { name: "JavaScript (ES6+)", note: "Modern web standard" },
      { name: "HTML5 & Semantic DOM", note: "Accessible markup" },
      { name: "CSS3 & Design Systems", note: "Custom tokens & animations" },
      { name: "Vite", note: "Fast build toolchain" }
    ]
  },
  {
    category: "Databases & Core CS",
    description: "Relational persistence, data structures, and computer science fundamentals",
    skills: [
      { name: "MySQL", note: "Relational schema & queries" },
      { name: "SQL", note: "Joins, indexes & transactions" },
      { name: "Data Structures & Algorithms", note: "Problem solving & optimization" },
      { name: "Object-Oriented Design", note: "Modularity & inheritance" },
      { name: "DBMS Principles", note: "ACID & normalization" }
    ]
  },
  {
    category: "Applied AI & Machine Learning",
    description: "Practical intelligent models, privacy-preserving techniques, and data manipulation",
    skills: [
      { name: "Python", note: "Data & ML pipelines" },
      { name: "TensorFlow", note: "Neural networks & modeling" },
      { name: "Federated Learning (FedAvg)", note: "Decentralized computation" },
      { name: "Flask", note: "Lightweight ML serving" },
      { name: "Data Preprocessing", note: "Feature engineering & cleaning" }
    ]
  },
  {
    category: "Tools & Deployment",
    description: "Version control, API testing, and continuous cloud deployment",
    skills: [
      { name: "Git & GitHub", note: "Branching & collaboration" },
      { name: "Postman & Swagger", note: "API testing & documentation" },
      { name: "VS Code & STS", note: "Primary development environments" },
      { name: "Vercel", note: "Frontend hosting" },
      { name: "Render & Railway", note: "Backend web services" }
    ]
  }
];

export const certifications = [
  {
    title: "Google Cloud Data Analytics",
    issuer: "Google",
    year: "2023",
    focus: "Cloud data pipelines, SQL querying, BigQuery analytics, and structured data handling."
  },
  {
    title: "Developing Industrial Internet of Things",
    issuer: "University of Colorado Boulder (Coursera)",
    year: "2024",
    focus: "Embedded telemetry, sensor data acquisition, industrial protocols, and edge compute systems."
  },
  {
    title: "GPU Programming Specialization Certificate",
    issuer: "Coursera",
    year: "2024",
    focus: "Parallel compute architectures, memory hierarchy, thread parallelism, and accelerated computing."
  }
];

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Start from the Data Contract",
    desc:
      "Whether designing a Spring Boot backend or an NLP microservice, defining unambiguous request/response contracts and relational constraints early prevents friction across layers."
  },
  {
    number: "02",
    title: "Distinguish Working Code from Aspirations",
    desc:
      "Engineering credibility requires strict honesty. Clearly separating running features from planned roadmap capabilities keeps systems grounded and architectures transparent."
  },
  {
    number: "03",
    title: "Solve Problems that Touch People",
    desc:
      "The most exciting software directly impacts the physical world: clearing civic grievances on city streets, reserving ICU beds during surges, or protecting patient privacy in hospital clinics."
  },
  {
    number: "04",
    title: "Understand How Things Work Beneath the Abstraction",
    desc:
      "I don't just rely on high-level libraries. Studying data structures, thread concurrency, memory layout in C/GPU, and ORM SQL generation helps in writing maintainable, predictable software."
  }
];

export const personalInterests = [
  {
    title: "Fitness & Discipline",
    desc: "Consistent strength training and endurance. Building long-term habits mirrors software engineering: incremental progress, patience, and deliberate practice."
  },
  {
    title: "Cooking & Exploration",
    desc: "Experimenting with recipes and timing in the kitchen. A tactile counterweight to screen time that requires process precision, attention to detail, and patience."
  },
  {
    title: "Systems Exploration",
    desc: "Curious about operating systems, low-level mechanics, hardware, and how databases serialize bytes to disk under the hood."
  }
];
