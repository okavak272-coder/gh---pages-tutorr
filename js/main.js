/**
 * =====================================================
 * NEXUS DIGITAL ENGINE v2.8 – FULL UX UPGRADE
 * Loader % | Scroll Glow | Magnetic Cursor | Optimized
 * =====================================================
 */


document.addEventListener("DOMContentLoaded", () => {

    /* --- HELPERS --- */
    const qs  = s => document.querySelector(s);
    const qsa = s => document.querySelectorAll(s);
    const isTouch = matchMedia("(pointer: coarse)").matches;

    let mouseX = innerWidth / 2;
    let mouseY = innerHeight / 2;

    /* ==================================================
       1. PRELOADER (PERCENT + CINEMATIC EXIT)
    ================================================== */
    window.addEventListener("load", () => {
        const loader = qs("#page-loader");
        if (!loader) return;

        let progress = 0;
        const percent = document.createElement("div");
        percent.style.marginTop = "1rem";
        percent.style.color = "#94a3b8";
        loader.appendChild(percent);

        const tick = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(tick);
                percent.innerText = "100%";
                setTimeout(() => {
                    loader.classList.add("hide");
                    setTimeout(() => loader.remove(), 900);
                }, 600);
            } else {
                percent.innerText = Math.floor(progress) + "%";
            }
        }, 80);
    });

    /* ==================================================
       2. CUSTOM CURSOR + MAGNETIC EFFECT
    ================================================== */
    const dot = qs("#cursor-dot");
    const outline = qs("#cursor-outline");

    if (!isTouch && dot && outline) {
        let ox = mouseX, oy = mouseY;

        addEventListener("mousemove", e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
        });

        (function cursorLoop(){
            ox += (mouseX - ox) * 0.12;
            oy += (mouseY - oy) * 0.12;
            outline.style.transform = `translate3d(${ox}px,${oy}px,0)`;
            requestAnimationFrame(cursorLoop);
        })();

        // Magnetic elements
        qsa("a, button, .btn, .bento-card").forEach(el => {
            el.addEventListener("mousemove", e => {
                const r = el.getBoundingClientRect();
                const x = e.clientX - (r.left + r.width / 2);
                const y = e.clientY - (r.top + r.height / 2);
                el.style.transform = `translate(${x * 0.15}px,${y * 0.15}px)`;
            });
            el.addEventListener("mouseleave", () => {
                el.style.transform = "";
            });
        });
    }

    /* ==================================================
       3. HERO PARALLAX
    ================================================== */
    const heroTitle = qs(".hero h1");
    const heroSub   = qs(".hero p");

    if (!isTouch && heroTitle) {
        addEventListener("mousemove", e => {
            const x = (innerWidth/2 - e.clientX) * 0.015;
            const y = (innerHeight/2 - e.clientY) * 0.015;
            heroTitle.style.transform = `translate3d(${x}px,${y}px,0)`;
            heroSub && (heroSub.style.transform = `translate3d(${x*0.5}px,${y*0.5}px,0)`);
        });
    }

    /* ==================================================
       4. NAVIGATION SPY
    ================================================== */
    const sections = qsa("section[id]");
    const navLinks = qsa(".nav-links a");

    addEventListener("scroll", () => {
        let current = "";
        sections.forEach(sec => {
            if (pageYOffset >= sec.offsetTop - 250) current = sec.id;
        });
        navLinks.forEach(a =>
            a.classList.toggle("active", current && a.href.includes(current))
        );
    });

    /* ==================================================
       5. SCROLL PROGRESS BAR (GLOW + EASING)
    ================================================== */
    const bar = qs("#progress-bar");
    const header = qs("header");

    addEventListener("scroll", () => {
        const t = document.documentElement.scrollTop;
        const h = document.documentElement.scrollHeight - innerHeight;
        const p = (t / h) * 100;

        if (bar) {
            bar.style.width = p + "%";
            bar.style.boxShadow = `0 0 20px rgba(59,130,246,${p/120})`;
        }
        header?.classList.toggle("scrolled", t > 60);
    });

    /* ==================================================
       6. FORM SUBMIT UX
    ================================================== */
    const form = qs("#contactForm");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            const btn = form.querySelector("button");
            const text = btn.innerHTML;

            btn.disabled = true;
            btn.innerHTML = "Gönderiliyor…";

            setTimeout(() => {
                btn.innerHTML = "✓ Gönderildi";
                btn.style.background = "#10b981";
                form.reset();

                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = text;
                    btn.style.background = "";
                }, 2500);
            }, 1600);
        });
    }

    /* ==================================================
       7. REVEAL (OPTIMIZED)
    ================================================== */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("active");
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.2 });

    qsa(".reveal, section, .bento-card, .stat-card")
        .forEach(el => observer.observe(el));
});

/* ==================================================
   MOBILE MENU
================================================== */
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const icon = document.querySelector(".hamburger i");
    if (menu && icon) {
        menu.classList.toggle("active");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    }
}
