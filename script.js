// Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    let phone = document.querySelector('input[placeholder="Phone Number"]').value.trim();
    let email = document.querySelector('i
