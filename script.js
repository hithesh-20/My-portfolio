document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // 0. Theme Toggle (Dark/Light Mode)
    // =============================================
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    const THEME_KEY = 'portfolio-theme';

    // Initialize theme from localStorage or system preference
    function initTheme() {
        const saved = localStorage.getItem(THEME_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (saved) {
            htmlEl.setAttribute('data-theme', saved);
        } else if (prefersDark) {
            htmlEl.setAttribute('data-theme', 'dark');
        } else {
            htmlEl.setAttribute('data-theme', 'light');
        }
    }

    function toggleTheme() {
        const current = htmlEl.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', next);
        localStorage.setItem(THEME_KEY, next);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem(THEME_KEY)) {
            htmlEl.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });

    initTheme();

    // =============================================
    // 1. Mobile Menu Toggle
    // =============================================
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            const bars   = hamburger.querySelectorAll('.bar');
            if (isOpen) {
                bars[0].style.transform = 'rotate(-45deg) translate(-4px, 5px)';
                bars[1].style.opacity   = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-4px, -5px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity   = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Close menu when any link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const bars = hamburger.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity   = '1';
                bars[2].style.transform = 'none';
            });
        });
    }

    // =============================================
    // 2. Navbar Scroll Effect
    // =============================================
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // =============================================
    // 3. Cursor Glow (desktop only)
    // =============================================
    const cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', e => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top  = e.clientY + 'px';
        });
    } else if (cursorGlow) {
        cursorGlow.style.display = 'none';
    }

    // =============================================
    // 4. Scroll Reveal (Intersection Observer)
    // =============================================
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));

    // =============================================
    // 5. Skill Bar Animation
    // =============================================
    const skillBars    = document.querySelectorAll('.skill-bar-fill');
    const barObserver  = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    skillBars.forEach(bar => barObserver.observe(bar));

    // =============================================
    // 6. Counter Animation (Stats)
    // =============================================
    function animateCount(el, target, duration = 1800) {
        const start = performance.now();
        const tick  = now => {
            const t       = Math.min((now - start) / duration, 1);
            const eased   = 1 - Math.pow(1 - t, 3); // ease-out-cubic
            el.textContent = Math.round(eased * target);
            if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }

    const statNumbers   = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target, parseInt(entry.target.dataset.target, 10));
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.8 });

    statNumbers.forEach(n => statsObserver.observe(n));

    // =============================================
    // 7. Typewriter Effect
    // =============================================
    const typewriterEl = document.getElementById('typewriter');
    const roles        = ['ML Engineer', 'Data Storyteller', 'Pipeline Builder', 'Insight Creator'];
    let rIdx = 0, cIdx = 0, deleting = false;

    function typeWriter() {
        if (!typewriterEl) return;
        const word = roles[rIdx];

        if (deleting) {
            typewriterEl.textContent = word.slice(0, --cIdx);
        } else {
            typewriterEl.textContent = word.slice(0, ++cIdx);
        }

        let delay = deleting ? 55 : 95;

        if (!deleting && cIdx === word.length) {
            delay    = 2200;
            deleting = true;
        } else if (deleting && cIdx === 0) {
            deleting = false;
            rIdx     = (rIdx + 1) % roles.length;
            delay    = 350;
        }

        setTimeout(typeWriter, delay);
    }

    // Start typewriter after hero reveal
    setTimeout(typeWriter, 900);

    // =============================================
    // 8. Smooth Active Nav Link on Scroll
    // =============================================
    const sections  = document.querySelectorAll('section[id], footer[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navAnchors.forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href') === '#' + entry.target.id) {
                        a.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(s => sectionObserver.observe(s));

    // =============================================
    // 9. Subtle Card Tilt Effect (mouse)
    // =============================================
    document.querySelectorAll('.project-card, .data-card, .skill-category-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect  = card.getBoundingClientRect();
            const x     = (e.clientX - rect.left) / rect.width  - 0.5;
            const y     = (e.clientY - rect.top)  / rect.height - 0.5;
            const tiltX = -(y * 6).toFixed(2);
            const tiltY =  (x * 6).toFixed(2);
            card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // =============================================
    // 10. Parallax for floating badges
    // =============================================
    const badges = document.querySelectorAll('.floating-badge');
    if (badges.length && window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', e => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            badges.forEach(badge => {
                const factor = parseFloat(badge.dataset.parallax || '1');
                badge.style.transform = `translate(${x * 15 * factor}px, ${y * 15 * factor}px)`;
            });
        });
    }

    // =============================================
    // 11. Smooth scroll for anchor links
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80; // navbar height
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
