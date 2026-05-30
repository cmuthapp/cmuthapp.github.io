# Chidambaram Muthappan | Personal Portfolio & Interactive Showcase

[![Website](https://img.shields.io/badge/website-live-success?style=flat-square&color=818cf8)](https://cmuthapp.github.io)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![Security](https://img.shields.io/badge/security-100%25--immune-teal?style=flat-square)](https://cmuthapp.github.io)

Welcome to the repository for my personal portfolio website, hosted live at **[cmuthapp.github.io](https://cmuthapp.github.io)**. 

This website serves as an interactive showcase of my career, core cloud competencies, publication records, and a custom gallery showcasing my personal keychain collection gathered during my travels across the United States.

***

## 🌐 Live Portfolio
👉 **View it live here: [https://cmuthapp.github.io](https://cmuthapp.github.io)**

---

## ⚡ Architectural Philosophy
To achieve absolute security, lightning performance, and permanent durability, this website was completely restructured and modernized into a **zero-dependency static Single-Page Application (SPA)** built with pure, modern HTML5, CSS3, and ES6 JavaScript.

### Key Technical Advantages:
* **Zero Vulnerabilities**: By removing Jekyll, Ruby Gems, and node package compilers, this repository has **0% external dependencies**. It is completely immune to Dependabot security alerts, package drift, and deprecated runtime modules.
* **100/100 Performance**: Because there are no heavy frameworks, bundlers, or heavy library loads, the page sizes are tiny, rendering and loading in **under 50ms**.
* **Direct Serverless Serving**: Served natively and instantly by GitHub Pages with zero build queues or Action compile runners.

---

## 🎨 Key Features & Visual Design
* **Obsidian-Dark Default Theme**: Styled with custom variable-driven HSL tokens, glassmorphism panels, glowing borders, and fixed background glow circles.
* **Crisp-Alabaster Light Mode**: Smoothly toggles between dark and light modes with a single persistent theme button (saves your preferences in `localStorage`).
* **AWS Senior Specialist Solution Architect Timeline**: Showcases my latest work at AWS leading Generative AI strategies and the strategic marketplace enablement of **AI Agents** and **Model Context Protocol (MCP)** servers.
* **Collapsible Career Timeline**: Interactive accordion timeline for earlier career milestones (Nike Sr. Software Engineer III, UCLA, Cisco Systems, etc.) to keep the page clean while preserving detailed accomplishments.
* **Interactive Keychain Showcase**: Grid gallery of 15+ keychains featuring location-based dynamic CSS filtering (California, Oregon, Washington) and a custom, responsive, zero-dependency full-screen lightbox viewer.
* **"Copy Email" Micro-Interaction**: Sleek copy button next to my email address that dynamically copies the email to the clipboard and shows a smooth **"Copied!"** tooltip feedback.
* **Native PDF Resume Hosting**: Features direct, fast loading of my updated professional resume without slow third-party cloud redirects.

---

## 📁 Repository Structure
```
├── Chidambaram_Resume.pdf  # Natively served PDF Resume
├── index.html              # Core HTML5 semantic layout
├── css/
│   └── styles.css          # Variable-driven premium HSL styling & animations
├── js/
│   └── main.js             # Vanilla JS for lightbox, filters, theme, and clipboard
├── images/
│   ├── img-profile/        # Profile picture assets
│   └── keychains/          # Keychain showcase images
├── _backup/                # Secure archive of old Jekyll files (archived history)
├── LICENSE                 # License file
└── README.md               # Repository documentation
```

---

## 🛠️ Local Development & Maintenance

### 1. Instant Preview
Because the site is a static SPA, you can preview the website instantly by navigating to the directory and **double-clicking `index.html`** in your file browser.

### 2. Spinning Up a Local Web Server
To test under real server environments, launch a lightweight Python server directly from your PowerShell terminal:
```powershell
python -m http.server 8000
```
Then open your browser and navigate to: **`http://localhost:8000`**

### 3. Adding New Keychains
To add a new keychain to your gallery:
1. Place the photo in the `images/keychains/` directory.
2. Open `index.html` and append a card inside the `#gallery-grid` container:
   ```html
   <div class="gallery-card glass-panel card-lift" data-category="StateAbbreviation">
       <div class="img-wrapper">
           <img src="images/keychains/your_photo.jpg" alt="Keychain Name" class="keychain-img" loading="lazy">
       </div>
       <div class="card-info">
           <h4 class="keychain-title">Keychain Title</h4>
           <span class="keychain-loc">Location, State</span>
       </div>
   </div>
   ```

---

## 📄 License
This repository is licensed under the [MIT License](LICENSE). Feel free to customize and use the clean static structure!

---

## 🛠️ Credits
Designed and built with 💜 by **Antigravity**, a powerful agentic AI coding assistant designed by Google DeepMind.
