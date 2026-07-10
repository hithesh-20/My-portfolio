# Hithesh D - Data Analyst Portfolio

A modern, responsive portfolio website showcasing data analytics, machine learning, and data engineering projects. Built with vanilla HTML, CSS, and JavaScript with a focus on performance, accessibility, and visual appeal.

## 🌟 Features

- **Modern Design**: Clean, professional aesthetic with Playfair Display typography and Inter for UI
- **Dark/Light Theme**: System preference detection with manual toggle and localStorage persistence
- **Smooth Animations**: Scroll-triggered reveals, counter animations, skill bar fills, typewriter effect
- **Fully Responsive**: Mobile-first approach with breakpoints at 768px, 900px, 1024px
- **Accessibility**: Semantic HTML, focus-visible states, reduced motion support, ARIA labels
- **Performance**: Vanilla JS (no frameworks), CSS custom properties, optimized animations
- **Interactive Elements**: Cursor glow effect, card tilt on hover, parallax floating badges, marquee ticker

## 🚀 Live Demo

[View Portfolio](https://hithesh-20.github.io/My-portfolio/)

## 📁 Project Structure

```
My-portfolio/
├── index.html      # Main HTML structure
├── style.css       # Complete styling with CSS variables
├── script.js       # All interactive functionality
└── README.md       # This file
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid/Flexbox, animations, media queries
- **Vanilla JavaScript (ES6+)** - IntersectionObserver, localStorage, smooth scroll
- **Font Awesome 6.4** - Icons
- **Google Fonts** - Playfair Display & Inter

## ✨ Key Sections

1. **Hero/About** - Animated stats, typewriter role rotator, availability badge
2. **Skills** - Animated skill bars, infinite marquee technology ticker
3. **Projects** - 4 featured project cards with tech stacks and links
4. **Contact/Footer** - Social links, contact info, hire me CTA

## 🎨 Customization

### Colors & Theming
Edit CSS variables in `:root` (style.css lines 1-50):
```css
:root {
  --accent: #6366f1;
  --accent-2: #8b5cf6;
  --bg-color: #f8fafc;
  --text-primary: #0f172a;
  /* ... more variables */
}
```

### Content
Update `index.html` with your:
- Personal info (name, title, bio, contact)
- Stats (projects, years experience, models)
- Skills & proficiency percentages
- Project details (title, description, tech stack, links)
- Social links (LinkedIn, GitHub, Email)

### Animations
Adjust timing in CSS variables:
```css
--transition: all 0.32s cubic-bezier(0.4, 0, 0.2, 1);
--transition-bounce: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push to a GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch" → `main` → `/ (root)`
4. Your site will be live at `https://username.github.io/repo-name/`

### Netlify / Vercel
Drag and drop the folder or connect your Git repo for automatic deployments.

## ♿ Accessibility Features

- Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`)
- Proper heading hierarchy (h1 → h2 → h3)
- Focus-visible outlines for keyboard navigation
- ARIA labels on interactive elements
- `prefers-reduced-motion` media query support
- Sufficient color contrast ratios
- Alt text for all decorative SVGs (hidden via `aria-hidden`)

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Connect

- **LinkedIn**: [hithesh-d-8802a630b](https://www.linkedin.com/in/hithesh-d-8802a630b)
- **GitHub**: [hithesh-20](https://github.com/hithesh-20)
- **Email**: hitheshkowshik@gmail.com

---

Built with ❤️ by Hithesh D