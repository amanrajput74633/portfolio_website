// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Preloader functionality
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('hidden');
            // Ensure particles.js initializes after preloader hides
            setTimeout(() => {
                if (typeof particlesJS !== 'undefined') {
                    initParticles(); // Call a dedicated function for particles
                }
            }, 500); // Small delay to ensure smooth transition
        });
    } else {
        // If no preloader, initialize particles immediately
        if (typeof particlesJS !== 'undefined') {
            initParticles();
        }
    }

    // Function to initialize Particles.js
    function initParticles() {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#cccccc" // Light gray color for particles
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#cccccc", // Light gray for lines
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab" // 'grab' or 'repulse'
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push" // 'push' or 'bubble'
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Theme Toggle (Dark/Light Mode)
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on load, or default to light-mode (Green Mode)
if (currentTheme) {
    // Agar koi theme preference saved hai, toh wahi apply karein
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeToggleBtn.querySelector('i').classList.remove('fa-moon');
        themeToggleBtn.querySelector('i').classList.add('fa-sun');
    } else {
        // Agar saved theme 'light-mode' hai, toh moon icon set karein
        themeToggleBtn.querySelector('i').classList.remove('fa-sun');
        themeToggleBtn.querySelector('i').classList.add('fa-moon');
    }
} else {
    // Agar koi preference save nahi hai, toh default Green Mode (light-mode) set karein
    body.classList.add('light-mode');
    themeToggleBtn.querySelector('i').classList.remove('fa-sun'); // Ensure sun icon is not there
    themeToggleBtn.querySelector('i').classList.add('fa-moon'); // Default icon moon (to toggle to dark)
    localStorage.setItem('theme', 'light-mode'); // Ye bhi ensure karega ki light-mode save ho jaaye
}

// Event listener for theme toggle button
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // 'dark-mode' class add/remove karega

    let theme = 'light-mode'; // Default theme 'light-mode'
    if (body.classList.contains('dark-mode')) {
        theme = 'dark-mode'; // Agar ab dark-mode hai, toh theme 'dark-mode'
        themeToggleBtn.querySelector('i').classList.remove('fa-moon');
        themeToggleBtn.querySelector('i').classList.add('fa-sun'); // Icon sun ka dikhao
    } else {
        // Agar ab light-mode hai, toh theme 'light-mode'
        themeToggleBtn.querySelector('i').classList.remove('fa-sun');
        themeToggleBtn.querySelector('i').classList.add('fa-moon'); // Icon moon ka dikhao
    }
    localStorage.setItem('theme', theme); // Updated theme ko localStorage mein save karein
});


    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#hero') { // Home is usually #hero
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navbar = document.querySelector('.navbar');
                    const offset = navbar ? navbar.offsetHeight : 0;
                    window.scrollTo({
                        top: targetElement.offsetTop - offset,
                        behavior: 'smooth'
                    });
                }
            }

            // Close mobile nav if open
            const navbarNav = document.querySelector('.navbar-nav');
            const hamburger = document.querySelector('.hamburger');
            if (navbarNav && hamburger && navbarNav.classList.contains('active')) {
                navbarNav.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Navbar active class and scroll effect
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    const activateNavLink = () => {
        let current = '';
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 50;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            } else if (current === '' && link.getAttribute('href') === '#hero') {
                link.classList.add('active');
            }
        });

        // Navbar scroll background change
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', activateNavLink);
    activateNavLink();

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navbarNav = document.querySelector('.navbar-nav');

    if (hamburger && navbarNav) {
        hamburger.addEventListener('click', () => {
            navbarNav.classList.toggle('active');
            hamburger.classList.toggle('active'); // Toggle active class for hamburger animation
            const isExpanded = hamburger.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Typewriter effect for Hero section
    const typewriterElement = document.querySelector('.hero-text .typewriter-text');
    if (typewriterElement) {
        const textToType = typewriterElement.getAttribute('data-text');
        let charIndex = 0;
        let spanElement = typewriterElement.querySelector('span');

        function type() {
            if (charIndex < textToType.length) {
                spanElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            }
        }
        type();
    }

    // Interactive Skills Chart (Chart.js)
    const skillsCtx = document.getElementById('skillsChart');
    if (skillsCtx) {
        new Chart(skillsCtx, {
            type: 'radar',
            data: {
                labels: ['Python', 'NumPy/Pandas', 'Matplotlib', 'Scikit-learn', 'SQL', 'Deep Learning', 'Tableau/Power BI'],
                datasets: [{
                    label: 'Proficiency Level',
                    data: [90, 85, 80, 75, 70, 70, 75],
                    backgroundColor: 'rgba(0, 123, 255, 0.6)',
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 1,
                    pointBackgroundColor: 'rgba(52, 58, 64, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(52, 58, 64, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        pointLabels: {
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            color: 'var(--secondary-color)'
                        },
                        ticks: {
                            beginAtZero: true,
                            max: 100,
                            stepSize: 20,
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // Back to Top Button functionality
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Section reveal on scroll and skill bar animation
    const revealSections = document.querySelectorAll('.section-reveal');

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');

                // Animate skill bars when skill section is revealed
                if (entry.target.id === 'skills') {
                    const skillBars = entry.target.querySelectorAll('.skill-bar');
                    skillBars.forEach(bar => {
                        const proficiency = bar.getAttribute('data-proficiency');
                        bar.style.width = proficiency + '%';
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // When 15% of the section is visible
        rootMargin: "0px 0px -50px 0px" // Adjust to trigger slightly earlier/later
    });

    revealSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Contact Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const formStatus = document.getElementById('form-status');

        const validateField = (inputElement, errorElement, validationFn) => {
            if (!validationFn(inputElement.value.trim())) {
                inputElement.classList.add('invalid');
                errorElement.textContent = `Please enter a valid ${inputElement.name}.`;
                return false;
            } else {
                inputElement.classList.remove('invalid');
                errorElement.textContent = '';
                return true;
            }
        };

        const isValidEmail = (email) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };

        const isValidText = (text) => text.length >= 2;
        const isValidMessage = (message) => message.length >= 10;

        nameInput.addEventListener('input', () => validateField(nameInput, document.getElementById('name-error'), isValidText));
        emailInput.addEventListener('input', () => validateField(emailInput, document.getElementById('email-error'), isValidEmail));
        messageInput.addEventListener('input', () => validateField(messageInput, document.getElementById('message-error'), isValidMessage));

        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const isNameValid = validateField(nameInput, document.getElementById('name-error'), isValidText);
            const isEmailValid = validateField(emailInput, document.getElementById('email-error'), isValidEmail);
            const isMessageValid = validateField(messageInput, document.getElementById('message-error'), isValidMessage);

            if (!isNameValid || !isEmailValid || !isMessageValid) {
                formStatus.className = 'error';
                formStatus.textContent = 'Please correct the errors in the form.';
                return;
            }

            formStatus.className = '';
            formStatus.textContent = 'Sending message...';
            formStatus.style.display = 'block';

            const formData = new FormData(this);

            try {
                const response = await fetch(this.action, {
                    method: this.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.className = 'success';
                    formStatus.textContent = 'Message sent successfully! Aman will get back to you soon.';
                    this.reset();
                    nameInput.classList.remove('invalid');
                    emailInput.classList.remove('invalid');
                    messageInput.classList.remove('invalid');
                    document.getElementById('name-error').textContent = '';
                    document.getElementById('email-error').textContent = '';
                    document.getElementById('message-error').textContent = '';
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        formStatus.className = 'error';
                        formStatus.textContent = data.errors.map(error => error.message).join(', ');
                    } else {
                        formStatus.className = 'error';
                        formStatus.textContent = 'Oops! There was a problem sending your message.';
                    }
                }
            } catch (error) {
                formStatus.className = 'error';
                formStatus.textContent = 'Network error. Please try again later.';
                console.error('Form submission error:', error);
            }
        });
    }
});