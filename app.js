const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Optional: hook resume button to your PDF path
const resumeBtn = document.getElementById('resumeBtn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with your actual file path
        window.location.href = '/documents/resume.pdf';
    });
}


const experiences = [
    {
        title: 'Graduate Teaching Assistant — CS 362: Software Testing',
        company: 'Oregon State University',
        period: 'Sept 2024 – March 2026',
        bullets: [
            'Graded mutation testing and coverage assignments for 100+ students.',
            'Held office hours and provided written feedback on test quality.'
        ],
        tech: ['Software Testing', 'Mutation Testing', 'Code Coverage', 'CI/CD']
    },
    {
        title: 'Research Assistant — ANSWER Lab',
        company: 'Oregon State University',
        period: 'Jan 2024 – March 2026',
        bullets: [
            'First author on Defects4REST (ICSE 2026): built a benchmark of 110 real-world REST API defects across 12 open-source projects.',
            'Ran 600+ hours of HPC test campaigns evaluating Schemathesis, EvoMaster, AutoRestTest, and RestTestGen.',
            'Co-first author on differential testing paper for autonomous systems (AAAI Fall Symposium 2025).'
        ],
        tech: ['Python', 'Docker', 'HPC', 'REST APIs', 'Schemathesis', 'EvoMaster', 'AutoRestTest', 'RestTestGen']
    },
    {
        title: 'Backend Engineer',
        company: 'Nerve Solutions',
        period: '2022 – 2023',
        bullets: [
            'Built a high-throughput alert engine for Kotak Neo handling real-time trade notifications.',
            'Stack: C#, REST APIs, SQL.'
        ],
        tech: ['C#', 'REST APIs', 'SQL']
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
        company: 'Self-hosted EPUB to audiobook converter',
        period: '2025',
        github: 'https://github.com/rahilmehta-dev/ScrollTone',
        live: 'https://rahilmehta-dev.github.io/ScrollTone/',
        bullets: [
            '19 voices, multi-character speaker attribution via local LLM, runs entirely in Docker.'
        ],
        tech: ['Python', 'FastAPI', 'Kokoro TTS', 'Ollama', 'Docker']
    },
    {
        title: 'ShowUp',
        company: 'iOS habit tracker',
        period: '2025',
        github: 'https://github.com/rahilmehta-dev/ShowUp',
        bullets: [
            'Auto-completes tasks when you physically show up and stay — geofencing, Live Activity on Dynamic Island, zero manual input.'
        ],
        tech: ['Swift', 'SwiftUI', 'CoreLocation', 'ActivityKit', 'SwiftData']
    },
    {
        title: 'FocusFeed',
        company: 'YouTube pre-filter for Apple Silicon',
        period: '2025',
        github: 'https://github.com/rahilmehta-dev/FocusFeed',
        bullets: [
            'Pick a mood, local MLX vision model scores the top 10 videos before you watch any of them.'
        ],
        tech: ['Python', 'FastAPI', 'MLX', 'SSE', 'Apple Silicon']
    },
    {
        title: 'mornin-cli',
        company: 'CLI morning standup generator',
        period: '2025',
        github: 'https://github.com/rahilmehta-dev/mornin-cli',
        bullets: [
            'Generates a morning standup from your git commits using a local LLM — no cloud, no accounts.'
        ],
        tech: ['Python', 'Ollama', 'CLI']
    },
    {
        title: 'Defects4REST',
        company: 'REST API defect benchmark',
        period: '2025',
        github: 'https://github.com/ANSWER-OSU/Defects4REST',
        bullets: [
            'Benchmark of 110 real-world REST API defects across 12 open-source projects.',
            'Single-command Docker deployment per defect, used in ICSE 2026 paper.'
        ],
        tech: ['Python', 'Docker', 'REST APIs', 'OpenAPI']
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
    ${(p.github || p.live) ? `<div class="paper-links" style="margin-top:1rem">${p.github ? `<a href="${p.github}" target="_blank" class="paper-link" rel="noreferrer"><i class="fa-brands fa-github"></i> GitHub</a>` : ''}${p.live ? `<a href="${p.live}" target="_blank" class="paper-link" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Site</a>` : ''}</div>` : ''}
  `;
}

renderProjList();
selectProj(0);

// ── Life & Interests ──

// Add your photos here: { src: 'img/your-photo.jpg', caption: 'Caption' }
const photos = [

];

// Add your certificates here: { name: 'Cert Name', issuer: 'Issuer', date: 'Month Year', img: 'img/cert.jpg', url: 'https://...' }
const certificates = [

];

// Add / edit your inspirations here
const inspirations = [
    {
        name: 'Donald Knuth',
        role: 'Computer Scientist & Author, The Art of Computer Programming',
        quote: 'Premature optimization is the root of all evil.',
        icon: '📚'
    },
    {
        name: 'Grace Hopper',
        role: 'Pioneer Programmer & Admiral, U.S. Navy',
        quote: "It's easier to ask forgiveness than it is to get permission.",
        icon: '⚓'
    },
    {
        name: 'Linus Torvalds',
        role: 'Creator of Linux & Git',
        quote: 'Talk is cheap. Show me the code.',
        icon: '🐧'
    }
];

function renderPhotos() {
    const el = document.getElementById('tab-photos');
    if (!photos.length) {
        el.innerHTML = `<div class="life-empty"><i class="fa-solid fa-camera"></i><span>Drop photos in <code>img/</code> and add them to the <code>photos</code> array in app.js</span></div>`;
        return;
    }
    el.innerHTML = `<div class="photo-grid">${photos.map(p => `
        <div class="photo-card">
            <img src="${p.src}" alt="${p.caption || ''}">
            ${p.caption ? `<div class="photo-caption">${p.caption}</div>` : ''}
        </div>`).join('')}</div>`;
}

function renderCerts() {
    const el = document.getElementById('tab-certs');
    if (!certificates.length) {
        el.innerHTML = `<div class="life-empty"><i class="fa-solid fa-certificate"></i><span>Add your certificates to the <code>certificates</code> array in app.js</span></div>`;
        return;
    }
    el.innerHTML = `<div class="cert-grid">${certificates.map(c => `
        <div class="cert-card">
            ${c.img
                ? `<img class="cert-thumb" src="${c.img}" alt="${c.name}">`
                : `<div class="cert-thumb-placeholder"><i class="fa-solid fa-certificate"></i></div>`}
            <p class="cert-name">${c.name}</p>
            <p class="cert-issuer">${c.issuer}</p>
            <p class="cert-date">${c.date}</p>
            ${c.url ? `<a class="cert-link" href="${c.url}" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> View credential</a>` : ''}
        </div>`).join('')}</div>`;
}

function renderInspo() {
    const el = document.getElementById('tab-inspo');
    if (!inspirations.length) {
        el.innerHTML = `<div class="life-empty"><i class="fa-solid fa-star"></i><span>Add inspirations to the <code>inspirations</code> array in app.js</span></div>`;
        return;
    }
    el.innerHTML = `<div class="inspo-grid">${inspirations.map(p => `
        <div class="inspo-card">
            <p class="inspo-quote">${p.quote}</p>
            <div class="inspo-person">
                ${p.img
                    ? `<img class="inspo-avatar" src="${p.img}" alt="${p.name}">`
                    : `<div class="inspo-avatar-placeholder">${p.icon || '✦'}</div>`}
                <div class="inspo-info">
                    <p class="inspo-name">${p.name}</p>
                    <p class="inspo-role">${p.role}</p>
                </div>
            </div>
        </div>`).join('')}</div>`;
}

renderPhotos();
renderCerts();
renderInspo();

document.querySelectorAll('.life-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.life-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.life-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
});
