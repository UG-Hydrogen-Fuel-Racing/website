document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('targetSection').scrollIntoView({
        behavior: 'smooth'
    });
});

const stickyArrow = document.getElementById('sticky-arrow');
const socialIcons = document.getElementById('social-icons');

stickyArrow.addEventListener('click', () => {
    // Toggle the 'show' class to control visibility and smooth scaling
    socialIcons.classList.toggle('show');

    // Rotate the arrow 180 degrees when clicked
    stickyArrow.style.transform = socialIcons.classList.contains('show')
        ? 'rotate(180deg)'
        : 'rotate(0deg)';
});


