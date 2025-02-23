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
