document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-btn").addEventListener("click", function() {
        document.getElementById("menu").classList.toggle("hidden");
    });
    
    document.querySelectorAll(".activity-card").forEach(card => {
        card.addEventListener("click", function() {
            card.classList.toggle("flipped");
        });
    });
    
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
