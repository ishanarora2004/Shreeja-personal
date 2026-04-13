// Typing animation for the Hero Section
const nameStr = "Shreeja Dutta";
let i = 0;
const speed = 150; // ms per char

window.startTyping = function() {
    const el = document.getElementById("typewriter");
    if (!el) return;
    
    function typeWriter() {
        if (i < nameStr.length) {
            el.innerHTML += nameStr.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
};
