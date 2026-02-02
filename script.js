// ============================================
// MODERN ROMANTIC LOVE STORY WEBSITE
// ============================================

// ============================================
// SPLASH SCREEN - PREMIUM CINEMATIC
// ============================================
function closeSplash() {
    const splash = document.getElementById('splashScreen');
    splash.classList.add('hidden');
}

// Auto close after 6 seconds
setTimeout(() => {
    closeSplash();
}, 6000);

// Close on any click
document.addEventListener('click', (e) => {
    const splash = document.getElementById('splashScreen');
    if (!splash.classList.contains('hidden') && e.target === splash) {
        closeSplash();
    }
});

// Parallax effect for splash background — disabled on touch devices
const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

if (!isTouch) {
    window.addEventListener('mousemove', (e) => {
        const splash = document.getElementById('splashScreen');
        if (splash && !splash.classList.contains('hidden')) {
            const bg = splash.querySelector('.splash-background');
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            bg.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
        }
    });
} else {
    // mark body for touch-specific styles and enable touch interactions
    document.body.classList.add('is-touch');
    // Toggle gallery overlays on tap for touch devices
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', (ev) => {
                // toggle 'show' state to reveal overlay
                item.classList.toggle('show');
                ev.stopPropagation();
            });
        });

        // close any open overlays when tapping outside
        document.addEventListener('click', (ev) => {
            if (!ev.target.closest('.gallery-item')) {
                document.querySelectorAll('.gallery-item.show').forEach(i => i.classList.remove('show'));
            }
        });
    });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });
}

// Close menu when link clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// ============================================
// LETTER & ENVELOPE INTERACTION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const letterTitle = document.getElementById('letterTitle');
    const envelopeBox = document.getElementById('envelopeBox');
    const letterContent = document.getElementById('letterContent');
    const letterClose = document.getElementById('letterClose');
    const letterSection = document.querySelector('.letter');
    
    if (letterTitle && envelopeBox && letterContent && letterClose) {
        // Open letter on title or envelope click
        letterTitle.addEventListener('click', (e) => {
            e.stopPropagation();
            openLetter();
        });
        
        envelopeBox.addEventListener('click', (e) => {
            e.stopPropagation();
            openLetter();
        });
        
        // Close letter on button click
        letterClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeLetter();
        });
        
        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && letterContent.classList.contains('show')) {
                closeLetter();
            }
        });
        
        // Close letter when clicking outside
        document.addEventListener('click', (e) => {
            if (letterContent.classList.contains('show') && 
                !e.target.closest('#letterContent') && 
                !e.target.closest('#letterTitle') &&
                !e.target.closest('#envelopeBox')) {
                closeLetter();
            }
        });
    }
    
    function openLetter() {
        // Envelope flip + letter reveal with staggered sequence
        envelopeBox.classList.add('open');
        
        // Delay letter content reveal for better visual sequence
        setTimeout(() => {
            letterContent.classList.add('show');
        }, 300);
        
        letterSection.classList.add('letter-open');
    }
    
    function closeLetter() {
        envelopeBox.classList.remove('open');
        letterContent.classList.remove('show');
        letterSection.classList.remove('letter-open');
    }
});

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('.story, .gallery, .letter').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// ============================================
// RESPONSIVE NAVBAR
// ============================================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

console.log('💕 Welcome to Our Timeless Journey 💕');
