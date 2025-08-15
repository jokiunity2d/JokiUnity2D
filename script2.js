// Language switching functionality
let currentLang = 'id';

function switchLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-id][data-en]');
    
    elements.forEach(element => {
        if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else if (lang === 'id') {
            element.textContent = element.getAttribute('data-id');
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Language button event listeners
function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

// Load saved language preference
function loadLanguagePreference() {
    const savedLang = localStorage.getItem('preferred-language') || 'id';
    console.log("Switching language to:", savedLang);
    switchLanguage('id');
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Fade in animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Header background change on scroll
function initHeaderAnimation() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }
    });
}

// Service cards floating animation
function initServiceCardsAnimation() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.style.animation = 'fadeInUp 0.6s ease forwards';
    });
}

function openEmailTab(event) {
    event.preventDefault();
    const mailUrl = "mailto:jokiunityd@gmail.com?subject=Order%20Jasa%20Game%20Unity%202D&body=Halo,%20saya%20tertarik%20dengan%20jasa%20game%20Unity%202D%20Anda.";
    window.open(mailUrl, "_blank");
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadLanguagePreference();
    initLanguageSwitcher();
    initSmoothScrolling();
    initScrollAnimations();
    initHeaderAnimation();
    initServiceCardsAnimation();
});