document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // 2. Sticky Navbar & Scroll Styling
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Animation using IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    };

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Form Submission Simulation
    const contactForm = document.getElementById('contact-form');
    const formSuccessMessage = document.getElementById('form-success');
    const formBtn = contactForm.querySelector('.form-btn');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulating loading state
        const originalBtnText = formBtn.innerHTML;
        formBtn.innerHTML = 'Sending...';
        formBtn.style.opacity = '0.7';
        formBtn.disabled = true;

        setTimeout(() => {
            // Success state
            formBtn.innerHTML = originalBtnText;
            formBtn.style.opacity = '1';
            formBtn.disabled = false;
            
            contactForm.reset();
            formSuccessMessage.classList.remove('hidden');
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccessMessage.classList.add('hidden');
            }, 5000);
            
        }, 1500);
    });

});
