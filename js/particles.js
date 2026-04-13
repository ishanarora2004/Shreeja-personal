// Particle Generator for Kawaii theme
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('particles');
    if (!container) return;

    // Reduce particles on mobile for performance
    const isMobile = window.innerWidth <= 768;
    const numParticles = isMobile ? 15 : 40;
    const emojis = ["⭐", "💖", "🎀", "🌸", "✨"];

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random emoji selection
        particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random positioning
        particle.style.left = Math.random() * 100 + 'vw';
        
        // Random sizes
        particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
        
        // Random animation duration (between 10s and 25s)
        const duration = Math.random() * 15 + 10;
        particle.style.animationDuration = duration + 's';
        
        // Random animation delay
        particle.style.animationDelay = (Math.random() * 10) + 's';

        container.appendChild(particle);
    }
});
