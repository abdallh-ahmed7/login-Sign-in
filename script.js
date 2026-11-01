document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');
    const themeText = themeToggleBtn.querySelector('span');

    // Sync button state on load based on HTML class
    const updateThemeButtonState = () => {
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeText.textContent = 'Light Mode';
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeText.textContent = 'Dark Mode';
        }
    };

    // Initialize button text and icon
    updateThemeButtonState();

    // Toggle event
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        updateThemeButtonState();
    });

    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        // The point at which the element should start revealing (100px from bottom)
        const elementVisible = 100;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Listen for scroll events
    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger the function once on load to reveal elements currently in view
    // A small timeout ensures the CSS has painted and the transition happens smoothly
    setTimeout(revealOnScroll, 100);
});
