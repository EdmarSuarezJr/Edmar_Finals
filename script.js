document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop();

    // Loop through each nav link and add the active class to the one that matches the current page
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active-link');
        }
    });
});
