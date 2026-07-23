// ==========================================
// Hithesh Portfolio Scripts
// Performance-optimized, accessible JS
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // === REVEAL ANIMATION ON SCROLL ===
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(function(element) {
        observer.observe(element);
    });
    
    // === THEME TOGGLE (LIGHT/DARK MODE) ===
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const THEME_STORAGE_KEY = 'portfolio-theme';
    
    function initializeTheme() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (prefersDarkMode) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    }
    
    function applyTheme(themeName) {
        htmlElement.setAttribute('data-theme', themeName);
        
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = themeName === 'dark'
                ? '<i class="fa-solid fa-sun" aria-hidden="true"></i>'
                : '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
        }
    }
    
    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        applyTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        
        document.body.classList.add('theme-changed');
        setTimeout(function() {
            document.body.classList.remove('theme-changed');
        }, 500);
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
        if (!localStorage.getItem(THEME_STORAGE_KEY)) {
            applyTheme(event.matches ? 'dark' : 'light');
        }
    });
    
    initializeTheme();
    
    // === MOBILE MENU TOGGLE ===
    const hamburgerMenu = document.getElementById('hamburger');
    const navigationLinks = document.getElementById('nav-links');
    const navOverlay = document.getElementById('nav-overlay');
    
    function closeMobileMenu() {
        navigationLinks.classList.remove('active');
        hamburgerMenu.classList.remove('open');
        hamburgerMenu.setAttribute('aria-expanded', 'false');
        navOverlay.classList.remove('active');
        document.body.classList.remove('nav-open');
    }
    
    function openMobileMenu() {
        navigationLinks.classList.add('active');
        hamburgerMenu.classList.add('open');
        hamburgerMenu.setAttribute('aria-expanded', 'true');
        navOverlay.classList.add('active');
        document.body.classList.add('nav-open');
    }
    
    if (hamburgerMenu && navigationLinks && navOverlay) {
        hamburgerMenu.addEventListener('click', function() {
            if (navigationLinks.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        navOverlay.addEventListener('click', closeMobileMenu);
        
        navigationLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', closeMobileMenu);
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navigationLinks.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 900) {
                closeMobileMenu();
            }
        });
    }
    
        // === TYPEWRITER EFFECT ===
    function initTypewriter() {
        const typewriteEl = document.querySelector('.typewrite');
        if (!typewriteEl) return;
        
        const dataWords = typewriteEl.getAttribute('data-words');
        const period = parseInt(typewriteEl.getAttribute('data-period')) || 2000;
        const words = JSON.parse(dataWords);
        let txt = '';
        let wordIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                txt = currentWord.substring(0, txt.length - 1);
            } else {
                txt = currentWord.substring(0, txt.length + 1);
            }
            
            typewriteEl.innerHTML = txt;
            
            let typeSpeed = 100;
            
            if (isDeleting) {
                typeSpeed /= 2;
            }
            
            if (!isDeleting && txt === currentWord) {
                typeSpeed = period;
                isDeleting = true;
            } else if (isDeleting && txt === '') {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 200;
            }
            
            setTimeout(type, typeSpeed);
        }
        
        type();
    }
    
    initTypewriter();
    
    // === SMOOTH SCROLLING ===
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                event.preventDefault();
                
                const headerOffset = 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                targetElement.classList.add('section-highlight');
                setTimeout(function() {
                    targetElement.classList.remove('section-highlight');
                }, 1500);
            }
        });
    });
    
    // === SCROLL PROGRESS BAR (throttled) ===
    function createScrollProgressBar() {
        const progressBar = document.createElement('div');
        
        progressBar.style.cssText = 
            'position: fixed;' +
            'top: 0;' +
            'left: 0;' +
            'width: 0%;' +
            'height: 3px;' +
            'z-index: 9999;' +
            'background: #000000;' +
            'transition: width 0.1s linear;';
        
        document.body.appendChild(progressBar);
        
        // Update progress bar color on theme toggle
        function updateProgressBarColor() {
            const isDark = htmlElement.getAttribute('data-theme') === 'dark';
            progressBar.style.background = isDark ? '#ffffff' : '#000000';
        }
        
        // Throttled scroll handler - limits to ~30fps
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrollPercent = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;
                    
                    progressBar.style.width = scrollPercent + '%';
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Watch for theme changes
        const themeObserver = new MutationObserver(function() {
            updateProgressBarColor();
        });
        themeObserver.observe(htmlElement, { attributes: true, attributeFilter: ['data-theme'] });
        
        updateProgressBarColor();
    }
    
    createScrollProgressBar();
    
    // === SECTION ACTIVE OBSERVER ===
    const sections = document.querySelectorAll('.interactive-section');
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-active');
            } else {
                entry.target.classList.remove('section-active');
            }
        });
    }, {
        threshold: 0.3
    });
    
    sections.forEach(function(section) {
        sectionObserver.observe(section);
    });
    
    // === BUTTON RIPPLES ===
    const buttons = document.querySelectorAll('.interactive-btn, .primary-btn, .outline-btn');
    
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            const isDark = htmlElement.getAttribute('data-theme') === 'dark';
            const rippleColor = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';
            
            ripple.style.cssText = 
                'position: absolute;' +
                'width: ' + size + 'px;' +
                'height: ' + size + 'px;' +
                'left: ' + x + 'px;' +
                'top: ' + y + 'px;' +
                'background: ' + rippleColor + ';' +
                'border-radius: 50%;' +
                'transform: scale(0);' +
                'animation: ripple 0.6s ease-out;' +
                'pointer-events: none;';
            
            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.appendChild(ripple);
            
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    });
    
    // === PARALLAX EFFECT (desktop only, throttled) ===
    const heroImage = document.querySelector('.hero-profile-image');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (heroImage && !prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
        let ticking = false;
        window.addEventListener('mousemove', function(e) {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const x = (e.clientX / window.innerWidth - 0.5) * 20;
                    const y = (e.clientY / window.innerHeight - 0.5) * 20;
                    heroImage.style.transform = 'scale(1.02) rotateX(' + y + 'deg) rotateY(' + x + 'deg)';
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
});

// Add CSS for ripple animation and focus styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .section-highlight {
        animation: highlight 1.5s ease-in-out;
    }
    
    @keyframes highlight {
        0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1); }
        50% { box-shadow: 0 0 0 10px rgba(0, 0, 0, 0); }
        100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
    }
    
    .theme-changed {
        animation: themePulse 0.5s ease-in-out;
    }
    
    @keyframes themePulse {
        0% { filter: brightness(1); }
        50% { filter: brightness(1.1); }
        100% { filter: brightness(1); }
    }

    /* Focus-visible styles for keyboard users */
    a:focus-visible,
    button:focus-visible,
    .project-link:focus-visible,
    .social-link:focus-visible {
        outline: 2px solid #000;
        outline-offset: 3px;
        border-radius: 2px;
    }

    [data-theme="dark"] a:focus-visible,
    [data-theme="dark"] button:focus-visible,
    [data-theme="dark"] .project-link:focus-visible,
    [data-theme="dark"] .social-link:focus-visible {
        outline-color: #fff;
    }

    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;
document.head.appendChild(style);

// === CONTACT FORM HANDLER ===
function handleFormSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    const btn = document.getElementById('form-submit-btn');
    const status = document.getElementById('form-status');
    
    btn.disabled = true;
    btn.textContent = 'Sending...';
    status.style.display = 'none';
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(function(response) {
        if (response.ok) {
            status.textContent = '✅ Message sent! I\'ll get back to you soon.';
            status.style.color = '#10b981';
            form.reset();
        } else {
            status.textContent = '❌ Something went wrong. Please email me directly.';
            status.style.color = '#ef4444';
        }
        status.style.display = 'block';
        btn.disabled = false;
        btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>';
    })
    .catch(function() {
        status.textContent = '❌ Network error. Please email me at hitheshkowshik@gmail.com';
        status.style.color = '#ef4444';
        status.style.display = 'block';
        btn.disabled = false;
        btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>';
    });
    
    return false;
}

// Smooth scroll fallback for older browsers
(function() {
    if ('scrollBehavior' in document.documentElement.style) {
        return;
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                event.preventDefault();
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo(0, targetPosition);
            }
        });
    });
})();