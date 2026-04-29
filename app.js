const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Optional: hook resume button to your PDF path
const resumeBtn = document.getElementById('resumeBtn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with your actual file path
        window.location.href = 'Resume.pdf';
    });
}


const experiences = [
    {
        title: 'Graduate Research Assistant',
        company: 'Oregon State University',
        period: 'May 2025 - Present',
        bullets: [
            'Led development of Defects4REST (ICSE 2026), enabling reproducible deployment/testing of real-world REST API defects; containerized 16 services (buggy + patched) with Docker.',
            'Ran 600+ hours of large-scale REST testing campaigns on an HPC cluster using Bash/Python with Schemathesis, RESTler, EvoMaster, and AutoRestTest, executing millions of requests.',
            'Triaged failures and quantified results by mining logs/HAR/test reports to compare tool effectiveness.'
        ],
        projects: ['Defects4REST Benchmark', 'REST API Testing Campaigns'],
        tech: ['Python','Bash','Docker','HPC','Schemathesis','RESTler','EvoMaster','AutoRestTest']
    },
    {
        title: 'Graduate Teaching Assistant',
        company: 'Oregon State University',
        period: 'Sept 2024 - Present',
        bullets: [
            'Grade assignments with strict adherence to the rubric, maintaining fairness and consistency for all students.',
            'Mentor students on CI/CD workflows, code reviews, and debugging during weekly office hours, helping them deliver more reliable projects.'
        ],
        projects: ['CS362 Assignment Grading', 'Student Support (CI/CD, Code Review, Debugging)'],
        tech: ['Git/GitHub','CI/CD Tools','Code Review Practices','Debugging']
    },
    {
        title: 'Software Engineer',
        company: 'Nerve Solutions (Startup)',
        period: 'Feb 2023 - Aug 2023',
        bullets: [
            'Designed and implemented a high-throughput .NET alert engine processing 250K+ alerts/second, incorporating user preferences, alert priority, and system load.',
            'Cut infrastructure costs by 33% by replacing legacy alert routing logic with a more CPU- and memory-efficient algorithm.',
            'Improved system scalability and reliability by adding load balancing, structured logging, and automatic failover.',
            'Built a continuous backup pipeline and a real-time monitoring tool with Slack and email alerts, reducing MTTR by 50%.'
        ],
        projects: ['User Alert Engine', 'Backup & Monitoring Tool'],
        tech: ['.NET Core','MongoDB','Redis','SQL','Sockets','CSV','APIs: BSE, NSE, Slack']
    },

    {
        title: 'Programmer',
        company: 'Acty System India (Subsidiary of Acty System Japan)',
        period: 'May 2022 - Nov 2022',
        bullets: [
            'Built a console application to filter large text files using dynamically generated commands parsed from XML configurations.',
            'Developed a Windows application for real-time, flicker-free 2D graphing with customizable features using double buffering and no external libraries.',
            'Implemented core modules (login, password reset, CRUD operations) for an internal Employee Management System, improving accessibility and data management.'
        ],
        projects: ['XML Command Filter', 'Real-Time Graph Rendering Tool', 'Employee Management System'],
        tech: ['.NET Framework','Windows Forms','MSSQL','Entity Framework','MVC Pattern']
    }
];


const xpList = document.getElementById('xpList');
const xpDetail = document.getElementById('xpDetail');

function renderList(){
    xpList.innerHTML = '';
    experiences.forEach((xp, i) => {
        const btn = document.createElement('button');
        btn.className = 'xp-item';
        btn.innerHTML = `<h4>${xp.title}</h4><div class="sub">${xp.company}</div>`;
        btn.addEventListener('click', () => selectXP(i));
        xpList.appendChild(btn);
    });
}

function selectXP(i){
    const nodes = xpList.querySelectorAll('.xp-item');
    nodes.forEach(n => n.classList.remove('active'));
    nodes[i].classList.add('active');

    const xp = experiences[i];
    xpDetail.innerHTML = `
    <div class="header">
      <h3 class="title">${xp.title}</h3>
      <div class="meta">${xp.period}</div>
    </div>
    <div class="muted">${xp.company}</div>
    <div class="hr"></div>
    <p class="eyebrow" style="margin-top:0">Details:</p>
    <ul class="tight">${xp.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
    ${xp.projects?.length ? `<p class="eyebrow">Projects:</p><div class="badges">${xp.projects.map(p=>`<span class='badge'>${p}</span>`).join('')}</div>` : ''}
    ${xp.tech?.length ? `<p class="eyebrow">Technologies:</p><div class="techs">${xp.tech.map(t=>`<span class='tech'>${t}</span>`).join('')}</div>` : ''}
  `;
}

renderList();
selectXP(0);


const projects = [
    {
        title: 'ScrollTone',
        company: 'Self-Hosted Audiobook Converter',
        period: '2025',
        github: 'https://github.com/rahilmehta-dev/ScrollTone',
        bullets: [
            'Built a self-hosted web app that converts EPUB books into audiobooks using Kokoro-82M TTS — runs entirely in Docker and accessible from any device on your network.',
            'Supports 19 voices with American/British accents, speed control (0.5×–2.5×), and parallel processing with 1–4 worker threads per book.',
            'Added optional multi-voice speaker attribution via local LLM (Ollama) to automatically assign character voices.',
            'Outputs WAV or MP3 with embedded metadata; includes audio enhancement with compression and EQ filters.',
            'Real-time chapter progress tracking via Server-Sent Events and batch conversion of multiple EPUBs.'
        ],
        tech: ['Python','JavaScript','Docker','PyTorch','spaCy','ffmpeg','Ollama']
    },
    {
        title: 'ShowUp',
        company: 'iOS Habit Tracker · Vibe Code Project',
        period: '2025',
        github: 'https://github.com/rahilmehta-dev/ShowUp',
        bullets: [
            'Vibe-coded an iOS 17+ habit tracker that auto-completes tasks using CoreLocation geofencing — tasks only complete when you physically show up and stay.',
            'Zero manual input: geofence entry + time elapsed triggers completion with real-time progress rings via TimelineView.',
            'Dynamic Island and Lock Screen widgets show live progress using ActivityKit + WidgetKit.',
            'Streak tracking, customizable weekly schedules, grace-period buffer, and milestone notifications.',
            'Built with SwiftUI + SwiftData + MVVM architecture using @Observable.'
        ],
        tech: ['SwiftUI','SwiftData','CoreLocation','ActivityKit','WidgetKit','MapKit','MVVM']
    },
    {

        title: 'RAGucation',
        company: 'Retrieval-Augmented Generation Tool',
        period: '2025',
        bullets: [
            'Built a RAG pipeline to answer natural-language questions from PDFs and CSVs.',
            'Integrated ChromaDB for vector storage and Sentence Transformers for embeddings.',
            'Deployed a Streamlit interface for file upload, chunking, and interactive querying.',
            'Added support for top-k retrieval and configurable chunk sizes.'
        ],
        tech: ['Python','Streamlit','ChromaDB','Ollama (local LLM)','Sentence Transformers']
    },


    {
        title: 'MotiMate',
        company: 'Automation Tool',
        period: '2025',
        bullets: [
            'Developed an automation system that generates and uploads daily motivational Instagram Reels.',
            'Integrated AI-generated quotes with dynamic Pexels video backgrounds and adaptive typography styles.',
            'Used Ollama to run local LLMs for offline/private quote generation.',
            'Designed the workflow to be fully hands-free, with automatic captioning and scheduling.',
            'Containerized with Docker for reproducibility and easy deployment on different machines.',
            'Leveraged instagrapi for Instagram automation (login, upload, and publish).'
        ],
        tech: ['Python','Docker','instagrapi','Ollama','Pexels API']
    },
    {
        title: 'Assistive Vision',
        company: 'Android ML App',
        period: '2022',
        bullets: [
            'Offline image captioning, cloth detection (~90% accuracy), currency calculator (~85%).',
            'TensorFlow model in ~110 MB package.'
        ],
        tech: ['TensorFlow','Android','Java']
    },
    {
        title: 'IntraChat',
        company: 'LAN Messaging App',
        period: '2021',
        bullets: [
            'Instant messaging over sockets with a lightweight custom protocol.',
            'Built in C# with minimal UI.'
        ],
        tech: ['C#','Sockets']
    }
];

const projList = document.getElementById('projList');
const projDetail = document.getElementById('projDetail');

function renderProjList(){
    projList.innerHTML = '';
    projects.forEach((p,i)=>{
        const btn=document.createElement('button');
        btn.className='xp-item';
        btn.innerHTML=`<h4>${p.title}</h4><div class='sub'>${p.company}</div>`;
        btn.addEventListener('click',()=>selectProj(i));
        projList.appendChild(btn);
    });
}
function selectProj(i){
    const nodes=projList.querySelectorAll('.xp-item');
    nodes.forEach(n=>n.classList.remove('active'));
    nodes[i].classList.add('active');

    const p=projects[i];
    projDetail.innerHTML=`
    <div class="header"><h3 class="title">${p.title}</h3><div class="meta">${p.period}</div></div>
    <div class="muted">${p.company}</div>
    <div class="hr"></div>
    <p class="eyebrow">Details:</p>
    <ul class="tight">${p.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
    ${p.tech?.length ? `<p class='eyebrow'>Technologies:</p><div class='techs'>${p.tech.map(t=>`<span class='tech'>${t}</span>`).join('')}</div>`:''}
    ${p.github ? `<div class="paper-links" style="margin-top:1rem"><a href="${p.github}" target="_blank" class="paper-link" rel="noreferrer"><i class="fa-brands fa-github"></i> View on GitHub</a></div>` : ''}
  `;
}

renderProjList();
selectProj(0);
