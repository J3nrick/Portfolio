# Portfolio Website - Jenrick Ambalong

A modern, animated portfolio website built with React, Vite, and Framer Motion.

## 🚀 Features

- **Smooth Animations**: Creative transitions and animations using Framer Motion
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Dark theme with gradient accents
- **Interactive Elements**: Hover effects, scroll animations, and smooth navigation
- **Performance Optimized**: Built with Vite for lightning-fast loading

## 📦 Tech Stack

- React 19
- Vite
- Framer Motion (animations)
- React Icons
- CSS3

## 🎨 Sections

1. **Hero**: Animated introduction with profile image and social links
2. **About**: Personal introduction and skill categories
3. **Projects**: Featured projects with links to GitHub
4. **Contact**: Social media links and email contact

## 🛠️ Setup Instructions

### Important: Add Your Profile Picture

1. Save your profile picture as `id.jpg`
2. Place it in the `public/` folder of the project
3. The image will automatically appear in the hero section

### Run the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5174/` (or the port shown in your terminal).

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Add More Projects

Edit `src/components/Projects.jsx` and add more projects to the `projects` array:

```javascript
{
  title: "Your Project Name",
  description: "Project description here",
  technologies: ["React", "Node.js", "etc"],
  github: "https://github.com/your-repo",
  live: "https://your-site.com", // optional
  color: "#6366f1" // accent color
}
```

### Update Skills

Edit `src/components/About.jsx` to modify the skills listed in each category.

### Change Colors

Edit the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... other colors */
}
```

## 🎯 Key Features Explained

### Navigation
- Smooth scroll to sections
- Active section highlighting with animated indicator
- Transparent header that becomes solid on scroll

### Hero Section
- Floating profile image with glow effect
- Animated text with gradient effects
- Rotating social media icons
- Smooth scroll indicator

### Animations
- Scroll-triggered animations for each section
- Staggered children animations
- Spring physics for natural motion
- Hover and tap interactions

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: < 480px

## 🌐 Deployment

You can deploy this portfolio to:

- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Upload the `dist` folder

## 📧 Contact Information

- Email: jenerick.101@gmail.com
- GitHub: https://github.com/J3nrick
- LinkedIn: https://www.linkedin.com/in/jenrick-ambalong/
- Instagram: https://www.instagram.com/jcolacea/

## 📄 License

Feel free to use this portfolio as inspiration for your own projects!

---

Built with ❤️ using React & Framer Motion
