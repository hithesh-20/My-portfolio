// Simple scripts
document.addEventListener('DOMContentLoaded', function() {

    // Theme toggle
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        if (toggle) {
            toggle.innerHTML = theme === 'dark'
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
    
    // Mobile menu
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
    
    // Progress bar
    var bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;top:0;left:0;width:0%;height:2px;background:#111;z-index:9999;transition:width .1s';
    document.body.appendChild(bar);
    
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
        bar.style.background = html.getAttribute('data-theme') === 'dark' ? '#fff' : '#111';
    }).observe(html, { attributes: true, attributeFilter: ['data-theme'] });
    
});