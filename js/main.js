document.addEventListener("DOMContentLoaded", () => {
    // 1. Splash Screen Fade Out
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.style.display = 'none';
                /* Trigger typing animation after splash */
                if(window.startTyping) window.startTyping();
            }, 1000);
        }
    }, 2000);

    // 2. Mobile Navbar Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 3. Scroll Reveals using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    const timeline = document.querySelector('.timeline');
    const rings = document.querySelectorAll('.ring-fill');

    // Initialize rings to 0
    rings.forEach(ring => {
        const radius = ring.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        ring.style.strokeDasharray = `${circumference} ${circumference}`;
        ring.style.strokeDashoffset = circumference;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // If target is timeline wrapper, activate the line
                if(entry.target.classList.contains('timeline-item')) {
                    timeline.classList.add('active');
                }

                // If Target contains language rings
                if(entry.target.classList.contains('lang-section')) {
                    rings.forEach(ring => {
                        const percent = ring.getAttribute('data-percent');
                        const radius = ring.r.baseVal.value;
                        const circumference = radius * 2 * Math.PI;
                        const offset = circumference - (percent / 100) * circumference;
                        ring.style.strokeDashoffset = offset;
                    });
                }
            }
        });
    }, {
        threshold: 0.2
    });

    revealElements.forEach(el => observer.observe(el));
    if(document.querySelector('.lang-section')) {
        observer.observe(document.querySelector('.lang-section'));
    }
});
