document.addEventListener("DOMContentLoaded", () => {
// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    });
    
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    themeToggle.innerHTML = body.classList.contains("dark-mode")
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
});

// Video popup
const playVideo = document.getElementById("play-video");
const closeVideo = document.getElementById("close-video");
const videoPopup = document.getElementById("video-popup");

playVideo.addEventListener("click", () => {
    videoPopup.classList.remove("hidden");
});

closeVideo.addEventListener("click", () => {
    videoPopup.classList.add("hidden");
});
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

// ScrollReveal effect
document.addEventListener('DOMContentLoaded', function() {
const elementsToReveal = document.querySelectorAll('.explore-section, #destinations, #cta');

function revealElementsOnScroll() {
    elementsToReveal.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealElementsOnScroll);
revealElementsOnScroll(); // Initial check in case the elements are already in view
});

// Highlight active section in navbar on scroll
window.addEventListener('scroll', () => {
let scrollPosition = window.scrollY;
document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`nav ul li a[href="#${id}"]`);
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
});

// Light/Dark Mode Toggle
const toggleButton = document.querySelector('.theme-toggle');
toggleButton.addEventListener('click', () => {
const currentTheme = document.body.getAttribute('data-theme');
if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); // Save theme to localStorage
} else {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}
});

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
document.body.setAttribute('data-theme', savedTheme);
}
// Particle Effect
const particlesContainer = document.querySelector('.particles');
for (let i = 0; i < 100; i++) {
const particle = document.createElement('div');
particle.classList.add('particle');
particle.style.top = `${Math.random() * 100}%`;
particle.style.left = `${Math.random() * 100}%`;
particlesContainer.appendChild(particle);
}
