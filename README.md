# Hithesh D — Data Analyst | Machine Learning Engineer | BI Specialist

A modern, enterprise-grade portfolio website targeting multinational corporations (MNCs). Showcases data analytics, machine learning, business intelligence, and data engineering projects with a focus on business impact, scalability, and professional presentation. Built with vanilla HTML, CSS, and JavaScript — fully responsive from 320px mobile to ultrawide displays.

## 🎯 Target Audience

This portfolio is optimized for **recruiters and hiring managers at multinational corporations** (MNCs) including:
- Top tech companies (Google, Microsoft, Amazon, Meta)
- Financial institutions (Goldman Sachs, JPMorgan, Citi)
- Consulting firms (Deloitte, PwC, EY, KPMG)
- Product-based companies (Flipkart, Uber, Swiggy)
- Enterprise analytics teams

## 🌟 Key Features

### 🔍 Enterprise-Ready Portfolio
- **MNC-Targeted Keywords**: Strategic placement of enterprise buzzwords — ETL, Business Intelligence, Predictive Modeling, Stakeholder Reporting, KPI Tracking, Data-Driven Decision Making
- **Quantified Impact**: Every project includes measurable business results ($500K revenue opportunity, 15+ hrs/week efficiency, 94% accuracy, etc.)
- **Professional Wording**: Action-oriented language emphasizing business value, scalability, and enterprise readiness

### ✨ Visual & Animation Features
- **Scroll Reveal Animations** — Elements fade in smoothly as you scroll
- **Smooth Scroll Progress Bar** — Visual indicator at the top of the page
- **Interactive Hover Effects** — Cards lift and transform on hover
- **Ripple Button Effects** — Click animations on buttons
- **Parallax Hero Image** — Subtle 3D tilt effect on profile image
- **Section Highlights** — Animated borders when navigating to sections

### 🎨 Design Features
- **Modern Forbes-inspired Design**: Clean, professional aesthetic with Playfair Display typography and Inter for UI
- **Dark/Light Theme**: System preference detection with manual toggle and localStorage persistence
- **Fully Responsive**: Mobile-first approach with breakpoints at 768px, 900px, 1024px
- **Accessibility**: Semantic HTML, focus-visible states, reduced motion support
- **Performance**: Vanilla JS (no frameworks), CSS custom properties, optimized animations

### 🚀 Interactive Elements
- **Mobile Menu Toggle** — Hamburger menu with smooth transitions
- **Theme Toggle** — Animated sun/moon icon rotation on theme switch (top-right corner)
- **Smooth Scrolling** — Smooth anchor link navigation
- **Interactive Cards** — Skill and project cards with hover animations

## 🚀 Live Demo

[View Portfolio](https://hithesh-20.github.io/My-portfolio/)

## 📁 Project Structure

```
My-portfolio/
├── index.html      # Main HTML structure (SEO-optimized with MNC keywords)
├── style.css       # Complete styling with CSS variables
├── script.js       # All interactive functionality
└── README.md       # This file
```

## 🛠️ Tech Stack

- **HTML5** — Semantic markup with SEO meta tags and Open Graph protocol
- **CSS3** — Custom properties, Grid/Flexbox, animations, media queries
- **Vanilla JavaScript (ES6+)** — IntersectionObserver, localStorage, smooth scroll
- **Font Awesome 6.4** — Icons
- **Google Fonts** — Playfair Display & Inter

## ✨ Key Sections (MNC-Optimized)

1. **Hero/About** — Professional introduction with quantified achievements ($500K revenue, 15+ hrs/week efficiency), enterprise language, and MNC target keywords
2. **Skills** — Technical expertise categorized into Enterprise-relevant domains (Programming & Query Languages, Machine Learning & AI, Business Intelligence & Visualization, Data Engineering & Cloud)
3. **Projects** — 11 enterprise-focused project cards with measurable business impact, industry-specific descriptions, and GitHub links
4. **Resume** — Education and experience emphasizing enterprise analytics and business intelligence
5. **Certifications** — IBM, Google Cloud, University of Washington credentials
6. **Contact/Footer** — Social links and MNC opportunity declaration

## 🏢 Enterprise Keyword Strategy

The portfolio incorporates these high-value keywords for MNC recruiter search visibility:

### Core Keywords
- Enterprise Analytics
- Business Intelligence (BI)
- Data-Driven Decision Making
- ETL Pipeline Development
- Stakeholder Reporting
- Predictive Modeling
- Machine Learning Engineering
- Data Engineering
- KPI Tracking & Dashboards
- Statistical Analysis

### Technical Keywords
- Python, SQL, Power BI, Tableau
- scikit-learn, TensorFlow, XGBoost
- AWS, GCP, Apache Spark, Airflow
- DAX, PySpark, BigQuery
- Feature Engineering, A/B Testing
- Regression, Classification, Clustering
- NLP, LLM, RAG Architecture

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

### Enterprise Portfolio Projects
1. **Loan Origination System** — Full-stack credit risk scoring for financial institutions
2. **UPI Fraud Detection Engine** — 94% accuracy fraud detection for fintech
3. **Fire & Smoke Detection (CNN)** — 97.8% accuracy environmental safety system
4. **Campus Emergency Response Platform** — AIET Ideathon 2025 winner
5. **AI-Powered Learning Assistant** — RAG architecture with LLM integration
6. **Customer Segmentation & RFM Analytics** — 50K+ records, 68% revenue identified
7. **Movie Recommendation Engine** — Collaborative & content-based filtering
8. **Automated Expense Intelligence** — Workflow automation & financial reporting
9. **Sales Analytics Suite** — 6-page Power BI dashboard + ETL pipeline ($500K opportunity)
10. **Predictive Customer Churn Model** — 89% accuracy, 12% churn reduction projected
11. **A/B Testing & Conversion Optimization** — 5% conversion lift validated
12. **Big Data Supply Chain Optimization** — 50GB+ logistics, 10% cost reduction
13. **HR Attrition & Workforce Analytics** — 87% accuracy, 15% turnover reduction

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
- `prefers-reduced-motion` media query support
- Sufficient color contrast ratios

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