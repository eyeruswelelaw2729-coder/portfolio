# 🛡️ Modern Cybersecurity Student Portfolio

A modern, premium, fully responsive personal portfolio website designed specifically for a **4th-Year Cybersecurity Student** preparing for internships, entry-level cybersecurity roles (SOC Analyst, Penetration Tester, Incident Responder, Security Engineer), and professional opportunities.

Built with a sophisticated deep navy/obsidian theme, crisp cyan and emerald accents, interactive network telemetry visualizations, an interactive recruiter CLI terminal shell, and zero cheesy clichés.

---

## 🚀 Quick Start (Running Locally)

This portfolio is built with zero external build dependencies. You can run it immediately without `npm`, Node.js, or complex setups:

### Option 1: Direct Browser Launch
Simply double-click `index.html` or open it with Google Chrome, Firefox, Microsoft Edge, or Safari.

### Option 2: Local Web Server (Recommended)
From PowerShell or terminal in this folder:
```powershell
# Using Python:
python -m http.server 8080

# Or using Node (npx):
npx serve .
```
Then navigate to `http://localhost:8080` in your web browser.

---

## 📂 Project Structure

```
cybersecurity-portfolio/
│
├── index.html            # Main semantic HTML structure & modals
├── styles.css            # Dark mode, responsive styling, modern cyber aesthetics
├── portfolio-data.js     # ⭐️ CENTRAL CONFIG FILE: Edit all your personal data here!
├── app.js                # Interactive logic, canvas network mesh, CLI terminal, filters
├── resume.pdf            # (Optional) Drop your real PDF resume here
└── README.md             # Documentation & deployment guide
```

---

## ✏️ How to Personalize Your Information

Everything on the website is powered by **`portfolio-data.js`**. You don't need to hunt through hundreds of lines of HTML to change your name or projects!

### 1. Update Personal Details & Links
Open `portfolio-data.js` in VS Code or any text editor and update:
```javascript
personal: {
  name: "Alex Rivera",               // Your real name
  university: "Georgia Tech",        // Your university
  location: "Atlanta, GA",           // Your location
  email: "alex.rivera@example.com",  // Your email
  github: "https://github.com/...",  // Your GitHub profile
  linkedin: "https://linkedin.com/in/...", // Your LinkedIn
  ...
}
```

### 2. Connect Your Own PDF Resume
- Simply save your compiled resume as **`resume.pdf`** inside this `cybersecurity-portfolio/` directory.
- The **"Download Resume"** buttons will automatically trigger downloading this file.
- The **"View Interactive Resume"** button opens a clean, print-ready, high-resolution resume sheet that can be printed or saved to PDF directly using `Ctrl + P` / `Cmd + P`.

### 3. Add or Modify Projects
In `portfolio-data.js`, the `projects` array contains 6 comprehensive, realistic cybersecurity project profiles:
1. **Network Vulnerability Scanner & Port Auditor** (Python, AsyncIO, NIST NVD)
2. **Web Application Security Lab & Mitigation Suite** (OWASP Top 10, Docker, Burp Suite)
3. **SIEM Threat Detection & Security Monitoring Dashboard** (ELK Stack, Sysmon, Sigma)
4. **Phishing Detection & URL Intelligence Engine** (VirusTotal, WHOIS, Python)
5. **Digital Forensics Investigation: Memory & Disk Artifact Triage** (Volatility 3, Autopsy)
6. **Zero-Trust Enterprise Network Architecture & Perimeter Hardening** (pfSense, Snort, VLANs)

You can easily replace the descriptions, GitHub links, and technologies with your own coursework or independent research!

### 4. Update Certifications & CTF Stats
In `portfolio-data.js`:
- `certifications.completed`: Add your CompTIA Security+, eJPT, Google Cybersecurity, etc.
- `certifications.inProgress`: Track your CCNA, BTL1, or OSCP progress percentages.
- `ctfLabs`: Update your TryHackMe rank, Hack The Box pwned machines, and National Cyber League (NCL) scores.

---

## 💻 Interactive Features Included

- **Interactive CLI Terminal Shell (`bash - defensive_shell`)**:
  - Click the **CLI SHELL** button in the top status bar or press the terminal icon.
  - Test commands: `help`, `whoami`, `skills`, `projects`, `certs`, `education`, `contact`, `status`, `sudo hire`, `clear`.
  - Up/Down arrow history navigation just like a real Linux terminal!
- **Interactive Network Node Canvas**:
  - Subtle interactive particle constellation mesh that dynamically connects nodes and gently responds to mouse movement without affecting performance.
- **Project Deep Dive Modals**:
  - Clicking "Case Study" on any project card opens an architecture diagram, threat mitigation overview, and technical workflow.
- **Print-Ready Built-in Resume**:
  - Clean HTML-based ATS-friendly resume viewer with direct browser print styling (`window.print()`).
- **Live Personalization Drawer**:
  - Click the floating "Personalize Portfolio" button in the bottom-right corner to test live name and university changes in your browser on the fly.

---

## 🌐 Free Deployment Options

### Deploy to GitHub Pages (Easiest)
1. Initialize git and push to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial cybersecurity portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and root `/ (root)`, then click **Save**.
4. Your website will be live at `https://<your-username>.github.io/portfolio/` in under 60 seconds!

### Deploy to Vercel or Netlify
- Drag and drop the `cybersecurity-portfolio` folder directly into [Vercel](https://vercel.com) or [Netlify Drop](https://app.netlify.com/drop).
- Instant global SSL, custom domains, and ultra-fast CDN delivery with zero configuration.

---

## 🔒 Security & Code Standards
- 100% Client-side and secure.
- Zero tracking scripts or telemetry data sent to third parties.
- Strict HTML sanitization on terminal and modal inputs.
- Responsive design audited for mobile phones, tablets, laptops, and ultra-wide desktop monitors.
