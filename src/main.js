// ════════════════════════════════════════════
// VELAN MICROTECH — Elite Animation Engine v3
// Precision Minimalist · 3D Parallax · Scrub
// ════════════════════════════════════════════

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ── Globals ──
const IS_TOUCH = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// ════════════════════════════════
// 1. LIQUID PRECISION CURSOR
// ════════════════════════════════
// ════════════════════════════════
// 1. LIQUID PRECISION CURSOR (Optimized)
// ════════════════════════════════
(function initCursor() {
    if (IS_TOUCH) return;

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let dotX = -100, dotY = -100;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animate = () => {
        // Dot follows with slight delay
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        gsap.set(dot, { x: dotX, y: dotY, force3D: true });

        // Ring follows with more lag
        ringX += (mouseX - ringX) * 0.1;
        ringY += (mouseY - ringY) * 0.1;
        gsap.set(ring, { x: ringX, y: ringY, force3D: true });

        requestAnimationFrame(animate);
    };
    animate();

    // Interaction states (Optimized Selectors)
    const interactables = document.querySelectorAll('a, button, input, textarea, .img-3d-wrap, .workshop-card');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(ring, { scale: 1.5, opacity: 0.5, duration: 0.4, ease: 'power3.out' });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(ring, { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out' });
        });
    });
})();

// ════════════════════════════════
// 2. PRELOADER & ENTRANCE (Optimized & Fixed)
// ════════════════════════════════
(function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    const startEntrance = () => {
        if (preloader.classList.contains('is-starting')) return;
        preloader.classList.add('is-starting');

        const tl = gsap.timeline({
            onComplete: () => {
                preloader.style.display = 'none';
                initScrollAnimations();
            }
        });

        // 1. Reveal Brand Text
        tl.to('.preloader-v', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' })

            // 2. Animate the real line element
            .to('.preloader-bar', { y: '100%', duration: 1, ease: 'expo.inOut' }, '-=0.3')

            // 3. Fade out brand text explicitly to prevent double-vision glitch
            .to('.preloader-v', { opacity: 0, scale: 0.98, duration: 0.5, ease: 'power2.in' }, '+=0.2')

            // 4. Slide Preloader Up
            .to(preloader, {
                yPercent: -100,
                duration: 1.2,
                ease: 'expo.inOut',
                force3D: true
            }, '-=0.2')

            // 5. Reveal Nav & Hero components (previously hidden with opacity: 0)
            .to(['.nav', '.hero-inner', '.hero-visual-container'], {
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out'
            }, '-=0.8')

            // 6. Staggered Hero Details
            .from('.hero-title', { y: 50, opacity: 0, duration: 1.5, ease: 'expo.out' }, '-=0.8')
            .from('.hero-desc', { y: 20, opacity: 0, duration: 1, ease: 'expo.out' }, '-=1');
    };

    window.addEventListener('load', startEntrance);
    setTimeout(startEntrance, 4000);
})();

// ════════════════════════════════
// 3. SCROLL & PARALLAX ENGINE
// ════════════════════════════════
function initScrollAnimations() {
    // ── NAVBAR SCROLL ──
    const nav = document.getElementById('nav');
    ScrollTrigger.create({
        start: 'top -100',
        onUpdate: (self) => {
            if (self.direction === 1) nav.classList.add('scrolled');
            else if (self.scroll() < 100) nav.classList.remove('scrolled');
        }
    });

    // ── HERO 3D PARALLAX (Mouse Driven) ──
    const heroBox = document.getElementById('hero-parallax-box');
    if (heroBox && !IS_TOUCH) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10 deg
            const y = (e.clientY / window.innerHeight - 0.5) * -20;
            gsap.to(heroBox, {
                rotateY: x,
                rotateX: y,
                duration: 1.5,
                ease: 'power3.out'
            });
        });
    }

    // ── GLOBAL SCRUB PARALLAX: Hero Background Image ──
    gsap.to('.hero-img-wrap img', {
        yPercent: 20,
        scale: 1.2,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // ── 3D TRANSFORM SCRUB: Product Images ──
    document.querySelectorAll('.img-3d-wrap').forEach(wrap => {
        const inner = wrap.querySelector('.img-3d-inner');
        const img = wrap.querySelector('img');

        // Reveal effect
        gsap.from(inner, {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: wrap,
                start: 'top 90%',
            }
        });

        // Loop continuous float
        gsap.to(inner, {
            y: 15,
            rotationY: 5,
            rotationX: -5,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        // Scroll Scrub Tilt
        gsap.to(inner, {
            rotateY: -15,
            rotateX: 10,
            scrollTrigger: {
                trigger: wrap,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });

        // Image inner move
        gsap.to(img, {
            yPercent: 20,
            scrollTrigger: {
                trigger: wrap,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // ── TEXT LINE REVEALS ──
    // Simulating line reveal by wrapping text if needed, but here we use simple stagger for demo
    document.querySelectorAll('.product-title, .section-title, .about-card h3').forEach(title => {
        gsap.from(title, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 90%',
            }
        });
    });

    // ── STAGGERED REVEALS: Features, Cards & Workshops ──
    document.querySelectorAll('.feature-item, .about-card, .workshop-card').forEach(el => {
        gsap.from(el, {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
            }
        });
    });

    // ── ANNOUNCEMENT REVEAL ──
    gsap.from('.workshop-announcement', {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
            trigger: '.workshop-announcement',
            start: 'top 90%',
        }
    });

    // ── 3D TILT: Workshops ──
    document.querySelectorAll('.workshop-card').forEach(card => {
        if (IS_TOUCH) return;
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            gsap.to(card, {
                rotateY: x * 10,
                rotateX: -y * 10,
                duration: 1.2,
                ease: 'power3.out'
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { rotateY: 0, rotateX: 0, duration: 1.2, ease: 'power3.out' });
        });
    });
}

// ════════════════════════════════
// 4. UTILS
// ════════════════════════════════

// ── Smooth Scroll Anchor ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                scrollTo: { y: target.offsetTop - 80, autoKill: false },
                duration: 1.5,
                ease: 'expo.inOut'
            });
        }
    });
});

// ── Form Success Toast ──
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Inquiry sent. Our team will contact you.', 'success');
        contactForm.reset();
    });
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.style.cssText = `
        background: #000; color: #FFF; padding: 1rem 2rem; 
        font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;
        margin-top: 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        transform: translateY(20px); opacity: 0; transition: 0.5s;
    `;
    toast.textContent = message;
    container.appendChild(toast);

    // Animation
    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    }, 100);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// Console Branding
console.log('%c VELAN MICROTECH %c Minimalist Elite v3 ', 'background: #000; color: #FFF; padding: 4px 8px;', 'background: #FBFBFA; color: #000; padding: 4px 8px;');
