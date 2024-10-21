window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    const navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) return;

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Highlight active nav item based on scroll position
    const highlightActiveSection = () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = mainNav.querySelector(`.nav-link[href="#${section.id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    };

    // Collapse responsive navbar after a click on a nav item
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
    responsiveNavItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Initialize SimpleLightbox for portfolio items
    const initializeLightbox = () => {
        new SimpleLightbox({
            elements: '#portfolio a.portfolio-box'
        });
    };

    // Initialize Bootstrap ScrollSpy
    const initializeScrollSpy = () => {
        const mainNav = document.body.querySelector('#mainNav');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                offset: 70 // Adjust based on your navbar height
            });
        }
    };

    // Activate functions on DOMContentLoaded
    navbarShrink();
    initializeLightbox();
    initializeScrollSpy();

    // Shrink the navbar and highlight the section when scrolling
    document.addEventListener('scroll', () => {
        navbarShrink();
        highlightActiveSection();
    });
});
