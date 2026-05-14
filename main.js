// Snappy Reveal for Cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('reveal');
            }, index * 100);
        }
    });
}, observerOptions);

// Initialize cards for animation
document.querySelectorAll('.card, .hero').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translate(10px, 10px)";
    el.style.transition = "all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
    observer.observe(el);
});

// Update the reveal class styles for snappy entry
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 1 !important;
        transform: translate(0, 0) !important;
    }
`;
document.head.appendChild(style);

// Simple hover log to console for a "technical" feel
document.querySelectorAll('.card, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        console.log(`[SYSTEM] Hover detected on ${el.tagName}`);
    });
});
