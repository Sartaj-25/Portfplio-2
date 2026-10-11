# Sartaj Ali — Personal Portfolio Website

A modern, high-performance personal portfolio website engineered for **Sartaj Ali** (Full-Stack Developer | AI Engineer | Blockchain Developer).

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

---

## 🚀 Live Local Server

The local development server is active and accessible at:
- **Local:** `http://localhost:5173/`
- **Network:** `http://<your-local-ip>:5173/`

To start or restart manually in the terminal:
```bash
npm run dev
```

---

## 📁 Key File Structure & Data Locations

All personal details, projects, skills, and achievements are centralized in modular TypeScript files for quick maintenance:

| Data File | Description |
| :--- | :--- |
| [`src/data/personal.ts`](file:///e:/Project/Portfolio%202/src/data/personal.ts) | Personal information, headline, bio paragraphs, contact details (Email, LinkedIn, GitHub, Location), and availability status badge. |
| [`src/data/projects.ts`](file:///e:/Project/Portfolio%202/src/data/projects.ts) | Deep-dive content for the 3 flagship projects (**FRAB**, **IdentiPI**, **Automaton Nexus**), including problem statements, feature lists, agent roles, and impact metrics. |
| [`src/data/skills.ts`](file:///e:/Project/Portfolio%202/src/data/skills.ts) | Categorized technical arsenal (Languages, Frontend, Backend, Databases, AI/ML, Blockchain & ZKP, Tools). |
| [`src/data/achievements.ts`](file:///e:/Project/Portfolio%202/src/data/achievements.ts) | Verified hackathon podium finishes, prizes, and fellowship distinctions. |
| [`src/data/experience.ts`](file:///e:/Project/Portfolio%202/src/data/experience.ts) | Work and hackathon contribution history (**AutomatonAI**). |
| [`src/data/whatIDo.ts`](file:///e:/Project/Portfolio%202/src/data/whatIDo.ts) | Four core engineering pillars. |

---

## 🎨 Design System & Highlights

- **Theme Palette:** High-contrast dark theme default (`#09090B`), electric blue primary (`#3B82F6`), cyan secondary (`#22D3EE`).
- **Interactive Flagship Visuals:**
  - **FRAB:** Multi-agent AML forensic pipeline with active agent inspector and risk telemetry.
  - **IdentiPI:** Zero-Knowledge claim validator with selective disclosure simulation.
  - **Automaton Nexus:** Real-time conversational voice agent waveform and call log stream.
- **Developer Features:**
  - **Interactive Terminal:** Press **`~`** (backquote) or click the terminal button in the navbar to open an interactive CLI (`help`, `bio`, `skills`, `projects`, `awards`, `contact`).
  - **Command Palette:** Press **`Ctrl + K`** (or **`Cmd + K`**) for instant keyboard-driven search and navigation.
  - **Deep-Dive Architecture Modals:** Click *"View Architecture & Deep Dive"* on any project for technical breakdowns.
  - **Celebration Effects:** Click any achievement card to fire a tailored particle burst.

---

## 📄 Adding Your Resume PDF

1. Place your compiled PDF file into the `public/` directory named exactly:
   ```
   public/resume.pdf
   ```
2. The navbar *"Resume"* button, the Command Palette shortcut, and the Resume Modal download buttons will automatically serve your PDF file.

---

## 🚢 Deploying to Vercel

### Method 1: Via Vercel CLI (Fastest)
```bash
npx vercel
```
Follow the interactive prompts (defaults are automatic for Vite projects).

### Method 2: Via GitHub & Vercel Dashboard
1. Initialize git and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/Sartaj-25/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) -> **Add New Project**.
3. Import your repository. Vercel will automatically detect **Vite** and configure:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.
