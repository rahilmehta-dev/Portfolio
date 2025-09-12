const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Optional: hook resume button to your PDF path
const resumeBtn = document.getElementById('resumeBtn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with your actual file path
        window.location.href = 'Rahil_Mehta_Resume.pdf';
    });
}


const experiences = [
    {
        title: 'Software Engineer',
        company: 'Nerve Solution',
        period: 'Feb 2023 - Aug 2023',
        bullets: [
            'Built a high-performance .NET alert engine handling 250k+ alerts/sec',
            'Reduced client infrastructure costs by 33% through system optimization',
            'Improved processing time by 25% with new alert delivery algorithms.',
            'Implemented load balancing, failover, and monitoring tools (Slack + Email).',
            'Developed a continuous backup utility with CSV + MongoDB for resilience.',

        ],
        projects: ['User Alert Engine ', 'Backup & Monitoring Tool'],
        tech: ['.NET core','MongoDB','Redis','SQL','Sockets' ,'CSV' ,'APIs: BSE (Bombay Stock Exchange), NSE (National Stock Exchange), Slack API']
    },
    {
        title: 'Programmer',
        company: 'Acty System India (Indian branch of Acty System, Japan)',
        period: 'May 2022 - November 2022',
        bullets: [
            'Built a console application to filter text file contents based on commands generated in XML.',
            'Created a Windows application to read XML files and render real-time flicker-free 2D graphs with double buffering graphics.',
            'Enabled graph customization: slopes, start/end points, grid, axis spacing, range, and tooltips — without external libraries.',
            'Contributed to web application development: login, password reset, and CRUD pages using MVC pattern, MSSQL, and Entity Framework.'
        ],
        projects: ['XML Command Filter ','Real-Time Graph Rendering Too','Web Application (Admin & User Modules)'],
        tech: ['.NET Framework','Windows Forms','MSSQL','Entity Framework','MVC Pattern']
    },
    {
        title: 'AIProbe — Research',
        company: 'Accepted at AAAI — ATRACC Symposium 2025',
        period: 'May 2024 - July 2025',
        bullets: [
            'Designed and implemented a domain-agnostic environment and task generation system (XML-driven), with sampling algorithms for diverse state coverage.',
            'Developed the instruction generation algorithm, allowing guided testing of multi-agent policies.',
            'Created environment wrappers to integrate domains (ACAS Xu, Cooperative Navigation, Bipedal Walker, Flappy Bird, Lava) into the AIProbe pipeline.',
            'Conducted and analyzed large-scale experiments, showing AIProbe’s ability to distinguish policy flaws vs. environment issues more effectively than baseline fuzzing methods.'
        ],
        projects: ['Domain-Agnostic Environment & Task Generation Pipeline','AIProbe Wrapper Framework','Instruction Generation Algorithm','Multi-Domain Experimental Evaluation'],
        tech: ['.NET','Python','Reinforcement Learning (PettingZoo, PPO, SB3, Box2D)']
    },

    {
        title: 'Graduate Teaching assistant',
        company: 'Oregon State University · Corvallis, USA',
        period: 'Sept 2024 - Present',
        bullets: [
            'Graded assignments for Software Engineering II (CS362) with strict rubric adherence and fairness.',
            'Assisted students during office hours with CI/CD workflows, code reviews, and debugging practices.'
        ],
        projects: ['CS362 Assignment Grading & Feedback System','Student Support (CI/CD, Code Review, Debugging)'],
        tech: ['Git/GitHub','CI/CD Tools','Code Review Practices','Debugging']
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
  `;
}

renderProjList();
selectProj(0);
