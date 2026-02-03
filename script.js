document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (toggle && navUl) {
        toggle.addEventListener('click', function () {
            navUl.classList.toggle('active');
            // Optional: change icon to X when open
            toggle.textContent = navUl.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking a link (good for mobile)
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('active');
                toggle.textContent = '☰';
            });
        });
    }
});