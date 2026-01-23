// Navigation hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Closing the menu when clicking a link
const navigationItems = document.querySelectorAll('.nav-links a');
navigationItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navigationItems.classList.contains('active')) {
            navigationItems.classList.remove('active');
        }
    })
})

// Scroll to top arrow functionality
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className - 'scroll-top';

    // Adding styles to a button
    button.style.display = 'none';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.backgroundColor = 'var(--primary-color)';
    button.style.color = 'white';
    button.style.width = '45px';
    button.style.height = '45px';
    button.style.borderRadius = '50%';
    button.style.border = 'none';
    button.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    button.style.cursor = 'pointer';
    button.style.zIndex = '99';
    button.style.transition = 'all 0.3s ease';

    document.body.appendChild(button);

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}

createScrollToTopButton();