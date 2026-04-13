// Custom cursor logic
document.addEventListener("DOMContentLoaded", () => {
    const cursorDot = document.getElementById("cursor-dot");
    const cursorRing = document.getElementById("cursor-ring");

    // Don't run cursor logic on small screens or touch interfaces
    if (window.innerWidth <= 768 || ('ontouchstart' in window)) {
        return; 
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Dot follows instantly
        if(cursorDot) {
            cursorDot.style.left = mouseX + "px";
            cursorDot.style.top = mouseY + "px";
        }
    });

    // Ring follows with slight delay using requestAnimationFrame
    function animateRing() {
        // Easing factor
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        if(cursorRing) {
            cursorRing.style.left = ringX + "px";
            cursorRing.style.top = ringY + "px";
        }
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effects on links/buttons
    const hoverables = document.querySelectorAll("a, .btn, .kp-card, .bubble");
    hoverables.forEach(el => {
        el.addEventListener("mouseenter", () => {
            if(cursorRing) cursorRing.style.width = "50px";
            if(cursorRing) cursorRing.style.height = "50px";
            if(cursorRing) cursorRing.style.backgroundColor = "rgba(255, 105, 180, 0.1)";
        });
        el.addEventListener("mouseleave", () => {
            if(cursorRing) cursorRing.style.width = "30px";
            if(cursorRing) cursorRing.style.height = "30px";
            if(cursorRing) cursorRing.style.backgroundColor = "transparent";
        });
    });
});
