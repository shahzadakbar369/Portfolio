/* =============================================
   SHAHZAD AKBAR PORTFOLIO — main.js
   ============================================= */

// ── Mobile menu ──────────────────────────────
function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}
function closeMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
}

// ── Scroll reveal ─────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Navbar hide on scroll down ────────────────
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const cur = window.pageYOffset;
    if (cur > lastScroll && cur > 80) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = cur;
});

// ── Contact form (mailto fallback) ───────────
function handleContact() {
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    const subject = encodeURIComponent(`Portfolio Contact - ${name}`);
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:shahzadakbar369@gmail.com?subject=${subject}&body=${body}`;
}

// ── FAQ accordion ────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
    });
});

// ── Orb parallax ─────────────────────────────
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.querySelectorAll('.orb').forEach((orb, i) => {
        const speed = (i + 1) * 18;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});
// ── Lightbox ──────────────────────────────────
function openLightbox(src) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});
