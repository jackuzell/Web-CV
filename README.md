# Jack Uzell — Developer Portfolio & Web CV

An interactive, high-performance web CV and software engineering portfolio built with **React 19**, **Vite**, and **Tailwind CSS v4**. Designed with a modern, micro-contrast aesthetic inspired by Linear and Raycast.

[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-zinc.svg?style=flat-square)](LICENSE)

---

## ⚡ Overview

This web portfolio showcases my academic credentials, professional internships, full-stack projects, and technical skills as a **4th-Year Computer Science & Software Engineering Student at Maynooth University**.

### Key Highlights
* **Academic Record**: 77.4% 3rd Year Annual Mark (First-Class Honours standard) including **95% in Software Design**, **87% in CS II**, and **83% in Team Project**.
* **Enterprise Placement**: 6-month Desktop & Systems Engineering internship at **Workhuman**, resolving 600+ corporate support tickets and earning 35+ peer recognition awards.
* **Featured Projects**: AI-driven learning tools ([StudyApp](https://github.com/jackuzell/StudyApp) powered by Google Gemini), full-stack web applications, and agile team deliverables.

---

## ✨ Features

* **Dark & Light Mode**: Defaults to a sleek dark palette with an instant toggle to a soft, eye-friendly light canvas. Preference is persisted in `localStorage` with zero-flicker hydration.
* **Linear / Raycast Design System**: Razor-sharp micro-contrast surfaces, 1px hairline borders, subtle light-catching card insets, and instant 150ms transitions.
* **Component-Driven & Modular**: Built on a centralized single source of truth (`cvData.js`) cleanly separated from presentation logic.
* **Fully Responsive**: Optimized for ultra-smooth viewing across phones, tablets, and wide monitors.
* **Accessible & Semantic**: Valid semantic heading hierarchy (h1 → h2 → h3), screen-reader labels, and keyboard-navigable focus rings.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Library** | [React 19](https://react.dev/) |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Styling Engine** | [Tailwind CSS v4](https://tailwindcss.com/) (using `@tailwindcss/vite`) |
| **Typography** | [Inter](https://rsms.me/inter/) font family with font-feature settings |
| **Icons** | Clean inline SVGs (stroke-based, inherited `currentColor`) |
| **Hosting & CI/CD** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
Web-CV/
├── public/                  # Favicons and static assets
├── src/
│   ├── components/
│   │   ├── About.jsx        # Professional narrative and stat highlight strip
│   │   ├── Achievements.jsx # Sports leadership, Gaisce, LIFT, and peer awards
│   │   ├── Education.jsx    # Degree, grades, and standout module cards
│   │   ├── Experience.jsx   # Timeline of industry placements & operations
│   │   ├── Footer.jsx       # Connect CTA, social links, and back-to-top button
│   │   ├── Hero.jsx         # Intro header with availability tag and quick links
│   │   ├── Icons.jsx        # Lightweight stroke SVG icon definitions
│   │   ├── Navbar.jsx       # Sticky backdrop navigation with theme switcher
│   │   ├── Projects.jsx     # Grid of featured projects with demo/code links
│   │   ├── SectionHeader.jsx# Consistent section headings
│   │   ├── Skills.jsx       # Categorized badge grid (Languages, IT, Practices)
│   │   └── ui.js            # Shared Tailwind design-system class recipes
│   ├── cvData.js            # Central data store (Single Source of Truth)
│   ├── App.jsx              # Main application shell and theme state
│   ├── index.css            # Tailwind v4 import, theme variants, base styles
│   └── main.jsx             # React 19 root entry
├── index.html               # HTML document with zero-flicker theme script
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite configuration with Tailwind plugin
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18.x or newer recommended)
* **npm** (or pnpm / yarn)

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/JackUzell/Web-CV.git
cd Web-CV
npm install
```

### Development
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
Build the minified production bundle:
```bash
npm run build
```

### Code Quality / Linting
Run ESLint to check for code consistency:
```bash
npm run lint
```

---

## 📬 Contact & Links

* **Jack Derek Uzell** — Final-Year B.Sc. Computer Science & Software Engineering Student, Maynooth University
* **Email**: [jackuzell05@gmail.com](mailto:jackuzell05@gmail.com)
* **LinkedIn**: [linkedin.com/in/jack-uzell](https://www.linkedin.com/in/jack-uzell-962b68380/)
* **GitHub**: [@JackUzell](https://github.com/JackUzell)

---

*Open to Graduate Software Engineering, Junior DevOps / Cloud, and Full-Stack Engineering roles.*
