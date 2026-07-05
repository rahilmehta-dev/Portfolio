/* ── Section metadata for navigation ── */
const sectionMeta = {
  hero:         { file: 'main.ts',          lang: 'TypeScript' },
  about:        { file: 'about.md',         lang: 'Markdown' },
  skills:       { file: 'skills.json',      lang: 'JSON' },
  experience:   { file: 'experience.git',   lang: 'Git Log' },
  projects:     { file: 'projects/',        lang: 'Shell' },
  oss:          { file: 'contributions.ts', lang: 'TypeScript' },
  publications: { file: 'publications.md',  lang: 'Markdown' },
  snapshots:    { file: 'snapshots/',       lang: 'RAW Images' },
  contact:      { file: 'contact.json',     lang: 'JSON' }
};

let lightboxIndex = 0;

/* ── Render: hero ── */
function renderHero() {
  const p = PORTFOLIO;
  ['heroAvatar', 'sidebarAvatar'].forEach(id => {
    const img = document.getElementById(id);
    if (img) { img.src = p.avatar; img.alt = p.name; }
  });
  const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  set('heroGreeting', p.greeting);
  set('heroName', p.name);
  set('heroRole', p.role);
  set('heroBio', p.bio);
  const resumeLink = document.querySelector('.resume-btn');
  if (resumeLink) resumeLink.href = p.resume;
}

/* ── Render: about terminal ── */
function renderAbout() {
  const a = PORTFOLIO.about;
  const e = a.education;
  const body = document.querySelector('#about .term-body');
  if (!body) return;
  body.innerHTML = `
    <div class="term-block">
      <div class="term-line">
        <span class="term-prompt">➜</span>
        <span class="term-path">~</span>
        <span class="term-cmd">whoami</span>
      </div>
      <div class="term-output"><p>${a.whoami}</p></div>
    </div>
    <div class="term-block">
      <div class="term-line">
        <span class="term-prompt">➜</span>
        <span class="term-path">~</span>
        <span class="term-cmd">cat mission.txt</span>
      </div>
      <div class="term-output"><p>${a.mission}</p></div>
    </div>
    <div class="term-block">
      <div class="term-line">
        <span class="term-prompt">➜</span>
        <span class="term-path">~</span>
        <span class="term-cmd">cat education.json</span>
      </div>
      <div class="term-output">
        <div class="inline-json">
          <span class="j-brace">{</span><br />
          &nbsp;&nbsp;<span class="j-key">"degree"</span><span class="j-colon">:</span> <span class="j-str">"${e.degree}"</span><span class="j-comma">,</span><br />
          &nbsp;&nbsp;<span class="j-key">"school"</span><span class="j-colon">:</span> <span class="j-str">"${e.school}"</span><span class="j-comma">,</span><br />
          &nbsp;&nbsp;<span class="j-key">"status"</span><span class="j-colon">:</span> <span class="j-str">"${e.status}"</span><span class="j-comma">,</span><br />
          &nbsp;&nbsp;<span class="j-key">"gpa"</span><span class="j-colon">:</span>    <span class="j-str">"${e.gpa}"</span><br />
          <span class="j-brace">}</span>
        </div>
      </div>
    </div>
    <div class="term-line">
      <span class="term-prompt">➜</span>
      <span class="term-path">~</span>
      <span class="cursor-block blink">▋</span>
    </div>
  `;
}

/* ── Render: skills ── */
function renderSkills() {
  const el = document.querySelector('#skills .skills-container');
  if (!el) return;
  el.innerHTML = PORTFOLIO.skills.map((group, gi, arr) => {
    const isLast = gi === arr.length - 1;
    return `
      <div class="skill-group">
        <div class="skill-group-label"><span class="j-key">"${group.key}"</span><span class="j-colon">:</span> <span class="j-brace">[</span></div>
        <div class="skill-badges">
          ${group.items.map(item => `<span class="skill-badge">${item}</span>`).join('\n          ')}
        </div>
        <div class="skill-close"><span class="j-brace">]</span>${isLast ? '' : '<span class="j-comma">,</span>'}</div>
      </div>
    `;
  }).join('');
}

/* ── Render: git log ── */
function renderGitLog() {
  const el = document.getElementById('gitLog');
  if (!el) return;
  el.innerHTML = PORTFOLIO.experience.map(xp => `
    <div class="git-commit">
      <div class="git-graph">
        <div class="git-node"></div>
        <div class="git-line"></div>
      </div>
      <div class="git-content">
        <div class="git-header">
          <span class="git-hash">${xp.hash}</span>
          <span class="git-title">${xp.title}</span>
          <span class="git-period">${xp.period}</span>
        </div>
        <div class="git-company">@ ${xp.company}</div>
        <div class="git-stat">
          ${xp.bullets.map(b => `
            <div class="git-stat-line">
              <span class="git-plus">+</span>
              <span>${b}</span>
            </div>
          `).join('')}
        </div>
        <div class="git-tech-row">
          ${xp.tech.map(t => `<span class="git-tech">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Render: project cards ── */
function renderProjects() {
  const el = document.getElementById('projectCards');
  if (!el) return;
  el.innerHTML = PORTFOLIO.projects.map(p => `
    <div class="project-card">
      <div class="project-card-header">
        <i class="fa-solid fa-folder-open project-icon"></i>
        <span class="project-name">${p.name}/</span>
        <span class="project-year">${p.year}</span>
      </div>
      <div class="project-card-body">
        <p class="project-desc">${p.desc}</p>
        <div class="project-tech-row">
          ${p.tech.map(t => `<span class="project-tech">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noreferrer" class="project-link"><i class="fa-brands fa-github"></i> GitHub</a>` : ''}
          ${p.live   ? `<a href="${p.live}"   target="_blank" rel="noreferrer" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Render: OSS contributions ── */
function renderOSS() {
  const tbody = document.querySelector('#oss .oss-table tbody');
  if (!tbody) return;
  tbody.innerHTML = PORTFOLIO.oss.map(o => `
    <tr>
      <td><a href="${o.toolUrl}" target="_blank" rel="noreferrer" class="oss-link">${o.tool}</a></td>
      <td><a href="${o.issueUrl}" target="_blank" rel="noreferrer" class="oss-link">${o.issue}</a></td>
      <td><span class="status-badge status-${o.status}">${o.statusLabel}</span></td>
    </tr>
  `).join('');
}

/* ── Render: publications ── */
function renderPublications() {
  const el = document.querySelector('#publications .pub-list');
  if (!el) return;
  el.innerHTML = PORTFOLIO.publications.map(pub => `
    <div class="pub-card">
      <div class="pub-venue">
        <i class="fa-solid fa-award pub-award"></i>
        ${pub.venue}
      </div>
      <h3 class="pub-title">${pub.title}</h3>
      <p class="pub-role">Role: ${pub.role}</p>
      ${pub.contribution ? `<p class="pub-contribution"><strong>My Contribution:</strong> ${pub.contribution}</p>` : ''}
      <div class="pub-links">
        ${pub.links.map(l => `
          <a href="${l.url}" target="_blank" rel="noreferrer" class="pub-link">
            <i class="${l.icon}"></i> ${l.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ── Render: contact JSON panel ── */
function renderContact() {
  const c = PORTFOLIO.contact;
  const body = document.querySelector('#contact .contact-json-body');
  if (!body) return;

  const socialLines = c.social.map((s, i, arr) => {
    const comma = i < arr.length - 1 ? '<span class="j-comma">,</span>' : '';
    return `&nbsp;&nbsp;&nbsp;&nbsp;<span class="j-key">"${s.key}"</span><span class="j-colon">:</span> <span class="j-str">"<a href='${s.url}' target='_blank' rel='noreferrer' class='j-link'>${s.label}</a>"</span>${comma}<br />`;
  }).join('');

  body.innerHTML = `
    <div class="inline-json">
      <span class="j-brace">{</span><br />
      &nbsp;&nbsp;<span class="j-key">"name"</span><span class="j-colon">:</span> <span class="j-str">"${PORTFOLIO.name}"</span><span class="j-comma">,</span><br />
      &nbsp;&nbsp;<span class="j-key">"email"</span><span class="j-colon">:</span> <span class="j-str">"<a href='mailto:${c.email}' class='j-link'>${c.email}</a>"</span><span class="j-comma">,</span><br />
      &nbsp;&nbsp;<span class="j-key">"location"</span><span class="j-colon">:</span> <span class="j-str">"${c.location}"</span><span class="j-comma">,</span><br />
      &nbsp;&nbsp;<span class="j-key">"social"</span><span class="j-colon">:</span> <span class="j-brace">{</span><br />
      ${socialLines}
      &nbsp;&nbsp;<span class="j-brace">}</span><span class="j-comma">,</span><br />
      &nbsp;&nbsp;<span class="j-key">"availability"</span><span class="j-colon">:</span> <span class="j-str">"${c.availability}"</span><br />
      <span class="j-brace">}</span>
    </div>
  `;
}

/* ── Snapshots ── */
function loadSnapshots() {
  const grid  = document.getElementById('snapshotsGrid');
  const empty = document.getElementById('snapshotsEmpty');
  if (!grid) return;

  const photos = PORTFOLIO.snapshots.filter(p => p.src);

  if (!photos.length) {
    if (empty) empty.style.display = 'flex';
    return;
  }

  grid.innerHTML = photos.map((p, i) => `
    <div class="snap-card" data-index="${i}">
      <img
        src="${p.src}"
        alt="${p.caption || 'snapshot ' + (i + 1)}"
        loading="lazy"
      />
      <div class="snap-overlay">
        ${p.caption ? `<span class="snap-caption">${p.caption}</span>` : ''}
      </div>
      <span class="snap-zoom-icon"><i class="fa-solid fa-expand"></i></span>
    </div>
  `).join('');

  grid.querySelectorAll('.snap-card').forEach(card => {
    card.addEventListener('click', () => openLightbox(+card.dataset.index));
  });
}

function openLightbox(index) {
  lightboxIndex = index;
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  updateLightbox();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const photos  = PORTFOLIO.snapshots.filter(p => p.src);
  const p       = photos[lightboxIndex];
  const img     = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const counter = document.getElementById('lightboxCounter');
  const prev    = document.getElementById('lightboxPrev');
  const next    = document.getElementById('lightboxNext');
  if (img)     { img.src = p.src; img.alt = p.caption || ''; }
  if (caption)   caption.textContent = p.caption || '';
  if (counter)   counter.textContent = `${lightboxIndex + 1} / ${photos.length}`;
  if (prev)      prev.disabled  = lightboxIndex === 0;
  if (next)      next.disabled  = lightboxIndex === photos.length - 1;
}

function setupLightbox() {
  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev')?.addEventListener('click', () => {
    if (lightboxIndex > 0) { lightboxIndex--; updateLightbox(); }
  });
  document.getElementById('lightboxNext')?.addEventListener('click', () => {
    const photos = PORTFOLIO.snapshots.filter(p => p.src);
    if (lightboxIndex < photos.length - 1) { lightboxIndex++; updateLightbox(); }
  });
  document.getElementById('lightbox')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb?.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  { if (lightboxIndex > 0) { lightboxIndex--; updateLightbox(); } }
    if (e.key === 'ArrowRight') {
      const photos = PORTFOLIO.snapshots.filter(p => p.src);
      if (lightboxIndex < photos.length - 1) { lightboxIndex++; updateLightbox(); }
    }
  });
}

/* ── Active section tracking ── */
function setActiveSection(id) {
  document.querySelectorAll('.tree-item').forEach(el => {
    el.classList.toggle('active', el.dataset.section === id);
  });
  document.querySelectorAll('.tab').forEach(el => {
    el.classList.toggle('active', el.dataset.section === id);
  });
  const meta = sectionMeta[id];
  if (meta) {
    const statusFile = document.getElementById('statusFile');
    const statusLang = document.getElementById('statusLang');
    if (statusFile) statusFile.textContent = meta.file;
    if (statusLang) statusLang.textContent = meta.lang;
  }
}

/* ── Scroll spy via IntersectionObserver ── */
function setupScrollSpy() {
  const sections = document.querySelectorAll('.section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    });
  }, {
    root: document.getElementById('editorArea'),
    rootMargin: '0px 0px -60% 0px',
    threshold: 0
  });
  sections.forEach(s => observer.observe(s));
}

/* ── Smooth scroll to section ── */
function scrollToSection(id) {
  const target = document.getElementById(id);
  const area   = document.getElementById('editorArea');
  if (target && area) {
    area.scrollTo({ top: target.offsetTop - 10, behavior: 'smooth' });
  }
}

/* ── Navigation click handlers ── */
function setupNavigation() {
  document.querySelectorAll('.tree-item[data-section]').forEach(el => {
    el.addEventListener('click', () => {
      scrollToSection(el.dataset.section);
      closeSidebar();
    });
  });
  document.querySelectorAll('.tab[data-section]').forEach(el => {
    el.addEventListener('click', () => scrollToSection(el.dataset.section));
  });
  document.querySelectorAll('[data-scroll]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(el.dataset.scroll);
    });
  });
}

/* ── Mobile sidebar ── */
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function setupSidebar() {
  document.getElementById('sidebarToggle').addEventListener('click', openSidebar);
  document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);
}

/* ── Stagger helper ── */
function staggerChildren(section) {
  section.querySelectorAll('.skill-badge').forEach((el, i) => {
    el.style.animationDelay = `${0.05 + i * 0.045}s`;
  });
  section.querySelectorAll('.git-commit').forEach((el, i) => {
    el.style.animationDelay = `${0.05 + i * 0.1}s`;
  });
  section.querySelectorAll('.project-card').forEach((el, i) => {
    el.style.animationDelay = `${0.05 + i * 0.08}s`;
  });
  section.querySelectorAll('.oss-table tbody tr').forEach((el, i) => {
    el.style.animationDelay = `${0.05 + i * 0.06}s`;
  });
  section.querySelectorAll('.pub-card').forEach((el, i) => {
    el.style.animationDelay = `${0.05 + i * 0.1}s`;
  });
}

/* ── Section fade-in observer ── */
function setupFadeIn() {
  document.getElementById('hero')?.classList.add('visible');

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        staggerChildren(entry.target);
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, {
    root: document.getElementById('editorArea'),
    threshold: 0,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.section:not(#hero)').forEach(s => io.observe(s));
}

/* ── Contact form ── */
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const name    = data.get('name')    || '';
    const email   = data.get('email')   || '';
    const subject = data.get('subject') || 'Portfolio Contact';
    const message = data.get('message') || '';
    const body = `From: ${name} (${email})\n\n${message}`;
    window.open(
      `mailto:${PORTFOLIO.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank'
    );
    const feedback = document.getElementById('formFeedback');
    if (feedback) {
      feedback.textContent = '✓ Opening mail client...';
      setTimeout(() => { feedback.textContent = ''; }, 4000);
    }
  });
}

/* ── Terminal boot animation ── */
function runBootAnimation() {
  const firstName = PORTFOLIO.name.split(' ')[0].toLowerCase();
  const lines = [
    { text: '> Initializing portfolio v2.0.0...', cls: 'boot-dim', delay: 0 },
    { text: '> Loading modules...',               cls: 'boot-dim', delay: 300 },
    { text: '> [████████████████████] 100%',      cls: 'boot-bar', delay: 700 },
    { text: '> Compiling TypeScript... done.',    cls: 'boot-ok',  delay: 1100 },
    { text: '> Build successful. No errors.',     cls: 'boot-ok',  delay: 1500 },
    { text: `> Welcome, ${firstName}@portfolio ~`, cls: 'boot-ok', delay: 1900 }
  ];

  const bootDiv   = document.getElementById('terminalBoot');
  const container = document.getElementById('bootLines');
  const content   = document.getElementById('heroContent');
  const codePanel = document.getElementById('heroCode');
  if (!container) return;

  lines.forEach(({ text, cls, delay }) => {
    setTimeout(() => {
      const p = document.createElement('p');
      p.className = cls;
      p.textContent = text;
      container.appendChild(p);
    }, delay);
  });

  const totalDelay = lines[lines.length - 1].delay + 600;
  setTimeout(() => {
    if (bootDiv) bootDiv.style.display = 'none';
    if (content) {
      content.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      content.style.opacity    = '1';
      content.style.transform  = 'translateY(0)';
    }
    if (codePanel) {
      codePanel.style.transition = 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s';
      codePanel.style.opacity    = '1';
      codePanel.style.transform  = 'translateY(0)';
    }
  }, totalDelay);
}

/* ── Year ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderGitLog();
  renderProjects();
  renderOSS();
  renderPublications();
  renderContact();
  loadSnapshots();
  setupNavigation();
  setupScrollSpy();
  setupFadeIn();
  setupContactForm();
  setupSidebar();
  setupLightbox();
  runBootAnimation();
});
