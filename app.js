// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const closeModal = document.querySelector('.close');
const voiceBtn = document.getElementById('voice-btn');
const voiceCircle = document.getElementById('voice-circle');
const voiceWidget = document.getElementById('voice-widget');

// Theme Toggle Functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update icon based on current theme
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Modal Functionality
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

signupBtn.addEventListener('click', () => {
    // In a real app, this would show a signup form
    alert('Sign up functionality would go here!');
    // For now, just show the login modal
    loginModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Login Form Submission
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // In a real app, this would validate and send to a server
    console.log('Login attempt with:', { email, password });
    alert('Login functionality would connect to a backend service.');
    
    // Close modal after submission
    loginModal.style.display = 'none';
});

// Voice Assistant Functionality
let isListening = false;

voiceBtn.addEventListener('click', toggleVoiceAssistant);
voiceCircle.addEventListener('click', toggleVoiceAssistant);
voiceWidget.addEventListener('click', toggleVoiceAssistant);

function toggleVoiceAssistant() {
    isListening = !isListening;
    
    if (isListening) {
        // Start listening
        voiceCircle.style.animation = 'pulse 1s infinite';
        voiceWidget.querySelector('.voice-status').textContent = 'Listening...';
        voiceWidget.style.background = 'linear-gradient(135deg, #6c63ff 0%, #4ecdc4 100%)';
        voiceWidget.style.color = 'white';
        
        // Simulate voice recognition
        simulateVoiceRecognition();
    } else {
        // Stop listening
        voiceCircle.style.animation = 'pulse 2s infinite';
        voiceWidget.querySelector('.voice-status').textContent = 'Ready to listen';
        voiceWidget.style.background = '';
        voiceWidget.style.color = '';
    }
}

function simulateVoiceRecognition() {
    if (!isListening) return;
    
    // In a real app, this would use the Web Speech API
    const commands = [
        "How's my schedule looking today?",
        "I'm feeling stressed, can you help?",
        "Set a meditation reminder for 8 PM",
        "What's my wellness score for today?",
        "Tell me a mindful breathing exercise"
    ];
    
    const randomCommand = commands[Math.floor(Math.random() * commands.length)];
    
    // Show a notification with the simulated command
    showVoiceNotification(randomCommand);
    
    // Continue listening
    setTimeout(simulateVoiceRecognition, 5000);
}

function showVoiceNotification(command) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '100px';
    notification.style.right = '30px';
    notification.style.background = 'var(--card-bg)';
    notification.style.color = 'var(--text)';
    notification.style.padding = '1rem';
    notification.style.borderRadius = '10px';
    notification.style.boxShadow = '0 5px 20px var(--shadow)';
    notification.style.zIndex = '1000';
    notification.style.maxWidth = '300px';
    notification.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
            <i class="fas fa-microphone" style="color: var(--primary);"></i>
            <div>
                <p style="margin: 0; font-weight: 500;">Heard: "${command}"</p>
                <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: var(--secondary);">Processing your request...</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after delay
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .floating-card');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements for scroll animation
document.querySelectorAll('.feature-card, .floating-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Set up scroll event listener
window.addEventListener('scroll', animateOnScroll);
// Trigger once on load
window.addEventListener('load', animateOnScroll);

// Add some interactive animations to features
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.feature-icon').style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('.feature-icon').style.transform = 'scale(1) rotate(0)';
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Lifely website loaded successfully!');
    
    // Animate hero text
    const heroText = document.querySelector('.hero-content');
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        heroText.style.transition = 'opacity 1s ease, transform 1s ease';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 300);
});
