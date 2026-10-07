/**
 * ============================================================================
 * CYBERSECURITY PORTFOLIO - CORE APPLICATION LOGIC (app.js)
 * ============================================================================
 * Handles dynamic content population, interactive network canvas,
 * typewriter effects, interactive CLI terminal, project deep dives,
 * resume generator, contact validation, and live personalization.
 */

(function () {
  'use strict';

  // Fallback data if portfolio-data.js fails to load
  const data = window.PORTFOLIO_DATA || {
    personal: {
      name: "Cybersecurity Student",
      shortName: "Student",
      title: "4th-Year Cybersecurity Student",
      university: "State University",
      location: "United States",
      email: "student@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      stats: []
    },
    skillCategories: [],
    projects: [],
    ctfLabs: [],
    certifications: { completed: [], inProgress: [], planned: [] },
    education: { coursework: [] },
    experience: { items: [] },
    terminal: { commands: {} }
  };

  // State
  let activeProjectFilter = 'all';
  let activeSkillFilter = 'all';
  let terminalHistory = [];
  let historyIndex = -1;

  // DOM Elements
  const elements = {
    // Navigation & Header
    navBrandName: document.getElementById('nav-brand-name'),
    topBarLocation: document.getElementById('top-bar-location'),
    utcClock: document.getElementById('utc-clock'),
    navMenu: document.getElementById('nav-menu'),
    navToggle: document.getElementById('nav-toggle'),
    btnQuickResume: document.getElementById('btn-quick-resume'),
    btnOpenTerminalTop: document.getElementById('btn-open-terminal-top'),

    // Hero
    heroName: document.getElementById('hero-name-placeholder'),
    typewriterText: document.getElementById('typewriter-text'),
    heroBioLead: document.getElementById('hero-bio-lead'),
    heroAvailabilityTag: document.getElementById('hero-availability-tag'),
    btnHeroResume: document.getElementById('btn-hero-resume'),
    heroGithubLink: document.getElementById('hero-github-link'),
    heroLinkedinLink: document.getElementById('hero-linkedin-link'),
    btnCopyEmail: document.getElementById('btn-copy-email'),
    copyEmailStatus: document.getElementById('copy-email-status'),

    // Telemetry Card
    telemetryName: document.getElementById('telemetry-name'),
    telemetrySpecialization: document.getElementById('telemetry-specialization'),
    telemetrySchool: document.getElementById('telemetry-school'),
    avatarInitials: document.getElementById('avatar-initials'),

    // About & Stats
    statsContainer: document.getElementById('stats-container'),
    aboutHighlightsContainer: document.getElementById('about-highlights-container'),

    // Skills
    skillsFilterNav: document.getElementById('skills-filter-nav'),
    skillsGridContainer: document.getElementById('skills-grid-container'),

    // Projects
    projectsFilterBar: document.getElementById('projects-filter-bar'),
    projectsGridContainer: document.getElementById('projects-grid-container'),

    // CTF & Labs
    ctfGridContainer: document.getElementById('ctf-grid-container'),

    // Certifications
    completedCertsGrid: document.getElementById('completed-certs-grid'),
    inprogressCertsGrid: document.getElementById('inprogress-certs-grid'),
    plannedCertsGrid: document.getElementById('planned-certs-grid'),
    completedCertsCount: document.getElementById('completed-certs-count'),

    // Education
    eduDegreeTitle: document.getElementById('edu-degree-title'),
    eduUniversityName: document.getElementById('edu-university-name'),
    eduLocation: document.getElementById('edu-location'),
    eduGpa: document.getElementById('edu-gpa'),
    eduTimeline: document.getElementById('edu-timeline'),
    courseworkGrid: document.getElementById('coursework-grid'),

    // Experience
    experienceTimeline: document.getElementById('experience-timeline'),
    buildingExpText: document.getElementById('building-exp-text'),

    // Resume
    btnViewResumeModal: document.getElementById('btn-view-resume-modal'),
    btnDownloadResumeAction: document.getElementById('btn-download-resume-action'),
    interactiveResumeSheet: document.getElementById('interactive-resume-sheet'),

    // Contact
    contactEmailLink: document.getElementById('contact-email-link'),
    contactEmailDisplay: document.getElementById('contact-email-display'),
    contactLinkedinLink: document.getElementById('contact-linkedin-link'),
    contactGithubLink: document.getElementById('contact-github-link'),
    contactLocationDisplay: document.getElementById('contact-location-display'),
    contactForm: document.getElementById('contact-form'),
    contactFeedback: document.getElementById('contact-feedback'),
    btnSubmitContact: document.getElementById('btn-submit-contact'),

    // Footer
    footerName: document.getElementById('footer-name'),
    footerTitle: document.getElementById('footer-title'),
    footerGithubLink: document.getElementById('footer-github-link'),
    footerLinkedinLink: document.getElementById('footer-linkedin-link'),
    footerEmailLink: document.getElementById('footer-email-link'),
    footerCopyName: document.getElementById('footer-copy-name'),
    currentYear: document.getElementById('current-year'),

    // Modals
    modalTerminal: document.getElementById('modal-terminal'),
    btnCloseTerminal: document.getElementById('btn-close-terminal'),
    termCloseDot: document.getElementById('term-close-dot'),
    terminalScreen: document.getElementById('terminal-screen'),
    termWelcome: document.getElementById('term-welcome'),
    termHistory: document.getElementById('term-history'),
    termInput: document.getElementById('term-input'),

    modalProject: document.getElementById('modal-project'),
    btnCloseProjectModal: document.getElementById('btn-close-project-modal'),
    modalProjectTitle: document.getElementById('modal-project-title'),
    modalProjectBadge: document.getElementById('modal-project-badge'),
    modalProjectBody: document.getElementById('modal-project-body'),

    modalResume: document.getElementById('modal-resume'),
    btnCloseResumeModal: document.getElementById('btn-close-resume-modal'),

    modalCustomizer: document.getElementById('modal-customizer'),
    btnOpenCustomizer: document.getElementById('btn-open-customizer'),
    btnCloseCustomizer: document.getElementById('btn-close-customizer'),
    customizerForm: document.getElementById('customizer-form'),
    btnResetDefaults: document.getElementById('btn-reset-defaults'),

    // Canvas
    networkCanvas: document.getElementById('network-canvas')
  };

  /* ==========================================================================
     LOCAL STORAGE OVERRIDES (FOR INSTANT PERSONALIZATION)
     ========================================================================== */
  function loadStoredOverrides() {
    try {
      const stored = localStorage.getItem('cyber_portfolio_overrides');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.name) data.personal.name = parsed.name;
        if (parsed.university) data.personal.university = parsed.university;
        if (parsed.location) data.personal.location = parsed.location;
        if (parsed.email) data.personal.email = parsed.email;
        if (parsed.github) data.personal.github = parsed.github;
        if (parsed.linkedin) data.personal.linkedin = parsed.linkedin;
      }
    } catch (e) {
      console.warn("Storage check failed:", e);
    }
  }

  /* ==========================================================================
     INITIALIZATION & DATA BINDING
     ========================================================================== */
  function initApp() {
    loadStoredOverrides();
    renderPersonalInfo();
    renderStats();
    renderAboutHighlights();
    renderSkills();
    renderProjects();
    renderCTFLabs();
    renderCertifications();
    renderEducation();
    renderExperience();
    renderInteractiveResume();
    setupEventHandlers();
    setupTypewriter();
    setupUTCClock();
    setupNetworkCanvas();
  }

  /* Helper to derive initials */
  function getInitials(nameStr) {
    if (!nameStr || nameStr.includes('[')) return "CS";
    const parts = nameStr.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return nameStr.slice(0, 2).toUpperCase();
  }

  /* Populate Personal Info across all sections */
  function renderPersonalInfo() {
    const p = data.personal;

    // Navbar & Header
    if (elements.navBrandName) elements.navBrandName.textContent = p.name;
    if (elements.topBarLocation) elements.topBarLocation.textContent = p.location;

    // Hero
    if (elements.heroName) elements.heroName.textContent = p.name;
    if (elements.heroBioLead) elements.heroBioLead.textContent = p.bio;
    if (elements.heroAvailabilityTag) elements.heroAvailabilityTag.textContent = p.availability;
    if (elements.heroGithubLink) elements.heroGithubLink.href = p.github;
    if (elements.heroLinkedinLink) elements.heroLinkedinLink.href = p.linkedin;

    // Telemetry Card
    if (elements.telemetryName) elements.telemetryName.textContent = p.name;
    if (elements.telemetrySchool) elements.telemetrySchool.textContent = p.university;
    if (elements.avatarInitials) elements.avatarInitials.textContent = getInitials(p.name);

    // Education card
    if (elements.eduDegreeTitle) elements.eduDegreeTitle.textContent = data.education.degree || p.degree;
    if (elements.eduUniversityName) elements.eduUniversityName.textContent = p.university;
    if (elements.eduLocation) elements.eduLocation.textContent = p.location;
    if (elements.eduGpa) elements.eduGpa.textContent = "GPA: " + (data.education.gpa || "3.8 / 4.0");
    if (elements.eduTimeline) elements.eduTimeline.textContent = data.education.timeline || p.expectedGraduation;

    // Contact
    if (elements.contactEmailLink) elements.contactEmailLink.href = "mailto:" + p.email;
    if (elements.contactEmailDisplay) elements.contactEmailDisplay.textContent = p.email;
    if (elements.contactLinkedinLink) elements.contactLinkedinLink.href = p.linkedin;
    if (elements.contactGithubLink) elements.contactGithubLink.href = p.github;
    if (elements.contactLocationDisplay) elements.contactLocationDisplay.textContent = p.location;

    // Footer
    if (elements.footerName) elements.footerName.textContent = p.name;
    if (elements.footerCopyName) elements.footerCopyName.textContent = p.name;
    if (elements.footerGithubLink) elements.footerGithubLink.href = p.github;
    if (elements.footerLinkedinLink) elements.footerLinkedinLink.href = p.linkedin;
    if (elements.footerEmailLink) elements.footerEmailLink.href = "mailto:" + p.email;
    if (elements.currentYear) elements.currentYear.textContent = new Date().getFullYear();

    // Populate Customizer form fields
    const custName = document.getElementById('cust-name');
    const custUniv = document.getElementById('cust-university');
    const custLoc = document.getElementById('cust-location');
    const custEmail = document.getElementById('cust-email');
    const custGithub = document.getElementById('cust-github');
    const custLinkedin = document.getElementById('cust-linkedin');

    if (custName) custName.value = p.name;
    if (custUniv) custUniv.value = p.university;
    if (custLoc) custLoc.value = p.location;
    if (custEmail) custEmail.value = p.email;
    if (custGithub) custGithub.value = p.github;
    if (custLinkedin) custLinkedin.value = p.linkedin;
  }

  /* Render Stats row */
  function renderStats() {
    if (!elements.statsContainer) return;
    const stats = data.personal.stats || [];
    elements.statsContainer.innerHTML = stats.map(s => `
      <div class="stat-card">
        <div class="stat-number">${s.value}</div>
        <div class="stat-label">${s.label}</div>
        <div class="stat-detail">${s.detail}</div>
      </div>
    `).join('');
  }

  /* Render About Pillars */
  function renderAboutHighlights() {
    if (!elements.aboutHighlightsContainer) return;
    const highlights = data.highlights || [];
    const iconSvgs = {
      shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
      terminal: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
      search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
      code: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
    };

    elements.aboutHighlightsContainer.innerHTML = highlights.map(h => `
      <div class="highlight-box">
        <div class="highlight-icon-wrap">
          ${iconSvgs[h.icon] || iconSvgs.shield}
        </div>
        <h3 class="highlight-title">${h.title}</h3>
        <p class="highlight-desc">${h.description}</p>
      </div>
    `).join('');
  }

  /* Render Skills Section */
  function renderSkills() {
    if (!elements.skillsGridContainer) return;
    const categories = data.skillCategories || [];
    const filtered = activeSkillFilter === 'all' 
      ? categories 
      : categories.filter(c => c.id === activeSkillFilter);

    elements.skillsGridContainer.innerHTML = filtered.map(cat => `
      <div class="skill-category-card" data-category="${cat.id}">
        <div class="skill-cat-header">
          <div class="skill-cat-title">
            <span>${cat.name}</span>
            <span class="skill-cat-badge">${cat.skills.length} skills</span>
          </div>
          <div class="skill-cat-desc">${cat.description}</div>
        </div>
        <div class="skills-pill-cloud">
          ${cat.skills.map(s => `
            <div class="skill-tag" title="Proficiency: ${s.level}">
              <span>${s.name}</span>
              <span class="skill-tag-level">${s.badge || s.level}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  /* Render Projects Section */
  function renderProjects() {
    if (!elements.projectsGridContainer) return;
    const projects = data.projects || [];
    const filtered = activeProjectFilter === 'all'
      ? projects
      : projects.filter(p => p.category === activeProjectFilter);

    elements.projectsGridContainer.innerHTML = filtered.map(proj => `
      <article class="project-card" data-category="${proj.category}">
        <div class="project-top-header">
          <span class="project-badge">${proj.badge}</span>
          <span class="project-category-tag font-mono">// ${proj.category.toUpperCase()}</span>
        </div>

        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-summary">${proj.summary}</p>

          <div class="project-meta-box">
            <div class="project-meta-label">Problem Solved:</div>
            <div class="project-meta-text">${proj.problemSolved}</div>
          </div>

          <div class="project-concepts">
            <div class="project-concept-pills">
              ${proj.concepts.map(c => `<span class="concept-pill">${c}</span>`).join('')}
            </div>
          </div>

          <div class="project-tech-tags">
            ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <div class="project-footer-actions">
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="flex: 1;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>GitHub</span>
            </a>

            <button class="btn btn-outline btn-sm btn-project-details" data-id="${proj.id}" style="flex: 1;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <span>Case Study</span>
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Attach event listeners for project modal
    document.querySelectorAll('.btn-project-details').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projId = btn.getAttribute('data-id');
        openProjectModal(projId);
      });
    });
  }

  /* Render CTF & Labs */
  function renderCTFLabs() {
    if (!elements.ctfGridContainer) return;
    const labs = data.ctfLabs || [];
    elements.ctfGridContainer.innerHTML = labs.map(lab => `
      <div class="ctf-card">
        <div class="ctf-header">
          <div class="ctf-platform-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            <span>${lab.platform}</span>
          </div>
          <span class="badge-difficulty ${lab.badgeClass}">${lab.difficulty}</span>
        </div>

        <h3 class="ctf-name">${lab.name}</h3>
        <div class="ctf-category">${lab.category}</div>

        <div class="ctf-skills-box">
          <div class="ctf-skills-label">Skills & Techniques:</div>
          <div>${lab.skillsLearned}</div>
        </div>

        <div class="ctf-footer">
          <span>${lab.stats}</span>
          <span class="text-cyan font-mono">> Verified</span>
        </div>
      </div>
    `).join('');
  }

  /* Render Certifications */
  function renderCertifications() {
    const certs = data.certifications || { completed: [], inProgress: [], planned: [] };

    if (elements.completedCertsCount) {
      elements.completedCertsCount.textContent = certs.completed.length;
    }

    // Completed
    if (elements.completedCertsGrid) {
      elements.completedCertsGrid.innerHTML = certs.completed.map(c => `
        <div class="cert-card completed">
          <div class="cert-status-badge text-emerald">
            <span>✓ VERIFIED CERTIFIED</span>
            <span class="text-muted">(${c.date})</span>
          </div>
          <h3 class="cert-title">${c.name}</h3>
          <div class="cert-issuer">${c.issuer}</div>
          <div class="cert-id-tag">ID: ${c.credentialId}</div>
          <div class="cert-skills-cloud">
            ${c.skills.map(s => `<span class="cert-skill-tag">${s}</span>`).join('')}
          </div>
          <a href="${c.verifyUrl || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="margin-top: auto;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            <span>Verify Credential</span>
          </a>
        </div>
      `).join('');
    }

    // In Progress
    if (elements.inprogressCertsGrid) {
      elements.inprogressCertsGrid.innerHTML = certs.inProgress.map(c => `
        <div class="cert-card in-progress">
          <div class="cert-status-badge text-cyan">
            <span>⏳ IN PROGRESS</span>
            <span class="text-muted">(${c.expectedDate})</span>
          </div>
          <h3 class="cert-title">${c.name}</h3>
          <div class="cert-issuer">${c.issuer}</div>

          <div class="progress-bar-wrap">
            <div class="progress-bar-label">
              <span>Curriculum Completion</span>
              <span class="text-cyan font-mono">${c.progressPercentage}%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${c.progressPercentage}%;"></div>
            </div>
          </div>

          <div class="cert-skills-cloud">
            ${c.skills.map(s => `<span class="cert-skill-tag">${s}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }

    // Planned
    if (elements.plannedCertsGrid) {
      elements.plannedCertsGrid.innerHTML = certs.planned.map(c => `
        <div class="cert-card planned">
          <div class="cert-status-badge text-muted">
            <span>🎯 ROADMAP TARGET</span>
            <span>(${c.expectedDate})</span>
          </div>
          <h3 class="cert-title">${c.name}</h3>
          <div class="cert-issuer">${c.issuer}</div>
          <div class="cert-skills-cloud">
            ${c.skills.map(s => `<span class="cert-skill-tag">${s}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }
  }

  /* Render Education Coursework */
  function renderEducation() {
    if (!elements.courseworkGrid) return;
    const courses = data.education.coursework || [];
    elements.courseworkGrid.innerHTML = courses.map(c => `
      <div class="course-item">
        <div class="course-name-box">
          <span class="course-code">${c.code}</span>
          <span class="course-title">${c.name}</span>
        </div>
        <span class="course-grade">${c.grade}</span>
      </div>
    `).join('');
  }

  /* Render Experience */
  function renderExperience() {
    if (!elements.experienceTimeline) return;
    const items = data.experience.items || [];
    elements.experienceTimeline.innerHTML = items.map(exp => `
      <div class="timeline-entry">
        <div class="timeline-node"></div>
        <div class="timeline-card-body">
          <div class="timeline-header-row">
            <div>
              <h3 class="timeline-role">${exp.title}</h3>
              <div class="timeline-org">${exp.organization}</div>
            </div>
            <span class="timeline-period">${exp.period}</span>
          </div>

          <ul class="timeline-bullets">
            ${exp.description.map(b => `<li class="timeline-bullet-item">${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  /* Render Interactive Resume Modal */
  function renderInteractiveResume() {
    if (!elements.interactiveResumeSheet) return;
    const p = data.personal;
    const edu = data.education;
    const certs = data.certifications.completed;
    const exp = data.experience.items;

    elements.interactiveResumeSheet.innerHTML = `
      <div class="resume-sheet-header">
        <div>
          <h1 style="margin: 0; color: #0f172a; font-size: 1.85rem;">${p.name}</h1>
          <p style="margin: 4px 0 0 0; color: #0284c7; font-weight: 600; font-size: 1.05rem;">
            ${p.title} • Specializing in Defensive & Offensive Security
          </p>
        </div>
        <div class="contact-sub" style="text-align: right; font-size: 0.85rem; line-height: 1.4;">
          <div>${p.location}</div>
          <div>${p.email}</div>
          <div>${p.github.replace('https://', '')}</div>
          <div>${p.linkedin.replace('https://', '')}</div>
        </div>
      </div>

      <div class="resume-sec-title">Education</div>
      <div class="resume-item-row">
        <span>${edu.university}</span>
        <span>${edu.timeline}</span>
      </div>
      <div class="resume-sub-row">
        <span>${edu.degree} — ${edu.gpa}</span>
        <span>${edu.academicStanding}</span>
      </div>
      <div style="font-size: 0.825rem; color: #475569; margin-bottom: 0.85rem;">
        <strong>Key Coursework:</strong> Network Security, Ethical Hacking & Pen Testing, Digital Forensics, Applied Cryptography, Linux Internals, Secure Software Development.
      </div>

      <div class="resume-sec-title">Certifications</div>
      <div style="font-size: 0.85rem; color: #334155; margin-bottom: 0.85rem; line-height: 1.6;">
        ${certs.map(c => `• <strong>${c.name}</strong> (${c.issuer}, ${c.date}) — ID: ${c.credentialId}`).join('<br>')}
      </div>

      <div class="resume-sec-title">Technical Skills</div>
      <div style="font-size: 0.825rem; color: #334155; margin-bottom: 0.85rem; line-height: 1.55;">
        <strong>Network & Defensive Security:</strong> TCP/IP, Wireshark, Firewalls, VPN, Zeek, Splunk, Elastic SIEM, Log Correlation, Snort IDS/IPS, MITRE ATT&CK.<br>
        <strong>Offensive Security & AppSec:</strong> Penetration Testing, OWASP Top 10, Burp Suite, Nmap, Metasploit, Kali Linux, Vulnerability Auditing.<br>
        <strong>Forensics & Tools:</strong> Volatility 3, Autopsy, FTK Imager, Docker, Git, Linux Admin, VirtualBox.<br>
        <strong>Languages & Scripting:</strong> Python (Scapy, Sockets, Requests), Bash, PowerShell, SQL, JavaScript.
      </div>

      <div class="resume-sec-title">Practical Experience & Leadership</div>
      ${exp.map(item => `
        <div class="resume-item-row">
          <span>${item.title}</span>
          <span>${item.period}</span>
        </div>
        <div class="resume-sub-row">
          <span>${item.organization}</span>
          <span>${item.location}</span>
        </div>
        <ul class="resume-bullet-list">
          ${item.description.map(d => `<li>${d}</li>`).join('')}
        </ul>
      `).join('')}

      <div class="resume-sec-title">Key Cybersecurity Projects</div>
      ${data.projects.slice(0, 3).map(proj => `
        <div class="resume-item-row">
          <span>${proj.title}</span>
          <span>${proj.tech.slice(0, 3).join(', ')}</span>
        </div>
        <div style="font-size: 0.825rem; color: #334155; margin-bottom: 0.65rem;">
          ${proj.problemSolved}
        </div>
      `).join('')}
    `;
  }

  /* Project Deep Dive Modal Content */
  function openProjectModal(projectId) {
    const proj = data.projects.find(p => p.id === projectId);
    if (!proj || !elements.modalProject) return;

    elements.modalProjectTitle.textContent = proj.title;
    elements.modalProjectBadge.textContent = proj.badge;

    elements.modalProjectBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--cyan-primary);">Executive Overview</h4>
        <p style="color: var(--text-secondary);">${proj.summary}</p>
      </div>

      <div style="margin-bottom: 1.5rem; background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="font-size: 0.95rem; margin-bottom: 0.4rem; color: var(--emerald-success); font-family: var(--font-mono);">
          [DEFENSIVE & ARCHITECTURAL IMPACT]
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">${proj.problemSolved}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--cyan-primary);">System Architecture & Execution Pipeline</h4>
        <div style="background: var(--bg-input); padding: 1rem; border-radius: var(--radius-sm); border: 1px dashed var(--border-accent); font-family: var(--font-mono); font-size: 0.825rem; color: var(--text-code);">
          ${proj.architecture}
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem;">Core Security Principles & RFC / Standards</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${proj.concepts.map(c => `<span class="concept-pill" style="font-size: 0.8rem; padding: 0.35rem 0.65rem;">${c}</span>`).join('')}
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem;">Toolchain & Ecosystem</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${proj.tech.map(t => `<span class="tech-tag" style="font-size: 0.8rem; padding: 0.35rem 0.65rem;">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 1rem;">
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>View Source Repository</span>
        </a>
      </div>
    `;

    elements.modalProject.classList.add('active');
  }

  /* ==========================================================================
     INTERACTIVE TERMINAL CLI LOGIC
     ========================================================================== */
  function openTerminal() {
    if (!elements.modalTerminal) return;
    elements.modalTerminal.classList.add('active');
    if (elements.termWelcome && !elements.termWelcome.innerHTML) {
      elements.termWelcome.innerHTML = (data.terminal.welcomeMessage || "Defensive Shell ready. Type 'help'.")
        .replace(/\n/g, '<br>');
    }
    setTimeout(() => elements.termInput && elements.termInput.focus(), 150);
  }

  function closeTerminal() {
    if (elements.modalTerminal) elements.modalTerminal.classList.remove('active');
  }

  function handleTerminalCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    terminalHistory.push(rawCmd);
    historyIndex = terminalHistory.length;

    // Render user command prompt
    const cmdEcho = document.createElement('div');
    cmdEcho.style.marginBottom = '0.35rem';
    cmdEcho.innerHTML = `<span style="color: var(--emerald-success); font-weight:700;">visitor@cyber-sec:~$</span> <span>${escapeHtml(rawCmd)}</span>`;
    elements.termHistory.appendChild(cmdEcho);

    // Process output
    const outputDiv = document.createElement('div');
    outputDiv.className = 'term-line-output';

    if (cmd === 'clear') {
      elements.termHistory.innerHTML = '';
      elements.termInput.value = '';
      return;
    } else if (cmd === 'exit' || cmd === 'quit') {
      closeTerminal();
      elements.termInput.value = '';
      return;
    } else if (cmd === 'date') {
      outputDiv.textContent = new Date().toUTCString();
    } else if (data.terminal.commands && data.terminal.commands[cmd]) {
      outputDiv.innerHTML = data.terminal.commands[cmd]
        .replace(/\[YOUR NAME\]/g, data.personal.name)
        .replace(/\[YOUR UNIVERSITY\]/g, data.personal.university)
        .replace(/\[YOUR LOCATION\]/g, data.personal.location)
        .replace(/\[YOUR EMAIL\]/g, data.personal.email)
        .replace(/\[YOUR GITHUB\]/g, data.personal.github)
        .replace(/\[YOUR LINKEDIN\]/g, data.personal.linkedin)
        .replace(/\n/g, '<br>');
    } else {
      outputDiv.innerHTML = `<span style="color: var(--rose-alert);">Command not recognized: '${escapeHtml(cmd)}'.</span> Type 'help' to see valid commands.`;
    }

    elements.termHistory.appendChild(outputDiv);
    elements.terminalScreen.scrollTop = elements.terminalScreen.scrollHeight;
    elements.termInput.value = '';
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /* ==========================================================================
     TYPEWRITER SUBTITLE EFFECT
     ========================================================================== */
  function setupTypewriter() {
    if (!elements.typewriterText) return;
    const phrases = [
      "4th-Year Cybersecurity Student",
      "Offensive Penetration Tester",
      "SOC Analyst & Threat Hunter",
      "Digital Forensics & Incident Responder",
      "Python Security Tool Developer"
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typingSpeed = 70;
    const pauseDelay = 1800;

    function tick() {
      const current = phrases[phraseIdx];
      if (isDeleting) {
        elements.typewriterText.textContent = current.substring(0, charIdx - 1);
        charIdx--;
      } else {
        elements.typewriterText.textContent = current.substring(0, charIdx + 1);
        charIdx++;
      }

      let speed = isDeleting ? 35 : typingSpeed;

      if (!isDeleting && charIdx === current.length) {
        speed = pauseDelay;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        speed = 400;
      }

      setTimeout(tick, speed);
    }

    tick();
  }

  /* ==========================================================================
     UTC CLOCK
     ========================================================================== */
  function setupUTCClock() {
    if (!elements.utcClock) return;
    function updateClock() {
      const now = new Date();
      elements.utcClock.textContent = now.toTimeString().split(' ')[0] + ' UTC';
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  /* ==========================================================================
     INTERACTIVE NETWORK CANVAS
     ========================================================================== */
  function setupNetworkCanvas() {
    const canvas = elements.networkCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 18000), 65);
    const maxDistance = 140;

    const mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 1.8 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Interaction with mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.45)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = 1 - (dist / maxDistance);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.18})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  /* ==========================================================================
     EVENT HANDLERS & LISTENERS
     ========================================================================== */
  function setupEventHandlers() {
    // Mobile navigation toggle
    if (elements.navToggle && elements.navMenu) {
      elements.navToggle.addEventListener('click', () => {
        elements.navMenu.classList.toggle('mobile-open');
      });

      // Close mobile menu on item click
      elements.navMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          elements.navMenu.classList.remove('mobile-open');
        });
      });
    }

    // Scroll spy for active navbar state
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 100;
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });

    // Copy email action
    if (elements.btnCopyEmail) {
      elements.btnCopyEmail.addEventListener('click', () => {
        navigator.clipboard.writeText(data.personal.email).then(() => {
          const original = elements.copyEmailStatus.textContent;
          elements.copyEmailStatus.textContent = "Copied!";
          setTimeout(() => {
            elements.copyEmailStatus.textContent = original;
          }, 2000);
        }).catch(() => {
          window.location.href = `mailto:${data.personal.email}`;
        });
      });
    }

    // Skills filter buttons
    if (elements.skillsFilterNav) {
      elements.skillsFilterNav.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          elements.skillsFilterNav.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          activeSkillFilter = btn.getAttribute('data-filter');
          renderSkills();
        });
      });
    }

    // Projects filter buttons
    if (elements.projectsFilterBar) {
      elements.projectsFilterBar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          elements.projectsFilterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          activeProjectFilter = btn.getAttribute('data-category');
          renderProjects();
        });
      });
    }

    // Resume modal handlers
    const openResume = () => {
      if (elements.modalResume) elements.modalResume.classList.add('active');
    };
    if (elements.btnQuickResume) elements.btnQuickResume.addEventListener('click', openResume);
    if (elements.btnHeroResume) elements.btnHeroResume.addEventListener('click', openResume);
    if (elements.btnViewResumeModal) elements.btnViewResumeModal.addEventListener('click', openResume);
    if (elements.btnCloseResumeModal) {
      elements.btnCloseResumeModal.addEventListener('click', () => {
        elements.modalResume.classList.remove('active');
      });
    }

    // Download resume action (checks for resume.pdf, otherwise triggers print to PDF)
    if (elements.btnDownloadResumeAction) {
      elements.btnDownloadResumeAction.addEventListener('click', () => {
        // Attempt download of resume.pdf
        const link = document.createElement('a');
        link.href = 'resume.pdf';
        link.download = `${data.personal.name.replace(/\s+/g, '_')}_Cybersecurity_Resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Inform user how to customize the PDF
        setTimeout(() => {
          alert(`Resume download requested! \n\nTip: You can replace 'resume.pdf' in the project folder with your own PDF resume anytime.`);
        }, 300);
      });
    }

    // Terminal Modal Handlers
    if (elements.btnOpenTerminalTop) elements.btnOpenTerminalTop.addEventListener('click', openTerminal);
    if (elements.btnCloseTerminal) elements.btnCloseTerminal.addEventListener('click', closeTerminal);
    if (elements.termCloseDot) elements.termCloseDot.addEventListener('click', closeTerminal);

    if (elements.termInput) {
      elements.termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          handleTerminalCommand(elements.termInput.value);
        } else if (e.key === 'ArrowUp') {
          if (historyIndex > 0) {
            historyIndex--;
            elements.termInput.value = terminalHistory[historyIndex];
          }
        } else if (e.key === 'ArrowDown') {
          if (historyIndex < terminalHistory.length - 1) {
            historyIndex++;
            elements.termInput.value = terminalHistory[historyIndex];
          } else {
            historyIndex = terminalHistory.length;
            elements.termInput.value = '';
          }
        }
      });
    }

    // Project modal close
    if (elements.btnCloseProjectModal) {
      elements.btnCloseProjectModal.addEventListener('click', () => {
        elements.modalProject.classList.remove('active');
      });
    }

    // Modal background click close
    [elements.modalTerminal, elements.modalProject, elements.modalResume, elements.modalCustomizer].forEach(modal => {
      if (!modal) return;
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    });

    // Contact Form submission
    if (elements.contactForm) {
      elements.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value.trim();
        const message = document.getElementById('contact-message').value.trim();

        if (!name || !email || !subject || !message) {
          showContactFeedback("Please complete all required fields.", false);
          return;
        }

        // Email regex validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          showContactFeedback("Please enter a valid email address.", false);
          return;
        }

        // Simulate secure submission
        elements.btnSubmitContact.disabled = true;
        elements.btnSubmitContact.innerHTML = `<span>Encrypting & Sending...</span>`;

        setTimeout(() => {
          showContactFeedback(`Transmission successful! Thank you, ${name}. Your message has been received. I will reply to ${email} promptly.`, true);
          elements.contactForm.reset();
          elements.btnSubmitContact.disabled = false;
          elements.btnSubmitContact.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            <span>Send Message</span>
          `;
        }, 900);
      });
    }

    // Personalize / Customizer Modal
    if (elements.btnOpenCustomizer) {
      elements.btnOpenCustomizer.addEventListener('click', () => {
        if (elements.modalCustomizer) elements.modalCustomizer.classList.add('active');
      });
    }

    if (elements.btnCloseCustomizer) {
      elements.btnCloseCustomizer.addEventListener('click', () => {
        if (elements.modalCustomizer) elements.modalCustomizer.classList.remove('active');
      });
    }

    if (elements.customizerForm) {
      elements.customizerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const updated = {
          name: document.getElementById('cust-name').value.trim(),
          university: document.getElementById('cust-university').value.trim(),
          location: document.getElementById('cust-location').value.trim(),
          email: document.getElementById('cust-email').value.trim(),
          github: document.getElementById('cust-github').value.trim(),
          linkedin: document.getElementById('cust-linkedin').value.trim()
        };

        localStorage.setItem('cyber_portfolio_overrides', JSON.stringify(updated));
        loadStoredOverrides();
        renderPersonalInfo();
        renderInteractiveResume();
        elements.modalCustomizer.classList.remove('active');
        alert("Personal information updated live across the portfolio!");
      });
    }

    if (elements.btnResetDefaults) {
      elements.btnResetDefaults.addEventListener('click', () => {
        if (confirm("Reset to default portfolio values?")) {
          localStorage.removeItem('cyber_portfolio_overrides');
          location.reload();
        }
      });
    }
  }

  function showContactFeedback(msg, isSuccess) {
    if (!elements.contactFeedback) return;
    elements.contactFeedback.textContent = msg;
    elements.contactFeedback.className = isSuccess ? 'form-feedback-alert success' : 'form-feedback-alert error';
    elements.contactFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
