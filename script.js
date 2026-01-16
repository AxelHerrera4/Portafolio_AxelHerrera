// ==================== Data ====================
const projects = {
    es: [
        {
            title: 'Sofocado - GameJam',
            desc: 'Videojuego creado para GameJam. Explora mecánicas únicas y desafíos creativos.',
            image: '/public/images/wea.jpg',
            repo: 'https://axeldoge.itch.io/sofocado',
            live: 'https://axeldoge.itch.io/sofocado',
            tags: ['GameDev', 'Unity', 'GameJam']
        },
        {
            title: 'Delivery Sabrosura',
            desc: 'Aplicación de delivery para "La Sabrosura".',
            image: '/public/images/Sabrosura.JPG',
            repo: 'https://github.com/develop-prowess/APP-MOVIL-PRW',
            live: null,
            tags: ['React Native', 'Mobile']
        },
        {
            title: 'Ecommerce móvil',
            desc: 'App móvil para venta de productos variados.',
            image: '/public/images/ecommerceMovil.png',
            repo: 'https://github.com/AxelHerrera4/examen2_moviles',
            live: 'https://ecommerce-movile.vercel.app/',
            tags: ['React', 'Ecommerce']
        },
        {
            title: 'Administrador de tareas',
            desc: 'Herramienta de procesos y tareas multiplataforma en Python.',
            image: '/public/images/Administrador De Tareas.png',
            repo: 'https://github.com/AxelHerrera4/ProyectoSOG4',
            live: null,
            tags: ['Python', 'Desktop']
        },
        {
            title: 'Sistema de agendamiento',
            desc: 'Reserva de citas para consultorio médico.',
            image: '/public/images/SistemaCitasMedicas.JPG',
            repo: 'https://github.com/AxelHerrera4/citasmedicas',
            live: 'https://citasmedespe-beige.vercel.app/',
            tags: ['React', 'Backend']
        },
        {
            title: 'Cafetin Cafeton',
            desc: 'Landing page para cafetería con diseño moderno.',
            image: '/public/images/CafetinCafeton.JPG',
            repo: 'https://github.com/AxelHerrera4/cafetin-cafeton',
            live: 'https://axelherrera4.github.io/cafetin-cafeton/',
            tags: ['HTML', 'CSS', 'JS']
        },
        {
            title: 'Music World',
            desc: 'Página principal con paginación para música.',
            image: '/public/images/MusicWorldd.JPG',
            repo: 'https://github.com/AxelHerrera4/music-world',
            live: 'https://axelherrera4.github.io/music-world/index.html',
            tags: ['JavaScript', 'API']
        }
    ],
    en: [
        {
            title: 'Sofocado - GameJam',
            desc: 'Video game created for GameJam. Explore unique mechanics and creative challenges.',
            image: '/public/images/wea.jpg',
            repo: 'https://axeldoge.itch.io/sofocado',
            live: 'https://axeldoge.itch.io/sofocado',
            tags: ['GameDev', 'Unity', 'GameJam']
        },
        {
            title: 'Delivery Sabrosura',
            desc: 'Delivery app for "La Sabrosura".',
            image: '/public/images/Sabrosura.JPG',
            repo: 'https://github.com/develop-prowess/APP-MOVIL-PRW',
            live: null,
            tags: ['React Native', 'Mobile']
        },
        {
            title: 'Mobile ecommerce',
            desc: 'Mobile app for selling various products.',
            image: '/public/images/ecommerceMovil.png',
            repo: 'https://github.com/AxelHerrera4/examen2_moviles',
            live: 'https://ecommerce-movile.vercel.app/',
            tags: ['React', 'Ecommerce']
        },
        {
            title: 'Task manager',
            desc: 'Cross-platform task/process manager in Python.',
            image: '/public/images/Administrador De Tareas.png',
            repo: 'https://github.com/AxelHerrera4/ProyectoSOG4',
            live: null,
            tags: ['Python', 'Desktop']
        },
        {
            title: 'Appointment scheduler',
            desc: 'Booking system for medical clinic.',
            image: '/public/images/SistemaCitasMedicas.JPG',
            repo: 'https://github.com/AxelHerrera4/citasmedicas',
            live: 'https://citasmedespe-beige.vercel.app/',
            tags: ['React', 'Backend']
        },
        {
            title: 'Cafetin Cafeton',
            desc: 'Coffee shop landing page with modern design.',
            image: '/public/images/CafetinCafeton.JPG',
            repo: 'https://github.com/AxelHerrera4/cafetin-cafeton',
            live: 'https://axelherrera4.github.io/cafetin-cafeton/',
            tags: ['HTML', 'CSS', 'JS']
        },
        {
            title: 'Music World',
            desc: 'Main page with pagination for music.',
            image: '/public/images/MusicWorldd.JPG',
            repo: 'https://github.com/AxelHerrera4/music-world',
            live: 'https://axelherrera4.github.io/music-world/index.html',
            tags: ['JavaScript', 'API']
        }
    ]
};

// ==================== State ====================
let currentLang = 'es';
let currentTheme = localStorage.getItem('theme') || 'light';

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initNavbar();
    initParticles();
    initProjects();
    initScrollAnimations();
    initContactForm();
});

// ==================== Theme ====================
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const themeIcon = document.querySelector('#themeToggle i');
    themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

document.getElementById('themeToggle').addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    const themeIcon = document.querySelector('#themeToggle i');
    themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

// ==================== Language ====================
function initLanguage() {
    const savedLang = localStorage.getItem('lang') || 'es';
    currentLang = savedLang;
    updateLanguage(currentLang);
}

document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', currentLang);
    document.getElementById('langToggle').textContent = currentLang.toUpperCase();
    updateLanguage(currentLang);
});

function updateLanguage(lang) {
    document.querySelectorAll('[data-es]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    initProjects();
}

// ==================== Navbar ====================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link on scroll
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars';
        });
    });
}

// ==================== Particles ====================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = currentTheme === 'dark' 
            ? 'rgba(129, 140, 248, 0.5)' 
            : 'rgba(99, 102, 241, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }

    // Update particles on theme change
    document.getElementById('themeToggle').addEventListener('click', () => {
        setTimeout(() => {
            particlesContainer.innerHTML = '';
            initParticles();
        }, 100);
    });
}

// ==================== Projects ====================
function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    const currentProjects = projects[currentLang];

    currentProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;

        const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='/public/images/placeholder.png'">
                <div class="project-overlay">
                    <div class="project-tags">${tagsHtml}</div>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                <div class="project-links">
                    ${project.live ? `
                        <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <i class="fas fa-external-link-alt"></i>
                            ${currentLang === 'es' ? 'Ver demo' : 'View demo'}
                        </a>
                    ` : ''}
                    <a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                        <i class="fab fa-github"></i>
                        ${currentLang === 'es' ? 'Repositorio' : 'Repository'}
                    </a>
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// ==================== Scroll Animations ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ==================== Contact Form ====================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + 
            (currentLang === 'es' ? 'Enviando...' : 'Sending...');
        btn.disabled = true;

        // Simulate sending
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> ' + 
                (currentLang === 'es' ? 'Enviado!' : 'Sent!');
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                form.reset();
                
                alert(currentLang === 'es' 
                    ? '¡Gracias por tu mensaje! Te contactaré pronto.' 
                    : 'Thank you for your message! I will contact you soon.');
            }, 2000);
        }, 1500);
    });
}

// ==================== Smooth Scroll ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Cursor Effect (Optional) ====================
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.style.position = 'fixed';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.width = '5px';
    cursor.style.height = '5px';
    cursor.style.background = 'rgba(99, 102, 241, 0.5)';
    cursor.style.borderRadius = '50%';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.animation = 'fadeOut 0.5s ease-out forwards';
    
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        cursor.remove();
    }, 500);
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`;
document.head.appendChild(style);

// ==================== Stats Counter Animation ====================
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.ceil(current) + '+';
            }
        }, 30);
    });
};

// Trigger stats animation when in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}
