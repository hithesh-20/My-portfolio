# Hithesh D - Data Analyst Portfolio

A modern, responsive portfolio website showcasing data analytics, machine learning, and data engineering projects. Built with vanilla HTML, CSS, and JavaScript with a focus on performance, accessibility, and visual appeal.

## 🌟 Features

### ✨ Visual & Animation Features
- **Scroll Reveal Animations** - Elements fade in smoothly as you scroll
- **Smooth Scroll Progress Bar** - Visual indicator at the top of the page
- **Interactive Hover Effects** - Cards lift and transform on hover
- **Ripple Button Effects** - Click animations on buttons
- **Parallax Hero Image** - Subtle 3D tilt effect on profile image
- **Section Highlights** - Animated borders when navigating to sections

### 🎨 Design Features
- **Modern Forbes-inspired Design**: Clean, professional aesthetic with Playfair Display typography and Inter for UI
- **Dark/Light Theme**: System preference detection with manual toggle and localStorage persistence
- **Fully Responsive**: Mobile-first approach with breakpoints at 768px, 900px, 1024px
- **Accessibility**: Semantic HTML, focus-visible states, reduced motion support
- **Performance**: Vanilla JS (no frameworks), CSS custom properties, optimized animations

### 🚀 Interactive Elements
- **Mobile Menu Toggle** - Hamburger menu with smooth transitions
- **Theme Toggle** - Animated sun/moon icon rotation on theme switch (top-right corner)
- **Smooth Scrolling** - Smooth anchor link navigation
- **Interactive Cards** - Skill and project cards with hover animations

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

1. **Hero/About** - Professional introduction with profile image
2. **Skills** - Technical expertise categorized by domain
3. **Projects** - Featured project cards with tech stacks and GitHub links
4. **Resume** - Education, Experience, and Certifications
5. **Contact/Footer** - Social links and contact information

## 🎨 Customization

### Colors & Theming
The portfolio supports dark/light theme switching automatically. CSS variables in `style.css`:

```css
/* Light theme variables */
:root {
  --bg: #ffffff;
  --bg-alt: #f8f8f8;
  --text: #000000;
  --text-light: #333333;
  --border: #e5e5e5;
}

/* Dark theme (applied via data-theme="dark") */
[data-theme="dark"] {
  --bg: #0a0a0a;
  --bg-alt: #1a1a1a;
  --text: #ffffff;
  --text-light: #cccccc;
  --border: #333333;
}
```

### Content
Update `index.html` with your:
- Personal info (name, title, bio, contact)
- Skills & technology stacks
- Project details (title, description, tech stack, links)
- Social links (LinkedIn, GitHub, Email)

### Featured Projects
1. **Loan Origination System** - Full-stack loan application workflow with credit risk scoring
2. **UPI Fraud Detector** - ML model with 94% accuracy for fraud detection
3. **Fire & Smoke Detection** - CNN with ~97.8% accuracy for safety monitoring
4. **Campus Emergency Tap** - Real-time emergency alert platform (AIET Ideathon 2025 winner)
5. **Customer Segmentation** - RFM analysis on 50K+ records identifying top customers
6. **Personal Expense Tracker** - Automated expense categorization with budget alerts

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
- `prefers-reduced-motion` media query support
- Sufficient color contrast ratios

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