# Hithesh D — Data Analyst | Business Intelligence Specialist

A modern, enterprise-grade portfolio website targeting multinational corporations (MNCs). Showcases data analytics, business intelligence, and data engineering projects with a focus on business impact, data-driven insights, and professional presentation. Built with vanilla HTML, CSS, and JavaScript — fully responsive from 320px mobile to ultrawide displays.

## 🎯 Target Audience

This portfolio is optimized for **recruiters and hiring managers at multinational corporations** (MNCs) including:
- Top tech companies (Google, Microsoft, Amazon, Meta)
- Financial institutions (Goldman Sachs, JPMorgan, Citi)
- Consulting firms (Deloitte, PwC, EY, KPMG)
- Product-based companies (Flipkart, Uber, Swiggy)
- Enterprise analytics & BI teams

## 🌟 Key Features

### 🔍 Enterprise-Ready Portfolio
- **Analytics & BI Targeted Keywords**: Strategic placement of industry keywords — ETL, Business Intelligence, Data Visualization, KPI Dashboards, Stakeholder Reporting, Data-Driven Decision Making
- **Quantified Impact**: Every project includes measurable business results ($500K revenue opportunity, 15+ hrs/week efficiency, 94% accuracy, etc.)
- **Professional Wording**: Action-oriented language emphasizing business value, data storytelling, and enterprise readiness

### ✨ Visual & Animation Features
- **Scroll Reveal Animations** — Elements fade and slide in as you scroll (respects `prefers-reduced-motion`)
- **Smooth Scroll Progress Bar** — Visual indicator at the top of the page, adapts to theme
- **Interactive Hover Effects** — Cards lift and transform on hover
- **Ripple Button Effects** — Click ripple animations on all buttons
- **Parallax Hero Image** — Subtle 3D tilt effect on profile image when hovered
- **Section Highlight Borders** — Animated top border on sections as they enter view

### 🎨 Design Features
- **Modern Forbes-inspired Design**: Clean, professional aesthetic with Playfair Display typography and Inter for UI
- **Dark/Light Theme**: System preference detection with manual toggle and localStorage persistence
- **Fully Responsive**: Mobile-first approach with breakpoints at 768px, 480px
- **Accessibility**: Semantic HTML, focus-visible states, reduced motion support, keyboard navigation
- **Performance**: Vanilla JS (no frameworks), CSS custom properties, requestAnimationFrame for scroll effects

### 🚀 Interactive Elements
- **Mobile Menu Toggle** — Hamburger menu with smooth transitions and overlay
- **Theme Toggle** — Animated sun/moon icon on theme switch (top-right corner)
- **Smooth Scrolling** — Smooth anchor link navigation with navbar offset
- **Active Nav Highlighting** — Current section is highlighted in the navbar as you scroll
- **Project Filtering** — Filter 13 projects by technology (Power BI, Python, SQL, ML/AI, Web)
- **Scroll-to-Top Button** — Appears when scrolling down, smooth scrolls back to top
- **Interactive Cards** — Skill and project cards with hover animations
- **Resume Button** — Placeholder for resume/CV download

## 🚀 Live Demo

[View Portfolio](https://hithesh-20.github.io/my-portfolio/)

## 📁 Project Structure

```
My-portfolio/
├── index.html        # Main HTML structure (SEO-optimized with Data Analytics & BI keywords)
├── style.css         # Complete styling with CSS variables
├── script.js         # All interactive functionality
├── assets/
│   └── favicon.svg   # SVG favicon (branded "H" logo)
├── hithkoush.png     # Profile photo
└── README.md         # This file
```

## 🛠️ Tech Stack

- **HTML5** — Semantic markup with SEO meta tags, Open Graph protocol, and Twitter Cards
- **CSS3** — Custom properties, Grid/Flexbox, animations, media queries
- **Vanilla JavaScript (ES6+)** — IntersectionObserver-like scroll detection, localStorage, requestAnimationFrame
- **Font Awesome 6.4** — Icons
- **Google Fonts** — Playfair Display & Inter

## ✨ Key Sections (MNC-Optimized)

1. **Hero/About** — Professional introduction with analytics-focused language and MNC target keywords, plus Resume call-to-action
2. **Skills** — Technical expertise categorized into Analytics domains (Data Analytics & Query Languages, Business Intelligence & Visualization, Data Engineering & ETL)
3. **Projects** — 13 analytics-focused project cards with measurable business impact, industry-specific descriptions, GitHub links, and **filterable by technology**
4. **Education** — Academic background with relevant coursework and leadership experience
5. **Certifications** — Google, Microsoft, HackerRank, IBM credentials
6. **Contact/Footer** — Social links, email, and MNC opportunity declaration

## 🏢 Enterprise Keyword Strategy

The portfolio incorporates these high-value keywords for MNC recruiter search visibility:

### Core Keywords
- Data Analytics
- Business Intelligence (BI)
- Data Visualization
- Data-Driven Decision Making
- ETL Pipeline Development
- Stakeholder Reporting
- KPI Dashboards & Tracking
- Statistical Analysis
- Data Storytelling
- Business Reporting

### Technical Keywords
- Python (Pandas, NumPy, SciPy)
- SQL (MySQL, PostgreSQL, BigQuery)
- Power BI (DAX, Power Query)
- Tableau • Excel • Looker Studio
- AWS (S3, Athena, Lambda)
- Google Cloud (BigQuery, Dataflow)
- Apache Spark / PySpark • Airflow
- A/B Testing • Cohort Analysis

### Business Impact Keywords
- Revenue Opportunity ($500K)
- Efficiency Gains (15+ hrs/week)
- Accuracy Metrics (94%, 89%, 87%)
- Cost Reduction (10%)
- Churn Reduction (12-15%)
- Conversion Optimization (5% increase)

## 🎨 Customization

### Colors & Theming
The portfolio supports dark/light theme switching automatically. CSS variables in `style.css`:

```css
/* Light theme variables */
:root {
  --bg: #ffffff;
  --bg-alt: #f5f5f5;
  --text: #111111;
  --text-light: #555555;
  --border: #e5e5e5;
  --progress-bar: #111111;
}

/* Dark theme (applied via data-theme="dark") */
[data-theme="dark"] {
  --bg: #0a0a0a;
  --bg-alt: #141414;
  --text: #f0f0f0;
  --text-light: #aaaaaa;
  --border: #2a2a2a;
  --progress-bar: #ffffff;
}
```

### Content
Update `index.html` with your:
- Personal info (name, title, bio, contact)
- Skills & technology stacks
- Project details (title, description, tech stack, links, categories)
- Social links (LinkedIn, GitHub, Email)

### Project Filtering
Each project card has a `data-categories` attribute that controls filtering:
```html
<div class="project-card" data-categories="powerbi python sql">
```
Available categories: `powerbi`, `python`, `sql`, `ml`, `web`

### Analytics Portfolio Projects
1. **Sales Analytics Suite** — 6-page Power BI dashboard + ETL pipeline ($500K opportunity)
2. **Customer Segmentation & RFM Analytics** — 50K+ records, 68% revenue identified
3. **Loan Origination System** — Analytics workflow for financial data processing
4. **UPI Fraud Detection Analytics** — 94% accuracy data analytics solution
5. **Campus Emergency Response Platform** — AIET Ideathon 2025 winner
6. **A/B Testing & Conversion Analytics** — 5% conversion lift validated
7. **Big Data Supply Chain Analytics** — 50GB+ logistics, 10% cost reduction
8. **HR Attrition & Workforce Analytics** — 87% accuracy, 15% turnover reduction
9. **Customer Churn Analysis & Retention Strategy** — 89% accuracy, 12% churn reduction
10. **Automated Expense Intelligence** — Workflow automation & financial reporting
11. **Fire & Smoke Detection Analytics** — 97.8% accuracy data-driven solution
12. **Movie Recommendation & Analytics Platform** — 1M+ catalog, data-driven filtering
13. **AI-Powered Learning Analytics Assistant** — NLP & semantic search

## 🛠️ Setup & Installation

### Prerequisites
- Git installed on your system
- A web browser (for viewing the portfolio)
- VS Code (recommended) with Live Server extension for local development

### Access from Anywhere — GitHub Commands

#### Initial Setup
```bash
# Clone the repository
git clone https://github.com/hithesh-20/My-portfolio.git

# Navigate to the project directory
cd My-portfolio
```

#### Access & Update Commands (Anytime, Anywhere)
```bash
# View remote repository URL
git remote -v

# Pull latest changes from GitHub (update your local copy)
git pull origin main

# Check current Git status
git status

# Switch to the main branch
git checkout main
```

#### Making Changes & Updates
```bash
# Add all changes to staging
git add .

# Commit your changes with a message
git commit -m "Update portfolio content"

# Push changes to GitHub (updates remote repository)
git push origin main

# Or push to a specific branch
git push origin your-branch-name
```

#### Quick Access Commands
```bash
# Open project in VS Code
code .

# View all project files
ls -la

# View Git commit history
git log --oneline --graph

# View current branch
git branch
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
- `prefers-reduced-motion` media query support (disables animations and parallax)
- Sufficient color contrast ratios
- `::selection` styling for visual feedback
- ARIA labels on interactive buttons

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License — feel free to use this as a template for your own portfolio!

## 🤝 Connect

- **LinkedIn**: [hithesh-d-8802a630b](https://www.linkedin.com/in/hithesh-d-8802a630b)
- **GitHub**: [hithesh-20](https://github.com/hithesh-20)
- **Email**: hitheshkowshik@gmail.com

---

Built with ❤️ by Hithesh D — Open to MNC Opportunities