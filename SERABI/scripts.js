// Slider Inovasi
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider .slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik
});

// Smooth Scroll
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation
document.querySelector('.contact form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;
    
    if (name.trim() === '') {
        alert('Nama harus diisi.');
        valid = false;
    }
    
    if (email.trim() === '' || !email.includes('@')) {
        alert('Email tidak valid.');
        valid = false;
    }
    
    if (message.trim() === '') {
        alert('Pesan tidak boleh kosong.');
        valid = false;
    }
    
    if (!valid) {
        e.preventDefault();
    }
});
// Inisialisasi Particles.js untuk background
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        }
    },
    "retina_detect": true
});

