// Smooth Reveal for Bento Items
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add a slight delay based on index for a staggered effect
            setTimeout(() => {
                entry.target.classList.add('reveal');
            }, index * 50);
        }
    });
}, observerOptions);

// Initialize bento items for animation
document.querySelectorAll('.bento-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)";
    observer.observe(el);
});

// Update the reveal class styles dynamically
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Subtle Parallax for Aurora
window.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    const aurora = document.querySelector('.aurora');
    if (aurora) {
        aurora.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${window.scrollY * 0.05}deg)`;
    }
});

// Navbar background blur on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-container');
    if (window.scrollY > 20) {
        nav.style.background = "rgba(10, 10, 12, 0.85)";
        nav.style.padding = "0.4rem 1.2rem";
    } else {
        nav.style.background = "rgba(10, 10, 12, 0.7)";
        nav.style.padding = "0.5rem 1.5rem";
    }
});
