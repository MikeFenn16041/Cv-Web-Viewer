export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    website?: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

export const cvData: CVData = {
  personalInfo: {
    name: "Michael Fennessy",
    title: "Fullstack Developer",
    email: "m.fennessy.za@gmail.com",
    phone: "073 633 0942",
    location: "South Africa",
    linkedin: "linkedin.com/in/michael-fennessy-8a1a70a4",
    summary: "Results-driven Fullstack Developer with experience building scalable web and mobile applications. Progressed from Technical Account Manager → Data Analyst → Fullstack Developer, delivering end-to-end solutions across network design, data analytics, and full-stack development. Currently focused on mobile and backend development with React Native/Expo and FastAPI/PostgreSQL."
  },
  experience: [
    {
      id: "exp1",
      title: "Fullstack Developer",
      company: "Coreline Engineering Solutions",
      location: "South Africa",
      startDate: "Mar 2021",
      endDate: "Present",
      description: [
        "Progressed from Technical Account Manager → Data Analyst → Fullstack Developer at Coreline Engineering Solutions (Mar 2021 - Present)",
        "Fullstack Developer (Nov 2024-Present): Building mobile apps and enterprise web platforms. Architected CES Mobile GIS — React Native/Expo Site Verification App with offline-first SQLite sync, MapLibre GL, and FastAPI/PostgreSQL/PostGIS backend with CI/CD via EAS Build.",
        "Delivered Stage Zero Portal — Flask enterprise platform with Credit Vetting, Sales/Operations GIS modules, Headcount Management, custom analytics/reporting, Power BI Embedded, and Azure AD SSO. SQL Server with Alembic migrations.",
        "Data Analyst (Nov 2024-Mar 2025): Designed PostgreSQL ETL pipelines, built Power BI dashboards for real-time KPIs, developed Python automation tools.",
        "Network Design Engineer (Mar 2021-Dec 2024): Led fiber optic infrastructure planning with GIS-based route optimization, managed cross-functional deployment teams."
      ],
      technologies: ["React Native", "Expo", "FastAPI", "Flask", "PostgreSQL", "PostGIS", "Power BI", "Azure", "GIS"]
    },
    {
      id: "exp2",
      title: "Project Manager",
      company: "Glow Innovations",
      location: "South Africa",
      startDate: "Jan 2015",
      endDate: "Dec 2020",
      description: [
        "Led multiple projects from inception to completion, delivering on schedule and within budget",
        "Managed project budgets, allocated resources, and led diverse teams",
        "Developed precise costing, estimating, and structural steel detailing",
        "Ensured technical accuracy and compliance with project specifications"
      ],
      technologies: ["Project Management", "CAD", "Structural Design", "Budget Management"]
    },
    {
      id: "exp3",
      title: "Junior Planner / Junior Safety Officer",
      company: "Efficient Trotech (Chevron Refinery)",
      location: "Milnerton, South Africa",
      startDate: "Jan 2011",
      endDate: "Dec 2014",
      description: [
        "Monitored manufacturing processes ensuring data accuracy",
        "Developed engineering schedules and resolved operational issues",
        "Implemented Risk Assessment Method Statements per Chevron standards",
        "Led safety briefings and managed permit-to-work systems"
      ],
      technologies: ["Project Planning", "Safety Management", "Risk Assessment", "Compliance"]
    }
  ],
  education: [
    {
      id: "edu1",
      degree: "Data Science Program",
      institution: "Zaio Institute of Technology",
      location: "South Africa",
      startDate: "2024",
      endDate: "2025"
    },
    {
      id: "edu2",
      degree: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      institution: "Microsoft",
      location: "Online",
      startDate: "2024",
      endDate: "2024"
    },
    {
      id: "edu3",
      degree: "CFOS/D - Fiber Optic Network Design Specialist",
      institution: "Fiber Optic Association",
      location: "South Africa",
      startDate: "2021",
      endDate: "2021"
    }
  ],
  skills: [
    {
      category: "Backend & APIs",
      items: [
        { name: "FastAPI", level: 90 },
        { name: "Flask", level: 85 },
        { name: "Python", level: 90 },
        { name: "RESTful APIs", level: 88 },
        { name: "SQLAlchemy", level: 85 },
        { name: "JWT Authentication", level: 82 }
      ]
    },
    {
      category: "Databases & Data Engineering",
      items: [
        { name: "PostgreSQL", level: 90 },
        { name: "PostGIS", level: 85 },
        { name: "Azure SQL", level: 80 },
        { name: "SQLite", level: 85 },
        { name: "ETL Pipelines", level: 88 },
        { name: "Data Analytics", level: 85 }
      ]
    },
    {
      category: "Frontend & Mobile",
      items: [
        { name: "React Native", level: 85 },
        { name: "Expo", level: 85 },
        { name: "React", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 82 }
      ]
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "Microsoft Azure", level: 85 },
        { name: "Docker", level: 82 },
        { name: "GitHub Actions", level: 80 },
        { name: "CI/CD", level: 80 },
        { name: "Azure Web Apps", level: 85 }
      ]
    },
    {
      category: "Business Intelligence",
      items: [
        { name: "Power BI", level: 90 },
        { name: "Power BI Embedded", level: 85 },
        { name: "Dashboard Development", level: 88 },
        { name: "KPI Tracking", level: 85 },
        { name: "Data Visualization", level: 87 }
      ]
    },
    {
      category: "Specialized Skills",
      items: [
        { name: "GIS Mapping", level: 88 },
        { name: "Multi-tenant Architecture", level: 85 },
        { name: "Network Design", level: 80 },
        { name: "Project Management", level: 85 },
        { name: "Safety Management", level: 75 }
      ]
    }
  ]
};
