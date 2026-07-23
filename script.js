// Portfolio interactivity
document.addEventListener('DOMContentLoaded', function() {

    // ============================
    // Theme toggle — Simple button
    // ============================
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const toggleIcon = toggle ? toggle.querySelector('.theme-toggle-icon') : null;

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        if (toggleIcon) {
            toggleIcon.innerHTML = theme === 'dark'
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';
        }
    }

    const saved = localStorage.getItem('theme');
    if (saved) {
        applyTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    }

    if (toggle) {
        toggle.addEventListener('click', function() {
            const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem('theme', next);
        });
    }

    // ============================
    // Mobile menu (existing)
    // ============================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('nav-overlay');

    function closeMenu() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
        overlay.classList.remove('active');
    }

    function openMenu() {
        navLinks.classList.add('active');
        hamburger.classList.add('open');
        overlay.classList.add('active');
    }

    if (hamburger && navLinks && overlay) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.contains('active') ? closeMenu() : openMenu();
        });
        overlay.addEventListener('click', closeMenu);
        navLinks.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', closeMenu);
        });
    }

    // ============================
    // Progress bar (existing, improved)
    // ============================
    var bar = document.createElement('div');
    bar.id = 'scroll-progress';
    bar.style.cssText = 'position:fixed;top:0;left:0;width:0%;height:2px;z-index:9999;transition:width .1s';
    document.body.appendChild(bar);

    function updateBarColor() {
        bar.style.background = getComputedStyle(html).getPropertyValue('--progress-bar').trim();
    }
    updateBarColor();

    var ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                bar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
                ticking = false;
            });
            ticking = true;
        }
    });

    // Update bar color on theme change
    new MutationObserver(function() {
        updateBarColor();
    }).observe(html, { attributes: true, attributeFilter: ['data-theme'] });

    // ============================
    // Smooth scroll for anchor links
    // ============================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });

    // ============================
    // Active nav link highlighting
    // ============================
    const sections = document.querySelectorAll('.section-reveal');
    const navAnchors = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        var current = '';
        var scrollPos = window.scrollY + 120;

        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        navAnchors.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // ============================
    // Section highlight border effect
    // ============================
    function highlightSections() {
        sections.forEach(function(section) {
            var rect = section.getBoundingClientRect();
            var viewHeight = window.innerHeight;
            if (rect.top < viewHeight * 0.8 && rect.bottom > 0) {
                section.classList.add('highlight');
            }
        });
    }

    // ============================
    // Scroll reveal animations
    // ============================
    var revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

    function checkReveal() {
        revealElements.forEach(function(el) {
            var rect = el.getBoundingClientRect();
            var viewHeight = window.innerHeight;
            if (rect.top < viewHeight * 0.85) {
                el.classList.add('revealed');
            }
        });
    }

    // Reduced motion check
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        // Small delay before initial check for elements already visible
        setTimeout(checkReveal, 100);
    } else {
        // If user prefers reduced motion, reveal everything immediately
        revealElements.forEach(function(el) {
            el.classList.add('revealed');
        });
    }

    // ============================
    // Parallax tilt on hero image
    // ============================
    var heroImgWrap = document.getElementById('hero-image-wrap');
    var heroImg = document.getElementById('hero-img');

    if (heroImgWrap && heroImg && !prefersReducedMotion) {
        heroImgWrap.addEventListener('mousemove', function(e) {
            var rect = heroImgWrap.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            var rotateX = (y - centerY) / centerY * -10;
            var rotateY = (x - centerX) / centerX * 10;
            heroImg.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        });

        heroImgWrap.addEventListener('mouseleave', function() {
            heroImg.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }

    // ============================
    // Ripple button effect
    // ============================
    document.querySelectorAll('.ripple-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            var rect = btn.getBoundingClientRect();
            var ripple = document.createElement('span');
            ripple.classList.add('ripple');
            var size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            btn.appendChild(ripple);
            setTimeout(function() { ripple.remove(); }, 600);
        });
    });

    // ============================
    // Scroll-to-top button
    // ============================
    var scrollTopBtn = document.getElementById('scroll-top');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================
    // Project filtering
    // ============================
    var filterBtns = document.querySelectorAll('.filter-btn');
    var projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            var filter = btn.getAttribute('data-filter');

            projectCards.forEach(function(card) {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    var categories = card.getAttribute('data-categories');
                    if (categories && categories.indexOf(filter) !== -1) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });

    // ============================
    // Scroll event listener (combined)
    // ============================
    var scrollTicking = false;
    window.addEventListener('scroll', function() {
        if (!scrollTicking) {
            window.requestAnimationFrame(function() {
                updateActiveNav();
                highlightSections();
                checkReveal();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });

    // ============================
    // Resume download (placeholder)
    // ============================
    var resumeLink = document.getElementById('resume-link');
    if (resumeLink) {
        resumeLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with actual resume URL when available
            alert('Resume PDF coming soon! Please reach out via email or LinkedIn.');
        });
    }

    // Initial calls
    updateActiveNav();
    highlightSections();

});