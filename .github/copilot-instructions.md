# AI Agent Instructions for Jenrick Ambalong Portfolio

## Architecture Overview

This is a **single-page React portfolio** built with Vite 7.2.5 (Rolldown) and Framer Motion for animations. The architecture is intentionally simple: one-way component flow without routing or state management.

**Component Hierarchy:**
```
App.jsx (container)
├── Hero.jsx (profile, title, social links)
├── About.jsx (bio, skills in 3 categories)
├── Projects.jsx (project cards with images)
└── Contact.jsx (social links, email CTA)
```

All styling lives in **App.css** — no CSS modules, no Tailwind (despite being in deps). Components use CSS class names like `.hero-section`, `.project-card`, etc.

## Critical Developer Workflows

**Development:**
```bash
npm run dev  # Starts on port shown in terminal (usually 5173)
```

**Production Build:**
```bash
npm run build  # Outputs to dist/
npm run preview  # Preview production build
```

**Important:** This project uses `rolldown-vite@7.2.5` (experimental), not standard Vite. Check `package.json` overrides field.

## Project-Specific Conventions

### 1. Animation Patterns (Framer Motion)
Every component uses this stagger animation structure:
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" } }
};
```

Components use `useInView` hook to trigger animations on scroll:
```jsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.3 });
```

### 2. Project Data Structure
Projects in `Projects.jsx` follow this exact schema:
```jsx
{
  title: "Project Name",
  description: "One-sentence description",
  technologies: ["Tech1", "Tech2"],
  github: "url or null",
  live: "url or null",
  color: "#hexcode",  // Used for card accent
  image: "/filename.png"  // Must be in public/
}
```

### 3. CSS Variables Pattern
All colors defined in `:root` (App.css lines 7-18):
- `--primary-color`, `--secondary-color`, `--accent-color` for blues
- `--bg-color`, `--bg-secondary`, `--card-bg` for dark backgrounds
- Always use these vars, never hardcode colors

### 4. Image Assets
- Profile images go in `public/` (e.g., `id.jpg`)
- Project images go in `public/` (e.g., `Hakbang.png`, `Orase.png`)
- Reference as `/filename.ext` in JSX (Vite serves from public/)

## Key Files

- **App.jsx**: Main container, no routing logic
- **App.css**: All styles (625 lines), organized by section comments
- **Projects.jsx**: Project cards with image headers (200px height)
- **Hero.jsx**: Title is "Full Stack Developer | AI Engineer"
- **About.jsx**: Skills organized as Mobile/Web/AI & Backend categories

## Integration Points

**External Dependencies:**
- `framer-motion` v12.29.2 — All animations
- `react-icons` v5.5.0 — Icons from FaGithub, FaLinkedin, etc.
- No backend, no API calls, no external services

**Social Links (hardcoded):**
- GitHub: https://github.com/J3nrick
- LinkedIn: https://www.linkedin.com/in/jenrick-ambalong/
- Instagram: https://www.instagram.com/jcolacea/
- Email: jenerick.101@gmail.com

## Common Pitfalls

1. **Don't import Navigation.jsx** — It exists but isn't used in App.jsx (leftover component)
2. **Project images must exist in public/** — Missing images show broken img tags
3. **Motion components need `variants` prop** — Don't mix motion props with manual animation triggers
4. **Scroll-triggered animations use `isInView ? "visible" : "hidden"`** — Pattern must be consistent

## Deployment

See `DEPLOYMENT.md` for full details. Key points:
- Build outputs to `dist/`
- Vercel auto-detects Vite projects
- Custom domain setup documented for Vercel/Netlify/GitHub Pages

## Making Changes

**Adding a project:** Edit `Projects.jsx` projects array, add image to `public/`
**Changing colors:** Edit CSS variables in `App.css` `:root`
**Updating skills:** Edit `About.jsx` skill-category sections
**Modifying animations:** Adjust `containerVariants`/`itemVariants` timing values
