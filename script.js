// ==========================================
// Hithesh Portfolio Scripts
// Clean, human-readable code for interactive features
// ==========================================

// Wait for the page to load before running scripts
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
    
    // Initialize theme on page load
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
    
    // Apply theme to the page and update the toggle button icon
    function applyTheme(themeName) {
        htmlElement.setAttribute('data-theme', themeName);
        
        // Update button icon based on theme
        if (themeToggleBtn) {
            if (themeName === 'dark') {
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        }
    }
    
    // Switch between light and dark themes
    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.classList.add('theme-transitioning');
        applyTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        
        // Add pulse effect on theme change
        document.body.classList.add('theme-changed');
        setTimeout(function() {
            document.body.classList.remove('theme-changed');
            htmlElement.classList.remove('theme-transitioning');
        }, 500);
    }
    
    // Add click handler for theme toggle button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
        if (!localStorage.getItem(THEME_STORAGE_KEY)) {
            applyTheme(event.matches ? 'dark' : 'light');
        }
    });
    
    initializeTheme();
    
    // === MOBILE MENU TOGGLE ===
    const hamburgerMenu = document.getElementById('hamburger');
    const navigationLinks = document.getElementById('nav-links');
    
    if (hamburgerMenu && navigationLinks) {
        hamburgerMenu.addEventListener('click', function() {
            navigationLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('open');
        });
        
        navigationLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navigationLinks.classList.remove('active');
                hamburgerMenu.classList.remove('open');
            });
        });
    }
    
    // === SMOOTH SCROLLING FOR ANCHOR LINKS ===
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
                
                // Add highlight effect to the target section
                targetElement.classList.add('section-highlight');
                setTimeout(function() {
                    targetElement.classList.remove('section-highlight');
                }, 1500);
            }
        });
    });
    
    // === SCROLL PROGRESS BAR ===
    function createScrollProgressBar() {
        const progressBar = document.createElement('div');
        
        // Theme-aware progress bar color
        const updateProgressBarColor = function() {
            const isDark = htmlElement.getAttribute('data-theme') === 'dark';
            progressBar.style.background = isDark ? '#ffffff' : '#000000';
        };
        
        // Initial set
        updateProgressBarColor();
        
        // Update on theme change
        htmlElement.addEventListener('theme-changed', updateProgressBarColor);
        
        progressBar.style.cssText = 
            'position: fixed;' +
            'top: 0;' +
            'left: 0;' +
            'width: 0%;' +
            'height: 3px;' +
            'z-index: 9999;' +
            'transition: width 0.1s;';
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / documentHeight) * 100;
            
            progressBar.style.width = scrollPercent + '%';
        });
    }
    
    createScrollProgressBar();
    
    // === INTERACTIVE CARD EFFECTS ===
    const cards = document.querySelectorAll('.interactive-card, .skill-category-card, .project-card, .resume-card');
    
    const updateCardEffect = function(card) {
        const isDark = htmlElement.getAttribute('data-theme') === 'dark';
        const shadowAlpha = isDark ? 0.15 : 0.12;
        card.style.boxShadow = '0 15px 50px rgba(0, 0, 0, ' + shadowAlpha + ')';
    };
    
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            updateCardEffect(card);
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
    
    // === SECTION HIGHLIGHT ON SCROLL ===
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
    
    // === BUTTON INTERACTIONS ===
    const buttons = document.querySelectorAll('.interactive-btn, .primary-btn, .outline-btn');
    
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            // Theme-aware ripple color
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
                'animation: ripple 0.6s ease-out;';
            
            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.appendChild(ripple);
            
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    });
    
    // === PARALLAX EFFECT FOR HERO IMAGE ===
    const heroImage = document.querySelector('.hero-profile-image');
    if (heroImage) {
        window.addEventListener('mousemove', function(e) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            heroImage.style.transform = 'scale(1.02) rotateX(' + y + 'deg) rotateY(' + x + 'deg)';
        });
    }
    
    // === RESPONSIVE IMAGE ADJUSTMENTS ===
    function adjustHeroImageForScreen() {
        const heroImg = document.querySelector('.hero-profile-image');
        
        if (heroImg) {
            const isDarkTheme = htmlElement.getAttribute('data-theme') === 'dark';
            
            if (isDarkTheme) {
                heroImg.style.borderRadius = '4px';
            }
        }
    }
    
    window.addEventListener('resize', adjustHeroImageForScreen);
    adjustHeroImageForScreen();
    
});

// Add CSS for ripple animation dynamically
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
`;
document.head.appendChild(style);

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