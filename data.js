/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO CONTENT — edit this file to update everything on the site
═══════════════════════════════════════════════════════════════ */
const PORTFOLIO = {

  /* ── Identity ── */
  name:     "Rahil Mehta",
  role:     "SoftwareEngineer",           /* displayed as <Role /> */
  greeting: "// Hello, World! — Welcome to my workspace.",
  bio:      "Backend systems engineer specializing in REST API testing, large-scale automation, and reproducible research infrastructure.",
  resume:   "documents/resume.pdf",
  avatar:   "img/about.jpeg",

  /* ── About section (about.md) ── */
  about: {
    whoami:
      "A Software Engineer with a background in high-throughput backend systems and empirical software engineering research. I created Defects4REST, a benchmark of 607 real-world REST API defects across 50 open-source projects (with an executable subset of 110 defects across 12 containerized projects), published at ICSE 2026. I've also built production systems processing 250K+ alerts/second.", 
    mission:
  "I believe reliable software starts with rigorous testing and empirical evidence, not assumptions. Whether it's backend infrastructure or research tooling, I focus on building systems that are reproducible, verifiable, and built to reveal their own failure modes before users do.",
      education: {
      degree: "M.S. Computer Science",
      school: "Oregon State University",
      status: "Graduated",
      date: "June 2026",
      gpa:    "3.67 / 4.0"
    }
  },

  /* ── Skills (skills.json) ── */
  skills: [
    { key: "languages",      items: ["Python", "C#", "SQL", "TypeScript", "Bash", "Swift"] },
    { key: "frameworks",     items: [".NET", "FastAPI", "SwiftUI", "Entity Framework", "Windows Forms"] },
    { key: "infrastructure", items: ["Docker", "HPC / SLURM", "CI/CD", "Git", "GitHub Actions", "REST APIs", "OpenAPI"] },
    { key: "testing_tools",  items: ["Schemathesis", "RESTler", "EvoMaster", "AutoRestTest"] },
    { key: "databases",      items: ["MongoDB", "MSSQL", "PostgreSQL"] }
  ],

  /* ── Experience (experience.git) ── */
  experience: [
    {
      hash:    "a7f3c2e",
      title:   "Graduate Research Assistant",
      company: "Oregon State University",
      period:  "May 2024 – June 2026",
      bullets: [
        "Led development of Defects4REST (ICSE'26), enabling reproducible deployment and testing of real-world REST API defects; containerized 16 services (buggy + patched) with Docker.",
        "Ran 600+ hours of large-scale REST testing campaigns on an HPC cluster using Bash/Python with Schemathesis, RESTler, EvoMaster, and AutoRestTest, executing millions of requests.",
        "Triaged failures and quantified results by mining logs/HAR/test reports to compare tool effectiveness."
      ],
      tech: ["Python", "Bash", "Docker", "HPC", "Schemathesis", "RESTler", "EvoMaster", "AutoRestTest"]
    },
    {
      hash:    "3b1e9a4",
      title:   "Graduate Teaching Assistant",
      company: "Oregon State University",
      period:  "Sept 2024 – March 2026",
      bullets: [
        "Graded assignments with strict rubric adherence, maintaining fairness and consistency across all students.",
        "Mentored students on CI/CD workflows, code reviews, and debugging during weekly office hours."
      ],
      tech: ["Git", "GitHub", "CI/CD", "Code Review", "Debugging"]
    },
    {
      hash:    "8f2d5c1",
      title:   "Software Engineer",
      company: "Nerve Solutions (Startup)",
      period:  "Feb 2023 – Aug 2023",
      bullets: [
        "Designed and implemented a high-throughput .NET alert engine processing 250K+ alerts/second with user preferences, alert priority, and system load awareness.",
        "Cut infrastructure costs by 33% by replacing legacy alert routing logic with a CPU- and memory-efficient algorithm.",
        "Built a continuous backup pipeline and real-time monitoring tool with Slack/email alerts, reducing MTTR by 50%."
      ],
      tech: [".NET", "C#", "SQL", "MongoDB", "REST APIs", "Slack API"]
    },
    {
      hash:    "2a7e3b9",
      title:   "Programmer",
      company: "Acty System India (Subsidiary of Acty System Japan)",
      period:  "May 2022 – Nov 2022",
      bullets: [
        "Built a console application to filter large text files using dynamically generated commands parsed from XML configurations.",
        "Developed a Windows application for real-time, flicker-free 2D graphing with customizable features using double buffering and no external libraries.",
        "Implemented core modules (login, password reset, CRUD) for an internal Employee Management System."
      ],
      tech: [".NET Framework", "Windows Forms", "MSSQL", "Entity Framework", "C#"]
    }
  ],

  /* ── Projects (projects/) ── */
  projects: [
    {
      name:   "ScrollTone",
      desc:   "Self-hosted EPUB to audiobook converter. 19 voices, multi-character speaker attribution via local LLM, runs entirely in Docker.",
      year:   "2026",
      github: "https://github.com/rahilmehta-dev/ScrollTone",
      live:   "https://rahilmehta-dev.github.io/ScrollTone/",
      tech:   ["Python", "FastAPI", "Kokoro TTS", "Ollama", "Docker"]
    },
    {
      name:   "ShowUp",
      desc:   "iOS habit tracker that auto-completes tasks when you physically show up and stay — geofencing, Live Activity on Dynamic Island, zero manual input.",
      year:   "2026",
      github: "https://github.com/rahilmehta-dev/ShowUp",
      tech:   ["Swift", "SwiftUI", "CoreLocation", "ActivityKit", "SwiftData"]
    },
    {
      name:   "FocusFeed",
      desc:   "YouTube pre-filter for Apple Silicon. Pick a mood, local MLX vision model scores the top 10 videos before you watch any of them.",
      year:   "2025",
      github: "https://github.com/rahilmehta-dev/FocusFeed",
      tech:   ["Python", "FastAPI", "MLX", "SSE", "Apple Silicon"]
    },
    {
      name:   "mornin-cli",
      desc:   "CLI morning standup generator. Generates a standup from your git commits using a local LLM — no cloud, no accounts.",
      year:   "2025",
      github: "https://github.com/rahilmehta-dev/mornin-cli",
      tech:   ["Python", "Ollama", "CLI"]
    },
    {
      name:   "Defects4REST",
      desc:   "Benchmark of 110 real-world REST API defects across 12 open-source projects. Single-command Docker deployment per defect, used in ICSE 2026 paper.",
      year:   "2025",
      github: "https://github.com/ANSWER-OSU/Defects4REST",
      tech:   ["Python", "Docker", "REST APIs", "OpenAPI"]
    }
  ],

  /* ── Open Source Contributions (contributions.ts) ── */
  oss: [
    {
      tool:        "Schemathesis",
      toolUrl:     "https://github.com/schemathesis/schemathesis",
      issue:       "KeyError: 'operationId' internal crash during stateful link resolution on OpenAPI 3.1.0 specs",
      issueUrl:    "https://github.com/schemathesis/schemathesis/issues/3377",
      status:      "fixed",
      statusLabel: "Fixed"
    },
    {
      tool:        "AutoRestTest",
      toolUrl:     "https://github.com/selab-gatech/autoresttest",
      issue:       "KeyError: 'application/xml' crash in mutate_values on converted specs",
      issueUrl:    "https://github.com/selab-gatech/autoresttest/issues/34",
      status:      "fixed",
      statusLabel: "Fixed"
    },
    {
      tool:        "AutoRestTest",
      toolUrl:     "https://github.com/selab-gatech/autoresttest",
      issue:       "Graph init hangs indefinitely on large specs",
      issueUrl:    "https://github.com/selab-gatech/autoresttest/issues/36",
      status:      "acknowledged",
      statusLabel: "Acknowledged"
    },
    {
      tool:        "AutoRestTest",
      toolUrl:     "https://github.com/selab-gatech/autoresttest",
      issue:       "Value table generation stuck 1hr+ with no output on Podman spec",
      issueUrl:    "https://github.com/selab-gatech/autoresttest/issues/31",
      status:      "acknowledged",
      statusLabel: "Acknowledged"
    },
    {
      tool:        "AutoRestTest",
      toolUrl:     "https://github.com/selab-gatech/autoresttest",
      issue:       "No support for custom API key headers",
      issueUrl:    "https://github.com/selab-gatech/autoresttest/issues/30",
      status:      "feature",
      statusLabel: "Feature added"
    },
    {
      tool:        "EvoMaster",
      toolUrl:     "https://github.com/WebFuzzing/EvoMaster",
      issue:       "IllegalArgumentException crash during Dolibarr API testing",
      issueUrl:    "https://github.com/WebFuzzing/EvoMaster/issues/1400",
      status:      "reported",
      statusLabel: "Reported"
    }
  ],

  /* ── Publications (publications.md) ── */
  publications: [
    {
      venue:        "ICSE 2026 — Research Track · First Author",
      title:        "Defects4REST: A Benchmark of Real-World Defects to Enable Controlled Testing and Debugging Studies for REST APIs",
      role:         "Led benchmark designand implementation, built deployment + replication tooling, and ran empirical evaluation.",
      contribution: "Containerized 16 real-world REST API services (buggy + patched) with Docker, built CLI deployment tooling, authored the replication package, and ran 600+ hours of HPC testing campaigns evaluating four automated testing tools across 110 defects.",
      links: [
        { label: "Publication",        icon: "fa-solid fa-file-lines",                url: "https://conf.researchr.org/details/icse-2026/icse-2026-research-track/259/Defects4REST-A-Benchmark-of-Real-World-Defects-to-Enable-Controlled-Testing-and-Debu" },
        { label: "Benchmark",          icon: "fa-brands fa-github",                   url: "https://github.com/ANSWER-OSU/Defects4REST" },
        { label: "Replication Package",icon: "fa-brands fa-github",                   url: "https://github.com/ANSWER-OSU/Defects4REST-ReplicationPackage" }
      ]
    },
    {
      venue:        "AAAI Fall Symposium 2025 (ATRACC) · Co-First Author",
      title:        "Uncovering Systemic and Environment Errors in Autonomous Systems Using Differential Testing",
      role:         "Built env and task generation, feasibility detection, and experimental analysis.",
      contribution: "",
      links: [
        { label: "Publication", icon: "fa-solid fa-file-lines", url: "https://ojs.aaai.org/index.php/AAAI-SS/article/view/36877" }
      ]
    }
  ],

  /* ── Contact (contact.json) ── */
  contact: {
    email:        "rahilmehta18@gmail.com",
    location:     "Corvallis, OR",
    availability: "Open to opportunities",
    social: [
      { key: "github",   label: "github.com/rahilmehta-dev",  url: "https://github.com/rahilmehta-dev" },
      { key: "linkedin", label: "linkedin.com/in/Mehta-Rahil", url: "https://www.linkedin.com/in/Mehta-Rahil" }
    ]
  },

  /* ── Snapshots (snapshots/) ── */
  snapshots: [
    { src: "capture_photos/DSC00090.JPG", caption: "" }
    /* Add more: { src: "capture_photos/YOUR_PHOTO.JPG", caption: "Caption here" } */
  ]

};
