/**
 * ============================================================================
 * CYBERSECURITY PORTFOLIO - CENTRAL DATA CONFIGURATION
 * ============================================================================
 * Edit this file to update your personal information, projects, skills,
 * certifications, CTF achievements, education, and experience.
 * 
 * Everything updates automatically across the entire website!
 */

const PORTFOLIO_DATA = {
  // --------------------------------------------------------------------------
  // PERSONAL & CONTACT INFORMATION
  // --------------------------------------------------------------------------
  personal: {
    name: "[Melona]",              // Replace with your real full name (e.g., "Alex Rivera")
    shortName: "Alex",                // Short name for conversational greetings
    title: "4th-Year Cybersecurity Student",
    specialization: "Offensive & Defensive Security | Threat Detection | DFIR",
    university: "[YOUR UNIVERSITY]",  // Replace with your institution (e.g., "Georgia Institute of Technology")
    degree: "B.S. in Cybersecurity & Information Assurance",
    expectedGraduation: "Spring 2026", // e.g., "May 2026" or "2023 - 2027"
    location: "[YOUR LOCATION]",      // e.g., "Atlanta, GA (Open to Relocation & Remote)"
    email: "[YOUR EMAIL]",            // e.g., "alex.rivera.sec@example.com"
    github: "https://github.com/[YOUR-GITHUB]",     // e.g., "https://github.com/alexrivera-sec"
    linkedin: "https://linkedin.com/in/[YOUR-LINKEDIN]", // e.g., "https://linkedin.com/in/alexrivera-cyber"
    tryHackMe: "https://tryhackme.com/p/[YOUR_USER]",
    hackTheBox: "https://app.hackthebox.com/users/[YOUR_USER]",
    resumeUrl: "#resume-modal",       // Will open built-in interactive resume viewer or link to "resume.pdf"
    availability: "Available for Summer 2025/2026 Internships & Entry-Level Roles",
    securityClearance: "Eligible for Security Clearance (U.S. Citizen)",
    bio: `I am a senior cybersecurity undergraduate passionate about ethical hacking, penetration testing, network security, digital forensics, and building resilient systems. Bridging hands-on laboratory experimentation with deep architectural understanding, I focus on analyzing threat vectors, hardening infrastructure, and engineering automated defenses to protect mission-critical environments.`,
    stats: [
      { label: "Academic Standing", value: "4th Year", detail: "Senior Undergraduate" },
      { label: "Security Projects", value: "15+", detail: "Offensive & Defensive" },
      { label: "CTF Challenges", value: "85+", detail: "THM, HTB, NCL Solved" },
      { label: "Certifications", value: "4+", detail: "Active & In-Progress" },
      { label: "Hands-on Lab Hours", value: "250+", detail: "Virtual & Physical Labs" }
    ]
  },

  // --------------------------------------------------------------------------
  // CORE HIGHLIGHT PILLARS (ABOUT ME)
  // --------------------------------------------------------------------------
  highlights: [
    {
      icon: "shield",
      title: "Defensive Engineering & SIEM",
      description: "Hands-on experience architecting SIEM pipelines, triaging Syslog and Zeek telemetry, writing custom Snort/Suricata rules, and analyzing attack chains mapped to MITRE ATT&CK."
    },
    {
      icon: "terminal",
      title: "Ethical Hacking & Penetration Testing",
      description: "Methodical assessment of network perimeters and web applications using Nmap, Burp Suite, Metasploit, and custom Python automation while adhering strictly to ethical guidelines."
    },
    {
      icon: "search",
      title: "Digital Forensics & Incident Response",
      description: "Investigating memory dumps with Volatility, parsing Windows MFT/Registry artifacts in Autopsy, and reconstructing attack timelines to identify root cause and persistence mechanisms."
    },
    {
      icon: "code",
      title: "Secure Automation & Scripting",
      description: "Developing custom Python utilities, Bash security orchestration scripts, and asynchronous port scanners to reduce detection latency and automate repetitive audit workflows."
    }
  ],

  // --------------------------------------------------------------------------
  // SKILLS CATEGORIZATION
  // --------------------------------------------------------------------------
  skillCategories: [
    {
      id: "network",
      name: "Network Security",
      description: "Protocols, perimeter controls, traffic inspection, and secure topology",
      skills: [
        { name: "TCP/IP & Subnetting", level: "Advanced", badge: "Core" },
        { name: "DNS & DNSSEC", level: "Proficient", badge: "Protocol" },
        { name: "HTTP / HTTPS / TLS", level: "Advanced", badge: "Web" },
        { name: "Next-Gen Firewalls & iptables", level: "Proficient", badge: "Perimeter" },
        { name: "VPN (IPsec / WireGuard)", level: "Proficient", badge: "Tunneling" },
        { name: "Network Monitoring & Zeek", level: "Proficient", badge: "Analysis" },
        { name: "Wireshark Packet Analysis", level: "Advanced", badge: "Inspection" },
        { name: "VLAN Segmentation & 802.1Q", level: "Intermediate", badge: "Architecture" }
      ]
    },
    {
      id: "offensive",
      name: "Offensive Security",
      description: "Ethical vulnerability discovery, exploitation techniques, and assessment",
      skills: [
        { name: "Penetration Testing Methodology", level: "Advanced", badge: "PTES" },
        { name: "Vulnerability Assessment", level: "Advanced", badge: "Auditing" },
        { name: "Web Application Security", level: "Advanced", badge: "AppSec" },
        { name: "OWASP Top 10 Mitigations", level: "Advanced", badge: "Standard" },
        { name: "Burp Suite Professional", level: "Advanced", badge: "Tooling" },
        { name: "Nmap Network Reconnaissance", level: "Advanced", badge: "Discovery" },
        { name: "Metasploit Framework", level: "Proficient", badge: "Exploitation" },
        { name: "Privilege Escalation (Linux/Win)", level: "Intermediate", badge: "Post-Exploit" },
        { name: "Kali Linux & Parrot OS", level: "Advanced", badge: "Environment" }
      ]
    },
    {
      id: "defensive",
      name: "Defensive Security",
      description: "Threat detection, telemetry correlation, SIEM, and incident triage",
      skills: [
        { name: "SIEM (Splunk & Elastic Stack)", level: "Proficient", badge: "Telemetry" },
        { name: "Log Analysis & Event Correlation", level: "Advanced", badge: "Investigation" },
        { name: "Threat Detection & Hunt Queries", level: "Proficient", badge: "Detection" },
        { name: "Incident Response Lifecycle", level: "Proficient", badge: "NIST 800-61" },
        { name: "Security Operations (SOC Workflow)", level: "Proficient", badge: "Monitoring" },
        { name: "IDS/IPS (Snort & Suricata)", level: "Proficient", badge: "Rule Writing" },
        { name: "MITRE ATT&CK Framework", level: "Advanced", badge: "Mapping" },
        { name: "Endpoint Detection (Sysmon / Wazuh)", level: "Intermediate", badge: "EDR" }
      ]
    },
    {
      id: "forensics",
      name: "Digital Forensics",
      description: "Artifact preservation, volatile memory investigation, and evidence triage",
      skills: [
        { name: "Volatile Memory Analysis (Volatility 3)", level: "Intermediate", badge: "RAM" },
        { name: "Disk Forensics & Filesystems (NTFS/ext4)", level: "Proficient", badge: "Storage" },
        { name: "Autopsy & FTK Imager", level: "Proficient", badge: "Triage" },
        { name: "Chain of Custody & Evidence Collection", level: "Advanced", badge: "Compliance" },
        { name: "Basic Malware Static Analysis (Ghidra/PE)", level: "Intermediate", badge: "Reverse Eng" },
        { name: "Windows Event Log Carving", level: "Advanced", badge: "Forensics" }
      ]
    },
    {
      id: "programming",
      name: "Programming & Scripting",
      description: "Tool development, task automation, and secure software development",
      skills: [
        { name: "Python (Scapy, Requests, Socket)", level: "Advanced", badge: "Primary" },
        { name: "Bash & Linux Shell Scripting", level: "Advanced", badge: "Automation" },
        { name: "PowerShell & Windows Scripting", level: "Proficient", badge: "Admin" },
        { name: "SQL & Relational Databases", level: "Proficient", badge: "Data" },
        { name: "JavaScript / Node.js", level: "Intermediate", badge: "Web" },
        { name: "C / C++ Basics", level: "Intermediate", badge: "Low-Level" }
      ]
    },
    {
      id: "tools",
      name: "Tools & Technologies",
      description: "Core platforms, virtualization environments, and security toolsets",
      skills: [
        { name: "Wireshark", level: "Expert", badge: "Packets" },
        { name: "Nmap", level: "Expert", badge: "Recon" },
        { name: "Burp Suite", level: "Advanced", badge: "Web Proxy" },
        { name: "Metasploit", level: "Proficient", badge: "Framework" },
        { name: "Git & GitHub", level: "Advanced", badge: "VCS" },
        { name: "Docker & Container Isolation", level: "Proficient", badge: "DevSecOps" },
        { name: "Linux Administration (Debian/RHEL)", level: "Advanced", badge: "OS" },
        { name: "VirtualBox / VMware / Proxmox", level: "Advanced", badge: "Virtualization" }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // FEATURED PROJECTS
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "net-scanner",
      title: "Network Vulnerability Scanner & Port Auditor",
      category: "offensive",
      badge: "Offensive Security / Python",
      featured: true,
      summary: "A high-concurrency Python-based network reconnaissance engine that performs port enumeration, banner grabbing, and automated CVE correlation against the National Vulnerability Database.",
      problemSolved: "Manual port scanning and banner inspection is slow and yields disjointed data. This project created an asynchronous auditor that maps open services directly to known CVEs and exports prioritized remediation reports for network engineers.",
      tech: ["Python 3", "AsyncIO", "Raw Sockets", "NVD NIST API", "Scapy", "Rich CLI"],
      concepts: ["Port Enumeration", "Banner Grabbing", "CVSS Scoring", "TCP SYN Scanning", "Service Fingerprinting"],
      github: "https://github.com/[YOUR-GITHUB]/network-vulnerability-scanner",
      demoUrl: null,
      writeupUrl: "#modal-project-net-scanner",
      architecture: "Scans targets asynchronously via TCP SYN / Connect probes -> Captures service banner replies -> Normalizes CPE identifiers -> Queries NIST NVD REST API v2.0 -> Produces PDF & JSON vulnerability scorecard with remediation guidance."
    },
    {
      id: "owasp-lab",
      title: "Web Application Security Lab & Mitigation Suite",
      category: "offensive",
      badge: "Application Security / OWASP",
      featured: true,
      summary: "A containerized vulnerable web platform built in Docker to demonstrate practical exploit vectors (SQLi, Stored XSS, CSRF, IDOR, SSRF) paired with hardened, patch-applied codebases showing defensive remediations.",
      problemSolved: "Developers often understand OWASP definitions theoretically but lack clarity on secure coding remediations. This lab provides before-and-after source code diffs, exploit walkthroughs, and parameterized query implementations.",
      tech: ["Docker", "Node.js", "Express", "PostgreSQL", "Burp Suite", "OWASP ZAP"],
      concepts: ["SQL Injection", "Cross-Site Scripting (XSS)", "CSRF Tokens", "IDOR", "Content Security Policy (CSP)"],
      github: "https://github.com/[YOUR-GITHUB]/web-security-owasp-lab",
      demoUrl: null,
      writeupUrl: "#modal-project-owasp-lab",
      architecture: "Dual-container Docker architecture: Container 'Alpha' houses intentional OWASP vulnerabilities; Container 'Bravo' implements input sanitization, strict CSP headers, prepared statements, and defense-in-depth middleware."
    },
    {
      id: "siem-dashboard",
      title: "SIEM Threat Detection & Security Monitoring Dashboard",
      category: "defensive",
      badge: "Defensive Security / Blue Team",
      featured: true,
      summary: "An enterprise-grade log aggregation and detection pipeline utilizing the Elastic Stack (ELK) and Sysmon to ingest Windows event logs, detect brute-force attacks, and alert on living-off-the-land binaries (LOLBins).",
      problemSolved: "Organizations suffer from alert fatigue and log blindness. This project ingests diverse host telemetry, applies Sigma detection rules, and triggers automated alerts upon detecting Mimikatz usage, PowerShell encoded payloads, or anomalous logon spikes.",
      tech: ["Elasticsearch", "Logstash", "Kibana", "Sysmon", "Sigma Rules", "Suricata"],
      concepts: ["Log Correlation", "Threat Hunting", "MITRE ATT&CK Mapping", "LOLBins Detection", "Real-Time Alerting"],
      github: "https://github.com/[YOUR-GITHUB]/siem-threat-detection-lab",
      demoUrl: null,
      writeupUrl: "#modal-project-siem-dashboard",
      architecture: "Windows/Linux VMs -> Sysmon & Auditd -> Filebeat shipper -> Logstash filter pipeline (Sigma matching) -> Elasticsearch index -> Kibana visualization dashboards with MITRE ATT&CK matrix overlay."
    },
    {
      id: "phishing-detector",
      title: "Phishing Detection & URL Intelligence Engine",
      category: "defensive",
      badge: "Threat Intelligence / Python",
      featured: true,
      summary: "An automated threat intelligence analyzer that extracts suspicious indicators from inbound emails and domains, checking SSL certificate chains, domain age, typosquatting heuristics, and VirusTotal threat scores.",
      problemSolved: "Credential harvesting campaigns frequently bypass traditional spam filters using newly registered domains and deceptive unicode characters. This engine performs automated triage, reducing security analyst review time by 75%.",
      tech: ["Python", "VirusTotal API", "WHOIS", "Levenshtein Distance", "BeautifulSoup", "Flask"],
      concepts: ["Homograph Attack Detection", "Domain Age Analysis", "SSL Certificate Verification", "Header Analysis"],
      github: "https://github.com/[YOUR-GITHUB]/phishing-detection-system",
      demoUrl: null,
      writeupUrl: "#modal-project-phishing-detector",
      architecture: "Parses RFC 822 email headers and message bodies -> Extracts embedded URLs & domains -> Tests domain entropy and Levenshtein similarity to Fortune 500 domains -> Queries VirusTotal and URLScan APIs -> Assigns compound threat risk score."
    },
    {
      id: "forensics-investigation",
      title: "Digital Forensics Investigation: Memory & Disk Artifact Triage",
      category: "forensics",
      badge: "DFIR / Forensics",
      featured: false,
      summary: "A simulated end-to-end incident response investigation of a compromised corporate workstation, executing physical RAM dump extraction, Volatility plugin analysis, and NTFS Master File Table (MFT) timeline reconstruction.",
      problemSolved: "Demonstrated root cause determination for an undetected malware implant that operated exclusively in-memory without persistent disk binaries, recovering active socket connections and decrypted payload strings.",
      tech: ["Volatility 3", "Autopsy 4", "FTK Imager", "Kroll Artifact Parser (KAPE)", "YARA"],
      concepts: ["Process Injection Detection", "RAM Dump Triage", "NTFS Timeline Carving", "Prefetch Analysis", "Chain of Custody"],
      github: "https://github.com/[YOUR-GITHUB]/digital-forensics-investigation-case",
      demoUrl: null,
      writeupUrl: "#modal-project-forensics-investigation",
      architecture: "Raw RAM image triage via Volatility (`windows.pslist`, `windows.malfind`, `windows.netscan`) -> Disk triage via FTK Imager and Autopsy -> Identified malicious thread injection inside `explorer.exe` -> Compiled formal incident report."
    },
    {
      id: "secure-architecture",
      title: "Zero-Trust Enterprise Network Architecture & Perimeter Hardening",
      category: "networking",
      badge: "Network Architecture / Infrastructure",
      featured: false,
      summary: "A segmented corporate network topology designed with pfSense firewalls, segmented 802.1Q VLANs (Corporate, DMZ, IoT, Guest), Snort intrusion prevention, and centralized WireGuard remote access.",
      problemSolved: "Flat network architectures allow attackers to move laterally with zero friction once initial foothold is established. This design implements strict micro-segmentation, preventing unauthorized lateral traversal between subnets.",
      tech: ["pfSense", "Cisco Packet Tracer", "Snort IDS/IPS", "WireGuard", "FreeRADIUS 802.1X"],
      concepts: ["Micro-Segmentation", "Principle of Least Privilege", "Stateful Inspection", "RADIUS Authentication", "DMZ Hardening"],
      github: "https://github.com/[YOUR-GITHUB]/secure-network-architecture",
      demoUrl: null,
      writeupUrl: "#modal-project-secure-architecture",
      architecture: "Dual pfSense failover gateway -> VLAN 10 (Management), VLAN 20 (Servers/DMZ), VLAN 30 (Workstations), VLAN 40 (IoT) -> Default-deny inter-VLAN firewall rules -> Inline Snort sensor monitoring gateway ingress/egress."
    }
  ],

  // --------------------------------------------------------------------------
  // CTF & SECURITY LABS
  // --------------------------------------------------------------------------
  ctfLabs: [
    {
      platform: "TryHackMe",
      name: "Jr Penetration Tester Path",
      category: "Offensive Security",
      difficulty: "Intermediate",
      badgeClass: "badge-medium",
      skillsLearned: "Web app hacking, privilege escalation, network scanning, Metasploit, exploit research",
      stats: "Completed (Top 6% Global Ranking)",
      profileLink: "https://tryhackme.com"
    },
    {
      platform: "Hack The Box",
      name: "Starting Point & Tier 1 Machines",
      category: "Systems & Network Exploitation",
      difficulty: "Intermediate",
      badgeClass: "badge-medium",
      skillsLearned: "SMB enumeration, Telnet backdoor analysis, Redis misconfiguration, Linux root privileges",
      stats: "15+ Machines Pwned",
      profileLink: "https://hackthebox.com"
    },
    {
      platform: "PortSwigger Academy",
      name: "Web Security Practitioner",
      category: "Web Application Security",
      difficulty: "Hard",
      badgeClass: "badge-hard",
      skillsLearned: "SQLi blind exploitation, Stored/Reflected XSS, Server-Side Request Forgery, Path Traversal",
      stats: "30+ Interactive Labs Cleared",
      profileLink: "https://portswigger.net/web-security"
    },
    {
      platform: "National Cyber League (NCL)",
      name: "Spring Collegiate Competition",
      category: "Multi-Disciplinary CTF",
      difficulty: "Intermediate",
      badgeClass: "badge-medium",
      skillsLearned: "Open Source Intelligence (OSINT), Network traffic analysis, Cryptography, Password cracking",
      stats: "Top 12% Individual Bracket",
      profileLink: "https://nationalcyberleague.org"
    },
    {
      platform: "OverTheWire",
      name: "Bandit & Natas Series",
      category: "Linux & Web Fundamentals",
      difficulty: "Easy",
      badgeClass: "badge-easy",
      skillsLearned: "Linux CLI mastery, file permissions, SSH keys, basic web exploitation & authentication bypass",
      stats: "All Bandit Levels (0-34) Complete",
      profileLink: "https://overthewire.org"
    },
    {
      platform: "University Cyber Range",
      name: "Blue Team Incident Triage Challenge",
      category: "Defensive Security",
      difficulty: "Hard",
      badgeClass: "badge-hard",
      skillsLearned: "Live packet capture analysis, isolating infected host, firewall rule emergency insertion",
      stats: "1st Place Team Winner",
      profileLink: "#"
    }
  ],

  // --------------------------------------------------------------------------
  // CERTIFICATIONS
  // --------------------------------------------------------------------------
  certifications: {
    completed: [
      {
        name: "CompTIA Security+",
        code: "SY0-701",
        issuer: "CompTIA",
        status: "Completed",
        date: "2024",
        credentialId: "COMP001029384",
        skills: ["Threats & Attacks", "Architecture & Design", "Implementation", "Operations & Incident Response", "Governance & Risk"],
        verifyUrl: "https://www.credly.com"
      },
      {
        name: "Google Cybersecurity Professional Certificate",
        code: "GCC-2024",
        issuer: "Google / Coursera",
        status: "Completed",
        date: "2023",
        credentialId: "GCC-SEC-8492041",
        skills: ["Python Automation", "Linux CLI", "SQL", "SIEM Tools", "Network Security", "Incident Response"],
        verifyUrl: "https://www.coursera.org"
      },
      {
        name: "eJPT (eLearnSecurity Junior Penetration Tester)",
        code: "eJPTv2",
        issuer: "INE Security",
        status: "Completed",
        date: "2024",
        credentialId: "INE-EJPT-593021",
        skills: ["Practical Pen Testing", "Assessment Methodologies", "Host & Network Auditing", "Web App Assessment"],
        verifyUrl: "https://ine.com"
      }
    ],
    inProgress: [
      {
        name: "Cisco Certified Network Associate (CCNA)",
        code: "200-301",
        issuer: "Cisco Systems",
        status: "In Progress",
        expectedDate: "Expected Late 2025",
        progressPercentage: 75,
        skills: ["Network Fundamentals", "Network Access", "IP Connectivity", "IP Services", "Security Fundamentals", "Automation"],
        verifyUrl: null
      },
      {
        name: "Blue Team Level 1 (BTL1)",
        code: "BTL1",
        issuer: "Security Blue Team",
        status: "In Progress",
        expectedDate: "Expected Early 2026",
        progressPercentage: 60,
        skills: ["Security Operations", "Phishing Analysis", "Digital Forensics", "Threat Intelligence", "SIEM Investigation"],
        verifyUrl: null
      }
    ],
    planned: [
      {
        name: "OffSec Certified Professional (OSCP)",
        code: "PEN-200",
        issuer: "OffSec",
        status: "Planned",
        expectedDate: "Post-Graduation Target",
        skills: ["Hands-on Penetration Testing", "Active Directory Attacks", "Buffer Overflow Basics", "Custom Exploit Modification"]
      },
      {
        name: "AWS Certified Security - Specialty",
        code: "SCS-C02",
        issuer: "Amazon Web Services",
        status: "Planned",
        expectedDate: "Future Objective",
        skills: ["Cloud Incident Response", "Logging & Monitoring", "Infrastructure Security", "Identity & Access Management"]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // EDUCATION
  // --------------------------------------------------------------------------
  education: {
    degree: "Bachelor of Science in Cybersecurity",
    university: "[YOUR UNIVERSITY]",
    location: "[YOUR LOCATION]",
    timeline: "2022 – 2026 (Expected)",
    academicStanding: "4th-Year Senior (Senior Standing)",
    gpa: "3.8 / 4.0 (Dean's List / Academic Honors)",
    honors: [
      "Dean's Honor List (6 Consecutive Semesters)",
      "University Cyber Defense Club – Active Technical Member",
      "Collegiate Cyber Defense Competition (CCDC) Regional Participant"
    ],
    coursework: [
      { code: "CS 3210", name: "Network Security & Protocols", grade: "A" },
      { code: "CS 3450", name: "Ethical Hacking & Penetration Testing", grade: "A" },
      { code: "CS 4120", name: "Digital Forensics & Incident Response", grade: "A" },
      { code: "CS 4280", name: "Applied Cryptography & Data Protection", grade: "A-" },
      { code: "CS 3100", name: "Operating Systems & Linux Internals", grade: "A" },
      { code: "CS 4340", name: "Secure Software Development (DevSecOps)", grade: "A" },
      { code: "CS 2200", name: "Computer Systems & Assembly Architecture", grade: "A" },
      { code: "CS 3550", name: "Database Design & Secure SQL", grade: "A" },
      { code: "CS 4400", name: "Cybersecurity Law, Ethics & Compliance", grade: "A" },
      { code: "CS 4800", name: "Capstone Security Project: Zero Trust Audit", grade: "In Progress" }
    ]
  },

  // --------------------------------------------------------------------------
  // EXPERIENCE & "BUILDING EXPERIENCE"
  // --------------------------------------------------------------------------
  experience: {
    isBuildingExperience: true,
    introNote: "I am actively cultivating practical, enterprise-relevant cybersecurity capabilities through academic laboratory mentorship, real-world CTF competitions, independent security research, and campus IT security initiatives.",
    items: [
      {
        title: "Cybersecurity Lab Assistant & Peer Mentor",
        organization: "[YOUR UNIVERSITY] – Dept. of Computer Science & Cybersecurity",
        period: "August 2024 – Present",
        location: "On-Campus",
        type: "Academic & Laboratory Role",
        description: [
          "Maintain and provision virtualized cyber range environments using Proxmox VE and Docker for over 60 undergraduate students.",
          "Guide students through hands-on labs covering Wireshark packet dissection, Nmap service detection, and Linux file permission hardening.",
          "Author lab instructional documentation detailing reproducible ethical hacking workflows and defense-in-depth mitigations."
        ]
      },
      {
        title: "Student IT Security & Network Technician",
        organization: "Campus Information Technology Services",
        period: "January 2024 – May 2024",
        location: "On-Campus",
        type: "Technical Student Role",
        description: [
          "Assisted campus network administrators in triaging tier-1 security alerts, endpoint anomalies, and potential phishing escalations.",
          "Conducted routine audit sweeps verifying adherence to 802.1X wireless authentication policies across dormitory access points.",
          "Packaged and pushed OS security patches to university lab workstations to remediate critical CVE advisories."
        ]
      },
      {
        title: "CCDC Blue Team Defensive Specialist",
        organization: "University Collegiate Cyber Defense Competition Team",
        period: "October 2023 – April 2024",
        location: "Regional Competition",
        type: "Competitive Defense Team",
        description: [
          "Defended a mock enterprise network against relentless live red team attacks while maintaining critical business services (DNS, Web, Mail, SQL).",
          "Hardened active directory policies, terminated rogue backdoor processes, configured host-based firewalls, and analyzed intrusion logs under strict SLAs.",
          "Composed formal post-incident technical documentation summarizing threat vectors and containment strategies."
        ]
      },
      {
        title: "Independent Security Researcher & CTF Competitor",
        organization: "Self-Directed / TryHackMe / Hack The Box / Bug Bounty",
        period: "2023 – Present",
        location: "Remote / Independent",
        type: "Hands-on Skills Development",
        description: [
          "Completed over 85+ public and private capture-the-flag challenges spanning web application vulnerabilities, privilege escalation, and cryptography.",
          "Documented detailed technical writeups on GitHub detailing attack methodologies, proof-of-concepts, and defensive remediation patterns.",
          "Participated responsibly in coordinated vulnerability disclosure programs, reporting configuration oversights on public staging domains."
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // TERMINAL CLI COMMANDS (EASTER EGG / RECRUITER TOOL)
  // --------------------------------------------------------------------------
  terminal: {
    welcomeMessage: `Antigravity Defensive Shell v4.1.0-STABLE
Authorized session established.
Type 'help' to view available commands or 'whoami' to inspect identity.`,
    commands: {
      help: `Available commands:
  whoami         - View candidate identity & objective
  skills         - List key cybersecurity technical competencies
  projects       - List featured security projects
  certs          - View current certification status
  education      - View university and degree information
  contact        - Display direct contact details
  resume         - Preview or download candidate resume
  status         - Run security telemetry and posture audit
  clear          - Clear terminal screen
  sudo hire      - Executive hiring authorization action`,
      whoami: `Candidate: [YOUR NAME]
Role: 4th-Year Cybersecurity Senior
Status: Open for Summer 2025/2026 Internships & Entry-Level Opportunities
Focus: Offensive Pen-Testing, Defensive SIEM, Threat Detection, DFIR`,
      skills: `CORE COMPETENCIES:
- Network Security: TCP/IP, Wireshark, Firewalls, VPN, DNSSEC
- Offensive Security: PTES, Burp Suite, OWASP Top 10, Nmap, Metasploit
- Defensive Security: Splunk, ELK Stack, Log Correlation, Snort, MITRE ATT&CK
- Digital Forensics: Volatility 3, Autopsy, Disk Carving, RAM Triage
- Languages: Python, Bash, PowerShell, SQL, JavaScript`,
      certs: `CERTIFICATION SUMMARY:
[✓ COMPLETED] CompTIA Security+ (SY0-701)
[✓ COMPLETED] Google Cybersecurity Professional Certificate
[✓ COMPLETED] eJPT (eLearnSecurity Junior Penetration Tester)
[⏳ IN PROGRESS] Cisco CCNA (200-301)
[⏳ IN PROGRESS] Blue Team Level 1 (BTL1)
[🎯 PLANNED] OffSec Certified Professional (OSCP)`,
      education: `DEGREE: B.S. in Cybersecurity
UNIVERSITY: [YOUR UNIVERSITY]
STATUS: Senior (4th Year), Expected 2026
GPA: 3.8 / 4.0 (Dean's List)`,
      contact: `DIRECT CONTACT:
Email: [YOUR EMAIL]
GitHub: [YOUR GITHUB]
LinkedIn: [YOUR LINKEDIN]
Location: [YOUR LOCATION]`,
      status: `SECURITY TELEMETRY REPORT:
=========================
System Integrity: 100% OK
Network Perimeter: Hardened (Zero-Trust Active)
IDS/IPS Sensor: Listening on eth0
Hiring Readiness: MAXIMUM (Immediate Impact Candidate)
Security Clearance: Eligible / Clearable`,
      "sudo hire": `[ACCESS GRANTED]
Welcome aboard! Thank you for reviewing my portfolio.
Please reach out via email: [YOUR EMAIL] or LinkedIn to schedule an interview!`
    }
  }
};

// Export for browser access
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
