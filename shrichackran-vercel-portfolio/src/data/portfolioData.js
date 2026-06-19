export const profile = {
  name: 'Shrichackran K M',
  shortName: 'Shrichackran',
  role: 'Full Stack Developer',
  roles: ['Full Stack Developer', 'AI Engineer', 'Automation Builder', 'Backend Developer'],
  tagline:
    'Full-Stack Developer and AI Engineer building intelligent, scalable systems with modern AI, automation and production-grade web applications.',
  location: 'Salem, Tamil Nadu, India',
  email: 'shrichackran@gmail.com',
  github: 'https://github.com/Shrichackran',
  linkedin: 'https://www.linkedin.com/in/shrichackran-k-m/',
  resume: '/Shrichackran_KM_Resume.pdf',
  avatar: '/profile.png'
};

export const stats = [
  { label: 'Projects Built', value: '15+' },
  { label: 'Technologies Used', value: '25+' },
  { label: 'Internships', value: '2' },
  { label: 'AI/ML Focus Areas', value: '5+' }
];

export const education = {
  university: 'Sastra Deemed University',
  degree: 'B.Tech Electronics and Communication Engineering',
  period: '2022 - 2026',
  cgpa: '7.85 / 10',
  focus: ['AI Engineering', 'Full Stack Development', 'Automation Systems']
};

export const experiences = [
  {
    role: 'Software Intern',
    company: 'Steel Authority of India Limited (SAIL)',
    period: 'Jun 2025 - Jul 2025',
    location: 'Salem, Tamil Nadu',
    bullets: [
      'Assisted in developing and monitoring Java-based modules for industrial machine data tracking.',
      'Analyzed internal data flows across SMS, HRM and CRM systems to understand workflow visibility.',
      'Contributed to a web-based reporting interface using HTML, CSS and JavaScript for daily test-result visualization.',
      'Worked with industrial quality control and safety protocols to identify basic process improvement opportunities.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Programming and Application Development (MS)',
    period: 'Oct 2023 - Jun 2026',
    location: 'Thanjavur, Tamil Nadu',
    bullets: [
      'Assisted in frontend and backend development for Android-focused applications using MERN stack workflows.',
      'Gained experience in DSA and AI tools to manage user-input data across web and mobile platforms.',
      'Collaborated through Git-based version control to organize modifications and assign work efficiently.',
      'Used Android Studio to visualize and test application behavior across mobile environments.'
    ]
  }
];

export const projects = [
  {
    id: 'speech',
    category: 'AI Pipeline',
    title: 'Speech Denoising and Recognition System - Neural Networks',
    summary:
      'End-to-end speech processing system integrating audio denoising, speech recognition and LLM-based post-processing for noisy real-world speech inputs.',
    github: 'https://github.com/Shrichackran/Speech-Denoising-and-Recognition-Neural-Network',
    tech: ['Python', 'TensorFlow', 'NumPy', 'PyTorch', 'AI/ML', 'LLM APIs'],
    highlights: [
      'Built neural audio denoising pipeline',
      'Integrated LLM APIs for transcript refinement',
      'Designed modular audio preprocessing workflow',
      'Structured output generation for real-world speech'
    ],
    assets: [
      { src: '/project-assets/speech/speech1.png', caption: 'Terminal output showing LSTM denoising as the best-performing method' },
      { src: '/project-assets/speech/speech2.png', caption: 'SNR comparison boxplot: LSTM denoising vs baseband filter' },
      { src: '/project-assets/speech/speech3.png', caption: 'Voice recognition output for Madhan Kumar across five models' },
      { src: '/project-assets/speech/speech4.png', caption: 'Voice recognition output for Shrichackran K M with model agreement' },
      { src: '/project-assets/speech/speech5.png', caption: 'Model selection dropdown with LSTM, DNN_LSTM, Conv2D_LSTM, TDNN and TDNN_LSTM' },
      { src: '/project-assets/speech/speech6.png', caption: 'Initial voice recognition interface before audio selection' }
    ]
  },
  {
    id: 'lifelink',
    category: 'Full Stack',
    title: 'LifeLink - Smart Blood Donation Platform',
    summary:
      'Real-time donor matching platform that helps identify nearby eligible blood donors during emergency situations using REST APIs and MySQL.',
    github: 'https://github.com/Shrichackran/LifeLink---Smart-Blood-Donation-Platform',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'],
    highlights: [
      'REST API integration',
      'Emergency response optimization',
      'Donor filtering and matching logic',
      'Data-driven web application flow'
    ],
    assets: [
      { src: '/project-assets/lifelink/life1.png', caption: 'Blood compatibility reference used in the platform flow' },
      { src: '/project-assets/lifelink/life2.png', caption: 'LifeLink landing page with request blood and donor registration actions' },
      { src: '/project-assets/lifelink/life3.jpg', caption: 'Donor registration with age validation and health screening' },
      { src: '/project-assets/lifelink/life4.jpg', caption: 'Donor login with successful authentication flow' },
      { src: '/project-assets/lifelink/life5.jpg', caption: 'Recipient registration with location input' },
      { src: '/project-assets/lifelink/life6.jpg', caption: 'Nearest eligible donor search results by blood group and distance' },
      { src: '/project-assets/lifelink/life7.jpg', caption: 'LifeLink system workflow and backend architecture diagram' },
      { src: '/project-assets/lifelink/life8.jpg', caption: 'Project visual explaining critical response time reduction' }
    ]
  },
  {
    id: 'jobbzz',
    category: 'Automation',
    title: 'JoBzz - AI Powered Job Matching System',
    summary:
      'Workflow automation system that tracks job openings, applies keyword-based filtering and sends role alerts through Telegram notifications.',
    github: 'https://github.com/Shrichackran/JoBzz-AI-powered-Job-Matching-System',
    tech: ['n8n', 'JavaScript', 'LinkedIn', 'Google Sheets', 'Agentic AI', 'Telegram API'],
    highlights: [
      'n8n automation workflow',
      'Keyword-based job filtering',
      'Telegram notification system',
      'Google Sheets tracking pipeline'
    ],
    assets: [
      { src: '/project-assets/jobbzz/job1.png', caption: 'Telegram bot job alert with title, company, location and match score' },
      { src: '/project-assets/jobbzz/job2.png', caption: 'Google Sheets log storing matched job alerts' },
      { src: '/project-assets/jobbzz/job3.png', caption: 'Node.js execution logs showing fetched, filtered and sent alerts' },
      { src: '/project-assets/jobbzz/job4.png', caption: 'n8n workflow for schedule trigger, request, filtering, Sheets and Telegram' },
      { src: '/project-assets/jobbzz/job5.png', caption: 'JoBzz system architecture and automation pipeline' }
    ]
  },

  {
    id: 'store-intelligence',
    category: 'Backend Analytics',
    title: 'Store Intelligence API System | Retail Analytics Backend',
    summary:
      'Containerised FastAPI backend that converts CCTV-derived retail events into offline store analytics, including metrics, funnel analysis, heatmaps, anomaly detection and health monitoring.',
    github: 'https://github.com/Shrichackran/store-intelligence',
    tech: ['Python', 'FastAPI', 'SQLite', 'Docker', 'Pytest', 'JSONL Events', 'Retail Analytics'],
    highlights: [
      'Built REST APIs for event ingestion, store metrics, funnel, heatmap, anomalies and health checks',
      'Implemented idempotent batch ingestion with event deduplication and structured JSON responses',
      'Validated Docker runtime, terminal dashboard, JSONL event logs and reviewer runbook',
      'Achieved 13 passing tests with 81% coverage across API and pipeline modules'
    ],
    assets: [
      { src: '/project-assets/store-intelligence/store1-docker-api-running.png', caption: 'Docker Compose running the FastAPI service with successful endpoint responses' },
      { src: '/project-assets/store-intelligence/store2-dashboard-output.png', caption: 'Terminal dashboard output showing store metrics, funnel and health data' },
      { src: '/project-assets/store-intelligence/store3-api-terminal.jpg', caption: 'Store Intelligence workspace with API logs and health endpoint verification' },
      { src: '/project-assets/store-intelligence/store4-metrics-json.jpg', caption: 'Metrics JSON response including visitors, dwell, queue, conversion and traffic count' },
      { src: '/project-assets/store-intelligence/store5-cctv-extraction.jpg', caption: 'CCTV frame extraction and store camera assets used for analytics event generation' },
      { src: '/project-assets/store-intelligence/store6-billing-camera.jpg', caption: 'Billing-area camera frame prepared as retail analytics input evidence' },
      { src: '/project-assets/store-intelligence/store7-test-coverage.jpg', caption: 'Pytest coverage report showing 13 tests passed with 81% coverage' },
      { src: '/project-assets/store-intelligence/store8-presentation-cover.png', caption: 'Submission presentation cover summarising FastAPI, Docker, JSONL events, SQLite and tests' }
    ]
  },
  {
    id: 'wifi',
    category: 'Embedded',
    title: 'WiFi Network Controller',
    summary:
      'ESP32-based networking system built to understand wireless traffic behavior, real-time embedded systems and microcontroller-based network control.',
    github: 'https://github.com/Shrichackran/Wifi-Network-Controller',
    tech: ['C++', 'ESP32', 'Flash Tool', 'Networking', 'Embedded Systems'],
    highlights: [
      'ESP32-based wireless control logic',
      'Embedded systems implementation',
      'Networking concepts exploration',
      'Real-time microcontroller workflow'
    ],
    assets: []
  }
];

export const skills = {
  Languages: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'C++'],
  Frontend: ['React', 'HTML5', 'CSS3', 'Responsive UI', 'Vite'],
  Backend: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'MySQL', 'SQLite'],
  'AI / ML': ['TensorFlow', 'PyTorch', 'NumPy', 'Pandas', 'LLMs', 'RAG', 'GenAI'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Docker', 'Pytest', 'Android Studio', 'n8n', 'Kubernetes', 'Render']
};

export const services = [
  {
    title: 'Full Stack Web Development',
    description: 'Production-grade MERN apps with clean, scalable architecture and responsive user interfaces.'
  },
  {
    title: 'AI Integration Solutions',
    description: 'LLM, RAG and generative AI pipelines added to real product workflows.'
  },
  {
    title: 'Automation Systems',
    description: 'End-to-end automation with APIs, scripts, alerts and no-code workflow tools.'
  },
  {
    title: 'API Development',
    description: 'Robust REST API builds with thoughtful contracts and database-backed logic.'
  },
  {
    title: 'UI/UX Design',
    description: 'Modern, accessible product UI built for conversion and user clarity.'
  },
  {
    title: 'Intelligent Workflow Systems',
    description: 'AI-native workflows that adapt to data, context and repeatable business tasks.'
  }
];
