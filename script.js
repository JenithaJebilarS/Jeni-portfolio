const projects = {
  p1: {
    badge: 'Security · Web Development',
    title: 'College Voting System — Face Recognition',
    github: 'https://github.com/jenithajebilars/college-voting-face-recognition',
    overview: `Traditional college elections are plagued by proxy voting, identity fraud, and manual counting errors. This project was built to solve all three at once — using the power of facial recognition to make every vote both secure and verifiable, with zero human error in authentication.`,
    problem: `College elections routinely face issues like impersonation, ballot stuffing, and administrative overhead. Existing digital systems still rely on passwords or ID cards — both easy to bypass. The challenge was building a system that could authenticate a voter in seconds, with zero margin for fraud.`,
    solution: `I designed and implemented a full web-based voting platform where each voter's face is enrolled during registration. At voting time, the camera captures a live image, which is verified against stored facial embeddings using OpenCV and a face-recognition library in Python. A match unlocks the vote — no match, no vote. Results update in real-time on an admin dashboard.`,
    features: [
      'Live face capture and real-time matching at the voting booth',
      'Voter enrollment with face embedding stored securely in the database',
      'One-person-one-vote enforcement enforced at the biometric level',
      'Web-based admin dashboard with live result tracking',
      'Rejection log for failed or suspicious authentication attempts',
    ],
    impact: [
      { label: 'Authentication Time', val: '< 2 seconds' },
      { label: 'Proxy Votes Eliminated', val: '100%' },
      { label: 'Tech Stack Layers', val: '3 (CV · Backend · Web)' },
      { label: 'Project Type', val: 'Academic · Security' },
    ],
    stack: ['Python', 'OpenCV', 'Face Recognition Library', 'HTML/CSS/JS', 'SQLite', 'Flask'],
  },
  p2: {
    badge: 'Healthcare · Virtual Reality',
    title: 'VR in Healthcare',
    github: 'https://github.com/jenithajebilars/vr-in-healthcare',
    overview: `Virtual Reality is transforming how medical professionals train and how patients recover. This project explored the practical integration of VR into healthcare settings — from physiotherapy rehabilitation to surgical team training — through a working prototype and research-backed demo.`,
    problem: `Medical training is expensive, time-limited, and often dependent on rare patient cases. Rehabilitation exercises are difficult to motivate and track outside of clinical settings. There was a clear gap: an immersive, engaging system that could serve both training and recovery without requiring costly equipment or constant supervision.`,
    solution: `I researched and prototyped an interactive VR experience targeting two use cases: (1) guided rehabilitation exercises for post-op patients, where movements are tracked and gamified to encourage consistency; and (2) medical-staff training scenarios that simulate emergency room procedures in a consequence-free virtual environment. The project concluded with a full working demo presented to faculty and peers.`,
    features: [
      'Gamified rehabilitation module with real-time movement tracking',
      'Immersive emergency-room scenario for medical staff training',
      'Session logging and progress tracking for patients and trainers',
      'Research-backed workflow integration — mapped to real clinical protocols',
      'Presented with a live demo and written findings report',
    ],
    impact: [
      { label: 'Use Cases Prototyped', val: '2 (rehab + training)' },
      { label: 'Demo Presented', val: 'Yes — Faculty Review' },
      { label: 'Research Conducted', val: 'Clinical Workflow Study' },
      { label: 'Project Type', val: 'Healthcare · UX Research' },
    ],
    stack: ['VR Technology', 'Healthcare UX', 'Prototyping Tools', 'User Research', 'Presentation Design'],
  },
  p3: {
    badge: 'Artificial Intelligence · Agriculture · Mini Project',
    title: 'Agro AI — Smart Plant Health Assistant',
    github: 'https://github.com/jenithajebilars/agro-ai-plant-health',
    overview: `Millions of Indian farmers lose crops every year because they can't identify plant diseases in time. Agro AI puts an agricultural expert in every farmer's pocket — a smartphone-powered assistant that scans leaves, names the disease, and tells the farmer exactly what to do next, all through a conversational AI chatbot.`,
    problem: `Rural farmers lack easy access to agricultural experts. By the time a disease is identified through traditional methods (visiting an agri-centre or waiting for an extension officer), the crop is often already lost. The need was a fast, accessible, and accurate tool that works where internet connectivity may be limited.`,
    solution: `I built an AI-powered plant health assistant with three core capabilities: (1) a leaf-scanning module where the farmer photographs the plant and receives an instant diagnosis using image classification; (2) a medicine recommendation engine that maps detected diseases to approved treatments and dosages; and (3) an AI chatbot interface for follow-up questions, sowing schedules, and preventive care tips — all in a conversational format accessible to non-technical users.`,
    features: [
      'Leaf image scanning with disease classification using AI/ML model',
      'Disease-to-treatment mapping with dosage and application guidance',
      'Conversational AI chatbot for real-time crop care Q&A',
      'Medicine recommendation database with common and organic alternatives',
      'Simple, farmer-friendly UI designed for low-tech literacy users',
    ],
    impact: [
      { label: 'Core Features', val: '4 (Scan · Diagnose · Recommend · Chat)' },
      { label: 'Target Users', val: 'Rural Farmers · Agri Students' },
      { label: 'Interface Design', val: 'Accessibility-First' },
      { label: 'Project Type', val: 'AI · Agriculture · Social Impact' },
    ],
    stack: ['Python', 'Image Classification (AI/ML)', 'AI Chatbot Framework', 'Disease Detection Model', 'HTML/CSS/JS', 'REST API'],
  },
};

function openProject(id) {
  const p = projects[id];
  const impactGrid = p.impact.map(i => `
    <div class="pdp-stat-box">
      <div class="psb-label">${i.label}</div>
      <div class="psb-val">${i.val}</div>
    </div>`).join('');
  const featureList = p.features.map(f => `<li>${f}</li>`).join('');
  const stackPills = p.stack.map(s => `<span class="pdp-pill">${s}</span>`).join('');

  document.getElementById('pdp-content').innerHTML = `
    <div class="pdp-header">
      <button class="pdp-close" onclick="closeProject()">✕</button>
      <div class="pdp-badge">${p.badge}</div>
      <h2>${p.title}</h2>
      <a href="${p.github}" target="_blank" class="btn-github" style="margin-top:1rem;display:inline-flex;">⌥ View on GitHub →</a>
    </div>
    <div class="pdp-body">
      <div class="pdp-section">
        <div class="pdp-section-title">Project Overview</div>
        <p>${p.overview}</p>
      </div>
      <div class="pdp-section">
        <div class="pdp-section-title">The Problem</div>
        <p>${p.problem}</p>
      </div>
      <div class="pdp-section">
        <div class="pdp-section-title">My Solution</div>
        <p>${p.solution}</p>
      </div>
      <div class="pdp-section">
        <div class="pdp-section-title">Key Features</div>
        <ul>${featureList}</ul>
      </div>
      <div class="pdp-section">
        <div class="pdp-section-title">Project Highlights</div>
        <div class="pdp-grid">${impactGrid}</div>
      </div>
      <div class="pdp-section">
        <div class="pdp-section-title">Tech Stack</div>
        <div class="pdp-stack">${stackPills}</div>
      </div>
    </div>`;

  document.getElementById('project-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  document.getElementById('project-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('project-overlay')) closeProject();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });

// ── FORMSPREE CONTACT FORM ──
// உங்க Formspree Form ID-ஐ கீழே paste பண்ணுங்க
// formspree.io → New Form → copy the ID (e.g. "xpzgkwqr")
const FORMSPREE_ID = 'mlgynejb';

async function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const form = document.getElementById('contact-form');
  const successEl = document.getElementById('form-success');
  const errorEl = document.getElementById('form-error');

  btn.textContent = 'Sending…';
  btn.disabled = true;
  errorEl.style.display = 'none';

  const formData = new FormData(form);

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      form.style.display = 'none';
      successEl.style.display = 'block';
    } else {
      throw new Error('Server error');
    }
  } catch (err) {
    errorEl.style.display = 'block';
    btn.textContent = 'Send Message →';
    btn.disabled = false;
  }
}

// Scroll-top
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});

// Smooth scroll-in animation on scroll (works offline too)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));