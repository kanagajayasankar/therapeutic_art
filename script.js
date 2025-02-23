// Smooth Scroll to Sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menu Toggle
document.getElementById('menu-button').addEventListener('click', function() {
    let menu = document.getElementById('menu-content');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// Select all activity cards
const cards = document.querySelectorAll(".activity-card");

// Add click event to each card
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const activitySection = document.querySelector(".activities-container");

    function showActivitiesOnScroll() {
        const scrollY = window.scrollY;
        const sectionTop = activitySection.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollY + windowHeight > sectionTop + 100) {
            activitySection.classList.add("show");
        }
    }

    window.addEventListener("scroll", showActivitiesOnScroll);
});

